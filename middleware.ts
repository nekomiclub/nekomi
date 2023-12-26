import { NextResponse as res } from 'next/server'
import type { NextRequest } from 'next/server'
import { prodMode, devMode, HIDE_IN_PROD } from './config'
import { routes } from './routes'


export async function middleware(req: NextRequest) {
  const url = req.nextUrl.pathname;

  //* Production redir
  // if (HIDE_IN_PROD && prodMode) {
  //   if (url.includes('/_next/')) {
  //     return res.next();
  //   }

  //   if (url !== routes.oopsIndev.path && !req.nextUrl.search.match(/devView=unniiiverseAccess/gi)) {
  //     return res.redirect(`${req.nextUrl.origin}${routes.oopsIndev.path}?redirected=true`)
  //   }
  // }

  return res.next();
}

export const config = {
  matcher: '/:path*',
}