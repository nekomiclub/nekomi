
import { notFound } from 'next/navigation'

import { LayoutProps } from '~/interfaces/types'
import { DevelopmentMode, metaObject } from '../../config'



export const metadata = metaObject({ robots: ['nofollow', 'noindex'] })



// Layout
export default async function Layout({ children }: LayoutProps) {
  if (!DevelopmentMode) return notFound()

  return children;
}
