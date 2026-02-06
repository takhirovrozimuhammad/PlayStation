export default function BottomNav() {
  return (
    <div className="glass" style={{ marginTop: 14, padding: 12, display: "flex", gap: 10, justifyContent: "space-between" }}>
      <NavItem active label="Status" icon="🏠" />
      <NavItem label="Rooms" icon="🎮" />
      <NavItem label="Players" icon="👥" />
      <NavItem label="Income" icon="💰" />
    </div>
  );
}

function NavItem({ label, icon, active }: { label: string; icon: string; active?: boolean }) {
  return (
    <div
      className="pill"
      style={{
        flex: 1,
        padding: "10px 12px",
        display: "flex",
        gap: 10,
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 950,
        opacity: active ? 1 : 0.7,
      }}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  );
}
