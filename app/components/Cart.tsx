"use client";
import { useState, useEffect, useRef } from "react";
import { CartItem } from "../hooks/useCart";

const ADDRESS_KEY = "lacalle_address";
const BARRIO_KEY = "lacalle_barrio";

interface CartProps {
  items: CartItem[];
  total: number;
  isOpen: boolean;
  onClose: () => void;
  onUpdateQuantity: (id: string, qty: number) => void;
  onPlaceOrder: (address: string, notes: string) => void;
  onClear: () => void;
}

export default function Cart({
  items,
  total,
  isOpen,
  onClose,
  onUpdateQuantity,
  onPlaceOrder,
  onClear,
}: CartProps) {
  const [address, setAddress] = useState("");
  const [barrio, setBarrio] = useState("");
  const [notes, setNotes] = useState("");
  const [delivery, setDelivery] = useState<{ costo: number; tiempo: string } | null>(null);
  const [loadingDelivery, setLoadingDelivery] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const savedAddress = localStorage.getItem(ADDRESS_KEY);
    const savedBarrio = localStorage.getItem(BARRIO_KEY);
    if (savedAddress) setAddress(savedAddress);
    if (savedBarrio) {
      setBarrio(savedBarrio);
      fetchDelivery(savedBarrio);
    }
  }, []);

  const fetchDelivery = async (b: string) => {
    if (!b.trim()) { setDelivery(null); return; }
    setLoadingDelivery(true);
    try {
      const res = await fetch(`/api/delivery?barrio=${encodeURIComponent(b)}`);
      const data = await res.json();
      setDelivery(data);
    } catch {
      setDelivery(null);
    } finally {
      setLoadingDelivery(false);
    }
  };

  const handleAddressChange = (val: string) => {
    setAddress(val);
    localStorage.setItem(ADDRESS_KEY, val);
  };

  const handleBarrioChange = (val: string) => {
    setBarrio(val);
    localStorage.setItem(BARRIO_KEY, val);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => fetchDelivery(val), 600);
  };

  const handleOrder = () => {
    if (items.length === 0) return;
    const deliveryNote = delivery
      ? `🛵 Domicilio (${barrio}): $${delivery.costo.toLocaleString("es-CO")} · ${delivery.tiempo}`
      : "";
    onPlaceOrder(address, [deliveryNote, notes].filter(Boolean).join("\n"));
    onClear();
    setAddress("");
    setBarrio("");
    setNotes("");
    setDelivery(null);
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            zIndex: 998,
          }}
        />
      )}

      {/* Drawer */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          height: "100dvh",
          width: "min(420px, 100vw)",
          background: "#111",
          borderLeft: "1px solid #2a2a2a",
          zIndex: 999,
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "20px 24px",
            borderBottom: "1px solid #2a2a2a",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "1.4rem",
              letterSpacing: 2,
              color: "var(--amarillo)",
            }}
          >
            Tu Pedido
          </span>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              color: "#aaa",
              fontSize: "1.4rem",
              cursor: "pointer",
              lineHeight: 1,
            }}
          >
            ✕
          </button>
        </div>

        {/* Items */}
        <div style={{ flex: 1, overflowY: "auto", padding: "16px 24px" }}>
          {items.length === 0 ? (
            <p
              style={{
                color: "var(--texto-suave)",
                textAlign: "center",
                marginTop: 40,
                fontFamily: "var(--font-barlow-condensed)",
                letterSpacing: 1,
              }}
            >
              Aún no has agregado nada 🍔
            </p>
          ) : (
            <>
              {items.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "12px 0",
                    borderBottom: "1px solid #1e1e1e",
                  }}
                >
                  {/* Name & price */}
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontFamily: "var(--font-barlow-condensed)",
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        color: "var(--blanco)",
                        letterSpacing: 0.5,
                      }}
                    >
                      {item.name}
                    </div>
                    <div
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--amarillo)",
                        marginTop: 2,
                      }}
                    >
                      ${(item.price * item.quantity).toLocaleString("es-CO")}
                    </div>
                  </div>

                  {/* Qty controls */}
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        border: "1px solid #333",
                        background: "#1a1a1a",
                        color: "var(--blanco)",
                        cursor: "pointer",
                        fontSize: "1rem",
                        lineHeight: 1,
                      }}
                    >
                      −
                    </button>
                    <span
                      style={{
                        minWidth: 20,
                        textAlign: "center",
                        fontFamily: "var(--font-barlow-condensed)",
                        fontWeight: 700,
                        fontSize: "1rem",
                      }}
                    >
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        border: "1px solid #333",
                        background: "#1a1a1a",
                        color: "var(--blanco)",
                        cursor: "pointer",
                        fontSize: "1rem",
                        lineHeight: 1,
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}

              {/* Address, barrio & notes */}
              <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 12 }}>
                <input
                  type="text"
                  placeholder="📍 Dirección de entrega"
                  value={address}
                  onChange={(e) => handleAddressChange(e.target.value)}
                  style={{
                    background: "#1a1a1a",
                    border: "1px solid #2a2a2a",
                    borderRadius: 6,
                    padding: "10px 14px",
                    color: "var(--blanco)",
                    fontFamily: "var(--font-barlow)",
                    fontSize: "0.9rem",
                    outline: "none",
                    width: "100%",
                    boxSizing: "border-box",
                  }}
                />
                <div>
                  <input
                    type="text"
                    placeholder="🏘️ Barrio (ej: Laureles, El Poblado...)"
                    value={barrio}
                    onChange={(e) => handleBarrioChange(e.target.value)}
                    style={{
                      background: "#1a1a1a",
                      border: "1px solid #2a2a2a",
                      borderRadius: 6,
                      padding: "10px 14px",
                      color: "var(--blanco)",
                      fontFamily: "var(--font-barlow)",
                      fontSize: "0.9rem",
                      outline: "none",
                      width: "100%",
                      boxSizing: "border-box",
                    }}
                  />
                  {/* Estimado domicilio */}
                  {barrio.trim() && (
                    <div style={{
                      marginTop: 6,
                      padding: "8px 12px",
                      borderRadius: 6,
                      background: "#1a1a1a",
                      border: "1px solid #2a2a2a",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: "0.82rem",
                    }}>
                      {loadingDelivery ? (
                        <span style={{ color: "var(--texto-suave)" }}>Calculando...</span>
                      ) : delivery ? (
                        <>
                          <span style={{ color: "var(--texto-suave)" }}>🛵 Domicilio est. · {delivery.tiempo}</span>
                          <span style={{ color: "var(--amarillo)", fontWeight: 700 }}>
                            +${delivery.costo.toLocaleString("es-CO")}
                          </span>
                        </>
                      ) : (
                        <span style={{ color: "#666" }}>Barrio no encontrado</span>
                      )}
                    </div>
                  )}
                </div>
                <textarea
                  placeholder="📝 Notas (salsas, sin cebolla, etc.)"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  style={{
                    background: "#1a1a1a",
                    border: "1px solid #2a2a2a",
                    borderRadius: 6,
                    padding: "10px 14px",
                    color: "var(--blanco)",
                    fontFamily: "var(--font-barlow)",
                    fontSize: "0.9rem",
                    outline: "none",
                    width: "100%",
                    boxSizing: "border-box",
                    resize: "vertical",
                  }}
                />
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div
            style={{
              padding: "20px 24px",
              borderTop: "1px solid #2a2a2a",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            {delivery && (
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem" }}>
                <span style={{ color: "var(--texto-suave)" }}>Domicilio est.</span>
                <span style={{ color: "#aaa" }}>+${delivery.costo.toLocaleString("es-CO")}</span>
              </div>
            )}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontFamily: "var(--font-bebas)",
                fontSize: "1.2rem",
                letterSpacing: 1,
              }}
            >
              <span style={{ color: "var(--texto-suave)" }}>Total</span>
              <span style={{ color: "var(--amarillo)" }}>
                ${(total + (delivery?.costo ?? 0)).toLocaleString("es-CO")}
              </span>
            </div>
            <button
              onClick={handleOrder}
              style={{
                background: "#25D366",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: "14px",
                fontFamily: "var(--font-bebas)",
                fontSize: "1.1rem",
                letterSpacing: 2,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Pedir por WhatsApp
            </button>
          </div>
        )}
      </div>
    </>
  );
}
