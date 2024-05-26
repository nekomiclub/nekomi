// Packages styles
import 'hash-image/dist/style.css'
import 'react-loading-skeleton/dist/skeleton.css'
import 'react-uvc/dist/css/popup.css';
import 'uvc-menu/css';
import 'swiper/css';

import '../styles/globals.css';
import '../styles/index.scss'



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
import { ServerUnavailable } from '../components/OopsComponents';

export const metadata: Metadata = {
  title: 'Animee',
  description: 'Animee - безкоштовний онлайн-кінотеатр аніме з великою кількістю озвучення на українській мові!',
  applicationName: 'Animee',
  metadataBase: new URL('https://animee.club'),
  keywords: ['anime', 'аніме на українській мові', 'дивитись аніме онлайн', 'анімі', 'аніме', 'анімі клаб', 'animee', 'animee club'],
  openGraph: {
    title: `Головна - animee`,
    description: `Поринь у світ україномовного аніме разом з animee!`,
    url: 'https://animee.club',
    siteName: 'Animee',
    type: 'website',
    images: './icon.png'
  }
}



export default async function Layout({ children, params }: ILayoutProps) {
  const pathname = headers().get('x-url')!.replace(config.URL.baseURL, '')
  const route = getRoute(pathname)

  // Check is server online
  let isServerOnline = false;

  try {
    await axios.options(config.URL.apiHTTP)
    isServerOnline = true;
  } catch (e) {
    isServerOnline = false
  }

  // Pass polling page anyway
  if (route?.path === '/polling') {
    isServerOnline = true;
  }

  return (
    <html lang="ua">
      <body id='root'>
        {isServerOnline ? <>
          <Provider.Storage>
            <Provider.State>
              <SkeletonTheme baseColor='#181818' highlightColor='#222'>
                {children}
              </SkeletonTheme>
            </Provider.State>
          </Provider.Storage>
        </> : <ServerUnavailable />}
      </body>
    </html>
  )
}
