import { NextPage } from "next"
import React from "react"
import { TUserRoles } from './interfaces/ITokenData'

export interface IRoute {
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
  authSignin: IRoute,
  authSignup: IRoute,
  watch: IRoute,
  watchTitle: IRoute,
  sth: IRoute
  sth2: IRoute
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
  authSignin: {
    path: '/auth',
    access: ['root']
  },
  authSignup: {
    path: '/auth/signup',
    access: []
  },
  watch: {
    path: '/w',
    public: true,
  },
  watchTitle: {
    path: '/w/*',
    public: true,
  },
  sth: {
    path: '/w/*/*/bleb',
    public: true,
  },
  sth2: {
    path: '/w/*/*/bleb/*',
    public: true,
  },
}