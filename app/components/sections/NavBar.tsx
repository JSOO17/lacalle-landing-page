"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface NavBarProps {
  activeSection: string;
  storeOpen: boolean;
  closeTime: string;
}

const NAV_ITEMS = [
  { href: "#menu", label: "Menú" },
  { href: "#envenenadas", label: "Envenenadas" },
  { href: "#galeria", label: "Galería" },
  { href: "#combos", label: "El Parche" },
  { href: "#location", label: "Ubicación" },
];

function NavLink({ href, label, active, onClick }: { href: string; label: string; active: boolean; onClick?: () => void }) {
  return (
    <li>
      <a href={href} className={active ? "active" : ""} onClick={onClick}>
        {label}
      </a>
    </li>
  );
}

export default function NavBar({ activeSection, storeOpen, closeTime }: NavBarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloquea scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <nav className={scrolled ? "scrolled" : ""}>
        <div className="nav-logo">
          <Image
            src="/img-0.png"
            alt="La Calle Burger"
            width={44}
            height={44}
            style={{ objectFit: "contain", borderRadius: "50%" }}
          />
        </div>

        {/* Desktop links */}
        <ul className="nav-links">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} active={activeSection === item.href.replace("#", "")} />
          ))}
          <li style={{ display: "flex", alignItems: "center", gap: 6, marginLeft: 8 }}>
            <span style={{
              width: 8, height: 8, borderRadius: "50%",
              background: storeOpen ? "#4ade80" : "#ef4444",
              display: "inline-block",
              boxShadow: storeOpen ? "0 0 6px #4ade80" : "none",
            }} />
            <span style={{ fontSize: "0.75rem", color: storeOpen ? "#4ade80" : "#ef4444", fontFamily: "var(--font-barlow-condensed)", letterSpacing: 1 }}>
              {storeOpen ? `Abierto · cierra ${closeTime}` : "Cerrado"}
            </span>
          </li>
        </ul>

        {/* Hamburger button — solo mobile */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          <span className={`hamburger-line ${menuOpen ? "open" : ""}`} />
          <span className={`hamburger-line ${menuOpen ? "open" : ""}`} />
          <span className={`hamburger-line ${menuOpen ? "open" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="mobile-nav-overlay" onClick={close} aria-hidden="true" />
      )}
      <div className={`mobile-nav-drawer ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
        {/* Store status */}
        <div className="mobile-nav-status">
          <span style={{
            width: 8, height: 8, borderRadius: "50%",
            background: storeOpen ? "#4ade80" : "#ef4444",
            display: "inline-block",
            boxShadow: storeOpen ? "0 0 6px #4ade80" : "none",
          }} />
          <span style={{ fontSize: "0.8rem", color: storeOpen ? "#4ade80" : "#ef4444", fontFamily: "var(--font-barlow-condensed)", letterSpacing: 1 }}>
            {storeOpen ? `Abierto · cierra ${closeTime}` : "Cerrado"}
          </span>
        </div>

        <ul className="mobile-nav-links">
          {NAV_ITEMS.map((item, i) => (
            <li key={item.href} style={{ animationDelay: `${i * 55}ms` }}>
              <a
                href={item.href}
                className={activeSection === item.href.replace("#", "") ? "active" : ""}
                onClick={close}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="tel:+573215307022" className="mobile-nav-phone">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
          321-530-7022
        </a>
      </div>
    </>
  );
}
