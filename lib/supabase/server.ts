import { createClient } from "@supabase/supabase-js";

function must(v: string | undefined, name: string) {
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

// Server-side client (uses SUPABASE_* by default)
export function supabaseServer() {
  const url = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  return createClient(must(url, "SUPABASE_URL"), must(key, "SUPABASE_ANON_KEY"), {
    auth: { persistSession: false }
  });
}
