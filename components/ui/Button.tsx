export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button
      style={{
        padding: "10px 14px",
        borderRadius: 14,
        border: "1px solid #2a2a33",
        background: "#1c1c28",
        color: "#fff",
        cursor: "pointer",
        fontWeight: 700
      }}
    >
      {children}
    </button>
  );
}
