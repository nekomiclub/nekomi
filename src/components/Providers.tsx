'use client'

import { ReactNode, useEffect, useState } from 'react'
import { NextPage } from 'next';
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { AppProgressBar } from 'next-nprogress-bar';
import { Provider } from 'react-redux';

import { createStringID } from '~/utils/create-string-id';
import { config } from '../config';
import { useAppDispatch } from '../hooks/redux';
import { IWS_OnlineChanged, IWS_SiteConnection, Message, Request, Response } from '../interfaces/IWS';
import internalsSlice from '../store/reducers/internalsSlice';
import { IUserState } from '../store/reducers/userSlice';
import { setupStore } from '../store/store'

import { HandleClientError } from './Errors';
import { randomNumber } from './handlers';
import { $api, signCSRF } from './http';
import { UIReportModal } from './UI/Report';



interface IProviderProps {
  children: ReactNode
}

interface IStateProviderProps extends IProviderProps {
  user?: IUserState
}



const ConsoleMessages = [
  `coding coding codign codingg codigng ciding digco... 💻`,
  `🐈 nekomi.club`,
  `nekomi nekoma nekome neko mimi ne bebebebebeb`,
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ⌚`,
  `💖 Will I be known and loved?\nIs there one that I trust?\nStarting to sober up\nHas it been long enough?\n\nBorderline - Time Impala`,
  `imma fullstack overflow developer 🤓`,
  `This site is written on NextJS`,
  `NPM - Newton's Pickle Machine`
]



/** Setting up websocket & fetch user data */
export const StateProvider: NextPage<IStateProviderProps> = ({ children, user }) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();



  // Authorize user
  useEffect(() => {
    // Log random fact
    const randMessageIndex = randomNumber(0, ConsoleMessages.length - 1);
    console.log(`[Fact #${randMessageIndex}]: ${ConsoleMessages[randMessageIndex]}`)


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
        HandleClientError(e);
      }
    })()
  }, [])



  return <Provider store={setupStore({
    preloadedState: {
      user
    }
  })}>
    <AppProgressBar
      height="2px"
      color="linear-gradient(90deg, #FF416C 0%, #FF4B2B 100%)"
      options={{ showSpinner: false }}
      shallowRouting
    />

    <UIReportModal />
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

    const websocket = new WebSocket(config.URL.apiWS);

    setWs(websocket)

    let SID = sessionStorage.getItem('SID')

    if (!SID) {
      SID = createStringID(8)
      sessionStorage.setItem('SID', SID);
    }

    // Send presence request
    websocket.onopen = () => {
      try {
        sendPresenceRequest(websocket, SID || 'SID_INVALID')
      } catch (e) {
        HandleClientError(e);
      }
    }
  }, [])

  // Send presence websocket request
  useEffect(() => {
    if (!ws || typeof window === 'undefined') return;

    const SID = sessionStorage.getItem('SID')

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
        HandleClientError(e);
      }
    }

    // Send disconnect request
    window.addEventListener('beforeunload', () => {
      const payload: Request<IWS_SiteConnection> = {
        type: 'site_disconnected',
        payload: {
          SID: SID || 'SID_INVALID'
        },
        CSRF: signCSRF()
      }

      ws.send(JSON.stringify(payload));
    })
  }, [ws])

  function sendPresenceRequest(ws: WebSocket, SID: string) {
    const payload: Request<IWS_SiteConnection> = {
      type: 'site_connected',
      payload: {
        SID
      },
      CSRF: signCSRF()
    }

    ws.send(JSON.stringify(payload))
  }



  return <></>
}