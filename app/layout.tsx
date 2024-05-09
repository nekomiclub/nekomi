// Packages styles
import 'hash-image/dist/style.css'
import 'react-loading-skeleton/dist/skeleton.css'
import 'react-uvc/dist/css/popup.css';

import '../styles/globals.css';
import '../styles/index.scss'
import 'swiper/css';

import '../styles/components/szhsin/react-menu-transitions.scss';



import { Metadata } from 'next'
import * as Provider from '../components/Providers'
import axios from 'axios';
import { config } from '../config';
import ServerUnavailable from './oops/ServerUnavailable';
import { SkeletonTheme } from 'react-loading-skeleton';

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Check server availability
  let serverAvailable = false;
  await axios.options(config.URL.apiHTTP).then(() => serverAvailable = true).catch(() => serverAvailable = false)

  return (
    <html lang="ua">
      <body id='root'>
        {serverAvailable ? <>
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
