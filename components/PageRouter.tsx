'use client'

import { NextPage } from 'next';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react'
import { IRoute, routes } from '../routes';
import NotFound from '@/oops/404/page';
import Loading from './Loading';
import Indev from '@/oops/indev/page';
import TechWorks from '@/oops/works/page';
import { HIDE_IN_PROD, prodMode } from '../config';

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

  return Object.keys(route || {}).length ? route : null;
}

const PageRouter: NextPage<{ children: any }> = ({ children }) => {
  const [pageExist, setPageExist] = useState(false)
  const [loading, setLoading] = useState(true)
  const [hide, setHide] = useState(HIDE_IN_PROD && prodMode)
  const [pageStatus, setPageStatus] = useState<'clear' | 'indev' | 'works'>('clear')
  const path = usePathname();
  const [userPreView, setUserPreView] = useState(false)

  useEffect(() => {
    setLoading(true)
    const route = getRoute(path);
    let exist = false

    if (route) {
      setPageStatus(route.status || 'clear')

      exist = true
      setPageExist(exist)
    } else {
      exist = false
      setPageExist(exist)
    }

    const preViewKey = localStorage.getItem('userPreViewKey');
    if (preViewKey === 'unniiiverse2612') {
      console.warn('Hide prevented due to usePreViewKey')
      setUserPreView(true)
      setHide(false)
    }

    setLoading(false)
  }, [path])

  return (
    <>
      {loading ? <Loading /> : <>
        {/* Hide in prod */}
        {hide ? <Indev /> : <>

          {/* Page exist */}
          {pageExist ? <>

            {/* Page status */}
            {pageStatus === 'clear' || userPreView ? <>

              {children}
            </> : pageStatus === 'indev' ? <Indev /> : pageStatus === 'works' ? <TechWorks /> : <NotFound />}
          </> : <NotFound />}
        </>}
      </>}
    </>
  );
}

export default PageRouter;