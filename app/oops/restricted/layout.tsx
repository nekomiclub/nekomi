import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Доступ обмежений - Animee',
  description: 'Наразі ви не можете переглядати зміст цієї сторінки',
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
