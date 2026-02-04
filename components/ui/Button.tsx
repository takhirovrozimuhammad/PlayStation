export default function Button({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 14px",
        borderRadius: 14,
        border: "1px solid #2a2a33",
        background: "#1c1c28",
        color: "#fff",
        cursor: "pointer",
        fontWeight: 800
      }}
    >
      {children}
    </button>
  );
}
