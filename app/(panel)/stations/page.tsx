import StationsGrid from "@/components/stations/StationsGrid";

export default function StationsPage(){
  return (
    <main style={{padding:20}}>
      <h2 style={{marginTop:0}}>Stations</h2>
      <p style={{opacity:.75}}>Station = PS-1 / PC-1 kabi birlik. Status realtime bo'ladi (keyin).</p>
      <StationsGrid />
    </main>
  )
}
