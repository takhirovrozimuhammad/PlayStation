import { NextResponse } from "next/server";

const COOKIE_NAME = "ps_auth";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const login = String(body?.login ?? "").trim();
  const password = String(body?.password ?? "").trim();

  if (login === "883393339" && password === "hacker") {
    const res = NextResponse.json({ ok: true });

    res.cookies.set(COOKIE_NAME, "1", {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return res;
  }

  return NextResponse.json(
    { ok: false, error: "Wrong login or password" },
    { status: 401 }
  );
}
