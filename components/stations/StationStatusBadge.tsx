const map: Record<string, { text: string; bg: string }> = {
  free: { text: "FREE", bg: "#12301f" },
  busy: { text: "BUSY", bg: "#2c1a1a" },
  reserved: { text: "RESERVED", bg: "#2b2a14" },
};

export default function StationStatusBadge({ status }: { status: string }){
  const v = map[status] ?? { text: status.toUpperCase(), bg: "#1c1c28" };
  return (
    <span style={{padding:"6px 10px", borderRadius:999, fontSize:12, border:"1px solid #2a2a33", background:v.bg}}>
      {v.text}
    </span>
  )
}
