import './styles/globals.css';
import './styles/index.scss'

import { Metadata } from 'next'

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
      <body id='root'>{children}</body>
    </html>
  )
}
