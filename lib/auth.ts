import { cookies } from "next/headers";

const COOKIE_NAME = "ps_auth";

export function isAuthed() {
  return cookies().get(COOKIE_NAME)?.value === "1";
}

export function setAuthedCookie() {
  cookies().set(COOKIE_NAME, "1", {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
}

export function clearAuthedCookie() {
  cookies().set(COOKIE_NAME, "0", {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
}
