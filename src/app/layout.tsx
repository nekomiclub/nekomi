// Packages styles

import '@fullkekw/fkw-menu/css'
import '@fullkekw/fkw-popup/css'
import 'swiper/css';
import 'react-loading-skeleton/dist/skeleton.css'
import 'react-material-symbols/rounded';
import '../styles/index.scss'
import '../styles/ui.scss';
import '../styles/globals.css';

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import axios, { AxiosError } from 'axios';
import { preconnect } from 'next/dist/server/app-render/entry-base';
import { Manrope, Montserrat, Space_Grotesk } from 'next/font/google'
import { cookies } from 'next/headers';
import { SkeletonTheme } from 'react-loading-skeleton';
import { ToastContainer } from 'react-toastify';

import { ErrorNoConnection } from '~/components/Errors';
import { StateProvider } from '~/components/Providers';
import API from '~/services/ApiService';
import { IUserState } from '~/store/reducers/userSlice';
import Footer from '../components/Footer';
import Header from '../components/Menu';
import { config, metaObject } from '../config';
import { ILayoutProps } from '../interfaces/IRSC';



export const metadata = metaObject({})



const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  fallback: ['system-ui'],
  subsets: ['cyrillic', 'cyrillic-ext', 'latin'],
})

const manrope = Manrope({
  weight: ['400', '700'],
  fallback: ['system-ui'],
  subsets: ['cyrillic', 'latin'],
  variable: '--font-manrope'
})

const spaceGrotesk = Space_Grotesk({
  weight: ['400', '700'],
  fallback: ['system-ui'],
  subsets: ['latin'],
  variable: '--font-space-grotesk'
})



export default async function Layout({ children, params }: ILayoutProps) {
  const sessionToken = (await cookies()).get(config.vars.SessionCookie)?.value;

  /** Check is server online */
  let isServerOnline = false;
  let user: IUserState | undefined = undefined



  // Ping API
  try {
    await axios.options(config.URL.apiHTTP)
    isServerOnline = true;
  } catch (e) { }



  // Get user by cookie
  if (sessionToken && isServerOnline) {
    try {
      const data = await API.getUser({ query: '*', detailed: true, parseCapabilities: true }, {
        session: sessionToken
      })

      user = {
        avatar: data.user.avatar,
        id: data.user.id,
        isTelegramLinked: data.user.statistics.isTelegramLinked,
        roles: data.user.roles,
        username: data.user.username,
        watchProgress: data.user.watchProgress,
        capabilities: data.capabilities!,
        libs: data.user.libs,
        dubberTeamMember: data.user.statistics.dubber_team_member,
        togetherRooms: data.user.togetherRooms
      }
    } catch (e) {
      if (e instanceof AxiosError && e.status && e.status > 500) {
        console.error(`[HTTP]: Error occured at root layout while fetching user data`, e);
      }

      console.error(`[Unknown]: Error occured at root layout while fetching user data`, e);
    }
  }



  preconnect(config.URL.apiHTTP);
  preconnect(config.URL.media);

  return <html lang="uk">
    <body id="root" className={`bg-dark ${montserrat.className} ${manrope.variable} ${spaceGrotesk.variable}`}>
      <Analytics />
      <SpeedInsights />

      {/* Return layout if server respond */}
      {isServerOnline ? <StateProvider user={user}>
        <SkeletonTheme baseColor="#181818" highlightColor="#222">
          <Header />

          {children}

          <Footer />

          <ToastContainer />
        </SkeletonTheme>
      </StateProvider> : <ErrorNoConnection />}
    </body>
  </html>
}