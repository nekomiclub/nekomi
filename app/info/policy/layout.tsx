import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Політика конфіденційності animee',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
