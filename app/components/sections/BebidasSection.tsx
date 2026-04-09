import Image from "next/image";

const COCTELES = [
  { name: "Cuba Libre", price: "$34.900", desc: "Coca Cola, limón y ron" },
  { name: "De Café", price: "$23.900", desc: "Helado, licor de café, leche y ron" },
  { name: "Ibiza", price: "$23.900", desc: "Curazao, limón, triple sec, tequila, Coronita", img: "/Cocteles/ibiza.jpg" },
  { name: "Gorgojo", price: "$23.900", desc: "Curazao, limón, triple sec, granadina, tequila" },
  { name: "Cúpido Rojo", price: "$29.900", desc: "Sirope de frutos rojos, zumo de limón, ron, soda" },
  { name: "Mojito de Sabores", price: "$23.900", desc: "Fresa y lichee, maracuyá & clásico", img: "/Cocteles/mojito.JPEG" },
  { name: "Piña Colada", price: "$23.900", desc: "Piña, leche, crema de coco, leche condensada & ron" },
  { name: "Tequila Sunrise", price: "$21.000", desc: "Jugo de naranja, granadilla & tequila" },
  { name: "Margarita Limón", price: "$21.000", desc: "Limón, triple sec, tequila" },
  { name: "Copa de Sangría", price: "$19.900", desc: "Jarra $66.900" },
  { name: "Copa de Vino", price: "$16.900", desc: "" },
] as { name: string; price: string; desc: string; img?: string }[];

const SODAS = [
  { name: "Mango Biche", desc: "Soda sabor mango" },
  { name: "Sandía", desc: "Soda sabor sandía" },
  { name: "Cereza", desc: "Soda sabor cereza" },
  { name: "Maracuyá", desc: "Soda sabor maracuyá" },
  { name: "Lichi Naranja", desc: "Soda sabor lichi & naranja" },
  { name: "Frutos Rojos", desc: "Soda sabor frutos rojos" },
];

const LIMONADAS = [
  { name: "Limonada de Coco", price: "$10.900" },
  { name: "Piña & Coco", price: "$10.900" },
  { name: "Cereza", price: "$10.500" },
  { name: "Mango Biche", price: "$10.500" },
  { name: "Natural", price: "$7.000" },
];

export default function BebidasSection() {
  return (
    <div className="section fade-up" id="drinks">
      <div className="section-header">
        <div className="section-num">05 — Barra</div>
        <h2 className="section-title">Cocteles &amp; Bebidas</h2>
        <div className="section-line"></div>
      </div>

      <h3 className="sub-section-label">Cocteles</h3>
      <div className="bebidas-grid" style={{ marginBottom: 40 }}>
        {COCTELES.map((c) => (
          <div key={c.name} className="bebida-card" style={c.img ? { padding: 0, overflow: "hidden" } : {}}>
            {c.img && (
              <div style={{ position: "relative", height: 180 }}>
                <Image src={c.img} alt={c.name} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 300px" />
              </div>
            )}
            <div style={c.img ? { padding: "12px 16px" } : {}}>
              <div className="bebida-name">{c.name}</div>
              <div className="bebida-price">{c.price}</div>
              {c.desc && <div className="bebida-desc">{c.desc}</div>}
            </div>
          </div>
        ))}
      </div>

      <h3 className="sub-section-label">Sodas saborizadas · $10.900</h3>
      <div className="bebidas-grid" style={{ marginBottom: 40 }}>
        {SODAS.map((b) => (
          <div key={b.name} className="bebida-card">
            <div className="bebida-name">{b.name}</div>
            <div className="bebida-desc">{b.desc}</div>
          </div>
        ))}
      </div>

      <h3 className="sub-section-label">Limonadas</h3>
      <div className="bebidas-grid">
        {LIMONADAS.map((l) => (
          <div key={l.name} className="bebida-card">
            <div className="bebida-name">{l.name}</div>
            <div className="bebida-price">{l.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
