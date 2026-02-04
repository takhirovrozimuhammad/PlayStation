import SessionTimer from "@/components/sessions/SessionTimer";
import ActionsBar from "@/components/sessions/ActionsBar";
import PaymentSummary from "@/components/sessions/PaymentSummary";

export default function StationDetail({ params }: { params: { stationId: string } }){
  return (
    <main style={{padding:20, display:"grid", gap:14}}>
      <h2 style={{marginTop:0}}>Station: {params.stationId}</h2>
      <div style={{padding:16,border:"1px solid #2a2a33",borderRadius:16,background:"#12121a"}}>
        <SessionTimer />
      </div>
      <ActionsBar />
      <PaymentSummary />
    </main>
  )
}
