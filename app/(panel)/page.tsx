import Link from "next/link";

export default function Home(){
  return (
    <main style={{padding:20}}>
      <h1 style={{marginTop:0}}>Reception</h1>
      <p style={{opacity:.8}}>PS + PC in one board</p>

      <div style={{display:"flex", gap:12, flexWrap:"wrap"}}>
        <Link href="/zones" style={{padding:12,border:"1px solid #2a2a33",borderRadius:14,background:"#12121a"}}>Zones</Link>
        <Link href="/stations" style={{padding:12,border:"1px solid #2a2a33",borderRadius:14,background:"#12121a"}}>Stations</Link>
        <Link href="/sessions" style={{padding:12,border:"1px solid #2a2a33",borderRadius:14,background:"#12121a"}}>Sessions</Link>
        <Link href="/reservations" style={{padding:12,border:"1px solid #2a2a33",borderRadius:14,background:"#12121a"}}>Reservations</Link>
        <Link href="/pricing" style={{padding:12,border:"1px solid #2a2a33",borderRadius:14,background:"#12121a"}}>Pricing</Link>
      </div>
    </main>
  )
}
