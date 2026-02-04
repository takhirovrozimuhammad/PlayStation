import StationCard from "./StationCard";

const demo = [
  { id: "PS-1", type: "PS", status: "free" },
  { id: "PS-2", type: "PS", status: "busy" },
  { id: "PC-1", type: "PC", status: "reserved" },
  { id: "PC-2", type: "PC", status: "free" },
];

export default function StationsGrid(){
  return (
    <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))", gap:12}}>
      {demo.map(s => <StationCard key={s.id} station={s} />)}
    </div>
  )
}
