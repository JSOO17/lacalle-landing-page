"use client";

import { useEffect, useState } from "react";
import { useCart } from "./hooks/useCart";

import NavBar from "./components/sections/NavBar";
import Hero from "./components/sections/Hero";
import Stripe from "./components/sections/Stripe";
import BurgersSection from "./components/sections/BurgersSection";
import EntradasSection from "./components/sections/EntradasSection";
import OtrosPlatosSection from "./components/sections/OtrosPlatosSection";
import EnvenenadaSection from "./components/sections/EnvenenadaSection";
import BebidasSection from "./components/sections/BebidasSection";
import GaleriaSection from "./components/sections/GaleriaSection";
import CombosSection from "./components/sections/CombosSection";
import LocationSection from "./components/sections/LocationSection";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import CartButton from "./components/CartButton";

const NAV_SECTIONS = ["menu", "envenenadas", "drinks", "galeria", "combos", "location"];

export default function Home() {
  const [activeSection, setActiveSection] = useState("");
  const [storeOpen, setStoreOpen] = useState(false);
  const [closeTime, setCloseTime] = useState("");

  const { items, addItem, updateQuantity, updateCustomization, clear, total, count, isOpen, setIsOpen, placeOrder } = useCart();

  // Store open/closed indicator
  useEffect(() => {
    const check = () => {
      const now = new Date();
      const day = now.getDay();
      const h = now.getHours() * 60 + now.getMinutes();
      const open = 16 * 60;
      const closeWeek = 22 * 60;
      const closeFri = 24 * 60;
      const isFriSat = day === 5 || day === 6;
      const close = isFriSat ? closeFri : closeWeek;
      setStoreOpen(h >= open && h < close);
      setCloseTime(isFriSat ? "12am" : "10pm");
    };
    check();
    const t = setInterval(check, 60000);
    return () => clearInterval(t);
  }, []);

  // Scroll observers: fade-up animations + active nav section
  useEffect(() => {
    const fadeObserver = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in-view")),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".fade-up").forEach((el) => fadeObserver.observe(el));

    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    NAV_SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) navObserver.observe(el);
    });

    return () => { fadeObserver.disconnect(); navObserver.disconnect(); };
  }, []);

  return (
    <>
      <NavBar activeSection={activeSection} storeOpen={storeOpen} closeTime={closeTime} />
      <Hero />
      <Stripe />
      <BurgersSection addItem={addItem} />
      <EntradasSection addItem={addItem} />
      <OtrosPlatosSection addItem={addItem} />
      <EnvenenadaSection />
      <BebidasSection />
      <GaleriaSection />
      <CombosSection />
      <LocationSection />
      <Footer />

      <Cart
        items={items}
        total={total}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onUpdateQuantity={updateQuantity}
        onUpdateCustomization={updateCustomization}
        onPlaceOrder={placeOrder}
        onClear={clear}
      />
      <CartButton count={count} total={total} onClick={() => setIsOpen(true)} />
    </>
  );
}
