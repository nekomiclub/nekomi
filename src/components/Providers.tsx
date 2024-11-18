'use client'

import { ReactNode, useEffect, useState } from 'react'
import { AxiosError } from 'axios';
import { NextPage } from 'next';
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Provider } from 'react-redux';

import { config } from '../config';
import { useAppDispatch } from '../hooks/redux';
import { IWS_OnlineChanged, IWS_SiteConnection, Message, Request, Response } from '../interfaces/IWS';
import internalsSlice from '../store/reducers/internalsSlice';
import { IUserState } from '../store/reducers/userSlice';
import { setupStore } from '../store/store'

import { createID } from './handlers';
import { $api } from './http';



interface IProviderProps {
  children: ReactNode
}

interface IStateProviderProps extends IProviderProps {
  user?: IUserState
}



/** Setting up websocket & fetch user data */
export const State: NextPage<IStateProviderProps> = ({ children, user }) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();



  // Authorize user
  useEffect(() => {
    const signinToken = searchParams.get('signinPayload');
    if (!signinToken) return;

    (async function () {
      try {
        await $api.post(`/user/signin`, {
          session: signinToken
        })

        router.replace(pathname);
        router.refresh();
      } catch (e) {
        if (e instanceof AxiosError) {
          console.error(`[HTTP]: Error occured at state provider while authorizing user via signin token`, e);
        }

        console.error(`[Unknown]: Error occured at state provider while authorizing user via signin token`, e);
      }
    })()
  }, [])



  return <Provider store={setupStore({
    preloadedState: {
      user
    }
  })}>
    <SetupIntertnals />

    {children}
  </Provider>
}

/** Setup redux internals state */
const SetupIntertnals: NextPage = () => {
  const dispatch = useAppDispatch();

  const [ws, setWs] = useState<WebSocket>()



  // Establish websocket connection
  useEffect(() => {
    if (typeof window === 'undefined' || ws) return;

    setWs(new WebSocket(config.URL.apiWS))
  }, [])

  // Send presence websocket request
  useEffect(() => {
    if (!ws || typeof window === 'undefined') return;

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

            dispatch(internalsSlice.actions.reducer({
              online: payload.online,
              headerHeight: 92
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



  return <></>
}