import { ILayoutProps } from '../../../interfaces/IRSC'
import { metaObject } from '../../../config'

export const metadata = metaObject({
  title: 'Правовласникам / Copyright'
})

export default function RootLayout({ children }: ILayoutProps) {
  return children
}
