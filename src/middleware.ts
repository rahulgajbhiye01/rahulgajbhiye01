import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get("session")?.value;
  // Secure both /admin and /api/admin routes
  if (
    !currentUser &&
    (request.nextUrl.pathname.startsWith("/admin") ||
      request.nextUrl.pathname.startsWith("/api/admin"))
  ) {
    // Redirect to login for unauthorized access
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next(); // Proceed if the session is valid
}

// Apply the middleware to both /admin and /api/admin routes
export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
