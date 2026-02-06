import { redirect } from "next/navigation";
import Link from "next/link";
import TopBar from "../../components/TopBar";
import InfoZoneCard from "../../components/InfoZoneCard";
import { isAuthed } from "../../lib/auth";
import { supabaseServer } from "../../lib/supabase/server";

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
        <TopBar rightSlot={<span className="pill" style={{ padding: "10px 14px", fontWeight: 950 }}>Dashboard</span>} />
        <div className="glass" style={{ marginTop: 14, padding: 16 }}>
          <div style={{ fontWeight: 950 }}>Supabase error</div>
          <div className="muted" style={{ marginTop: 6 }}>
            {zErr?.message ?? sErr?.message}
          </div>
        </div>
      </main>
    );
  }

  const byZone = new Map<string, any[]>();
  for (const s of stations ?? []) {
    const key = (s as any).zone_id as string;
    byZone.set(key, [...(byZone.get(key) ?? []), s]);
  }

  return (
    <main style={{ padding: 18, maxWidth: 1320, margin: "0 auto" }}>
      <TopBar
        rightSlot={
          <>
            <span className="pill" style={{ padding: "10px 14px", fontWeight: 950 }}>Dashboard</span>
            <LogoutButton />
          </>
        }
      />

      <div className="glass" style={{ marginTop: 14, padding: 14 }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
          <div className="pill" style={{ padding: "10px 14px", fontWeight: 950 }}>Admin panel</div>
          <Link className="btn" href="/">Public Info</Link>
        </div>

        <div className="muted" style={{ marginTop: 10 }}>
          Hozircha: ko‘rish (read-only). Keyin: booking start/stop, price edit, reservation.
        </div>

        <div className="grid3" style={{ marginTop: 14 }}>
          {(zones ?? []).map((z: any) => (
            <InfoZoneCard
              key={z.id}
              zoneName={z.name}
              zoneDesc={z.description}
              stations={(byZone.get(z.id) ?? []) as any}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

function LogoutButton() {
  return (
    <form action="/api/logout" method="post">
      <button className="btn" type="submit">Logout</button>
    </form>
  );
}
