'use client';

import { FC, ReactNode, useEffect, useMemo } from 'react';
import { PopupLayer } from '@fullkekw/popup';
import { AppProgressBar } from 'next-nprogress-bar';
import { Provider } from 'react-redux';

import { HandleClientError } from '~/components/Errors';
import { NotifyWarn } from '~/components/nofity/NotifyStatus';
import { ReportModal } from '~/components/Report';
import API from '~/services/api/API';
import { IUserState } from '~/store/reducers/userSlice';
import { setupStore } from '~/store/store';
import { randomNumber } from '~/utils/utils';



interface IProps {
  children: ReactNode | ReactNode[]
  isSessionExpired: boolean

  user?: IUserState
}



const ConsoleMessagesList = [
  `coding coding codign codingg codigng ciding digco... 💻`,
  `🐈 nekomi.club`,
  `nekomi nekoma nekome neko mimi ne bebebebebeb`,
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ⌚`,
  `This site is written on NextJS!`,
  `NPM - Newton's Pickle Machine`
] as const;



const StateProvider: FC<IProps> = ({ children, user, isSessionExpired }) => {
  // Handle user authorization
  useMemo(() => {
    // Logout if session expire
    if (isSessionExpired) {
      (async function () {
        try {
          NotifyWarn({ title: 'Ваша авторизація закінчилась', message: 'Перезайдіть в акаунт' });

          await API.getAuthLogout({});
        } catch (e) { HandleClientError(e); }
      })();
    }
  }, []);



  useEffect(() => {
    // Log random fact
    const randMessageIndex = randomNumber(0, ConsoleMessagesList.length - 1);
    console.log(`[Fact #${randMessageIndex}]: ${ConsoleMessagesList[randMessageIndex]}`);
  }, []);



  return <Provider store={setupStore({ preloadedState: { user } })}>
    <AppProgressBar
      height="2px"
      color="linear-gradient(90deg, #FF416C 0%, #FF4B2B 100%)"
      options={{ showSpinner: false }}
      shallowRouting
    />

    <PopupLayer>
      <ReportModal />

      {children}
    </PopupLayer>
  </Provider>;
};

export default StateProvider;