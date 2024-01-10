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

  useEffect(() => {
    if (typeof window === undefined) return;

    const token = localStorage.getItem('token');

    if (!token) return;

    const payload = decode(token) as ITokenData;

    dispatch(userSlice.actions.reducer({ isAuth: true, ...payload }))
  }, [])

  return (
    <>
      {children}
    </>
  );
}