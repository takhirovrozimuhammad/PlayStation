import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function PanelShell({ children }: { children: React.ReactNode }) {
  return (
    <div style={{display:"grid", gridTemplateColumns:"260px 1fr", minHeight:"100vh"}}>
      <Sidebar />
      <div style={{display:"grid", gridTemplateRows:"56px 1fr"}}>
        <Topbar />
        <div>{children}</div>
      </div>
    </div>
  );
}
