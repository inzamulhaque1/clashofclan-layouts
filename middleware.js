import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

// Admin emails
const ADMIN_EMAILS = [
  'inzamulhaque1002@gmail.com',
];

// Primary domain (Render)
const PRIMARY_DOMAIN = 'clashofclan-layouts.onrender.com';

export async function middleware(request) {
  const hostname = request.headers.get('host');
  const pathname = request.nextUrl.pathname;

  // Redirect Vercel to Render (301 permanent redirect for SEO)
  if (hostname?.includes('vercel.app')) {
    const newUrl = `https://${PRIMARY_DOMAIN}${pathname}${request.nextUrl.search}`;
    return NextResponse.redirect(newUrl, 301);
  }

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
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc.)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
  ],
};
