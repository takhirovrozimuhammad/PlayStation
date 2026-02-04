"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import Box from "@/components/ui/Box";
import SessionTimer from "@/components/sessions/SessionTimer";
import ActionsBar from "@/components/sessions/ActionsBar";
import PaymentSummary from "@/components/sessions/PaymentSummary";

type Station = {
  id: string;
  code: string;
  type: "PS" | "PC";
  status: "free" | "busy" | "reserved";
  base_hour_price: number;
};

export default function StationDetail({ stationId }: { stationId: string }){
  const [station, setStation] = useState<Station | null>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    const run = async () => {
      const { data, error } = await supabase
        .from("stations")
        .select("id,code,type,status,base_hour_price")
        .eq("id", stationId)
        .maybeSingle();

      if (error) setErr(error.message);
      else setStation(data as any);

      setLoading(false);
    };
    run();
  }, [stationId]);

  if (loading) return <div style={{opacity:.75}}>Loading station...</div>;
  if (err) return <div style={{opacity:.85}}>Supabase error: {err}</div>;
  if (!station) return <div style={{opacity:.75}}>Station not found.</div>;

  return (
    <div style={{display:"grid", gap:14}}>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"baseline", gap:12, flexWrap:"wrap"}}>
        <h2 style={{margin:0}}>{station.code}</h2>
        <div style={{opacity:.75, fontSize:13}}>Type: {station.type} · Status: {station.status}</div>
      </div>

      <Box>
        <SessionTimer />
      </Box>
      <ActionsBar />
      <PaymentSummary baseHourPrice={station.base_hour_price} />
    </div>
  )
}
