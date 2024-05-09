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
  oopsIndev: IRoute,
  oopsWorks: IRoute,
  oops404: IRoute,
  oopsRestricted: IRoute,
  watch: IRoute,
  watchTitle: IRoute,
  contacts: IRoute,
  agreement: IRoute,
  privatePolicy: IRoute,
  copyright: IRoute,
  user: IRoute,
  userList: IRoute,
  dubber: IRoute,
  lib: IRoute,
  polling: IRoute,
  rickroll: IRoute,
}

export const routes: IRoutes = {
  home: {
    path: '/'
  },
  oopsIndev: {
    path: '/oops/indev',
  },
  oopsWorks: {
    path: '/oops/works',
  },
  oops404: {
    path: '/oops/404',
  },
  oopsRestricted: {
    path: '/oops/restricted',
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
  lib: {
    path: '/lib',
  },
  polling: {
    path: '/polling',
  },
  rickroll: {
    path: '/rickroll',
    status: 'indev'
  },
}