import { Metadata } from 'next'

import './styles.scss'

export const metadata: Metadata = {
  title: 'Авторизація',
  description: 'Увійди в свій акаунт, та повернись в світ українського аніме'
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
