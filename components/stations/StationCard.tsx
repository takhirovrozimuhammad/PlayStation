import Link from "next/link";
import StationStatusBadge from "./StationStatusBadge";

export default function StationCard({ station }: { station: { id: string; type: string; status: string } }){
  return (
    <Link href={`/station/${station.id}`} style={{padding:14,border:"1px solid #2a2a33",borderRadius:16,background:"#12121a",display:"grid",gap:8}}>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <div style={{fontWeight:800}}>{station.id}</div>
        <StationStatusBadge status={station.status} />
      </div>
      <div style={{opacity:.75, fontSize:12}}>Type: {station.type}</div>
      <div style={{opacity:.75, fontSize:12}}>Time left: --:-- (realtime later)</div>
    </Link>
  )
}
