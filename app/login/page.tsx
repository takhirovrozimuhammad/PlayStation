"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    setLoading(true);

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ login, password }),
    });

    setLoading(false);

    if (!res.ok) {
      const t = await res.json().catch(() => ({}));
      setErr(t?.error ?? "Login failed");
      return;
    }

    router.push("/dashboard");
    router.refresh();
  };

  return (
    <main style={{ padding: 18, maxWidth: 560, margin: "0 auto" }}>
      <div className="glass" style={{ padding: 16 }}>
        <div style={{ fontWeight: 950, fontSize: 18 }}>Staff Login</div>
        <div className="muted" style={{ marginTop: 6 }}>
          Faqat PS/PC klub adminlari uchun (hozircha vaqtincha login).
        </div>

        <form onSubmit={onSubmit} style={{ display: "grid", gap: 10, marginTop: 14 }}>
          <input className="input" placeholder="Login (phone)" value={login} onChange={(e) => setLogin(e.target.value)} />
          <input className="input" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

          {err && <div className="pill" style={{ padding: "10px 12px", color: "#b00020", fontWeight: 900 }}>{err}</div>}

          <button className="btn" disabled={loading}>
            {loading ? "Signing in..." : "Login"}
          </button>

          <a className="pill" href="/" style={{ padding: "10px 12px", textAlign: "center", fontWeight: 900 }}>
            ← Back to Info Page
          </a>
        </form>
      </div>
    </main>
  );
}
