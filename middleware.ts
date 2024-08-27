import { cookies } from 'next/headers';
import { NextResponse as res } from 'next/server'
import type { NextRequest, NextResponse } from 'next/server'
import { config as cfg } from './config'
import { getRoute } from './components/ServerComponents';



export async function middleware(req: NextRequest) {
  // Set current URL header
  const headers = new Headers(req.headers);
  headers.set('x-url', req.url)

  console.log(getRoute(req.url))

  return res.next({
    headers
  });
}

export const config = {
  matcher: '/:path*',
}