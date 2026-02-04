export default function PaymentSummary(){
  return (
    <div style={{padding:16,border:"1px solid #2a2a33",borderRadius:16,background:"#12121a"}}>
      <div style={{fontWeight:800, marginBottom:8}}>Payment</div>
      <div style={{display:"grid", gap:6, opacity:.85}}>
        <div>Rate: -- so'm / hour</div>
        <div>Used: -- minutes</div>
        <div style={{fontWeight:900}}>Total: -- so'm</div>
      </div>
    </div>
  )
}
