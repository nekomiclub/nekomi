import { LayoutProps } from '~/interfaces/types'
import { metaObject } from '../../../config'

export const metadata = metaObject({
  title: 'Угода користувача / Agreement'
})

export default function RootLayout({ children }: LayoutProps) {
  return children
}
