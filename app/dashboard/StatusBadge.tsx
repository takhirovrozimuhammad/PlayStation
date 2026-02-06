export default function StatusBadge({ status }: { status: "free" | "busy" | "reserved" }) {
  const map = {
    free: { bg: "rgba(70,200,120,.22)", bd: "rgba(70,200,120,.35)", color: "#0b6b3a", text: "AVAILABLE" },
    busy: { bg: "rgba(255,99,99,.22)", bd: "rgba(255,99,99,.35)", color: "#b00020", text: "BUSY" },
    reserved: { bg: "rgba(255,190,60,.22)", bd: "rgba(255,190,60,.35)", color: "#8a5a00", text: "RESERVED" },
  }[status];

  return (
    <span
      className="pill"
      style={{
        padding: "6px 12px",
        fontSize: 12,
        fontWeight: 950,
        background: map.bg,
        border: `1px solid ${map.bd}`,
        color: map.color,
      }}
    >
      {map.text}
    </span>
  );
}
