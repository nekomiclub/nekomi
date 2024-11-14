// Packages styles

import '@fullkekw/fkw-menu/css'
import '@fullkekw/fkw-popup/css'

import 'swiper/css';

import axios, { AxiosError } from 'axios';
import { Analytics } from '@vercel/analytics/react'
import { Montserrat } from 'next/font/google'
import { SkeletonTheme } from 'react-loading-skeleton';
import { SpeedInsights } from '@vercel/speed-insights/next'
import { cookies, headers } from 'next/headers';

import * as Provider from '../components/Providers'
import Footer from '../components/Footer';
import Header from '../components/Header';
import { ILayoutProps } from '../interfaces/IRSC';
import { RenamePopup, ServerUnavailable } from '../components/Components';
import { config, metaObject } from '../config';
import { $api } from '@/components/http';
import { IUser } from '@/interfaces/IUser';
import { IUserState } from 'store/reducers/userSlice';
import { TRoleCapability } from '@/interfaces/IRoles';

import '../styles/globals.css';
import '../styles/index.scss'
import 'react-loading-skeleton/dist/skeleton.css'


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
        loaded: true,
        capabilities: data.parsedRoles
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
        {isServerOnline && <Provider.State user={user}>
          <SkeletonTheme baseColor="#181818" highlightColor="#222">
            <Header />

            <RenamePopup />

            {children}

            <Footer />
          </SkeletonTheme>
        </Provider.State>}

      </body>
    </html>
  )
}