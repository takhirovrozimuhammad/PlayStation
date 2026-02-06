import StatusBadge from "../StatusBadge";

type Station = {
  id: string;
  code: string;
  type: "PS" | "PC";
  status: "free" | "busy" | "reserved";
  base_hour_price: number;
};

export default function RightPanel({
  title,
  desc,
  stations,
  onAddBooking,
}: {
  title: string;
  desc?: string | null;
  stations: Station[];
  onAddBooking: () => void;
}) {
  return (
    <div className="glass" style={{ padding: 16, minHeight: 320 }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
        <div style={{ fontWeight: 950, opacity: 0.9 }}>Details</div>
        <button className="btn" onClick={onAddBooking}>
          ＋ Add Booking
        </button>
      </div>

      <div style={{ marginTop: 12, display: "grid", gap: 10 }}>
        <div className="pill" style={{ padding: "12px 14px" }}>
          <div style={{ fontWeight: 950, fontSize: 16 }}>{title}</div>
          <div className="muted" style={{ marginTop: 4, fontWeight: 850 }}>
            {desc ?? "—"}
          </div>
        </div>

        <div className="glass" style={{ padding: 14 }}>
          <div style={{ fontWeight: 950 }}>Stations</div>

          <div style={{ marginTop: 10, display: "grid", gap: 8 }}>
            {stations.map((s) => (
              <div
                key={s.id}
                className="pill"
                style={{ padding: "10px 12px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }}
              >
                <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <span style={{ fontWeight: 950 }}>{s.code}</span>
                  <span className="muted" style={{ fontWeight: 850 }}>
                    {s.type}
                  </span>
                  <StatusBadge status={s.status} />
                </div>
                <div style={{ fontWeight: 950 }}>{money(s.base_hour_price)} / soat</div>
              </div>
            ))}
            {!stations.length && <div className="muted">No stations in this room yet.</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

function money(n: number) {
  try {
    return new Intl.NumberFormat("uz-UZ").format(n);
  } catch {
    return String(n);
  }
}
