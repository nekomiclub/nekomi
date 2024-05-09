import { NextPage } from "next"
import React from "react"
import { TUserRoles } from './interfaces/ITokenData'
import { config, devMode } from "./config"

export type TRouteStatus = 'indev' | 'works' | 'clear'

export interface IRoute {
  public?: boolean,
  access?: TUserRoles[],
  path: string,
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
  aboutFK: IRoute,
  joinFK: IRoute,
  contacts: IRoute,
  agreement: IRoute,
  privatePolicy: IRoute,
  copyright: IRoute,
  support: IRoute,
  partners: IRoute,
  FAQ: IRoute,
  API: IRoute,
  user: IRoute,
  userList: IRoute,
  dubber: IRoute,
  lib: IRoute,
  polling: IRoute,
}

export const routes: IRoutes = {
  home: {
    public: true,
    path: '/',
  },
  oopsIndev: {
    path: '/oops/indev',
    public: true,
  },
  oopsWorks: {
    path: '/oops/works',
    public: true,
  },
  oops404: {
    path: '/oops/404',
    public: true,
  },
  oopsRestricted: {
    path: '/oops/restricted',
    public: true,
  },
  watch: {
    path: '/w',
    public: true,
  },
  watchTitle: {
    path: '/w/*',
    public: true,
  },
  aboutFK: {
    path: '/fk/about',
    public: true,
    status: 'indev'
  },
  agreement: {
    path: '/info/agreement',
    public: true,
  },
  API: {
    path: '/api',
    public: true,
    status: 'indev'
  },
  contacts: {
    path: '/info/contacts',
    public: true,
  },
  copyright: {
    path: '/info/copyright',
    public: true,
  },
  FAQ: {
    path: '/info/faq',
    public: true,
    status: 'indev'
  },
  joinFK: {
    path: '/fk/join',
    public: true,
    status: 'indev'
  },
  partners: {
    path: '/info/partners',
    public: true,
    status: 'indev'
  },
  privatePolicy: {
    path: '/info/policy',
    public: true,
  },
  support: {
    path: '/support',
    status: 'indev',
    access: ['admin']
  },
  user: {
    path: '/u/*',
    public: true,
  },
  userList: {
    path: '/u/*/list/*',
    public: true,
  },
  dubber: {
    path: '/dub/*',
    public: true,
  },
  lib: {
    path: '/lib',
    public: true,
  },
  polling: {
    path: '/polling',
    public: true,
  },
}