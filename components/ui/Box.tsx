export default function Box({ children }: { children: React.ReactNode }){
  return (
    <div style={{padding:16,border:"1px solid #2a2a33",borderRadius:16,background:"#12121a"}}>
      {children}
    </div>
  )
}
