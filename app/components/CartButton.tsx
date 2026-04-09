"use client";

interface CartButtonProps {
  count: number;
  total: number;
  onClick: () => void;
}

export default function CartButton({ count, total, onClick }: CartButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        position: "fixed",
        bottom: 32,
        right: 32,
        zIndex: 997,
        background: count > 0 ? "var(--amarillo)" : "#1a1a1a",
        color: count > 0 ? "var(--negro)" : "var(--blanco)",
        border: count > 0 ? "none" : "1px solid #333",
        borderRadius: 50,
        padding: count > 0 ? "14px 22px" : "14px 18px",
        fontFamily: "var(--font-bebas)",
        fontSize: "1rem",
        letterSpacing: 2,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: 8,
        boxShadow: count > 0 ? "0 4px 20px rgba(253,216,53,0.35)" : "0 2px 10px rgba(0,0,0,0.4)",
        transition: "all 0.3s ease",
      }}
    >
      🛒
      {count > 0 && <span>{count} — ${total.toLocaleString("es-CO")}</span>}
    </button>
  );
}
