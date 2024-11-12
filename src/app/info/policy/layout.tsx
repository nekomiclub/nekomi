import { ILayoutProps } from '../../../interfaces/IRSC'
import { metaObject } from '../../../config'

export const metadata = metaObject({
  title: 'Політика конфіденційності / Privacy policy'
})

export default function RootLayout({ children }: ILayoutProps) {
  return children
}
