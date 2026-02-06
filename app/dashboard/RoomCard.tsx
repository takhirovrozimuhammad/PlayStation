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
  const border = active
    ? "2px solid var(--accent)"
    : "1px solid var(--glass-bd)";

  return (
    <button
      onClick={onClick}
      className="glass"
      style={{
        padding: 16,
        display: "grid",
        gap: 10,
        minHeight: 150,
        textAlign: "left",
        cursor: "pointer",
        border,
        color: "inherit",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "center" }}>
        <div style={{ fontWeight: 950, fontSize: 16 }}>{title}</div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <span className="muted" style={{ fontWeight: 900 }}>{capacityText}</span>
          <StatusBadge status={badge} />
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", gap: 10, fontSize: 13, opacity: 0.86 }}>
        <div>{metaLeft}</div>
        <div>{metaRight}</div>
      </div>

      <div className="pill" style={{ padding: 10, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <span style={{ fontSize: 16 }}>🎮</span>
          <div style={{ fontWeight: 900 }}>{deviceLabel}</div>
        </div>
        <div className="muted" style={{ fontWeight: 850 }}>{devicePrice}</div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontWeight: 950, fontSize: 18 }}>{footerPrice}</div>
        <div className="pill" style={{ width: 42, height: 42, borderRadius: 14, display: "grid", placeItems: "center", fontWeight: 950 }}>
          ＋
        </div>
      </div>
    </button>
  );
}

function StatusBadge({ status }: { status: "FULL" | "AVAILABLE" }) {
  const style =
    status === "FULL"
      ? { background: "rgba(255,99,99,.22)", border: "1px solid rgba(255,99,99,.35)", color: "#b00020" }
      : { background: "rgba(70,200,120,.22)", border: "1px solid rgba(70,200,120,.35)", color: "#0b6b3a" };

  return (
    <span className="pill" style={{ ...style, padding: "6px 12px", fontSize: 12, fontWeight: 950 }}>
      {status}
    </span>
  );
}
