"use client";

import { useEffect, useRef, useState } from "react";

interface CartButtonProps {
  count: number;
  total: number;
  onClick: () => void;
}

function CartIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}

export default function CartButton({ count, total, onClick }: CartButtonProps) {
  const [pop, setPop] = useState(false);
  const prevCount = useRef(count);

  useEffect(() => {
    if (count > prevCount.current) {
      setPop(true);
      const t = setTimeout(() => setPop(false), 400);
      prevCount.current = count;
      return () => clearTimeout(t);
    }
    prevCount.current = count;
  }, [count]);

  const hasItems = count > 0;

  return (
    <button
      onClick={onClick}
      aria-label={hasItems ? `Ver carrito — ${count} productos` : "Ver carrito"}
      className={pop ? "cart-btn-pop" : ""}
      style={{
        position: "fixed",
        bottom: 28,
        right: 28,
        zIndex: 997,
        background: hasItems ? "var(--amarillo)" : "#1a1a1a",
        color: hasItems ? "var(--negro)" : "var(--blanco)",
        border: hasItems ? "none" : "1px solid #333",
        borderRadius: hasItems ? 40 : "50%",
        padding: hasItems ? "13px 20px 13px 16px" : "13px",
        fontFamily: "var(--font-bebas)",
        fontSize: "1rem",
        letterSpacing: 2,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: 10,
        boxShadow: hasItems
          ? "0 4px 24px rgba(245,197,24,0.4)"
          : "0 2px 12px rgba(0,0,0,0.5)",
        transition: "background 0.3s ease, color 0.3s ease, box-shadow 0.3s ease, padding 0.3s ease, border-radius 0.3s ease",
      }}
    >
      <CartIcon size={20} />
      {hasItems && (
        <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{
            background: "var(--negro)",
            color: "var(--amarillo)",
            borderRadius: "50%",
            width: 20,
            height: 20,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.7rem",
            fontFamily: "var(--font-barlow-condensed)",
            fontWeight: 700,
          }}>
            {count}
          </span>
          ${total.toLocaleString("es-CO")}
        </span>
      )}
    </button>
  );
}
