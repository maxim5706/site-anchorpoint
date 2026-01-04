import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const pathname = request.nextUrl.pathname;

  // If on the live/root domain (not dev subdomain) and not already on coming-soon
  const isLiveDomain = 
    hostname.includes('anchorpoint-accounting.com') && 
    !hostname.includes('dev.');

  // Redirect live domain to coming soon (except the coming-soon page itself)
  if (isLiveDomain && pathname !== '/coming-soon') {
    return NextResponse.redirect(new URL('/coming-soon', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all paths except static files and api routes
    '/((?!_next/static|_next/image|favicon.ico|brand|api).*)',
  ],
};
