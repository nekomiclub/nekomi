import '~/styles/_main.scss';

import { cache } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import axios, { AxiosError } from 'axios';
import { Manrope } from 'next/font/google';
import { SkeletonTheme } from 'react-loading-skeleton';
import { ToastContainer } from 'react-toastify';

import { ErrorNoConnection } from '~/components/Errors';
import Footer from '~/components/Footer';
import NavMenu from '~/components/nav_menu/NavMenu';
import conf from '~/conf';
import { ILayoutProps } from '~/interfaces/types';
import API from '~/services/api/API';
import { IUserState } from '~/store/reducers/userSlice';
import { getSessionToken } from '~/utils/server-utils';
import siteMetadata from '~/utils/site-metadata';

import StateProvider from './StateProvider';



// eslint-disable-next-line react-refresh/only-export-components
export const metadata = siteMetadata({});



const manrope = Manrope({
  weight: ['400', '700'],
  fallback: ['system-ui'],
  subsets: ['cyrillic', 'latin'],
  variable: '--font-manrope'
});



const getUser = cache(async (session: string) => {
  return await API.getUser({}, { view: 'full', get_permissions: true, get_view_progress: true, get_libs: true }, { sessionToken: session });
});



export default async function RootLayout({ children, params }: ILayoutProps) {
  const sessionToken = await getSessionToken();

  let isServerOnline = false;
  let isSessionExpired = false;
  let user: IUserState | undefined;



  // Get user by cookie
  if (sessionToken) {
    try {
      const data = await getUser(sessionToken);

      user = {
        avatar: data.user.avatar,
        id: data.user.id,
        roles: data.user.roles,
        username: data.user.username,
        view_progress: data.user.view_progress ?? [],
        permissions: data.user.permissions ?? [],
        libs: data.user.libs ?? [],
        dubber_team_member: data.user.dubber_team_member,
      };

      isServerOnline = true;
    } catch (e) {
      if (e instanceof AxiosError && ['auth:session_token_expired', 'auth:session_token_invalid', 'auth:session_not_exist'].includes(e.response?.data.code)) isSessionExpired = true;
    }
  }

  // Ping API
  if (!isServerOnline) {
    try {
      await axios.options(`${conf.URL.nekomiApi}/ping`);
      isServerOnline = true;
    } catch (e) { /*  */ }
  }



  return <html lang="uk">
    <body className={`bg-[var(--color-dark)] ${manrope.variable}`}>
      {isServerOnline ? <StateProvider user={user} isSessionExpired={isSessionExpired}>
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