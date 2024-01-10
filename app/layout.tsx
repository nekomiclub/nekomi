import '../styles/globals.css';
import '../styles/index.scss'

import { Metadata } from 'next'
import * as Provider from '../components/Providers'

export const metadata: Metadata = {
  title: 'Animee',
  description: 'Поринь у світ україномовного аніме!',
  applicationName: 'Animee',
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
