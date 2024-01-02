import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Тека animee',
  description: 'Тут зібрані всі тайтли які є'
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
