import { metaObject } from '../../../config'
import { ILayoutProps } from '../../../interfaces/IRSC'

export const metadata = metaObject({
  title: 'Угода користувача / Agreement'
})

export default function RootLayout({ children }: ILayoutProps) {
  return children
}
