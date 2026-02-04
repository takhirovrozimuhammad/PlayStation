export default function SessionTimer(){
  return (
    <div style={{display:"grid", gap:6}}>
      <div style={{opacity:.7, fontSize:12}}>Timer</div>
      <div style={{fontSize:44, fontWeight:900, letterSpacing:1}}>00:45:12</div>
      <div style={{opacity:.7, fontSize:12}}>Ends at: --:--</div>
    </div>
  )
}
