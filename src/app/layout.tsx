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
import { Manrope, Montserrat, Space_Grotesk } from 'next/font/google'
import { cookies } from 'next/headers';
import { SkeletonTheme } from 'react-loading-skeleton';
import { ToastContainer } from 'react-toastify';

import { ErrorNoConnection } from '~/components/Errors';
import NavMenu from '~/components/NavMenu/NavMenu';
import { StateProvider } from '~/components/StateProvider';
import { LayoutProps } from '~/interfaces/types';
import API, { API_ERROR } from '~/services/ApiService';
import { IUserState } from '~/store/reducers/userSlice';
import Footer from '../components/Footer';
import { config, devMode, metaObject } from '../config';



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



export default async function Layout({ children, params }: LayoutProps) {
  const sessionToken = (await cookies()).get(config.vars.SessionCookie)?.value;

  let isServerOnline = false;
  let isSessionExpired = false;
  let user: IUserState | undefined



  // Get user by cookie
  if (sessionToken) {
    try {
      console.log(sessionToken)

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

      isServerOnline = true;
    } catch (e) {
      if (e instanceof AxiosError && e.response?.data.code === API_ERROR.AUTH_SESSION_EXPIRED) isSessionExpired = true;

      if (devMode) console.error(e)
    }
  }

  // Ping API
  if (!isServerOnline) {
    try {
      await axios.options(`${config.URL.apiHTTP}/ping`)
      isServerOnline = true;
    } catch (e) { }
  }



  return <html lang="uk">
    <body className={`bg-dark ${montserrat.className} ${manrope.variable} ${spaceGrotesk.variable}`}>
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
  </html>
}