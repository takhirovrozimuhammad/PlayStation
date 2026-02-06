"use client";

export default function Modal({
  open,
  title,
  onClose,
  children,
}:{
  open: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}){
  if (!open) return null;

  return (
    <div
      style={{
        position:"fixed",
        inset:0,
        background:"rgba(10,10,18,.35)",
        display:"grid",
        placeItems:"center",
        padding:16,
        zIndex: 50
      }}
      onClick={onClose}
    >
      <div className="glass" style={{width:"min(560px, 100%)", padding:16}} onClick={(e)=>e.stopPropagation()}>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", gap:10}}>
          <div style={{fontWeight:950, fontSize:16}}>{title}</div>
          <button className="btn" onClick={onClose}>✕</button>
        </div>
        <div style={{marginTop:12}}>
          {children}
        </div>
      </div>
    </div>
  )
}
