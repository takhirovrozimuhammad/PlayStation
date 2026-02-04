import StationDetail from "@/components/stations/StationDetail";

export default function StationDetailPage({ params }: { params: { stationId: string } }){
  return (
    <main style={{padding:20}}>
      <StationDetail stationId={params.stationId} />
    </main>
  )
}
