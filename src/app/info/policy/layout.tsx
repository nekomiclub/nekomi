import { LayoutProps } from '~/interfaces/types'
import { metaObject } from '../../../config'

export const metadata = metaObject({
  title: 'Політика конфіденційності / Privacy policy'
})

export default function RootLayout({ children }: LayoutProps) {
  return children
}
