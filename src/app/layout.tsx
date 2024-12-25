// Packages styles

import '@fullkekw/fkw-menu/css'
import '@fullkekw/fkw-popup/css'
import 'swiper/css';
import 'react-loading-skeleton/dist/skeleton.css'
import '../styles/index.scss'
import '../styles/globals.css';

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import axios, { AxiosError } from 'axios';
import { Montserrat } from 'next/font/google'
import { cookies, headers } from 'next/headers';
import { SkeletonTheme } from 'react-loading-skeleton';

import { $api } from '~/components/http';
import { StateProvider } from '~/components/Providers';
import { TRoleCapability } from '~/interfaces/IRoles';
import { IUser } from '~/interfaces/IUser';
import { IUserState } from '~/store/reducers/userSlice';
import { ServerUnavailable } from '../components/Components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { config, metaObject } from '../config';
import { ILayoutProps } from '../interfaces/IRSC';


export const metadata = metaObject({})
const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  fallback: ['system-ui'],
  subsets: ['cyrillic', 'cyrillic-ext', 'latin'],
})



export default async function Layout({ children, params }: ILayoutProps) {
  const url = (await headers()).get('x-url')!;
  const cookie = await cookies();
  const sessionCookie = cookie.get(config.vars.SessionCookie)?.value;
  const signinToken = new URL(url).searchParams.get('signinPayload');

  /** Check is server online */
  let isServerOnline = false;
  let user: IUserState | undefined = undefined

  try {
    await axios.options(config.URL.apiHTTP)
    isServerOnline = true;
  } catch (e) {
    isServerOnline = false;
  }

  // Get user by cookie
  if (sessionCookie) {
    try {
      const { data } = await $api.get<{ user: IUser, parsedRoles: TRoleCapability[] }>(`/user/*`, {
        params: {
          detailed: true,
          parseRoles: true
        },
        headers: {
          Cookie: cookie.toString()
        }
      })

      user = {
        avatar: data.user.avatar,
        id: data.user.id,
        isTelegramLinked: data.user.statistics.isTelegramLinked,
        roles: data.user.roles,
        username: data.user.username,
        watchProgress: data.user.watchProgress,
        capabilities: data.parsedRoles,
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



  return (
    <html lang="uk">
      <body id="root" className={`bg-dark ${montserrat.className}`}>
        <Analytics />
        <SpeedInsights />

        {/* Return server unavailable screen if server do not respond */}
        {!isServerOnline && <ServerUnavailable />}

        {/* Return layout if server respond */}
        {isServerOnline && <StateProvider user={user}>
          <SkeletonTheme baseColor="#181818" highlightColor="#222">
            <Header />

            {children}

            <Footer />
          </SkeletonTheme>
        </StateProvider>}

      </body>
    </html>
  )
}