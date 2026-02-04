"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import ZoneCard from "./ZoneCard";

type Zone = { id: string; name: string; description: string | null };

export default function ZonesGrid(){
  const [zones, setZones] = useState<Zone[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    const run = async () => {
      const { data, error } = await supabase
        .from("zones")
        .select("id,name,description")
        .order("created_at", { ascending: true });

      if (error) setErr(error.message);
      else setZones((data ?? []) as any);

      setLoading(false);
    };
    run();
  }, []);

  if (loading) return <div style={{opacity:.75}}>Loading zones...</div>;
  if (err) return <div style={{opacity:.85}}>Supabase error: {err}</div>;
  if (!zones.length) return <div style={{opacity:.75}}>No zones yet. (Insert sample rows in Supabase)</div>;

  return (
    <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))", gap:12}}>
      {zones.map(z => <ZoneCard key={z.id} zone={z} />)}
    </div>
  )
}
