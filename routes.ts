import { NextPage } from "next"
import React from "react"

export type TUserRoles = 'root' | 'admin' | 'moderator' | 'dubber' | 'subber' | 'subscriber' | 'editor' | 'user'

interface IRoute {
  public?: boolean,
  access?: TUserRoles[],
  path: string,
}

interface IRoutes {
  home: IRoute,
  oopsIndev: IRoute,
  oopsWorks: IRoute,
  oops404: IRoute,
  oopsRestricted: IRoute,
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
}