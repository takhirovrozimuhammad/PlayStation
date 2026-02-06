import { NextResponse } from "next/server";
import { clearAuthedCookie } from "../../../lib/auth";

export async function POST() {
  clearAuthedCookie();
  return NextResponse.json({ ok: true });
}
