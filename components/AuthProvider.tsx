'use client'

import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import userSlice from '../store/reducers/userSlice';
import { NextPage } from 'next';
import axios, { AxiosResponse } from 'axios'
import { HIDE_IN_PROD, env, prodMode } from '../config';
import $api from './http';
import { ITokenData, TUserRoles } from '../interfaces/ITokenData';
import { usePathname, useRouter } from 'next/navigation'
import { routes, IRoute } from '../routes';
import Restricted from '@/oops/restricted/page'
import NotFound from '@/oops/404/page'
import Loading from './Loading';

const AuthProvider: NextPage<{ children: any }> = ({ children }) => {
  const [loaded, setLoaded] = useState(false)
  const [hasAccess, setHasAccess] = useState(false)
  const [pageExist, setPageExist] = useState(true)

  const router = useRouter();
  const path = usePathname();
  const { isAuth, roles, uid, username } = useAppSelector(state => state.user)
  const { reducer } = userSlice.actions;
  const dispatch = useAppDispatch();

  const getRoute = (): IRoute => {
    // @ts-ignore
    let route: IRoute = {}

    for (const key in routes) {
      const routeRec = routes[key] as IRoute
      if (routeRec.path === path) route = routeRec
    }

    for (const key in routes) {
      let routeRec = routes[key] as IRoute

      if (routeRec.path.includes('/*')) {
        for (const key in routes) {
          const routeRec = routes[key] as IRoute
          if (routeRec.path === routeRec.path.replace('/*', '')) route = routeRec
        }
      }
    }

    return route;
  }

  const checkPageExisting = (): boolean => {
    const route = getRoute();

    if (!route.path) {
      setPageExist(false)
      return false;
    } else {
      setPageExist(true)
      return true;
    }
  }

  const checkAccess = (roles: TUserRoles[]) => {
    const route = getRoute();

    let grantAccess = route.public || false;

    for (const key in roles) {
      if (route.access?.includes(roles[key])) grantAccess = true;
    }

    if (!route.access?.length && !roles.length) {
      grantAccess = true;
    }

    setHasAccess(grantAccess)
  }

  useEffect(() => {
    (async function () {
      if (!checkPageExisting()) {
        return;
      }

      if (localStorage.getItem('token')) {
        try {
          const res = await axios.get<{ token: string }>(`${env.apiUrl}/v1/auth/refresh`, { withCredentials: true })
          localStorage.setItem('token', res.data.token)

          const tokenDecodeRes = await $api.post<ITokenData>(`${env.apiUrl}/v1/token/decode`, {
            token: `bearer=${res.data.token}`
          })

          checkAccess(tokenDecodeRes.data.roles)
          dispatch(reducer({ isAuth: true, roles: tokenDecodeRes.data.roles, uid: tokenDecodeRes.data.uid, username: tokenDecodeRes.data.username }))
          setLoaded(true)
        } catch (e) {
          console.error(e)
        }
      } else {
        checkAccess([])
        setLoaded(true)
      }
    })()
  }, [])

  return (
    <>
      {pageExist ? <>

        {loaded ? <>

          {hasAccess ? children : <Restricted reason='Ви вже в акаунті.' />}

        </> : <Loading />}

      </> : <NotFound />}
    </>
  );
}

export default AuthProvider;