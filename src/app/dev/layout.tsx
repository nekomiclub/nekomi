
import { notFound } from 'next/navigation'

import { devMode, metaObject } from '../../config'
import { ILayoutProps } from '../../interfaces/IRSC'



export const metadata = metaObject({ robots: ['nofollow', 'noindex'] })



// Layout
export default async function Layout({ children }: ILayoutProps) {
  if (!devMode) return notFound()

  return children;
}
