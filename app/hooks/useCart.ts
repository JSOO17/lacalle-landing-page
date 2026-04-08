"use client";
import { useState, useCallback } from "react";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

const WHATSAPP_NUMBER = "573215307022";

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

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

  const clear = useCallback(() => setItems([]), []);

  const total = items.reduce((s, i) => s + i.price * i.quantity, 0);
  const count = items.reduce((s, i) => s + i.quantity, 0);

  /**
   * SCALABILITY POINT:
   * Para pasar a domicilios propios, reemplaza esta función con un
   * POST a tu API: fetch("/api/orders", { method: "POST", body: JSON.stringify({ items, address, notes }) })
   */
  const placeOrder = useCallback(
    (address: string, notes: string) => {
      const lines = items
        .map(
          (i) =>
            `• ${i.quantity}x ${i.name} — $${(i.price * i.quantity).toLocaleString("es-CO")}`
        )
        .join("\n");

      const parts = [
        "Hola! 🍔 Quiero hacer un pedido en *La Calle Burger*:",
        "",
        lines,
        "",
        `*Total: $${total.toLocaleString("es-CO")}*`,
        address ? `📍 Dirección: ${address}` : "",
        notes ? `📝 Notas: ${notes}` : "",
      ].filter(Boolean);

      const message = parts.join("\n");
      window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
        "_blank"
      );
    },
    [items, total]
  );

  return {
    items,
    addItem,
    updateQuantity,
    clear,
    total,
    count,
    isOpen,
    setIsOpen,
    placeOrder,
  };
}
