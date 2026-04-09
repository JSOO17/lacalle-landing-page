"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { CartItem, ItemCustomization, ItemExtra } from "../hooks/useCart";

const ADDRESS_KEY = "lacalle_address";
const BARRIO_KEY  = "lacalle_barrio";

// Lista limpia de barrios (sin duplicados con/sin tildes)
const BARRIOS = [
  { label: "Estadio",             value: "estadio" },
  { label: "Florida Nueva",       value: "florida nueva" },
  { label: "Laureles",            value: "laureles" },
  { label: "Suramericana",        value: "suramericana" },
  { label: "El Velódromo",        value: "el velodromo" },
  { label: "Naranjal",            value: "naranjal" },
  { label: "Carlos E. Restrepo",  value: "carlos e. restrepo" },
  { label: "Conquistadores",      value: "conquistadores" },
  { label: "La América",          value: "la america" },
  { label: "Las Américas",        value: "las americas" },
  { label: "Calasanz",            value: "calasanz" },
  { label: "San Javier",          value: "san javier" },
  { label: "Robledo",             value: "robledo" },
  { label: "Belén",               value: "belen" },
  { label: "Campo Amor",          value: "campo amor" },
  { label: "Aranjuez",            value: "aranjuez" },
  { label: "Castilla",            value: "castilla" },
  { label: "El Chagualo",         value: "el chagualo" },
  { label: "El Centro",           value: "centro" },
  { label: "Santa Fe",            value: "santa fe" },
  { label: "Manrique",            value: "manrique" },
  { label: "Buenos Aires",        value: "buenos aires" },
  { label: "El Poblado",          value: "el poblado" },
  { label: "Envigado",            value: "envigado" },
  { label: "Itagüí",              value: "itagui" },
  { label: "Sabaneta",            value: "sabaneta" },
  { label: "Bello",               value: "bello" },
  { label: "Copacabana",          value: "copacabana" },
];


const ALITAS_SALSAS = ["BBQ", "BBQ de Uchuva", "BBQ Picante", "Miel Ajo", "Miel Mostaza", "Limón & Pimienta"];

const TOPPINGS_EXTRA = [
  { id: "extra-carne", name: "Carne de hamburguesa", price: 9000 },
  { id: "extra-tocineta", name: "Tocineta 1 unid", price: 3500 },
  { id: "extra-chorizo", name: "Chorizo 1 unid", price: 4500 },
  { id: "extra-chicharron", name: "Chicharrón", price: 9000 },
  { id: "extra-queso-mozz", name: "Queso mozzarella", price: 3500 },
  { id: "extra-queso-philly", name: "Queso Philadelphia", price: 6000 },
  { id: "extra-queso-cheddar", name: "Queso cheddar", price: 5000 },
  { id: "extra-guacamole", name: "Guacamole", price: 3000 },
  { id: "extra-aros-6", name: "Aros de cebolla x6", price: 8500 },
  { id: "extra-aros-2", name: "Aros de cebolla x2", price: 3500 },
  { id: "extra-cebolla-cara", name: "Cebolla caramelizada", price: 3000 },
  { id: "extra-papa", name: "Papa francesa", price: 5000 },
  { id: "extra-piña", name: "Rodaja de piña", price: 4000 },
  { id: "extra-salsa", name: "Salsa artesanal", price: 3000 },
];

interface CartProps {
  items: CartItem[];
  total: number;
  isOpen: boolean;
  onClose: () => void;
  onUpdateQuantity: (id: string, qty: number) => void;
  onUpdateCustomization: (id: string, customization: ItemCustomization) => void;
  onPlaceOrder: (address: string, notes: string, delivery?: { costo: number; barrio: string; tiempo: string }) => void;
  onClear: () => void;
}

function Chip({
  label,
  selected,
  onClick,
  disabled = false,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: "5px 12px",
        borderRadius: 20,
        border: `1px solid ${selected ? "var(--amarillo)" : "#2a2a2a"}`,
        background: selected ? "rgba(245,197,24,0.12)" : "transparent",
        color: selected ? "var(--amarillo)" : disabled ? "#333" : "#666",
        fontSize: "0.78rem",
        fontFamily: "var(--font-barlow-condensed)",
        fontWeight: 600,
        letterSpacing: 0.5,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.4 : 1,
        transition: "all 0.15s ease",
        whiteSpace: "nowrap",
      }}
    >
      {selected ? "✓ " : ""}{label}
    </button>
  );
}

