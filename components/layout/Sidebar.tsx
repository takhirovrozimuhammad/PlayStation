import Link from "next/link";

const Item = ({ href, label }: { href: string; label: string }) => (
  <Link href={href} style={{padding:"10px 12px", borderRadius:12, display:"block", background:"#12121a", border:"1px solid #2a2a33"}}>
    {label}
  </Link>
);

export default function Sidebar(){
  return (
    <aside style={{padding:14, borderRight:"1px solid #1d1d27", background:"#0e0e14"}}>
      <div style={{padding:12, border:"1px solid #2a2a33", borderRadius:16, background:"#12121a"}}>
        <div style={{fontWeight:700}}>Reception</div>
        <div style={{opacity:.75, fontSize:12}}>PS + PC</div>
      </div>

      <nav style={{display:"grid", gap:10, marginTop:12}}>
        <Item href="/" label="Home" />
        <Item href="/zones" label="Zones" />
        <Item href="/stations" label="Stations" />
        <Item href="/sessions" label="Sessions" />
        <Item href="/reservations" label="Reservations" />
        <Item href="/pricing" label="Pricing" />
        <Item href="/settings" label="Settings" />
      </nav>
    </aside>
  )
}
