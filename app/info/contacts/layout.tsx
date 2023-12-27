import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Контакти',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ua">
      <body id='root'>
        {children}
      </body>
    </html>
  )
}
