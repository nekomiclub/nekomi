import '../styles/globals.css';
import '../styles/index.scss'

import { Metadata } from 'next'
import StorageProvider from '../components/StorageProvider'
import AuthProvider from '../components/AuthProvider'
import PageRouter from '../components/PageRouter';

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
        <StorageProvider>
          <PageRouter>
            <AuthProvider>
              {children}
            </AuthProvider>
          </PageRouter>
        </StorageProvider>
      </body>
    </html>
  )
}
