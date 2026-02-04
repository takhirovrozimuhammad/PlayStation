import StationsGrid from "@/components/stations/StationsGrid";

export default function StationsPage(){
  return (
    <main style={{padding:20}}>
      <h2 style={{marginTop:0}}>Stations</h2>
      <p style={{opacity:.75}}>Each station is a PS or PC unit (PS-1, PC-1...)</p>
      <StationsGrid />
    </main>
  )
}
