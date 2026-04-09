import Image from "next/image";

export default function CombosSection() {
  return (
    <div className="section fade-up" id="combos" style={{ paddingTop: 0 }}>
      <div className="section-header">
        <div className="section-num">07 — Combos</div>
        <h2 className="section-title">Combos</h2>
        <div className="section-line"></div>
      </div>
      <div className="menu-grid">

        <div className="menu-item">
          <div className="menu-item-top">
            <div className="menu-item-name">Todas las burgers</div>
            <div className="menu-item-price">$25.000</div>
          </div>
          <div className="menu-item-desc">Válido de Martes a Jueves. Excepto Doble Carne.</div>
          <span className="menu-item-tag hot">Mar — Jue</span>
        </div>

        <div className="menu-item">
          <div className="menu-item-top">
            <div className="menu-item-name">Combo más pedido</div>
            <div className="menu-item-price">$69.900</div>
          </div>
          <div className="menu-item-desc">2 Burgers + 2 Papas + 2 Limonadas.</div>
          <span className="menu-item-tag new">El favorito</span>
        </div>

        <div className="menu-item menu-item-with-photo">
          <div style={{ position: "relative", height: 200 }}>
            <Image src="/combos/combopacompartire.jpeg" alt="Combo pa' compartir" fill style={{ objectFit: "cover", objectPosition: "center center" }} sizes="(max-width: 768px) 100vw, 400px" />
          </div>
          <div className="menu-item-body">
            <div className="menu-item-top">
              <div className="menu-item-name">Combo pa&apos; compartir</div>
              <div className="menu-item-price">$45.900</div>
            </div>
            <div className="menu-item-desc">2 Classic + 2 Papas + 2 Limonadas.</div>
            <span className="menu-item-tag">Para dos</span>
          </div>
        </div>

        <div className="menu-item">
          <div className="menu-item-top">
            <div className="menu-item-name">Jueves de Ñapa 🍗</div>
            <div className="menu-item-price">¡De ñapa!</div>
          </div>
          <div className="menu-item-desc">Pide x18 o x24 alitas y te damos <strong>6 de ñapa</strong>. Solo los jueves.</div>
          <span className="menu-item-tag hot">Solo Jueves</span>
        </div>

      </div>
    </div>
  );
}
