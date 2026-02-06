export default function RoomCard({
  title,
  badge,
  capacityText,
  metaLeft,
  metaRight,
  deviceLabel,
  devicePrice,
  footerPrice,
  active,
  onClick,
}: {
  title: string;
  badge: "FULL" | "AVAILABLE";
  capacityText: string;
  metaLeft: string;
  metaRight: string;
  deviceLabel: string;
  devicePrice: string;
  footerPrice: string;
  active?: boolean;
  onClick: () => void;
}) {
  const border = active ? "2px solid var(--accent)" : "1px solid rgba(255,255,255,.55)";

  return (
    <button
      onClick={onClick}
      className="glass-premium"
      style={{
        padding: 14,
        minHeight: 180,
        display: "grid",
        gap: 10,
        textAlign: "left",
        cursor: "pointer",
        border,
        color: "inherit",
      }}
    >
      {/* Top row: title + badge */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
        <div style={{ fontWeight: 950, fontSize: 16, letterSpacing: .2 }}>{title}</div>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span className="muted" style={{ fontWeight: 900 }}>{capacityText}</span>

          <span
            className={`pill ${badge === "FULL" ? "badge-full" : "badge-avail"}`}
            style={{ padding: "6px 12px", fontSize: 12, fontWeight: 950 }}
          >
            {badge}
          </span>

          <span className="muted" style={{ fontWeight: 900 }}>•••</span>
        </div>
      </div>

      {/* Middle: icon preview + meta */}
      <div style={{ display: "grid", gridTemplateColumns: "72px 1fr", gap: 12, alignItems: "center" }}>
        <div
          className="card-inner"
          style={{
            width: 72,
            height: 72,
            display: "grid",
            placeItems: "center",
            fontSize: 30,
          }}
        >
          🎮
        </div>

        <div style={{ display: "grid", gap: 6 }}>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <span className="pill" style={{ padding: "6px 10px", fontWeight: 900, fontSize: 12 }}>🎮</span>
            <span className="pill" style={{ padding: "6px 10px", fontWeight: 900, fontSize: 12 }}>👥</span>
            <span className="pill" style={{ padding: "6px 10px", fontWeight: 900, fontSize: 12 }}>▮▮▮</span>
          </div>

          <div className="muted" style={{ display: "flex", justifyContent: "space-between", gap: 10, fontWeight: 850 }}>
            <span>{metaLeft}</span>
            <span>{metaRight}</span>
          </div>
        </div>
      </div>

      {/* Device row */}
      <div
        className="card-inner"
        style={{
          padding: 10,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 18 }}>🎮</span>
          <div style={{ fontWeight: 950 }}>{deviceLabel}</div>
        </div>
        <div className="muted" style={{ fontWeight: 900 }}>{devicePrice}</div>
      </div>

      {/* Bottom price + plus */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontWeight: 950, fontSize: 20 }}>{footerPrice}</div>
        <div className="pill" style={{ width: 44, height: 44, borderRadius: 14, display: "grid", placeItems: "center", fontWeight: 950 }}>
          +
        </div>
      </div>
    </button>
  );
}
