'use server'

import axios, { AxiosError } from 'axios';
import { cookies } from 'next/headers';
import type { NextRequest } from 'next/server'
import { NextResponse as res } from 'next/server'

import { signCSRF } from './components/http';
import { getRoute } from './components/ServerComponents';
import { config as cfg } from './config'
import { TRoleCapability } from './interfaces/IRoles';
import { IUser } from './interfaces/IUser';



export async function middleware(req: NextRequest) {
  // Set current URL header
  const headers = new Headers(req.headers);
  headers.set('x-url', req.url)

  const route = getRoute(req.url);
  let user: { user: IUser, parsedRoles: TRoleCapability[] } | undefined;

  // Check user capabilities
  if (route?.capabilitiesRequired?.length) {
    // Set defaults
    route.capabilitiesRequiredMode = route.capabilitiesRequiredMode ?? 'AND';

    let pass = false;

    const sessionToken = cookies().get(cfg.vars.SessionCookie)?.value;
    if (!sessionToken) return res.redirect(cfg.URL.baseURL);

    try {
      const { data } = await axios.get<{ user: IUser, parsedRoles: TRoleCapability[] }>(`${cfg.URL.apiHTTP}/user/*`, {
        headers: {
          Cookie: cookies().toString(),
          'X-CSRF-Token': signCSRF(),
        },
        params: {
          detailed: true
        }
      })

      user = {
        user: data.user,
        parsedRoles: data.parsedRoles
      }
    } catch (e) {
      if (e instanceof AxiosError) {
        console.error(`Middleware access check error (HTTP)`, e.response?.data.message || e.response?.data.msg || e)
      } else {
        console.error(`Middleware access check error (Unknown)`, e)
      }

      // Reject if access check failed
      return res.redirect(cfg.URL.baseURL);
    }

    // Parse roles
    /** Defines if at least one capability is not present */
    let passFailed = false;

    route.capabilitiesRequired.forEach(cap => {
      if (pass) return;

      if (user?.parsedRoles.includes(cap) && !passFailed) {
        // Set pass if user has all required capabilities
        pass = true;
      } else {
        // Reject if at least one capability is not present
        if (route.capabilitiesRequiredMode === 'AND') passFailed = true;
        pass = false
      }
    })

    // Pass if user has root capability
    if (user.parsedRoles.includes('root')) pass = true;

    // Reject if access check failed
    if (!pass) return res.redirect(cfg.URL.baseURL);
  }

  return res.next({
    headers
  });
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}