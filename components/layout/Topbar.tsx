export default function Topbar(){
  return (
    <header style={{display:"flex", alignItems:"center", justifyContent:"space-between", padding:"0 16px", borderBottom:"1px solid #1d1d27", background:"#0e0e14"}}>
      <div style={{opacity:.9}}>Live board</div>
      <div style={{display:"flex", gap:10, alignItems:"center"}}>
        <div style={{opacity:.75, fontSize:12}}>Staff</div>
        <div style={{width:28,height:28,borderRadius:10,background:"#1c1c28",border:"1px solid #2a2a33"}} />
      </div>
    </header>
  )
}
