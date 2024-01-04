import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Угода користувача animee',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
