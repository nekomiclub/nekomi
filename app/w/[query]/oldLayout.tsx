import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Перегляд аніме на animee',
  description: 'Animee - Поринь у світ українського аніме!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
