import { Metadata } from 'next'
import { ILayoutProps, IRSCProps } from '../../../interfaces/IRSC'

export const metadata: Metadata = {
  title: 'Контакти',
}

export default function RootLayout({ children }: ILayoutProps) {
  return children
}
