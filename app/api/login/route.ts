import { NextResponse } from "next/server";
import { setAuthedCookie } from "../../../lib/auth";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const login = String(body?.login ?? "");
  const password = String(body?.password ?? "");

  // Temporary hardcoded credentials (requested)
  if (login === "883393339" && password === "hacker") {
    setAuthedCookie();
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json({ ok: false, error: "Wrong login or password" }, { status: 401 });
}
