import { NextPage } from "next"
import React from "react"
import { TUserRoles } from './interfaces/ITokenData'
import { config, devMode } from "./config"

export type TRouteStatus = 'clear' | 'indev'

export interface IRoute {
  /** Route path */
  path: string

  /** Define if route static (/hello) or dynamic (/hello/[name]) */
  dynamic?: boolean

  /** Page status 
   * @default clear
  */
  status?: TRouteStatus
}

type TRoute = 'home' | 'watch_title' | 'info_agreement' | 'info_contacts' | 'info_copyright' | 'info_policy' | 'user_profile' | 'user_list' | 'dubber_profile' | 'polling' | 'rickroll' | 'title_patcher'

export const routes: { [key in TRoute]: IRoute } = {
  home: {
    path: '/'
  },
  info_agreement: {
    path: '/info/agreement'
  },
  info_contacts: {
    path: '/info/contacts'
  },
  info_copyright: {
    path: '/info/copyright'
  },
  info_policy: {
    path: '/info/policy'
  },
  dubber_profile: {
    path: '/dub',
    dynamic: true
  },
  polling: {
    path: '/polling'
  },
  rickroll: {
    path: '/rickroll',
    status: 'indev'
  },
  title_patcher: {
    path: '/patcher',
    dynamic: true
  },
  user_list: {
    path: '/u/*/list/*',
    dynamic: true
  },
  user_profile: {
    path: '/u',
    dynamic: true
  },
  watch_title: {
    path: '/w',
    dynamic: true
  }
}