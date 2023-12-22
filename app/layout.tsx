import '../styles/globals.css';
import '../styles/index.scss'

import { Metadata } from 'next'
import StorageProvider from '../components/StorageProvider'
import AuthProvider from '../components/AuthProvider'

export const metadata: Metadata = {
  title: 'animee',
  description: 'Animee - Поринь у світ українського аніме!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ua">
      <body id='root'>
        <StorageProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </StorageProvider>
      </body>
    </html>
  )
}
