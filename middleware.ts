import { NextResponse as res } from 'next/server'
import type { NextRequest, NextResponse } from 'next/server'



export async function middleware(req: NextRequest) {
  return res.next();
}

export const config = {
  matcher: '/:path*',
}