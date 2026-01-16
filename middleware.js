import { NextResponse } from 'next/server';

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  // Skip login page
  if (pathname === '/admin/login') {
    return NextResponse.next();
  }

  // Protect /admin routes (including /admin itself)
  if (pathname === '/admin' || pathname.startsWith('/admin/')) {
    const authCookie = request.cookies.get('admin_auth');
    const adminSecret = process.env.ADMIN_SECRET;

    // Check if admin secret is configured
    if (!adminSecret) {
      console.error('ADMIN_SECRET not configured');
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    const isAuthenticated = authCookie?.value === adminSecret;

    // If not authenticated, redirect to login
    if (!isAuthenticated) {
      const loginUrl = new URL('/admin/login', request.url);
      loginUrl.searchParams.set('from', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin', '/admin/:path*'],
};
