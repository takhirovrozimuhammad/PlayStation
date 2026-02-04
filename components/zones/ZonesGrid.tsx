import ZoneCard from "./ZoneCard";

const demo = [
  { id: "ps-room", name: "PlayStation Room", kind: "PS" },
  { id: "pc-room", name: "PC Room", kind: "PC" },
  { id: "vip", name: "VIP Zone", kind: "VIP" }
];

export default function ZonesGrid(){
  return (
    <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))", gap:12}}>
      {demo.map(z => <ZoneCard key={z.id} zone={z} />)}
    </div>
  )
}
