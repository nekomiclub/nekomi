'use client'

import { NextPage } from 'next';
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import axios from 'axios';
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
import { IUser } from '../interfaces/IUser';
import { signin } from './authorization';

const store = setupStore();

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

export const Storage: NextPage<{ children: any }> = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}

export const Routing: NextPage<{ children: any }> = ({ children }) => {
  const path = usePathname();
  const [isExist, setIsExist] = useState(true)
  const [mode, setMode] = useState<TRouteStatus>('clear')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const route = getRoute(path)

    console.log('routing provider')

    //* Route is not exist
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

export const State: NextPage<{ children: any }> = ({ children }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [ws, setWs] = useState<WebSocket>()

  useEffect(() => {
    if (typeof window === undefined) return;

    (async function () {
      const signinToken = searchParams.get('signinPayload');

      // Handle signin token from SSO
      if (signinToken) {
        try {
          const res = await axios.post(`${config.services.fkUsapiURL}/token/decode`, {
            token: signinToken,
            method: 'access'
          })

          const signinPayload = res.data as {
            msg: string, info: any, verified: boolean, payload: {
              id: string,
              photoURL: string,
              username: string
            }
          }

          if (signinPayload.verified) {
            await signin({
              password: '~usapi',
              username: signinPayload.payload.username,
              token: signinToken
            })
          }

          router.replace(`${config.services.siteURL}${pathname}`)
        } catch (e) {
          console.error(e)
        }
      }

      const token = localStorage.getItem('token');

      if (token) {
        const payload = decode(token) as ITokenData;

        const { data: user } = await axios.get<IUser>(`${config.services.apiURL}/v1/user/${payload.uid}`)


        dispatch(userSlice.actions.reducer({ isAuth: true, isNewAccount: user.accountType === 'new', ...payload }))
      };

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