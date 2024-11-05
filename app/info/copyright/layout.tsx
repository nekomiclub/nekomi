import { Metadata } from 'next'
import { ILayoutProps } from '../../../interfaces/IRSC'

export const metadata: Metadata = {
  title: 'Правовласникам / Copyright',
  robots: 'none',
  openGraph: {
    title: 'Правовласникам / Copyright'
  }
}

export default function RootLayout({ children }: ILayoutProps) {
  return children
}
