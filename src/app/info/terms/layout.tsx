import { LayoutProps } from '~/interfaces/types'
import { metaObject } from '../../../config'

export const metadata = metaObject({
  title: 'Правила та умови / TOS'
})

export default function RootLayout({ children }: LayoutProps) {
  return children
}
