"use client";

import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import StationCard from "./StationCard";

type Station = {
  id: string;
  code: string;
  type: "PS" | "PC";
  status: "free" | "busy" | "reserved";
};

export default function StationsGrid() {
  const [data, setData] = useState<Station[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);
  const [filter, setFilter] = useState<"ALL" | "PS" | "PC">("ALL");

  useEffect(() => {
    const run = async () => {
      const { data, error } = await supabase
        .from("stations")
        .select("id, code, type, status")
        .order("code", { ascending: true });

      if (error) setErr(error.message);
      else setData((data ?? []) as any);
      setLoading(false);
    };
    run();
  }, []);

  const filtered = useMemo(() => {
    if (filter === "ALL") return data;
    return data.filter(s => s.type === filter);
  }, [data, filter]);

  if (loading) return <div style={{ opacity: 0.75 }}>Loading stations...</div>;
  if (err) return <div style={{opacity:.85}}>Supabase error: {err}</div>;
  if (!data.length) return <div style={{ opacity: 0.75 }}>No stations yet. (Insert sample rows in Supabase)</div>;

  return (
    <>
      <div style={{display:"flex", gap:10, marginBottom:12, flexWrap:"wrap"}}>
        <button onClick={()=>setFilter("ALL")} style={chip(filter==="ALL")}>All</button>
        <button onClick={()=>setFilter("PS")} style={chip(filter==="PS")}>PlayStation</button>
        <button onClick={()=>setFilter("PC")} style={chip(filter==="PC")}>PC</button>
      </div>

      <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))", gap:12}}>
        {filtered.map((s) => (
          <StationCard
            key={s.id}
            station={{ id: s.id, code: s.code, type: s.type, status: s.status }}
          />
        ))}
      </div>
    </>
  );
}

function chip(active:boolean){
  return {
    padding:"8px 12px",
    borderRadius:999,
    border:"1px solid #2a2a33",
    background: active ? "#1c1c28" : "#12121a",
    color:"#fff",
    cursor:"pointer",
    fontWeight:800
  } as const;
}
