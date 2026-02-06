export default function RightPanel({
  room,
  onQuickAction,
}:{
  room: {
    title: string;
    type: "PS" | "PC";
    status: "FULL" | "AVAILABLE" | "BUSY";
    metaLeft: string;
    metaRight?: string;
    deviceLabel: string;
    devicePrice: string;
    footerPrice: string;
  };
  onQuickAction: () => void;
}){
  return (
    <div className="glass" style={{ padding: 16, minHeight: 320 }}>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", gap:10, flexWrap:"wrap" }}>
        <div style={{ fontWeight: 950, opacity: .9 }}>Details</div>
        <button className="btn" onClick={onQuickAction}>＋ Quick Booking</button>
      </div>

      <div style={{marginTop:12, display:"grid", gap:10}}>
        <div className="pill" style={{padding:"12px 14px"}}>
          <div style={{fontWeight:950, fontSize:16}}>{room.title}</div>
          <div className="muted" style={{marginTop:4, fontWeight:850}}>
            Type: {room.type} · Status: {room.status}
          </div>
        </div>

        <div className="glass" style={{padding:14}}>
          <div style={{fontWeight:950}}>Session</div>
          <div className="muted" style={{marginTop:6}}>
            {room.metaLeft}{room.metaRight ? ` · ${room.metaRight}` : ""}
          </div>
          <div style={{marginTop:12, display:"grid", gap:8}}>
            <div className="pill" style={{padding:"10px 12px", display:"flex", justifyContent:"space-between"}}>
              <span style={{fontWeight:900}}>{room.deviceLabel}</span>
              <span className="muted" style={{fontWeight:850}}>{room.devicePrice}</span>
            </div>
            <div className="pill" style={{padding:"10px 12px", display:"flex", justifyContent:"space-between"}}>
              <span style={{fontWeight:900}}>Total</span>
              <span style={{fontWeight:950}}>{room.footerPrice}</span>
            </div>
          </div>
        </div>

        <div className="glass" style={{padding:14}}>
          <div style={{fontWeight:950}}>Actions (demo)</div>
          <div style={{display:"flex", gap:10, flexWrap:"wrap", marginTop:10}}>
            <button className="btn">Start</button>
            <button className="btn">Stop</button>
            <button className="btn">Add 30m</button>
            <button className="btn">Finish</button>
          </div>
          <div className="muted" style={{marginTop:10, fontSize:13}}>
            Keyin bu actionlar Supabase sessions bilan ishlaydi.
          </div>
        </div>
      </div>
    </div>
  )
}