function BarrioCombobox({
  value,
  onChange,
  inputStyle,
}: {
  value: string;
  onChange: (val: string) => void;
  inputStyle: React.CSSProperties;
}) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  // Muestra el label del barrio seleccionado cuando está cerrado
  const selectedLabel = BARRIOS.find((b) => b.value === value)?.label ?? "";

  const filtered = query.trim()
    ? BARRIOS.filter((b) =>
        b.label.toLowerCase().includes(query.toLowerCase())
      )
    : BARRIOS;

  const select = useCallback((b: { label: string; value: string }) => {
    onChange(b.value);
    setQuery("");
    setOpen(false);
  }, [onChange]);

  // Cierra al click fuera
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={wrapRef} style={{ position: "relative" }}>
      <div style={{ position: "relative" }}>
        <input
          type="text"
          placeholder={value ? selectedLabel : "🏘️ Barrio — escribe para buscar..."}
          value={open ? query : selectedLabel}
          onFocus={() => { setOpen(true); setQuery(""); }}
          onChange={(e) => { setQuery(e.target.value); setOpen(true); }}
          style={{
            ...inputStyle,
            color: !open && value ? "var(--blanco)" : open ? "var(--blanco)" : "#555",
            paddingRight: 36,
          }}
          autoComplete="off"
        />
        {/* Chevron */}
        <svg
          onClick={() => setOpen((o) => !o)}
          style={{
            position: "absolute", right: 12, top: "50%",
            transform: `translateY(-50%) rotate(${open ? 180 : 0}deg)`,
            transition: "transform 0.2s",
            cursor: "pointer", pointerEvents: "all",
            color: "#555",
          }}
          width="14" height="14" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>

      {open && (
        <ul style={{
          position: "absolute", top: "calc(100% + 4px)", left: 0, right: 0,
          background: "#161616", border: "1px solid #2a2a2a", borderRadius: 6,
          maxHeight: 220, overflowY: "auto", zIndex: 10,
          listStyle: "none", margin: 0, padding: "4px 0",
          boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
        }}>
          {filtered.length === 0 ? (
            <li style={{ padding: "10px 14px", color: "#555", fontSize: "0.82rem" }}>
              Sin resultados
            </li>
          ) : filtered.map((b) => (
            <li
              key={b.value}
              onMouseDown={() => select(b)}
              style={{
                padding: "9px 14px",
                cursor: "pointer",
                fontSize: "0.88rem",
                fontFamily: "var(--font-barlow-condensed)",
                letterSpacing: 0.5,
                color: b.value === value ? "var(--amarillo)" : "var(--texto-suave)",
                background: b.value === value ? "rgba(245,197,24,0.07)" : "transparent",
                display: "flex", justifyContent: "space-between", alignItems: "center",
                transition: "background 0.12s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#1e1e1e")}
              onMouseLeave={(e) => (e.currentTarget.style.background = b.value === value ? "rgba(245,197,24,0.07)" : "transparent")}
            >
              {b.label}
              {b.value === value && (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      fontFamily: "var(--font-barlow-condensed)",
      fontSize: "0.72rem",
      fontWeight: 700,
      letterSpacing: 2,
      textTransform: "uppercase",
      color: "#555",
      marginBottom: 8,
      marginTop: 18,
    }}>
      {children}
    </div>
  );
}

export default function Cart({
  items,
  total,
  isOpen,
  onClose,
  onUpdateQuantity,
  onUpdateCustomization,
  onPlaceOrder,
  onClear,
}: CartProps) {
  const [address, setAddress] = useState("");
  const [barrio, setBarrio] = useState("");
  const [globalNotes, setGlobalNotes] = useState("");
  const [delivery, setDelivery] = useState<{ costo: number; tiempo: string } | null>(null);
  const [loadingDelivery, setLoadingDelivery] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const savedAddress = localStorage.getItem(ADDRESS_KEY);
    const savedBarrio  = localStorage.getItem(BARRIO_KEY);
    if (savedAddress) setAddress(savedAddress);
    if (savedBarrio)  { setBarrio(savedBarrio); fetchDelivery(savedBarrio); }
  }, []);

  const fetchDelivery = async (b: string) => {
    if (!b) { setDelivery(null); return; }
    setLoadingDelivery(true);
    try {
      const res = await fetch(`/api/delivery?barrio=${encodeURIComponent(b)}`);
      const data = await res.json();
      setDelivery(data);
    } catch { setDelivery(null); }
    finally { setLoadingDelivery(false); }
  };

  const handleAddressChange = (val: string) => {
    setAddress(val);
    localStorage.setItem(ADDRESS_KEY, val);
  };

  const handleBarrioChange = (val: string) => {
    setBarrio(val);
    localStorage.setItem(BARRIO_KEY, val);
    fetchDelivery(val);
  };

  const toggleSinForItem = (itemId: string, ing: string, currentCustom?: ItemCustomization) => {
    const currentSin = currentCustom?.sin ?? [];
    const sin = currentSin.includes(ing) ? currentSin.filter((s) => s !== ing) : [...currentSin, ing];
    onUpdateCustomization(itemId, { sin, salsas: currentCustom?.salsas, extras: currentCustom?.extras, notas: currentCustom?.notas ?? "" });
  };

  const toggleExtraForItem = (itemId: string, extra: ItemExtra, currentCustom?: ItemCustomization) => {
    const current = currentCustom?.extras ?? [];
    const extras = current.some((e) => e.id === extra.id)
      ? current.filter((e) => e.id !== extra.id)
      : [...current, extra];
    onUpdateCustomization(itemId, { sin: currentCustom?.sin ?? [], salsas: currentCustom?.salsas, extras, notas: currentCustom?.notas ?? "" });
  };

  const toggleSalsaForItem = (itemId: string, salsa: string, max: number, currentCustom?: ItemCustomization) => {
    const current = currentCustom?.salsas ?? [];
    let salsas: string[];
    if (current.includes(salsa)) {
      salsas = current.filter((s) => s !== salsa);
    } else if (current.length < max) {
      salsas = [...current, salsa];
    } else {
      return; // ya llegó al límite, no hace nada
    }
    onUpdateCustomization(itemId, { sin: currentCustom?.sin ?? [], salsas, notas: currentCustom?.notas ?? "" });
  };

  const handleOrder = () => {
    if (items.length === 0) return;
    const deliveryData = delivery ? { ...delivery, barrio } : undefined;
    onPlaceOrder(address, globalNotes, deliveryData);
    onClear();
    setAddress("");
    setGlobalNotes("");
    setExpandedItem(null);
    setDelivery(null);
    onClose();
  };

  const inputStyle: React.CSSProperties = {
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
  };

  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", zIndex: 998 }}
        />
      )}

      <div style={{
        position: "fixed", top: 0, right: 0,
        height: "100dvh", width: "min(440px, 100vw)",
        background: "#111", borderLeft: "1px solid #1e1e1e",
        zIndex: 999,
        transform: isOpen ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
        display: "flex", flexDirection: "column",
      }}>
        {/* Header */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "20px 24px", borderBottom: "1px solid #1e1e1e",
        }}>
          <span style={{ fontFamily: "var(--font-bebas)", fontSize: "1.4rem", letterSpacing: 2, color: "var(--amarillo)" }}>
            Tu Pedido
          </span>
          <button onClick={onClose} style={{ background: "none", border: "none", color: "#666", fontSize: "1.2rem", cursor: "pointer", lineHeight: 1 }}>
            ✕
          </button>
        </div>

        {/* Scrollable content */}
        <div style={{ flex: 1, overflowY: "auto", padding: "16px 24px" }}>
          {items.length === 0 ? (
            <p style={{ color: "var(--texto-suave)", textAlign: "center", marginTop: 40, fontFamily: "var(--font-barlow-condensed)", letterSpacing: 1 }}>
              Aún no has agregado nada 🍔
            </p>
          ) : (
            <>
              {/* Items */}
              {items.map((item) => {
                const isExpanded = expandedItem === item.id;
                const custom = item.customization;
                const extrasPrice = (custom?.extras ?? []).reduce((s, e) => s + e.price, 0);
                const lineTotal = (item.price + extrasPrice) * item.quantity;
                const hasSin = (custom?.sin?.length ?? 0) > 0;
                const hasSalsas = (custom?.salsas?.length ?? 0) > 0;
                const hasExtras = (custom?.extras?.length ?? 0) > 0;
                const hasNotas = !!custom?.notas?.trim();
                const hasCustom = hasSin || hasSalsas || hasExtras || hasNotas;
                const canPersonalize = item.removable !== undefined && !item.isDessert;
                return (
                  <div key={item.id} style={{ borderBottom: "1px solid #1a1a1a" }}>
                    {/* Main row */}
                    <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0" }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 700, fontSize: "0.95rem", color: "var(--blanco)", letterSpacing: 0.5 }}>
                          {item.name}
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 3 }}>
                          <span style={{ fontSize: "0.8rem", color: "var(--amarillo)" }}>
                            ${lineTotal.toLocaleString("es-CO")}
                          </span>
                          {hasExtras && (
                            <span style={{ fontSize: "0.7rem", color: "#666", fontFamily: "var(--font-barlow-condensed)" }}>
                              {custom!.extras!.map(e => `+${e.name}`).join(" · ")}
                            </span>
                          )}
                          {canPersonalize && (
                            <button
                              type="button"
                              onClick={() => setExpandedItem(isExpanded ? null : item.id)}
                              style={{
                                background: "none", border: "none", cursor: "pointer", padding: 0,
                                fontFamily: "var(--font-barlow-condensed)", fontSize: "0.72rem",
                                fontWeight: 700, letterSpacing: 1,
                                color: hasCustom ? "var(--amarillo)" : "#555",
                                textTransform: "uppercase",
                                display: "flex", alignItems: "center", gap: 3,
                              }}
                            >
                              {hasCustom && <span style={{ fontSize: "0.65rem" }}>●</span>}
                              {isExpanded ? "▲ Ocultar" : "✎ Personalizar"}
                            </button>
                          )}
                        </div>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} style={{ width: 26, height: 26, borderRadius: "50%", border: "1px solid #2a2a2a", background: "#1a1a1a", color: "var(--blanco)", cursor: "pointer", fontSize: "0.9rem" }}>−</button>
                        <span style={{ minWidth: 18, textAlign: "center", fontFamily: "var(--font-barlow-condensed)", fontWeight: 700, fontSize: "0.95rem" }}>{item.quantity}</span>
                        <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} style={{ width: 26, height: 26, borderRadius: "50%", border: "1px solid #2a2a2a", background: "#1a1a1a", color: "var(--blanco)", cursor: "pointer", fontSize: "0.9rem" }}>+</button>
                      </div>
                    </div>

                    {/* Salsas siempre visibles para alitas */}
                    {item.salsasMax && (
                      <div style={{ padding: "0 0 12px 0" }}>
                        {(custom?.salsas?.length ?? 0) < item.salsasMax && (
                          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                            <SectionLabel>Elige tus salsas</SectionLabel>
                            <span style={{ fontFamily: "var(--font-barlow-condensed)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: 1, color: "#555" }}>
                              {custom?.salsas?.length ?? 0}/{item.salsasMax}
                            </span>
                          </div>
                        )}
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: (custom?.salsas?.length ?? 0) < item.salsasMax ? 6 : 0 }}>
                          {ALITAS_SALSAS.map((salsa) => {
                            const selected = custom?.salsas?.includes(salsa) ?? false;
                            const maxed = (custom?.salsas?.length ?? 0) >= item.salsasMax! && !selected;
                            return (
                              <Chip
                                key={salsa}
                                label={salsa}
                                selected={selected}
                                onClick={() => toggleSalsaForItem(item.id, salsa, item.salsasMax!, custom)}
                                disabled={maxed}
                              />
                            );
                          })}
                        </div>
                        {(custom?.salsas?.length ?? 0) < item.salsasMax && (
                          <div style={{ fontSize: "0.71rem", color: "#e07b00", fontFamily: "var(--font-barlow-condensed)", letterSpacing: 1, marginTop: 4 }}>
                            ● Faltan {item.salsasMax - (custom?.salsas?.length ?? 0)} salsa{item.salsasMax - (custom?.salsas?.length ?? 0) > 1 ? "s" : ""} por elegir
                          </div>
                        )}
                      </div>
                    )}

                    {/* Per-item customization panel (opcional: sin ingredientes + notas) */}
                    {isExpanded && canPersonalize && (
                      <div style={{ padding: "0 0 14px 0" }}>
                        {item.removable && item.removable.length > 0 && (
                          <>
                            <SectionLabel>Sin ingredientes</SectionLabel>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 12 }}>
                              {item.removable.map((ing) => (
                                <Chip
                                  key={ing}
                                  label={ing}
                                  selected={custom?.sin?.includes(ing) ?? false}
                                  onClick={() => toggleSinForItem(item.id, ing, custom)}
                                />
                              ))}
                            </div>
                          </>
                        )}
                        <SectionLabel>Adicionales</SectionLabel>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 12 }}>
                          {TOPPINGS_EXTRA.map((t) => {
                            const selected = custom?.extras?.some((e) => e.id === t.id) ?? false;
                            return (
                              <button
                                key={t.id}
                                type="button"
                                onClick={() => toggleExtraForItem(item.id, t, custom)}
                                style={{
                                  display: "flex", alignItems: "center", gap: 5,
                                  padding: "5px 10px", borderRadius: 6,
                                  border: `1px solid ${selected ? "rgba(245,197,24,0.4)" : "#2a2a2a"}`,
                                  background: selected ? "rgba(245,197,24,0.08)" : "#141414",
                                  color: selected ? "var(--amarillo)" : "#777",
                                  fontSize: "0.78rem",
                                  fontFamily: "var(--font-barlow-condensed)",
                                  fontWeight: 600, cursor: "pointer",
                                  transition: "all 0.15s ease",
                                }}
                              >
                                {selected && <span style={{ fontSize: "0.6rem" }}>✓</span>}
                                <span>{t.name}</span>
                                <span style={{ fontSize: "0.7rem", opacity: 0.65 }}>+${t.price.toLocaleString("es-CO")}</span>
                              </button>
                            );
                          })}
                        </div>
                        <SectionLabel>Nota para este ítem</SectionLabel>
                        <textarea
                          placeholder="Ej: bien cocida, sin picante..."
                          value={custom?.notas ?? ""}
                          onChange={(e) =>
                            onUpdateCustomization(item.id, { sin: custom?.sin ?? [], salsas: custom?.salsas, extras: custom?.extras, notas: e.target.value })
                          }
                          rows={2}
                          style={{ ...inputStyle, resize: "none" }}
                        />
                      </div>
                    )}
                  </div>
                );
              })}

              {/* ── NOTAS GENERALES ── */}
              <div style={{ marginTop: 16 }}>
                <SectionLabel>Notas generales del pedido</SectionLabel>
                <textarea
                  placeholder="Ej: timbrar al intercomunicador 301, no picar el pan..."
                  value={globalNotes}
                  onChange={(e) => setGlobalNotes(e.target.value)}
                  rows={2}
                  style={{ ...inputStyle, resize: "none" }}
                />
              </div>

              {/* ── ENTREGA ── */}
              <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 8 }}>
                <input
                  type="text"
                  placeholder="📍 Dirección (Ej: Calle 5 #32-10, apto 301)"
                  value={address}
                  onChange={(e) => handleAddressChange(e.target.value)}
                  style={inputStyle}
                />
                <BarrioCombobox
                  value={barrio}
                  onChange={handleBarrioChange}
                  inputStyle={inputStyle}
                />

                {/* Estimado de domicilio */}
                {barrio && (
                  <div style={{
                    padding: "10px 14px", borderRadius: 6,
                    background: "#0d0d0d",
                    border: delivery ? "1px solid rgba(245,197,24,0.2)" : "1px solid #1e1e1e",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    transition: "border-color 0.2s",
                  }}>
                    {loadingDelivery ? (
                      <span style={{ color: "#555", fontFamily: "var(--font-barlow-condensed)", fontSize: "0.82rem", letterSpacing: 1 }}>
                        Calculando...
                      </span>
                    ) : delivery ? (
                      <>
                        <span style={{ color: "var(--texto-suave)", fontSize: "0.82rem" }}>
                          🛵 Domicilio est. · {delivery.tiempo}
                        </span>
                        <span style={{ color: "var(--amarillo)", fontFamily: "var(--font-bebas)", fontSize: "1.1rem", letterSpacing: 1 }}>
                          +${delivery.costo.toLocaleString("es-CO")}
                        </span>
                      </>
                    ) : null}
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div style={{ padding: "16px 24px", borderTop: "1px solid #1e1e1e", display: "flex", flexDirection: "column", gap: 10 }}>
            {delivery && (
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem" }}>
                <span style={{ color: "var(--texto-suave)" }}>Domicilio est.</span>
                <span style={{ color: "#aaa" }}>+${delivery.costo.toLocaleString("es-CO")}</span>
              </div>
            )}
            <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-bebas)", fontSize: "1.2rem", letterSpacing: 1 }}>
              <span style={{ color: "var(--texto-suave)" }}>Total</span>
              <span style={{ color: "var(--amarillo)" }}>${(total + (delivery?.costo ?? 0)).toLocaleString("es-CO")}</span>
            </div>
            <button
              onClick={handleOrder}
              style={{
                background: "#25D366", color: "#fff", border: "none", borderRadius: 8,
                padding: "14px", fontFamily: "var(--font-bebas)", fontSize: "1.1rem",
                letterSpacing: 2, cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                transition: "background 0.2s, transform 0.1s",
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
