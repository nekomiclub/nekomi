import { Metadata } from 'next'
import { ILayoutProps, IRSCProps } from '../../interfaces/IRSC'

export const metadata: Metadata = {
  title: 'Тека animee',
  description: 'Тут зібрані всі тайтли які є'
}

export default function RootLayout({ children }: ILayoutProps) {
  return children
}