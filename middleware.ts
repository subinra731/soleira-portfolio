import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const language = pathname === "/en" || pathname.startsWith("/en/")
    ? "en"
    : pathname === "/kr" || pathname.startsWith("/kr/")
      ? "ko"
      : "fr";

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-soleira-language", language);
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ["/", "/fr", "/en/:path*", "/kr/:path*", "/works/:path*", "/about"],
};
