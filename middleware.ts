import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// ✅ Valid Next.js middleware export (currently no-op)
export function middleware(_req: NextRequest) {
  return NextResponse.next();
}

// You can later restrict to staff-only routes:
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
