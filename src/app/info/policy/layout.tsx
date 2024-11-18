import { metaObject } from '../../../config'
import { ILayoutProps } from '../../../interfaces/IRSC'

export const metadata = metaObject({
  title: 'Політика конфіденційності / Privacy policy'
})

export default function RootLayout({ children }: ILayoutProps) {
  return children
}
