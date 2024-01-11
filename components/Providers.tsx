'use client'

import { NextPage } from 'next';
import { useState, useEffect } from 'react'
import { Provider } from 'react-redux';
import { setupStore } from '../store/store'
import { usePathname } from 'next/navigation';
import { IRoute, TRouteStatus, routes } from '../routes';
import NotFound from '@/oops/404/page';
import Loading from './Loading';
import Indev from '@/oops/indev/page';
import TechWorks from '@/oops/works/page';
import { decode } from 'jsonwebtoken'
import { ITokenData, TUserRoles } from '../interfaces/ITokenData';
import { useAppDispatch } from '../hooks/redux';
import userSlice from '../store/reducers/userSlice';
import { WS_URL } from '../config';
import { IWS, IWSPresence, TWS } from '../interfaces/IWS';

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
  const dispatch = useAppDispatch();
  const [ws, setWs] = useState<WebSocket>()

  useEffect(() => {
    if (typeof window === undefined) return;

    const token = localStorage.getItem('token');

    if (token) {
      const payload = decode(token) as ITokenData;

      dispatch(userSlice.actions.reducer({ isAuth: true, ...payload }))
    };

    if (!ws) {
      setWs(new WebSocket(WS_URL))
    }
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