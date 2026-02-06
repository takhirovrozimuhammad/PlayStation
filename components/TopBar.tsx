import Link from "next/link";
import ThemeToggle from "./ui/ThemeToggle";

export default function TopBar({ rightSlot }: { rightSlot?: React.ReactNode }) {
  return (
    <div className="glass" style={{ padding: 14, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div className="pill" style={{ width: 40, height: 40, display: "grid", placeItems: "center", fontWeight: 950 }}>≡</div>
        <div style={{ fontWeight: 950, letterSpacing: 0.4 }}>
          RIDZHAN <span className="muted" style={{ fontWeight: 850 }}>SAAS</span>
        </div>
      </div>

      <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap", justifyContent: "flex-end" }}>
        {rightSlot}
        <ThemeToggle />
        <Link className="btn" href="/login">Login</Link>
      </div>
    </div>
  );
}
