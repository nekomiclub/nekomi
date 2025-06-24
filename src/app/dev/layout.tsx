
import { notFound } from 'next/navigation'

import { LayoutProps } from '~/interfaces/types'
import { devMode, metaObject } from '../../config'



export const metadata = metaObject({ robots: ['nofollow', 'noindex'] })



// Layout
export default async function Layout({ children }: LayoutProps) {
  if (!devMode) return notFound()

  return children;
}
