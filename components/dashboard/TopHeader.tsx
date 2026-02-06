export default function TopHeader({
  brand,
  subbrand,
  role,
  balance,
  onAddBooking,
}:{
  brand: string;
  subbrand: string;
  role: string;
  balance: string;
  onAddBooking: () => void;
}){
  return (
    <div className="glass" style={{ padding: 14, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div className="pill" style={{ width: 40, height: 40, display: "grid", placeItems: "center", fontWeight: 950 }}>≡</div>
        <div style={{ fontWeight: 950, letterSpacing: 0.4 }}>
          {brand} <span className="muted" style={{ fontWeight: 850 }}>{subbrand}</span>
        </div>
      </div>

      <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap", justifyContent: "flex-end" }}>
        <div className="pill" style={{ padding: "10px 14px", fontWeight: 850 }}>☁️</div>
        <div className="pill" style={{ padding: "10px 14px", fontWeight: 950 }}>{role}</div>
        <div className="pill" style={{ padding: "10px 14px", fontWeight: 950 }}>🪙 {balance}</div>
        <button className="btn" onClick={onAddBooking}>＋ Add Booking</button>
      </div>
    </div>
  )
}
