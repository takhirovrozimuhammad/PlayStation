"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import StationCard from "@/components/stations/StationCard";

type Station = { id: string; code: string; type: "PS" | "PC"; status: "free" | "busy" | "reserved" };

export default function ZoneStations({ zoneId }: { zoneId: string }){
  const [data, setData] = useState<Station[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    const run = async () => {
      const { data, error } = await supabase
        .from("stations")
        .select("id,code,type,status")
        .eq("zone_id", zoneId)
        .order("code", { ascending: true });

      if (error) setErr(error.message);
      else setData((data ?? []) as any);

      setLoading(false);
    };
    run();
  }, [zoneId]);

  if (loading) return <div style={{opacity:.75}}>Loading stations...</div>;
  if (err) return <div style={{opacity:.85}}>Supabase error: {err}</div>;
  if (!data.length) return <div style={{opacity:.75}}>No stations in this zone yet.</div>;

  return (
    <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))", gap:12}}>
      {data.map(s => (
        <StationCard
          key={s.id}
          station={{ id: s.id, code: s.code, type: s.type, status: s.status }}
        />
      ))}
    </div>
  )
}
