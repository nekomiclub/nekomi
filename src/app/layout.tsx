// Packages styles

import '@fullkekw/fkw-menu/css'
import '@fullkekw/fkw-popup/css'

import 'swiper/css';

import axios from 'axios';
import { Analytics } from '@vercel/analytics/react'
import { Montserrat } from 'next/font/google'
import { SkeletonTheme } from 'react-loading-skeleton';
import { SpeedInsights } from '@vercel/speed-insights/next'
import { headers } from 'next/headers';

import * as Provider from '../components/Providers'
import Footer from '../components/Footer';
import Header from '../components/Header';
import { ILayoutProps } from '../interfaces/IRSC';
import { RenamePopup, ServerUnavailable } from '../components/Components';
import { config, metaObject } from '../config';
import { getRoute } from '../components/ServerComponents';

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
  const pathname = (await headers()).get('x-url')!.replace(config.URL.baseURL, '')
  const route = getRoute(pathname)



  // Check is server online
  let isServerOnline = false;



  try {
    await axios.options(config.URL.apiHTTP)
    isServerOnline = true;
  } catch (e) {
    isServerOnline = false;
  }

  return (
    <html lang="uk_UA">
      <body id="root" className={`bg-dark ${montserrat.className}`}>
        <Analytics />
        <SpeedInsights />

        {/* Return server unavailable screen if server do not respond */}
        {!isServerOnline && <ServerUnavailable />}

        {/* Return layout if server respond */}
        {isServerOnline && <Provider.Storage>
          <Provider.State>
            <SkeletonTheme baseColor="#181818" highlightColor="#222">
              <Header />

              <RenamePopup />

              {children}

              <Footer />
            </SkeletonTheme>
          </Provider.State>
        </Provider.Storage>}

      </body>
    </html>
  )
}