import '../styles/globals.css';
import '../styles/index.scss'

import { Metadata } from 'next'
import * as Provider from '../components/Providers'

export const metadata: Metadata = {
  title: 'Animee',
  description: 'Поринь у світ україномовного аніме!',
  applicationName: 'Animee',
  metadataBase: new URL('https://animee.club'),
  openGraph: {
    title: `Головна - animee`,
    description: `Поринь у світ україномовного аніме разом з animee!`,
    url: 'https://animee.club',
    siteName: 'Animee',
    type: 'article',
    images: './icon.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ua">
      <body id='root'>
        <Provider.Storage>
          <Provider.State>
            {children}
          </Provider.State>
        </Provider.Storage>
      </body>
    </html>
  )
}
