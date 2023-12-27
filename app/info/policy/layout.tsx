import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Політика конфіденційності animee',
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
