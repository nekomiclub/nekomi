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
import storageSlice from '../store/reducers/storageSlice';
import { TRoleCapability } from '../interfaces/IRoles';
import { createID } from './handlers';
import { IWS_OnlineChanged, IWS_SiteConnection, Message, Request, Response } from '../interfaces/IWS';

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

        const { data } = await $api.get<{ user: IUser, parsedRoles: TRoleCapability[] }>(`/user/*`, {
          params: {
            detailed: true,
            parseRoles: true
          }
        });
        const { avatar, id, roles, username, watchProgress, statistics } = data.user;

        dispatch(userSlice.actions.reducer({
          avatar,
          id,
          roles,
          username,
          watchProgress,
          capabilities: data.parsedRoles,
          loaded: true,
          isTelegramLinked: statistics.isTelegramLinked
        }))
      } catch (e) {
        const state = { ...userStateDefault };
        console.warn('LOGGED OUT DUE TO VERIFICATION ERROR')

        state.loaded = true;
        dispatch(userSlice.actions.reducer(state))

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

    (async function () {
      if (!ws) {
        setWs(new WebSocket(config.URL.apiWS))
      }
    })()
  }, [])

  // Send presence websocket request
  useEffect(() => {
    if (!ws || typeof window === undefined) return;

    let SID = sessionStorage.getItem('SID')

    if (!SID) {
      SID = createID();
      sessionStorage.setItem('SID', SID);
    }

    // Send presence request
    ws.onopen = () => {
      try {
        sendPresenceRequest(ws, SID || 'SID_INVALID')
      } catch (e) {
        console.error(e)
      }
    }

    // Handle broadcast
    ws.onmessage = data => {
      try {
        const message = JSON.parse(data.data) as Message;

        switch (message.type) {
          case 'error': {
            console.error('Websocket error occured');
            console.error(message.payload);

            break;
          }

          case 'online_changed': {
            const { payload } = message as Response<IWS_OnlineChanged>;

            dispatch(storageSlice.actions.reducer({
              online: payload.online
            }))

            break;
          }

          case 'online_poll': {
            sendPresenceRequest(ws, SID || 'SID_INVALID');
            break;
          }
        }
      } catch (e) {
        console.error(e)
      }
    }

    // Send disconnect request
    window.addEventListener('beforeunload', () => {
      const payload: Request<IWS_SiteConnection> = {
        type: 'site_disconnected',
        payload: {
          SID: SID || 'SID_INVALID'
        }
      }

      ws.send(JSON.stringify(payload));
    })

    function sendPresenceRequest(ws: WebSocket, SID: string) {
      const payload: Request<IWS_SiteConnection> = {
        type: 'site_connected',
        payload: {
          SID
        }
      }

      ws.send(JSON.stringify(payload))
    }
  }, [ws])

  return (
    <>
      {children}
    </>
  );
}