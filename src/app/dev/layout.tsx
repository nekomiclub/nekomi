import React from 'react'

import { ErrorNotFound } from '~/components/Errors'
import { devMode, metaObject } from '../../config'
import { ILayoutProps } from '../../interfaces/IRSC'



export const metadata = metaObject({ robots: ['nofollow', 'noindex'] })



// Layout
export default async function Layout({ children }: ILayoutProps) {
  if (!devMode) return <ErrorNotFound />

  return children;
}
