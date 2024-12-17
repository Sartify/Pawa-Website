import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const isAuthenticated = !!token;

  // Protected routes
  const protectedPaths = ['/dashboard', '/admin'];

  const pathIsProtected = protectedPaths.some((path) =>
    req.nextUrl.pathname.startsWith(path)
  );

  if (pathIsProtected && !isAuthenticated) {
    const signInUrl = new URL('/auth', req.url);
    signInUrl.searchParams.set('callbackUrl', req.nextUrl.pathname); // Redirect back after sign-in
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*'], // Apply middleware to these routes
};
