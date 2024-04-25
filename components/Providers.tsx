'use client'

import { NextPage } from 'next';
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useState, useEffect, use } from 'react'
import axios, { AxiosError } from 'axios';
import { Provider } from 'react-redux';
import { decode } from 'jsonwebtoken'

import { setupStore } from '../store/store'
import { IRoute, TRouteStatus, routes } from '../routes';
import NotFound from '@/oops/404/page';
import Loading from './Loading';
import Indev from '@/oops/indev/page';
import TechWorks from '@/oops/works/page';
import { ITokenData, TUserRoles } from '../interfaces/ITokenData';
import { useAppDispatch } from '../hooks/redux';
import userSlice from '../store/reducers/userSlice';
import { config } from '../config';
import { IWS, IWSPresence, TWS } from '../interfaces/IWS';
import ServerUnavailable from '@/oops/ServerUnavailable';
import { IUsapiUser, IUser } from '../interfaces/IUser';
import { $api } from './http';

const store = setupStore();



/** Get route object by path */
export function getRoute(path: string): IRoute | null {
  let route: IRoute | null = null

  for (const key in routes) {
    const routeRec = routes[key] as IRoute;

    //* If path equals to record path
    if (routeRec.path === path) {
      return routeRec;
    }

    //* Check dynamic routes
    if (routeRec.path.includes('/*')) {
      const matcher = new RegExp(routeRec.path.replaceAll('/*', '\/(?:(?!\/).)*'));
      if (path.match(matcher)) return routeRec
    }
  }

  //* Anyway return route
  return route;
}



/** Setting up reduxjs storage */
export const Storage: NextPage<{ children: any }> = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}



/** 404 fallback (next does not find path but it reserved) */
export const Routing: NextPage<{ children: any }> = ({ children }) => {
  const path = usePathname();
  const [isExist, setIsExist] = useState(true)
  const [mode, setMode] = useState<TRouteStatus>('clear')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const route = getRoute(path)

    //* Route does not exist
    if (!route) return setIsExist(false)

    setMode(route.status || 'clear')
    setIsLoaded(true)
  }, [])

  return (
    <>
      {isLoaded ? <>
        {/* Check if route record exist */}
        {isExist ? <>

          {mode === 'clear' ? <>
            {children}
          </> : mode === 'indev' ? <>
            <Indev />
          </> : mode === 'works' ? <>
            <TechWorks />
          </> : <NotFound />}

        </> : <NotFound />}
      </> : <Loading />}
    </>
  );
}



/** Setting up websocket & fetch user data */
export const State: NextPage<{ children: any }> = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();

  const [ws, setWs] = useState<WebSocket>()

  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();

  // Fetch user
  useEffect(() => {
    const signinToken = searchParams.get('signinPayload');

    (async function () {
      // Authorize
      if (signinToken) {
        try {
          await $api.post(`/user/signin`, {
            session: signinToken
          })
        } catch (e) {
          if (e instanceof AxiosError) {
            console.error(`An HTTP error occured while authorizing.\nError occured at - Providers/Storage.\nError - ${e.code}: ${e.response?.data.msg}.`)
          } else {
            // @ts-ignore
            const emsg = e?.message || e?.msg;

            console.error(`An error occured while authorizing.\nError occured at - Providers/Storage.\nError message - ${emsg}`)
          }
        }
      }

      try {
        const user = await $api.get<IUser>(`/user/*`);
        const usapiData = await axios.get<{ user: IUsapiUser }>(`${config.URL.fkUsapi}/user/${user.data.id}`)

        dispatch(userSlice.actions.reducer({
          id: user.data.id,
          username: usapiData.data.user.username,
          avatarURL: usapiData.data.user.photoURL,
          roles: user.data.roles
        }))

        router.replace(`${config.URL.baseURL}/${pathname}`)
      } catch (e) {
        if (e instanceof AxiosError) {
          // Session can be not provided, ignore it 
        } else {
          // @ts-ignore
          const emsg = e?.message || e?.msg;

          console.error(`An error occured while fetching user.\nError occured at - Providers/Storage.\nError message - ${emsg}`)
        }
      }
    })()
  }, [])



  useEffect(() => {
    if (typeof window === undefined) return;

    (async function () {
      if (!ws) {
        setWs(new WebSocket(config.services.apiWS))
      }
    })()
  }, [])

  useEffect(() => {
    if (!ws) return;

    ws.onerror = e => console.error(`WS error: ${e}`)

    let sid = (Math.random() + 1).toString(36).substring(8);
    let prevAudience = 0;

    ws.onopen = () => {
      if (!localStorage.getItem('sid')) {
        localStorage.setItem('sid', sid)
      } else {
        sid = localStorage.getItem('sid')!
      }

      const payload: IWS<IWSPresence> = {
        type: 'presence',
        payload: {
          sid,
          connectedAt: +new Date()
        }
      }

      ws.send(JSON.stringify(payload))
    }

    ws.onmessage = raw => {
      const message = JSON.parse(raw.data) as { type: TWS, payload: any };

      //* Update presence 
      if (prevAudience !== message.payload.audience) {
        const payload: IWS<IWSPresence> = {
          type: 'presence',
          payload: {
            sid,
            connectedAt: +new Date()
          }
        }

        prevAudience = message.payload.audience
        ws.send(JSON.stringify(payload))
      };
    }
  }, [ws])

  return (
    <>
      {children}
    </>
  );
}