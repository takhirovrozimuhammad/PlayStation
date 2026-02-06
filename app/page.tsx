import TopBar from "../components/TopBar";
import InfoZoneCard from "../components/InfoZoneCard";
import { supabaseServer } from "../lib/supabase/server";

export default async function InfoPage() {
  const supabase = supabaseServer();

  // zones
  const { data: zones, error: zErr } = await supabase
    .from("zones")
    .select("id,name,description")
    .order("created_at", { ascending: true });

  if (zErr) {
    return (
      <main style={{ padding: 18, maxWidth: 1320, margin: "0 auto" }}>
        <TopBar />
        <div className="glass" style={{ marginTop: 14, padding: 16 }}>
          <div style={{ fontWeight: 950, marginBottom: 8 }}>Supabase error</div>
          <div className="muted">{zErr.message}</div>
        </div>
      </main>
    );
  }

  // stations (all, then group by zone_id)
  const { data: stations, error: sErr } = await supabase
    .from("stations")
    .select("id,zone_id,code,type,status,base_hour_price")
    .order("code", { ascending: true });

  if (sErr) {
    return (
      <main style={{ padding: 18, maxWidth: 1320, margin: "0 auto" }}>
        <TopBar />
        <div className="glass" style={{ marginTop: 14, padding: 16 }}>
          <div style={{ fontWeight: 950, marginBottom: 8 }}>Supabase error</div>
          <div className="muted">{sErr.message}</div>
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
      <TopBar rightSlot={<span className="pill" style={{ padding: "10px 14px", fontWeight: 950 }}>Public Info</span>} />

      <div className="glass" style={{ marginTop: 14, padding: 14 }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
          <div className="pill" style={{ padding: "10px 14px", fontWeight: 950, display: "flex", gap: 10, alignItems: "center" }}>
            🎮 Rooms (PS + PC)
          </div>
          <div className="pill" style={{ padding: "10px 14px", fontWeight: 950 }}>
            Real-time status: (keyin qo'shamiz)
          </div>
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
