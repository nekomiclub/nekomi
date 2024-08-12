'use client'

import { NextPage } from 'next';
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useState, useEffect, use } from 'react'
import axios, { AxiosError } from 'axios';
import { Provider } from 'react-redux';

import { setupStore } from '../store/store'
import { IRoute, TRouteStatus, routes } from '../routes';
import { ITokenData, TUserRoles } from '../interfaces/ITokenData';
import { useAppDispatch } from '../hooks/redux';
import userSlice, { userStateDefault } from '../store/reducers/userSlice';
import { config, prodMode } from '../config';
import { IUsapiUser, IUser } from '../interfaces/IUser';
import { $api } from './http';
import { IWS, IWSPollPresence, IWSSendPresence } from '../interfaces/IWS';
import storageSlice from '../store/reducers/storageSlice';

const store = setupStore();



/** Setting up reduxjs storage */
export const Storage: NextPage<{ children: any }> = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}



/** Setting up websocket & fetch user data */
export const State: NextPage<{ children: any }> = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [ws, setWs] = useState<WebSocket>()

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

          router.replace(`${config.URL.baseURL}/${pathname}`)
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
        // Verify
        await $api.get('/user/validate');

        const { data } = await $api.get<{ user: IUser }>(`/user/*`);
        const { avatar, id, roles, username } = data.user

        dispatch(userSlice.actions.reducer({
          avatar,
          id,
          roles,
          username,
        }))
      } catch (e) {
        console.warn('LOGGED OUT DUE TO VERIFICATION ERROR')
        dispatch(userSlice.actions.reducer(userStateDefault))
        router.refresh();

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

  // Establish websocket connection
  useEffect(() => {
    if (typeof window === undefined) return;

    if (prodMode) return;

    (async function () {
      if (!ws) {
        setWs(new WebSocket(config.URL.apiWS))
      }
    })()
  }, [])

  // Send presence websocket request
  useEffect(() => {
    if (!ws || typeof window === undefined) return;

    if (prodMode) return;

    let SID = localStorage.getItem('SID')

    if (!SID) {
      SID = (Math.random() + 1).toString(36).substring(6);
      localStorage.setItem('SID', SID);
    }

    // Send presence request
    ws.onopen = () => {
      try {
        const payload: IWS<IWSSendPresence> = {
          type: 'send_presence',
          payload: {
            SID: SID || ''
          }
        }

        ws.send(JSON.stringify(payload))
      } catch (e) {
        console.error(e)
      }
    }

    // Handle broadcast
    ws.onmessage = data => {
      try {
        const message = JSON.parse(data.data) as IWS;

        if (message.type === 'error') {
          console.error('AN WEBSOCKET ERROR OCCURED WHEN SENDING PRESENCE REQUEST');
          console.error(message.payload);

          return;
        } else if (message.type === 'poll_presence') {
          const { payload } = message as IWS<IWSPollPresence>;

          dispatch(storageSlice.actions.reducer({
            online: payload.online
          }))
        }
      } catch (e) {
        console.error(e)
      }
    }

    // Send disconnect request
    window.addEventListener('beforeunload', () => {
      const payload: IWS<IWSSendPresence> = {
        type: 'disconnect_presence',
        payload: {
          SID: SID || ''
        }
      }

      ws.send(JSON.stringify(payload));
    })
  }, [ws])

  return (
    <>
      {children}
    </>
  );
}