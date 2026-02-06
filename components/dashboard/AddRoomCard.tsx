export default function AddRoomCard({ onClick }:{ onClick: () => void }){
  return (
    <div className="glass" style={{ padding: 16, minHeight: 150, display: "grid", placeItems: "center" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ fontWeight: 950, fontSize: 18, opacity: .85 }}>Add Room</div>
        <button className="btn" onClick={onClick} style={{ width: 46, height: 46, borderRadius: 14, fontSize: 20, fontWeight: 950 }}>
          ＋
        </button>
      </div>
    </div>
  )
}
