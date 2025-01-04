import { metaObject } from '../../../config'
import { ILayoutProps } from '../../../interfaces/IRSC'

export const metadata = metaObject({
  title: 'Правила та умови / TOS'
})

export default function RootLayout({ children }: ILayoutProps) {
  return children
}
