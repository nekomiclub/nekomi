import { NextResponse as res } from 'next/server'
import type { NextRequest } from 'next/server'
import { prodMode, devMode } from './config'
import { routes } from './routes'


export async function middleware(req: NextRequest) {
  if (prodMode) {
    if (req.nextUrl.pathname.includes('/_next/')) {
      return res.next();
    }

    if (req.nextUrl.pathname !== routes.oopsIndev.path) {
      return res.redirect(`${req.nextUrl.origin}${routes.oopsIndev.path}?redirected=true`)
    }
  }

  return res.next();
}

export const config = {
  matcher: '/:path*',
}