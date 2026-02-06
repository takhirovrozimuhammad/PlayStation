import { redirect } from "next/navigation";
import Link from "next/link";
import TopBar from "../../components/TopBar";
import { isAuthed } from "../../lib/auth";
import { supabaseServer } from "../../lib/supabase/server";
import DashboardClient from "../../components/dashboard/DashboardClient";
import ThemeToggle from "../../components/ui/ThemeToggle";


export default async function DashboardPage() {
  if (!isAuthed()) redirect("/login");

  const supabase = supabaseServer();

  const { data: zones, error: zErr } = await supabase
    .from("zones")
    .select("id,name,description")
    .order("created_at", { ascending: true });

  const { data: stations, error: sErr } = await supabase
    .from("stations")
    .select("id,zone_id,code,type,status,base_hour_price")
    .order("code", { ascending: true });

  if (zErr || sErr) {
    return (
      <main style={{ padding: 18, maxWidth: 1320, margin: "0 auto" }}>
        <TopBar
          rightSlot={
            <>
              <span className="pill" style={{ padding: "10px 14px", fontWeight: 950 }}>
                Dashboard
              </span>
              <ThemeToggle />
              <LogoutButton />
            </>
          }
        />
        <div className="glass" style={{ marginTop: 14, padding: 16 }}>
          <div style={{ fontWeight: 950 }}>Supabase error</div>
          <div className="muted" style={{ marginTop: 6 }}>
            {zErr?.message ?? sErr?.message}
          </div>
        </div>
      </main>
    );
  }

  return (
    <main style={{ padding: 18, maxWidth: 1320, margin: "0 auto" }}>
      <TopBar
        rightSlot={
          <>
            <span className="pill" style={{ padding: "10px 14px", fontWeight: 950 }}>
              Admin
            </span>
            <span className="pill" style={{ padding: "10px 14px", fontWeight: 950 }}>
              🪙 152,000
            </span>
            <Link className="btn" href="/">
              Public Info
            </Link>
            <ThemeToggle />
            <LogoutButton />
          </>
        }
      />

      <DashboardClient
        zones={(zones ?? []) as any}
        stations={(stations ?? []) as any}
      />
    </main>
  );
}

function LogoutButton() {
  return (
    <form action="/api/logout" method="post">
      <button className="btn" type="submit">
        Logout
      </button>
    </form>
  );
}
