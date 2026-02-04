import { money } from "@/lib/format";
import Box from "@/components/ui/Box";

export default function PaymentSummary({ baseHourPrice }: { baseHourPrice: number }){
  return (
    <Box>
      <div style={{fontWeight:900, marginBottom:8}}>Payment (demo)</div>
      <div style={{display:"grid", gap:6, opacity:.9}}>
        <div>Base rate: {money(baseHourPrice ?? 0)} / hour</div>
        <div>Used: -- minutes</div>
        <div style={{fontWeight:950}}>Total: -- so'm</div>
      </div>
    </Box>
  )
}
