// Packages styles
import 'react-loading-skeleton/dist/skeleton.css'
import 'uvc-menu/css';
import '@fullkekw/fkw-popup/css'
import '@fullkekw/fkw-menu/css'
import 'swiper/css';

import '../styles/globals.css';
import '../styles/index.scss'



import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { Metadata, NextPage } from 'next'
import axios from 'axios';
import Link from 'next/link';
import { headers } from 'next/headers';

import * as Provider from '../components/Providers'
import { config } from '../config';
import { SkeletonTheme } from 'react-loading-skeleton';
import { routes } from '../routes';
import { getRoute } from '../components/ServerComponents';
import { IcoInternet, IcoOffline } from '../assets/Icons';
import { ILayoutProps, IRSCProps } from '../interfaces/IRSC';
import { RenamePopup, ServerUnavailable } from '../components/Components';
import { signCSRF } from '../components/http';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Animee',
  description: 'Animee - безкоштовний онлайн-кінотеатр аніме з великою кількістю озвучення на українській мові!',
  applicationName: 'Animee',
  keywords: ['anime', 'аніме на українській мові', 'дивитись аніме онлайн', 'анімі', 'аніме', 'анімі клаб', 'animee', 'animee club'],
  metadataBase: new URL(config.URL.baseURL),
  openGraph: {
    title: `Animee Club`,
    description: `Animee - безкоштовний онлайн-кінотеатр аніме з великою кількістю озвучення на українській мові!`,
    url: 'https://animee.club',
    siteName: 'animee.club',
    type: 'website',
    images: './icon.png'
  }
}



export default async function Layout({ children, params }: ILayoutProps) {
  const pathname = headers().get('x-url')!.replace(config.URL.baseURL, '')
  const route = getRoute(pathname)

  // Check is server online
  let isServerOnline = false;



  // Pass polling page anyway
  if (route?.path !== '/polling') {
    try {
      await axios.options(config.URL.apiHTTP)
      isServerOnline = true;
    } catch (e) {
      isServerOnline = false;
    }
  } else {
    isServerOnline = true;
  }

  return (
    <html lang="uk">
      <body id='root' className='bg-dark'>
        <Analytics />
        <SpeedInsights />

        {isServerOnline ? <>
          <Provider.Storage>
            <Provider.State>
              <SkeletonTheme baseColor='#181818' highlightColor='#222'>
                <Header />

                <RenamePopup />

                {children}

                <Footer />
              </SkeletonTheme>
            </Provider.State>
          </Provider.Storage>
        </> : <ServerUnavailable />}
      </body>
    </html>
  )
}