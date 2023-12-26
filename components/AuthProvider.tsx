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
import { getRoute } from './PageRouter'

const AuthProvider: NextPage<{ children: any }> = ({ children }) => {
  const [loaded, setLoaded] = useState(false)
  const [hasAccess, setHasAccess] = useState(false)
  const [pageExist, setPageExist] = useState(true)
  const [restrictReason, setRestrictReason] = useState('')

  const router = useRouter();
  const path = usePathname();
  const { isAuth, roles, uid, username } = useAppSelector(state => state.user)
  const { reducer } = userSlice.actions;
  const dispatch = useAppDispatch();

  const checkAccess = (roles: TUserRoles[]) => {
    const route = getRoute(path);

    if (!route) {
      return setHasAccess(false)
    }

    let grantAccess = route.public || false;

    for (const key in roles) {
      if (route.access?.includes(roles[key])) grantAccess = true;
    }

    if (!route.access?.length && !roles.length) {
      grantAccess = true;
    }

    if (!grantAccess) {
      setRestrictReason('Ви вже авторизовані. Для того щоб перезайти в акаунт, спочатку вийдіть.')
    }

    setHasAccess(grantAccess)
  }

  useEffect(() => {
    setLoaded(false);

    (async function () {
      try {
        if (localStorage.getItem('token')) {
          const verifyRes = await $api.post<{ verified: boolean }>(`${env.apiUrl}/v1/token/verify`, {
            token: `bearer=${localStorage.getItem('token')}`,
            method: 'access'
          })

          if (!verifyRes.data.verified) {
            checkAccess([])
            setLoaded(true)
            return
          }

          const tokenDataRes = await $api.post<ITokenData>(`${env.apiUrl}/v1/token/decode`, {
            token: `bearer=${localStorage.getItem('token')}`
          })

          const { roles, uid, username } = tokenDataRes.data

          checkAccess(roles)
          setLoaded(true)
          dispatch(reducer({ isAuth: true, roles, uid, username }))
        } else {
          checkAccess([])
          setLoaded(true)
        }
      } catch (e) {
        console.error(e)
      }
    })()
  }, [path])

  return (
    <>
      {loaded ? <>

        {hasAccess ? children : <Restricted />}

      </> : <Loading />}
    </>
  );
}

export default AuthProvider;