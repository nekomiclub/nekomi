'use server'

import type { NextRequest } from 'next/server'
import { NextResponse as res } from 'next/server'




export async function middleware(req: NextRequest) {
  // Set current URL header
  const headers = new Headers(req.headers);
  headers.set('x-url', req.url)

  return res.next({
    headers
  });
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}