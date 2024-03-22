import { NextResponse as res } from 'next/server'
import type { NextRequest, NextResponse } from 'next/server'
import { prodMode, devMode, HIDE_IN_PROD } from './config'
import { routes } from './routes'
import { getRoute } from './components/Providers';
import { decode } from 'jsonwebtoken';
import { ITokenData, TUserRoles } from './interfaces/ITokenData';
import { config as cfg } from './config'

function redirToAuth() {
  return res.redirect(`${cfg.services.fkAccount}/continue?ref=${cfg.services.siteURL}`)
}

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.pathname;
  const { origin } = req.nextUrl

  //* Check access
  const token = req.cookies.get('oldRefreshToken')?.value;

  if (!url.includes('_next') && !url.includes('.')) {
    const route = getRoute(url);

    //* Pass if public
    if (route?.public) {
      return;
    }

    //* Redirect if token is not provided
    if (!token) {
      return res.redirect(`${cfg.services.fkAccount}/continue?ref=${cfg.services.siteURL}`)
    }

    const payload = decode(token) as ITokenData

    //* Redirect if token expired
    if (payload.exp! * 1000 <= + new Date()) {
      return res.redirect(`${cfg.services.fkAccount}/continue?ref=${cfg.services.siteURL}`)
    }

    //* Pass if required roles are not provided
    if (!route?.access?.length) return

    //* Pass if user is root
    if (payload.roles.some(el => el === 'root')) return

    let grantAccess = false;

    payload.roles.forEach(role => {
      if (route.access?.some(el => el === role)) grantAccess = true;
    })

    if (!grantAccess) return res.redirect(`${cfg.services.fkAccount}/continue?ref=${cfg.services.siteURL}`);
  }

  return res.next();
}

export const config = {
  matcher: '/:path*',
}