import Link from "next/link";

export default function ZoneCard({ zone }: { zone: { id: string; name: string; description: string | null } }){
  return (
    <Link href={`/zone/${zone.id}`} style={{padding:14,border:"1px solid #2a2a33",borderRadius:16,background:"#12121a",display:"grid",gap:6}}>
      <div style={{fontWeight:900}}>{zone.name}</div>
      <div style={{opacity:.7, fontSize:12}}>{zone.description ?? "—"}</div>
    </Link>
  )
}
