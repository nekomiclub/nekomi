import '@fullkekw/fkw-menu/css';
import '@fullkekw/popup/css';
import 'swiper/css';
import 'react-loading-skeleton/dist/skeleton.css';
import 'react-material-symbols/rounded';
import '~/styles/index.scss';
import '~/styles/typography.scss';
import '~/styles/ui.scss';
import '~/styles/global.ui.scss';
import '~/styles/tailwind.css';

import { cache } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import axios, { AxiosError } from 'axios';
import { Manrope, Montserrat, Space_Grotesk } from 'next/font/google';
import { cookies } from 'next/headers';
import { SkeletonTheme } from 'react-loading-skeleton';
import { ToastContainer } from 'react-toastify';

import { ErrorNoConnection } from '~/components/Errors';
import Footer from '~/components/Footer';
import NavMenu from '~/components/NavMenu/NavMenu';
import { StateProvider } from '~/components/StateProvider';
import conf from '~/conf';
import { LayoutProps } from '~/interfaces/types';
import API from '~/services/api/API';
import { IUserState } from '~/store/reducers/userSlice';
import siteMetadata from '~/utils/site-metadata';
import { getUTC } from '~/utils/utils';



export const metadata = siteMetadata({});



const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  fallback: ['system-ui'],
  subsets: ['cyrillic', 'cyrillic-ext', 'latin'],
});

const manrope = Manrope({
  weight: ['400', '700'],
  fallback: ['system-ui'],
  subsets: ['cyrillic', 'latin'],
  variable: '--font-manrope'
});

const spaceGrotesk = Space_Grotesk({
  weight: ['400', '700'],
  fallback: ['system-ui'],
  subsets: ['latin'],
  variable: '--font-space-grotesk'
});



const getUser = cache(async (session: string) => {
  return await API.getUser({}, { view: 'full', get_permissions: true, get_view_progress: true, get_libs: true }, { sessionToken: session });
});


export default async function Layout({ children, params }: LayoutProps) {
  const sessionToken = cookies().get(conf.vars.SessionCookie)?.value;

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
      const date = getUTC().ISO;

      if (e instanceof AxiosError && ['auth:session_token_expired', 'auth:session_token_invalid', 'auth:session_not_exist'].includes(e.response?.data.code)) isSessionExpired = true;

      console.error(`[${date}]: Session fetch failed - ${JSON.stringify(e, null, 2)}`);
    }
  }

  // Ping API
  if (!isServerOnline && !sessionToken) {
    try {
      await axios.options(`${conf.URL.nekomiApi}/ping`);
      isServerOnline = true;
    } catch (e) { }
  }



  return <html lang="uk">
    <body className={`bg-dark-primary ${montserrat.className} ${manrope.variable} ${spaceGrotesk.variable}`}>
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