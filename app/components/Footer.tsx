import Image from "next/image";

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.75a8.18 8.18 0 0 0 4.78 1.52V6.82a4.85 4.85 0 0 1-1.01-.13z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

const LINKS = [
  { label: "Menú", href: "#menu" },
  { label: "Envenenadas", href: "#envenenadas" },
  { label: "Galería", href: "#galeria" },
  { label: "El Parche", href: "#combos" },
  { label: "Ubicación", href: "#location" },
];

const HOURS = [
  { days: "Lun – Jue", hours: "4pm – 10pm" },
  { days: "Vie – Sáb", hours: "4pm – 12am" },
  { days: "Dom", hours: "4pm – 10pm" },
];

export default function Footer() {
  return (
    <footer className="footer-new">
      {/* Main footer grid */}
      <div className="footer-grid">
        {/* Brand column */}
        <div className="footer-brand">
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
            <Image
              src="/img-0.png"
              alt="La Calle Burger"
              width={52}
              height={52}
              style={{ objectFit: "contain", borderRadius: "50%" }}
            />
            <div>
              <div style={{ fontFamily: "var(--font-bebas)", fontSize: 22, letterSpacing: 3, color: "var(--amarillo)", lineHeight: 1 }}>
                La Calle Burger
              </div>
              <div style={{ fontSize: 11, color: "#555", letterSpacing: 2, textTransform: "uppercase", marginTop: 3 }}>
                Medellín · Burgers &amp; Bar
              </div>
            </div>
          </div>
          <p style={{ fontSize: 13, color: "#555", lineHeight: 1.7, maxWidth: 240 }}>
            Donde te parchas, comés de verdad y la pasás bueno. Burgers artesanales en el corazón del barrio.
          </p>
          {/* Socials */}
          <div className="footer-socials">
            <a href="#" aria-label="Instagram" className="footer-social-icon">
              <InstagramIcon />
            </a>
            <a href="#" aria-label="TikTok" className="footer-social-icon">
              <TikTokIcon />
            </a>
            <a
              href="https://wa.me/573215307022"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="footer-social-icon footer-social-wa"
            >
              <WhatsAppIcon />
            </a>
          </div>
        </div>

        {/* Nav links column */}
        <div className="footer-col">
          <div className="footer-col-title">Menú rápido</div>
          <ul className="footer-nav-list">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Hours & contact column */}
        <div className="footer-col">
          <div className="footer-col-title">Horarios</div>
          <ul className="footer-hours-list">
            {HOURS.map((h) => (
              <li key={h.days}>
                <span className="footer-hours-day">{h.days}</span>
                <span className="footer-hours-time">{h.hours}</span>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: 20 }}>
            <div className="footer-col-title" style={{ marginBottom: 10 }}>Contacto</div>
            <a href="tel:+573215307022" className="footer-phone">321-530-7022</a>
            <div style={{ fontSize: 12, color: "#444", marginTop: 4 }}>Av 33 #76-132 · Medellín</div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <span>© 2025 La Calle Burger</span>
        <span className="footer-bottom-dot">·</span>
        <span>Pa&apos; comer y parchar</span>
        <span className="footer-bottom-dot">·</span>
        <a
          href="https://maps.app.goo.gl/FsNfkX6zCQb43NtV8"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#444", textDecoration: "none" }}
        >
          Medellín, Colombia
        </a>
      </div>
    </footer>
  );
}
