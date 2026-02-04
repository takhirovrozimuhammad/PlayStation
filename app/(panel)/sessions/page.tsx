import SessionsTable from "@/components/sessions/SessionsTable";

export default function SessionsPage(){
  return (
    <main style={{padding:20}}>
      <h2 style={{marginTop:0}}>Active sessions</h2>
      <SessionsTable />
    </main>
  )
}
