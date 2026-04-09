"use client";
import Image from "next/image";

interface NavBarProps {
  activeSection: string;
  storeOpen: boolean;
  closeTime: string;
}

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <li>
      <a href={href} className={active ? "active" : ""}>
        {label}
      </a>
    </li>
  );
}

export default function NavBar({ activeSection, storeOpen, closeTime }: NavBarProps) {
  return (
    <nav>
      <div className="nav-logo">
        <Image
          src="/img-0.png"
          alt="La Calle Burger"
          width={44}
          height={44}
          style={{ objectFit: "contain", borderRadius: "50%" }}
        />
      </div>
      <ul className="nav-links">
        <NavLink href="#menu" label="Menú" active={activeSection === "menu"} />
        <NavLink href="#envenenadas" label="Envenenadas" active={activeSection === "envenenadas"} />
        <NavLink href="#galeria" label="Galería" active={activeSection === "galeria"} />
        <NavLink href="#combos" label="El Parche" active={activeSection === "combos"} />
        <NavLink href="#location" label="Ubicación" active={activeSection === "location"} />
        <li style={{ display: "flex", alignItems: "center", gap: 6, marginLeft: 8 }}>
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: storeOpen ? "#4ade80" : "#ef4444",
              display: "inline-block",
              boxShadow: storeOpen ? "0 0 6px #4ade80" : "none",
            }}
          />
          <span
            style={{
              fontSize: "0.75rem",
              color: storeOpen ? "#4ade80" : "#ef4444",
              fontFamily: "var(--font-barlow-condensed)",
              letterSpacing: 1,
            }}
          >
            {storeOpen ? `Abierto · cierra ${closeTime}` : "Cerrado"}
          </span>
        </li>
      </ul>
    </nav>
  );
}
