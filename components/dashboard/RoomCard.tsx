type RoomStatus = "FULL" | "AVAILABLE" | "BUSY";
type RoomType = "PS" | "PC";

type Room = {
  id: string;
  title: string;
  type: RoomType;
  status: RoomStatus;
  capacityText?: string;
  metaLeft: string;
  metaRight?: string;
  deviceLabel: string;
  devicePrice: string;
  footerPrice: string;
};

export default function RoomCard({
  room,
  active,
  onClick
}:{
  room: Room;
  active?: boolean;
  onClick: () => void;
}){
  const badge = room.status === "BUSY" ? null : room.status;
  const border = active ? "2px solid rgba(90,110,255,.55)" : "1px solid rgba(255,255,255,0.65)";

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
        cursor:"pointer",
        border
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
        <div style={{ fontWeight: 950, fontSize: 16 }}>{room.title}</div>
        <div style={{display:"flex", alignItems:"center", gap:10}}>
          {room.capacityText && <span className="muted" style={{fontWeight:900}}>{room.capacityText}</span>}
          {badge && <StatusBadge status={badge as any} />}
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", gap: 10, fontSize: 13, opacity: 0.80 }}>
        <div>{room.metaLeft}</div>
        <div>{room.metaRight}</div>
      </div>

      <div className="pill" style={{ padding: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <span style={{ fontSize: 16 }}>{room.type === "PC" ? "🖥️" : "🎮"}</span>
          <div style={{ fontWeight: 900 }}>{room.deviceLabel}</div>
        </div>
        <div className="muted" style={{ fontWeight: 850 }}>{room.devicePrice}</div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 2 }}>
        <div style={{ fontWeight: 950, fontSize: 18 }}>{room.footerPrice}</div>
        <div className="pill" style={{ width: 42, height: 42, borderRadius: 14, display:"grid", placeItems:"center", fontWeight: 950 }}>＋</div>
      </div>
    </button>
  )
}

function StatusBadge({ status }:{ status: "FULL" | "AVAILABLE" }){
  const style =
    status === "FULL"
      ? { background: "rgba(255,99,99,.22)", border: "1px solid rgba(255,99,99,.35)", color: "#b00020" }
      : { background: "rgba(70,200,120,.22)", border: "1px solid rgba(70,200,120,.35)", color: "#0b6b3a" };

  return (
    <span
      className="pill"
      style={{
        ...style,
        padding: "6px 12px",
        fontSize: 12,
        fontWeight: 950,
      }}
    >
      {status}
    </span>
  )
}
