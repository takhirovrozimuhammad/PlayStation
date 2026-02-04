export default function LoginPage(){
  return (
    <main style={{padding:24}}>
      <h1 style={{margin:0}}>Login</h1>
      <p style={{opacity:.8}}>Reception / Staff only (auth later)</p>
      <div style={{display:"grid", gap:12, maxWidth:360}}>
        <input placeholder="phone or email" style={{padding:12,borderRadius:12,border:"1px solid #2a2a33",background:"#12121a",color:"#fff"}}/>
        <input placeholder="password" type="password" style={{padding:12,borderRadius:12,border:"1px solid #2a2a33",background:"#12121a",color:"#fff"}}/>
        <button style={{padding:12,borderRadius:12,border:"1px solid #2a2a33",background:"#1c1c28",color:"#fff",cursor:"pointer",fontWeight:800}}>
          Sign in
        </button>
      </div>
    </main>
  )
}
