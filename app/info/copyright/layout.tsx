import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Правовласникам animee',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
