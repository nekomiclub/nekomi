import { Metadata } from 'next'
import { ILayoutProps, IRSCProps } from '../../../interfaces/IRSC'

export const metadata: Metadata = {
  title: 'Політика конфіденційності animee',
}

export default function RootLayout({ children }: ILayoutProps) {
  return children
}
