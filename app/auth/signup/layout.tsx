import { Metadata } from 'next'

import '../styles.scss'

export const metadata: Metadata = {
  title: 'Реєстрація',
  description: 'Отримай всі переваги від наявності акаунту'
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
