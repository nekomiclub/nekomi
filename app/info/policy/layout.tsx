import { Metadata } from 'next'
import { ILayoutProps, IRSCProps } from '../../../interfaces/IRSC'

export const metadata: Metadata = {
  title: 'Політика конфіденційності / Privacy policy',
  robots: 'none',
  openGraph: {
    title: 'Політика конфіденційності / Privacy policy'
  }
}

export default function RootLayout({ children }: ILayoutProps) {
  return children
}
