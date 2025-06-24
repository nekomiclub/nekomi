import { LayoutProps } from '~/interfaces/types'
import { metaObject } from '../../../config'

export const metadata = metaObject({
  title: 'DMCA'
})

export default function RootLayout({ children }: LayoutProps) {
  return children
}
