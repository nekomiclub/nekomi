import React from "react"
import { NotFoundScreen } from "../../components/OopsComponents"
import { devMode } from "../../config"
import { ILayoutProps, IRSCProps } from "../../interfaces/IRSC"

// Layout
export default async function Layout({ children }: ILayoutProps) {
  if (!devMode) {
    return <NotFoundScreen />
  }

  return children;
}
