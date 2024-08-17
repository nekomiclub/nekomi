import { NextPage } from "next"
import React from "react"
import { TUserRoles } from './interfaces/ITokenData'
import { config, devMode } from "./config"

export type TRouteStatus = 'clear' | 'indev'

export interface IRoute {
  /** Route path */
  path: string

  /** Route required roles. If undefined route will be public
   * @default undefined
   */
  roles?: string[]

  /** Page status 
   * @default clear
  */
  status?: TRouteStatus
}

interface IRoutes {
  home: IRoute,
  watch: IRoute,
  watchTitle: IRoute,
  contacts: IRoute,
  agreement: IRoute,
  privatePolicy: IRoute,
  copyright: IRoute,
  user: IRoute,
  userList: IRoute,
  dubber: IRoute,
  polling: IRoute,
  rickroll: IRoute,
  patcher: IRoute,
  patchTitle: IRoute,
}

export const routes: IRoutes = {
  home: {
    path: '/'
  },
  watch: {
    path: '/w',
  },
  watchTitle: {
    path: '/w/*',
  },
  agreement: {
    path: '/info/agreement',
  },
  contacts: {
    path: '/info/contacts',
  },
  copyright: {
    path: '/info/copyright',
  },
  privatePolicy: {
    path: '/info/policy',
  },
  user: {
    path: '/u/*',
  },
  userList: {
    path: '/u/*/list/*',
  },
  dubber: {
    path: '/dub/*',
  },
  polling: {
    path: '/polling',
  },
  rickroll: {
    path: '/rickroll',
    status: 'indev'
  },
  patcher: {
    path: '/patcher'
  },
  patchTitle: {
    path: '/patcher/*'
  }
}