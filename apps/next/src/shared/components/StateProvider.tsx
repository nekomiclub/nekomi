'use client';

import { FC, ReactNode, useEffect } from 'react';
import { ProgressProvider as BProgress } from '@bprogress/next/app';
import { PopupLayer } from '@fullkekw/popup';
import { Provider } from 'react-redux';

import { NotifyWarn } from '~/shared/components/nofity/NotifyStatus';
import { ReportModal } from '~/shared/components/Report';
import { InvokeClientLogout } from '~/shared/lib/auth-lib';
import { IUserState } from '~/shared/store/reducers/userSlice';
import { setupStore } from '~/shared/store/store';
import { HandleClientNormalizedError } from '~/shared/utilities/handle-normalized-errors';



interface IProps {
  children: ReactNode | ReactNode[]
  isSessionExpired: boolean

  user?: IUserState
}



const StateProvider: FC<IProps> = ({ children, user, isSessionExpired }) => {
  // Handle user authorization
  useEffect(() => {
    // Logout if session expire
    if (isSessionExpired) {
      (async function () {
        NotifyWarn({ title: 'Ваша авторизація закінчилась', message: 'Перезайдіть в акаунт' });

        const logoutRes = await InvokeClientLogout();
        if (!logoutRes.success) return HandleClientNormalizedError(logoutRes.error);
      })();
    }
  }, []);



  return <Provider store={setupStore({ preloadedState: { user } })}>
    <BProgress
      height="2px"
      color="linear-gradient(90deg, #FF416C 0%, #FF4B2B 100%)"
      options={{ showSpinner: false }}
      shallowRouting
    >
      <PopupLayer>
        <ReportModal />

        {children}
      </PopupLayer>
    </BProgress>;
  </Provider>;
};

export default StateProvider;