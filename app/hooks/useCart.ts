"use client";
import { useState, useCallback, useEffect } from "react";

export interface ItemCustomization {
  sin: string[];      // ingredientes a quitar
  salsas?: string[];  // salsas elegidas (alitas)
  notas: string;      // nota libre
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  customization?: ItemCustomization;
  removable?: string[];  // specific ingredients of this item that can be removed
  isDessert?: boolean;   // desserts skip the toppings/adicionales section
  salsasMax?: number;    // max sauces to pick (alitas: x12→2, x18→3, x24→4)
}

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "573215307022";
const CART_KEY = "lacalle_cart";

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(CART_KEY);
      if (saved) setItems(JSON.parse(saved));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(items));
    } catch {}
  }, [items]);

  const addItem = useCallback((item: Omit<CartItem, "quantity">) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsOpen(true);
  }, []);

  const updateQuantity = useCallback((id: string, qty: number) => {
    setItems((prev) =>
      qty <= 0
        ? prev.filter((i) => i.id !== id)
        : prev.map((i) => (i.id === id ? { ...i, quantity: qty } : i))
    );
  }, []);

  const updateCustomization = useCallback((id: string, customization: ItemCustomization) => {
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, customization } : i))
    );
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const total = items.reduce((s, i) => s + i.price * i.quantity, 0);
  const count = items.reduce((s, i) => s + i.quantity, 0);

  const placeOrder = useCallback(
    (address: string, globalNotes: string, delivery?: { costo: number; barrio: string; tiempo: string }) => {
      const lines = items.map((i) => {
        let line = `• ${i.quantity}x ${i.name} — $${(i.price * i.quantity).toLocaleString("es-CO")}`;
        if (i.customization?.sin?.length) {
          line += `\n  ↳ Sin: ${i.customization.sin.join(", ")}`;
        }
        if (i.customization?.salsas?.length) {
          line += `\n  ↳ Salsas: ${i.customization.salsas.join(", ")}`;
        }
        if (i.customization?.notas?.trim()) {
          line += `\n  ↳ Nota: ${i.customization.notas.trim()}`;
        }
        return line;
      }).join("\n");

      const grandTotal = total + (delivery?.costo ?? 0);

      const parts = [
        "Hola! 🍔 Quiero hacer un pedido en *La Calle Burger*:",
        "",
        lines,
        "",
        `Subtotal: $${total.toLocaleString("es-CO")}`,
        delivery ? `🛵 Domicilio (${delivery.barrio}): $${delivery.costo.toLocaleString("es-CO")} · ${delivery.tiempo}` : "",
        `*Total: $${grandTotal.toLocaleString("es-CO")}*`,
        address ? `📍 Dirección: ${address}` : "",
        globalNotes ? `📝 Notas generales: ${globalNotes}` : "",
      ].filter(Boolean);

      window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(parts.join("\n"))}`,
        "_blank"
      );
    },
    [items, total]
  );

  return {
    items,
    addItem,
    updateQuantity,
    updateCustomization,
    clear,
    total,
    count,
    isOpen,
    setIsOpen,
    placeOrder,
  };
}
