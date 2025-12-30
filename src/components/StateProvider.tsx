'use client';

import { NextPage } from 'next';
import { ReactNode, useEffect, useMemo } from 'react';
import { PopupLayer } from '@fullkekw/popup';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { AppProgressBar } from 'next-nprogress-bar';
import { Provider } from 'react-redux';

import APIOld from '~/services/ApiService.old';
import { IUserState } from '~/store/reducers/userSlice';
import { setupStore } from '~/store/store';
import { randomNumber } from '~/utils/utils';

import { HandleClientError } from './Errors';
import { NotifySuccess, NotifyWarn } from './UI/NotifyToast';
import { UIReportModal } from './UI/Report';



interface StateProviderProps {
  children: ReactNode | ReactNode[]
  isSessionExpired: boolean

  user?: IUserState
}



const ConsoleMessages = [
  `coding coding codign codingg codigng ciding digco... 💻`,
  `🐈 nekomi.club`,
  `nekomi nekoma nekome neko mimi ne bebebebebeb`,
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ⌚`,
  `This site is written on NextJS!`,
  `NPM - Newton's Pickle Machine`
];



/** Setting up websocket & fetch user data */
export const StateProvider: NextPage<StateProviderProps> = ({ children, user, isSessionExpired }) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();



  // Handle user authorization
  useMemo(() => {
    const signinToken = searchParams.get('signinPayload');

    // Logout if session expire
    if (isSessionExpired && !signinToken) {
      (async function () {
        try {
          NotifyWarn({ title: 'Ваша авторизація закінчилась', message: 'Перезайдіть в акаунт' });
          await APIOld.userLogout();
        } catch (e) { HandleClientError(e); }
      })();
    }
  }, []);

  useEffect(() => {
    // Log random fact
    const randMessageIndex = randomNumber(0, ConsoleMessages.length - 1);
    console.log(`[Fact #${randMessageIndex}]: ${ConsoleMessages[randMessageIndex]}`);

    // Authorize
    const signinToken = searchParams.get('signinPayload');

    if (signinToken) {
      router.replace(pathname);

      (async function () {
        try {
          await APIOld.userSignin({ token: signinToken });

          NotifySuccess({ title: 'Ви увійшли в акаунт', message: 'welcome!' });

          setTimeout(() => router.refresh(), 100);
        } catch (e) {
          HandleClientError(e);
        }
      })();
    }
  }, []);



  return <Provider store={setupStore({ preloadedState: { user } })}>
    <AppProgressBar
      height="2px"
      color="linear-gradient(90deg, #FF416C 0%, #FF4B2B 100%)"
      options={{ showSpinner: false }}
      shallowRouting
    />

    <PopupLayer>
      <UIReportModal />

      {children}
    </PopupLayer>
  </Provider>;
};

/** Setup redux internals state @deprecated */
const SetupIntertnals: NextPage = () => {
  // const dispatch = useAppDispatch();

  // const [ws, setWs] = useState<WebSocket>()



  // // Establish websocket connection
  // useEffect(() => {
  //   if (typeof window === 'undefined' || ws) return;

  //   const websocket = new WebSocket(config.URL.apiWS);

  //   setWs(websocket)

  //   let SID = sessionStorage.getItem('SID')

  //   if (!SID) {
  //     SID = createStringID(8)
  //     sessionStorage.setItem('SID', SID);
  //   }

  //   // Send presence request
  //   websocket.onopen = () => {
  //     try {
  //       sendPresenceRequest(websocket, SID || 'SID_INVALID')
  //     } catch (e) {
  //       HandleClientError(e);
  //     }
  //   }
  // }, [])

  // // Send presence websocket request
  // useEffect(() => {
  //   if (!ws || typeof window === 'undefined') return;

  //   const SID = sessionStorage.getItem('SID')

  //   // Handle broadcast
  //   ws.onmessage = data => {
  //     try {
  //       const message = JSON.parse(data.data) as Message;

  //       switch (message.type) {
  //         case 'error': {
  //           console.error('Websocket error occured');
  //           console.error(message.payload);

  //           break;
  //         }

  //         case 'online_changed': {
  //           const { payload } = message as Response<IWS_OnlineChanged>;

  //           dispatch(internalsSlice.actions.reducer({
  //             online: payload.online,
  //             headerHeight: 92
  //           }))

  //           break;
  //         }

  //         case 'online_poll': {
  //           sendPresenceRequest(ws, SID || 'SID_INVALID');
  //           break;
  //         }
  //       }
  //     } catch (e) {
  //       HandleClientError(e);
  //     }
  //   }

  //   // Send disconnect request
  //   window.addEventListener('beforeunload', () => {
  //     const payload: Request<IWS_SiteConnection> = {
  //       type: 'site_disconnected',
  //       payload: {
  //         SID: SID || 'SID_INVALID'
  //       },
  //       CSRF: signCSRF()
  //     }

  //     ws.send(JSON.stringify(payload));
  //   })
  // }, [ws])

  // function sendPresenceRequest(ws: WebSocket, SID: string) {
  //   const payload: Request<IWS_SiteConnection> = {
  //     type: 'site_connected',
  //     payload: {
  //       SID
  //     },
  //     CSRF: signCSRF()
  //   }

  //   ws.send(JSON.stringify(payload))
  // }



  return <></>;
};