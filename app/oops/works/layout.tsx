import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Технічні роботи - Animee',
  description: 'Сайт зараз недоступний через технічні роботи',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
