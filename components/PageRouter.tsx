'use client'

import { NextPage } from 'next';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react'
import { IRoute, routes } from '../routes';
import NotFound from '@/oops/404/page';
import Loading from './Loading';

export const getRoute = (path: string): IRoute | null => {
  // @ts-ignore
  let route: IRoute = {}

  for (const key in routes) {
    const routeRec = routes[key] as IRoute
    if (routeRec.path === path) route = routeRec

    if (routeRec.path.includes('/*')) {
      // Create RegExp that convert /* to regexp ANY
      const matcher = new RegExp(routeRec.path.replaceAll('/*', '\/(?:(?!\/).)*'));
      if (path.match(matcher)) route = routeRec
    }
  }

  // return null
  return Object.keys(route || {}).length ? route : null;
}

const PageRouter: NextPage<{ children: any }> = ({ children }) => {
  const [pageExist, setPageExist] = useState(false)
  const [loading, setLoading] = useState(true)
  const path = usePathname();

  useEffect(() => {
    setLoading(true)
    const route = getRoute(path);
    let exist = false

    if (route) {
      exist = true
      setPageExist(exist)
    } else {
      exist = false
      setPageExist(exist)
    }

    setLoading(false)
  }, [path])

  return (
    <>
      {loading ? <Loading /> : <>
        {pageExist ? children : <NotFound />}
      </>}
    </>
  );
}

export default PageRouter;