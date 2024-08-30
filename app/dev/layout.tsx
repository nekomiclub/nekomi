import React from "react"
import { NotFoundScreen } from "../../components/Components"
import { devMode } from "../../config"
import { ILayoutProps, IRSCProps } from "../../interfaces/IRSC"
import { Metadata } from "next"

export const metadata: Metadata = {
  robots: 'none'
}

// Layout
export default async function Layout({ children }: ILayoutProps) {
  if (!devMode) {
    return <NotFoundScreen />
  }

  return children;
}
