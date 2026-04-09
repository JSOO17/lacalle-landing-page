import Image from "next/image";

const COCTELES = [
  { name: "Cuba Libre", price: "$34.900", desc: "Coca Cola, limón y ron" },
  { name: "De Café", price: "$23.900", desc: "Helado, licor de café, leche y ron" },
  { name: "Ibiza", price: "$23.900", desc: "Curazao, limón, triple sec, tequila, Coronita", img: "/Cocteles/ibiza.jpg" },
  { name: "Gorgojo", price: "$23.900", desc: "Curazao, limón, triple sec, granadina, tequila" },
  { name: "Cúpido Rojo", price: "$29.900", desc: "Sirope de frutos rojos, zumo de limón, ron, soda" },
  { name: "Mojito de Sabores", price: "$23.900", desc: "Fresa y lichee, maracuyá & clásico", img: "/Cocteles/mojito.JPEG" },
  { name: "Mojito de Jagermeister", price: "$35.900", desc: "Hierbabuena, limón, endulzante, ron & Jagermeister" },
  { name: "Piña Colada", price: "$23.900", desc: "Piña, leche, crema de coco, leche condensada & ron" },
  { name: "Tequila Sunrise", price: "$21.000", desc: "Jugo de naranja, granadilla & tequila" },
  { name: "Margarita Limón", price: "$21.000", desc: "Limón, triple sec, tequila" },
] as { name: string; price: string; desc: string; img?: string }[];

const SANGRIA = [
  { name: "Jarra de Sangría", price: "$66.900" },
  { name: "Copa de Sangría", price: "$19.900" },
  { name: "Copa de Vino", price: "$16.900" },
];

const JUGOS = [
  "Fresa", "Maracuyá", "Mango", "Mora",
  "Piña con Hierbabuena", "Fresa Lichee", "Mango Maracuyá",
];

const SODAS = [
  "Mango Biche", "Sandía", "Cereza", "Maracuyá", "Lichi Naranja", "Frutos Rojos",
];

const LIMONADAS = [
  { name: "Limonada de Coco", price: "$10.900" },
  { name: "Piña & Coco", price: "$10.900" },
  { name: "Cereza", price: "$10.500" },
  { name: "Mango Biche", price: "$10.500" },
  { name: "Natural", price: "$7.000" },
];

const CERVEZAS = [
  { name: "BBC", price: "$17.900" },
  { name: "Corona", price: "$13.000" },
  { name: "Club Colombia", price: "$9.700" },
  { name: "Águila Light", price: "$9.000" },
  { name: "Águila Tradicional", price: "$8.700" },
  { name: "Michelado", price: "$2.800" },
];

const LICORES = [
  { name: "Black & White", botella: "$121.000", media: "$61.000" },
  { name: "Jagermeister", botella: "$193.000", media: "$122.000" },
  { name: "Ron Caldas 3 años", botella: "$111.700", media: "$55.700" },
  { name: "Ron Caldas 8 años", botella: "$185.000", media: "$95.700" },
  { name: "Ron Medellín 3 años", botella: "$99.700", media: "$56.000" },
  { name: "Antioqueño Rojo", botella: "$91.000", media: "$50.700" },
  { name: "Antioqueño Azul", botella: "$96.500", media: "$54.700" },
];

function BebidaSubHeader({ label, badge }: { label: string; badge?: string }) {
  return (
    <div className="bebida-subheader">
      <span className="bebida-subheader-label">{label}</span>
      {badge && <span className="bebida-subheader-badge">{badge}</span>}
      <div className="bebida-subheader-line" />
    </div>
  );
}

