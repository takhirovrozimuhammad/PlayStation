import ZonesGrid from "@/components/zones/ZonesGrid";

export default function ZonesPage(){
  return (
    <main style={{padding:20}}>
      <h2 style={{marginTop:0}}>Zones</h2>
      <p style={{opacity:.75}}>Masalan: PlayStation Room, PC Room, VIP...</p>
      <ZonesGrid />
    </main>
  )
}
