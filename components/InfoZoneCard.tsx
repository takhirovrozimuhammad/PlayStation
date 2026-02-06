import StatusBadge from "./StatusBadge";

type Station = {
  id: string;
  code: string;
  type: "PS" | "PC";
  status: "free" | "busy" | "reserved";
  base_hour_price: number;
};

export default function InfoZoneCard({
  zoneName,
  zoneDesc,
  stations,
}: {
  zoneName: string;
  zoneDesc?: string | null;
  stations: Station[];
}) {
  const total = stations.length;
  const busy = stations.filter(s => s.status === "busy").length;
  const free = stations.filter(s => s.status === "free").length;

  const psCount = stations.filter(s => s.type === "PS").length;
  const pcCount = stations.filter(s => s.type === "PC").length;

  return (
    <div className="glass" style={{ padding: 16, display: "grid", gap: 10 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
        <div>
          <div style={{ fontWeight: 950, fontSize: 16 }}>{zoneName}</div>
          <div className="muted" style={{ fontSize: 13 }}>{zoneDesc ?? "—"}</div>
        </div>
        <div className="pill" style={{ padding: "8px 12px", fontWeight: 950 }}>
          {busy} / {total}
        </div>
      </div>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <span className="pill" style={{ padding: "8px 10px", fontWeight: 900 }}>🎮 PS: {psCount}</span>
        <span className="pill" style={{ padding: "8px 10px", fontWeight: 900 }}>🖥️ PC: {pcCount}</span>
        <span className="pill" style={{ padding: "8px 10px", fontWeight: 900 }}>✅ Free: {free}</span>
      </div>

      <div style={{ display: "grid", gap: 8 }}>
        {stations.map((s) => (
          <div key={s.id} className="pill" style={{ padding: "10px 12px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontWeight: 950 }}>{s.code}</span>
              <span className="muted" style={{ fontWeight: 850 }}>{s.type}</span>
              <StatusBadge status={s.status} />
            </div>
            <div style={{ fontWeight: 950 }}>
              {formatMoney(s.base_hour_price)} / soat
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function formatMoney(n: number) {
  try {
    return new Intl.NumberFormat("uz-UZ").format(n);
  } catch {
    return String(n);
  }
}
