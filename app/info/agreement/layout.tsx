import { Metadata } from 'next'
import { ILayoutProps, IRSCProps } from '../../../interfaces/IRSC'

export const metadata: Metadata = {
  title: 'Угода користувача / Agreement',
  robots: 'none',
  openGraph: {
    title: 'Угода користувача / Agreement',
  }
}

export default function RootLayout({ children }: ILayoutProps) {
  return children
}
