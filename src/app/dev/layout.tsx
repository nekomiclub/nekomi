import React from "react"

import { ILayoutProps } from "../../interfaces/IRSC"
import { NotFoundScreen } from "../../components/Components"
import { devMode, metaObject } from "../../config"

export const metadata = metaObject({ robots: ['nofollow', 'noindex'] })

// Layout
export default async function Layout({ children }: ILayoutProps) {
  if (!devMode) return <NotFoundScreen />

  return children;
}