export default function BebidasSection() {
  return (
    <div className="section fade-up" id="drinks">
      <div className="section-header">
        <div className="section-num">05 — Barra</div>
        <h2 className="section-title">Cocteles &amp; Bebidas</h2>
        <div className="section-line"></div>
      </div>

      {/* COCTELES */}
      <BebidaSubHeader label="Cocteles" />
      <div className="bebidas-grid bebidas-grid-cocteles" style={{ marginBottom: 48 }}>
        {COCTELES.map((c) => (
          <div key={c.name} className={`bebida-card ${c.img ? "bebida-card-photo" : ""}`}>
            {c.img && (
              <div className="bebida-card-img-wrap">
                <Image src={c.img} alt={c.name} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 220px" />
              </div>
            )}
            <div className="bebida-card-body">
              <div className="bebida-name">{c.name}</div>
              <div className="bebida-price">{c.price}</div>
              {c.desc && <div className="bebida-desc">{c.desc}</div>}
            </div>
          </div>
        ))}
        {/* Sangría separada */}
        <div className="bebida-card">
          <div className="bebida-card-body">
            <div className="bebida-name">Sangría</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 8 }}>
              {SANGRIA.map((s) => (
                <div key={s.name} style={{ display: "flex", justifyContent: "space-between", fontSize: "0.82rem" }}>
                  <span style={{ color: "#777" }}>{s.name}</span>
                  <span style={{ fontFamily: "var(--font-bebas)", fontSize: "1rem", color: "var(--amarillo)" }}>{s.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CERVEZAS + CUBETAZO */}
      <div className="bebidas-two-col" style={{ marginBottom: 48 }}>
        <div>
          <BebidaSubHeader label="Cervezas" />
          <div className="bebidas-grid bebidas-grid-sm">
            {CERVEZAS.map((c) => (
              <div key={c.name} className="bebida-card bebida-card-minimal">
                <div className="bebida-name">{c.name}</div>
                <div className="bebida-price bebida-price-sm">{c.price}</div>
              </div>
            ))}
          </div>
          <div className="bebida-card bebida-card-minimal" style={{ marginTop: 8, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <div className="bebida-name">Cubetazo x5</div>
              <div className="bebida-desc">Costeñita &amp; Águila</div>
            </div>
            <div className="bebida-price">$25.000</div>
          </div>
        </div>

        <div>
          <BebidaSubHeader label="Sin alcohol" />
          <div className="bebidas-grid bebidas-grid-sm" style={{ marginBottom: 16 }}>
            {LIMONADAS.map((l) => (
              <div key={l.name} className="bebida-card bebida-card-minimal">
                <div className="bebida-name">{l.name}</div>
                <div className="bebida-price bebida-price-sm">{l.price}</div>
              </div>
            ))}
          </div>
          <BebidaSubHeader label="Jugos naturales" badge="$10.900 c/u" />
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {JUGOS.map((j) => (
              <span key={j} style={{
                fontSize: "0.8rem", color: "#888",
                background: "#141414", padding: "5px 10px",
                borderRadius: 4, border: "1px solid #1e1e1e",
                fontFamily: "var(--font-barlow-condensed)", letterSpacing: 0.5,
              }}>{j}</span>
            ))}
          </div>
          <div style={{ marginTop: 4, fontSize: "0.72rem", color: "#444", letterSpacing: 1, textTransform: "uppercase" }}>
            En agua o en leche
          </div>
          <BebidaSubHeader label="Sodas saborizadas" badge="$10.900 c/u" />
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {SODAS.map((s) => (
              <span key={s} style={{
                fontSize: "0.8rem", color: "#888",
                background: "#141414", padding: "5px 10px",
                borderRadius: 4, border: "1px solid #1e1e1e",
                fontFamily: "var(--font-barlow-condensed)", letterSpacing: 0.5,
              }}>{s}</span>
            ))}
          </div>
        </div>
      </div>

      {/* LICORES */}
      <BebidaSubHeader label="Licores" />
      <div style={{ marginBottom: 8, display: "flex", gap: 12 }}>
        <span style={{ fontSize: "0.75rem", color: "var(--amarillo)", background: "rgba(245,197,24,0.08)", border: "1px solid rgba(245,197,24,0.2)", padding: "3px 10px", borderRadius: 2, fontFamily: "var(--font-barlow-condensed)", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>
          Shot de Barra · Shot de Jager
        </span>
      </div>
      <div className="licores-table">
        <div className="licores-header">
          <span>Producto</span>
          <span>Botella</span>
          <span>Media</span>
        </div>
        {LICORES.map((l) => (
          <div key={l.name} className="licores-row">
            <span className="licores-name">{l.name}</span>
            <span className="licores-price">{l.botella}</span>
            <span className="licores-price">{l.media}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
