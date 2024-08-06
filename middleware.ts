import { cookies } from 'next/headers';
import { NextResponse as res } from 'next/server'
import type { NextRequest, NextResponse } from 'next/server'
import { config as cfg } from './config'



export async function middleware(req: NextRequest) {
  // Set current URL header
  const headers = new Headers(req.headers);
  headers.set('x-url', req.url)

  console.log(`MIDDLEWARE`)
  console.log(req.url)
  console.log(req.nextUrl)

  return res.next({
    headers
  });
}

export const config = {
  matcher: '/:path*',
}