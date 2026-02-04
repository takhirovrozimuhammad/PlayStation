import ZoneStations from "@/components/zones/ZoneStations";

export default function ZoneDetail({ params }: { params: { zoneId: string } }){
  return (
    <main style={{padding:20, display:"grid", gap:12}}>
      <h2 style={{marginTop:0}}>Zone detail</h2>
      <div style={{opacity:.75}}>zone_id: {params.zoneId}</div>
      <ZoneStations zoneId={params.zoneId} />
    </main>
  )
}
