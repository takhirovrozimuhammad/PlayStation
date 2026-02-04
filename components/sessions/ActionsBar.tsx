import Button from "@/components/ui/Button";

export default function ActionsBar(){
  return (
    <div style={{display:"flex", gap:10, flexWrap:"wrap"}}>
      <Button>Start</Button>
      <Button>Stop</Button>
      <Button>Add 30 min</Button>
      <Button>Finish & Pay</Button>
    </div>
  )
}
