import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

// Admin emails
const ADMIN_EMAILS = [
  'inzamulhaque1002@gmail.com',
];

export async function middleware(request) {
  const pathname = request.nextUrl.pathname;

  // Skip login page and auth API
  if (pathname === '/admin/login' || pathname.startsWith('/api/auth')) {
    return NextResponse.next();
  }

  // Protect /admin routes
  if (pathname === '/admin' || pathname.startsWith('/admin/')) {
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    });

    // Not logged in
    if (!token) {
      const loginUrl = new URL('/admin/login', request.url);
      return NextResponse.redirect(loginUrl);
    }

    // Check if admin
    const isAdmin = ADMIN_EMAILS.includes(token.email?.toLowerCase());

    if (!isAdmin) {
      // Redirect to login with pending status shown
      const loginUrl = new URL('/admin/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin', '/admin/:path*'],
};
