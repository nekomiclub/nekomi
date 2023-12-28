import { NextResponse as res } from 'next/server'
import type { NextRequest } from 'next/server'
import { prodMode, devMode, HIDE_IN_PROD } from './config'
import { routes } from './routes'


export async function middleware(req: NextRequest) {
  const url = req.nextUrl.pathname;

  return res.next();
}

export const config = {
  matcher: '/:path*',
}