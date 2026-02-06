export default function BoardHeader({
  title,
  onAddRoom
}:{
  title: string;
  onAddRoom: () => void;
}){
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
      <div className="pill" style={{ padding: "10px 14px", fontWeight: 950, display: "flex", gap: 10, alignItems: "center" }}>
        🎮 {title}
      </div>
      <button className="btn" onClick={onAddRoom}>＋ Add Room</button>
    </div>
  )
}
