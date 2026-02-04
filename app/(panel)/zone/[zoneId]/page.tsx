export default function ZoneDetail({ params }: { params: { zoneId: string } }){
  return (
    <main style={{padding:20}}>
      <h2 style={{marginTop:0}}>Zone: {params.zoneId}</h2>
      <p style={{opacity:.75}}>This will list stations inside the zone.</p>
    </main>
  )
}
