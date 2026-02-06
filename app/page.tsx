import Link from "next/link";

export default function Home(){
  return (
    <main style={{padding:24, maxWidth: 980, margin:"0 auto"}}>
      <div className="glass" style={{padding:18}}>
        <h1 style={{margin:"0 0 6px"}}>PS+PC Reception Interface</h1>
        <div className="muted">Go to the dashboard:</div>
        <div style={{marginTop:12}}>
          <Link className="btn" href="/panel">Open Panel</Link>
        </div>
      </div>
    </main>
  )
}
