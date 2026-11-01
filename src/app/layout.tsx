import '~/styles/_main.scss';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import axios from 'axios';
import { Manrope } from 'next/font/google';
import { SkeletonTheme } from 'react-loading-skeleton';
import { ToastContainer } from 'react-toastify';

import conf from '~/conf';
import { ErrorNoConnection } from '~/shared/components/Errors';
import Footer from '~/shared/components/Footer';
import NavMenu from '~/shared/components/nav_menu/NavMenu';
import { getAuthorizationToken } from '~/shared/lib/auth-lib';
import { getCachedUser } from '~/shared/lib/cached-api';
import { IUserState } from '~/shared/store/reducers/userSlice';
import { ILayoutProps } from '~/shared/types/PagesParams';
import { NoConnectionTypeErrorCodes, SessionTimeoutErrorCodes } from '~/shared/types/types';
import siteMetadata from '~/shared/utilities/site-metadata';

import StateProvider from './StateProvider';



// eslint-disable-next-line react-refresh/only-export-components
export const metadata = siteMetadata({});



const manrope = Manrope({
  weight: ['400', '700'],
  fallback: ['system-ui'],
  subsets: ['cyrillic', 'latin'],
  variable: '--font-manrope'
});



export default async function RootLayout({ children, params }: ILayoutProps) {
  const authToken = await getAuthorizationToken();

  let isServerAlive = true;
  let isSessionExpired = false;
  let user: IUserState | undefined = undefined;



  // Get user by cookie
  if (authToken) {
    const userRes = await getCachedUser(undefined, true);

    if (userRes.success) {
      const data = {
        ...userRes.response.data.user,
        ...userRes.response.data.user_extended!,
        ...userRes.response.data.user_permissions!,
      };

      user = {
        avatar: data.avatar,
        id: data.id,
        username: data.username,
        view_progress: data.view_progress ?? [],
        permissions: data.permissions ?? [],
        libs: data.libs ?? [],
        dubber_team_member: data.dubber_team_member,
      };

      isServerAlive = true;
    } else {
      if (userRes.error.code && NoConnectionTypeErrorCodes.includes(userRes.error.code)) isServerAlive = false; // Handle server or user is offline 
      if (userRes.error.code && SessionTimeoutErrorCodes.includes(userRes.error.code)) isSessionExpired = true; // Handle user session timeout
    }
  }

  // Ping API
  if (!authToken) {
    try {
      await axios.options(`${conf.URL.nekomiApi}/ping`);
      isServerAlive = true;
    } catch (e) { /*  */ }
  }



  return <html lang="uk">
    <body className={`bg-[var(--color-dark)] ${manrope.variable}`}>
      {isServerAlive ? <StateProvider user={user} isSessionExpired={isSessionExpired}>
        <SkeletonTheme baseColor="#181818" highlightColor="#222">
          <NavMenu />

          {children}

          <Footer />



          <ToastContainer />
        </SkeletonTheme>
      </StateProvider> : <ErrorNoConnection />}

      <Analytics />
      <SpeedInsights />
    </body>
  </html>;
}