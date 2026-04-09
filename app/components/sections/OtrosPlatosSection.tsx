import Image from "next/image";
import { CartItem } from "../../hooks/useCart";

interface Props {
  addItem: (item: Omit<CartItem, "quantity">) => void;
}

const ALITAS_FLAVORS = ["BBQ", "BBQ de Uchuva", "BBQ Picante", "Miel Ajo", "Miel Mostaza", "Limón & Pimienta"];

export default function OtrosPlatosSection({ addItem }: Props) {
  return (
    <div className="section fade-up" style={{ paddingTop: 0 }}>
      <div className="section-header">
        <div className="section-num">03 — Otros Platos</div>
        <h2 className="section-title">Otros Platos</h2>
        <div className="section-line"></div>
      </div>
      <div className="menu-grid">

        <div className="menu-item">
          <div className="menu-item-top">
            <div className="menu-item-name">Alitas de Pollo</div>
            <div className="menu-item-price"></div>
          </div>
          <div className="menu-item-desc" style={{ marginBottom: 12 }}>
            Apanadas y bañadas en tu salsa favorita, acompañadas de papitas y mayo ajo.
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 12 }}>
            {ALITAS_FLAVORS.map((s) => (
              <span key={s} className="flavor-tag">{s}</span>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <div className="price-row">
              <span>Combo x12 unid</span>
              <span className="price-row-amount">$38.900</span>
            </div>
            <div className="price-row">
              <span>Combo x18 unid</span>
              <span className="price-row-amount">$54.500</span>
            </div>
            <div className="price-row">
              <span>Combo x24 unid</span>
              <span className="price-row-amount">$70.500</span>
            </div>
          </div>
          <span className="menu-item-tag hot">Las favoritas</span>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 12 }}>
            <button className="add-to-cart-btn" onClick={() => addItem({ id: "alitas-x12", name: "Alitas x12", price: 38900, removable: [], salsasMax: 2 })}>+ x12</button>
            <button className="add-to-cart-btn" onClick={() => addItem({ id: "alitas-x18", name: "Alitas x18", price: 54500, removable: [], salsasMax: 3 })}>+ x18</button>
            <button className="add-to-cart-btn" onClick={() => addItem({ id: "alitas-x24", name: "Alitas x24", price: 70500, removable: [], salsasMax: 4 })}>+ x24</button>
          </div>
        </div>

        <div className="menu-item">
          <div className="menu-item-top">
            <div className="menu-item-name">Picadas</div>
            <div className="menu-item-price"></div>
          </div>
          <div className="menu-item-desc" style={{ marginBottom: 14 }}>
            Costilla, mazorca, chorizo, carne asada, chicharrones, plátano dulce, arepas, guacamole &amp; papa criolla.
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <div className="price-row">
              <span>Personal</span>
              <span className="price-row-amount">$38.500</span>
            </div>
            <div className="price-row">
              <span>Para dos</span>
              <span className="price-row-amount">$60.500</span>
            </div>
          </div>
          <span className="menu-item-tag fav">Pa&apos; compartir</span>
        </div>

        <div className="menu-item">
          <div className="menu-item-top">
            <div className="menu-item-name">Costillas de Cerdo</div>
            <div className="menu-item-price">$37.700</div>
          </div>
          <div className="menu-item-desc">
            350gr de jugosas costillas de cerdo, bañadas en salsa BBQ de la casa, con 4 arepas &amp; papitas.
          </div>
          <span className="menu-item-tag new">De la casa</span>
          <button className="add-to-cart-btn" onClick={() => addItem({ id: "costillas", name: "Costillas de Cerdo", price: 37700, removable: ["Salsa BBQ", "Arepas"] })}>+ Agregar</button>
        </div>

        <div className="menu-item menu-item-with-photo">
          <div style={{ position: "relative", height: 200 }}>
            <Image src="/Platos/papascalle.jpeg" alt="Papas Callejeras" fill style={{ objectFit: "cover", objectPosition: "center center" }} sizes="(max-width: 768px) 100vw, 400px" />
          </div>
          <div className="menu-item-body">
            <div className="menu-item-top">
              <div className="menu-item-name">Papas Callejeras</div>
              <div className="menu-item-price">$33.700</div>
            </div>
            <div className="menu-item-desc">
              Papa a la francesa en queso cheddar, tocineta parrillada, chorizo, plátano maduro, chicharrón en limón pimienta, sour cream &amp; guacamole.
            </div>
            <span className="menu-item-tag hot">La más cargada</span>
            <button className="add-to-cart-btn" onClick={() => addItem({ id: "papas-callejeras", name: "Papas Callejeras", price: 33700, removable: ["Queso cheddar", "Tocineta", "Chorizo", "Plátano maduro", "Chicharrón", "Sour cream", "Guacamole"] })}>+ Agregar</button>
          </div>
        </div>

        <div className="menu-item menu-item-with-photo">
          <div style={{ position: "relative", height: 200 }}>
            <Image src="/Platos/especiales.jpeg" alt="Especiales" fill style={{ objectFit: "cover", objectPosition: "center center" }} sizes="(max-width: 768px) 100vw, 400px" />
          </div>
          <div className="menu-item-body">
            <div className="menu-item-top">
              <div className="menu-item-name">Especiales</div>
              <div className="menu-item-price">$30.000</div>
            </div>
            <div className="menu-item-desc" style={{ marginBottom: 14 }}>
              Carne o pollo · 250gr. Acompañado de yuca, patacón o papas a la francesa, ensalada de la casa.
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              <span className="flavor-tag">2 salsas de tu preferencia</span>
            </div>
            <span className="menu-item-tag">Carne o pollo</span>
            <button className="add-to-cart-btn" onClick={() => addItem({ id: "especiales", name: "Especiales", price: 30000, removable: ["Ensalada de la casa"] })}>+ Agregar</button>
          </div>
        </div>

        <div className="menu-item menu-item-with-photo">
          <div style={{ position: "relative", height: 200 }}>
            <Image src="/Platos/brownieconhelado.jpeg" alt="Postres" fill style={{ objectFit: "cover", objectPosition: "center center" }} sizes="(max-width: 768px) 100vw, 400px" />
          </div>
          <div className="menu-item-body">
            <div className="menu-item-top">
              <div className="menu-item-name">Postres</div>
              <div className="menu-item-price"></div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                  <span style={{ fontFamily: "var(--font-barlow-condensed)", fontSize: 16, fontWeight: 700 }}>Brownie con Helado</span>
                  <span style={{ fontFamily: "var(--font-bebas)", fontSize: 18, color: "var(--amarillo)" }}>$13.000</span>
                </div>
                <div className="menu-item-desc">Clásico brownie caliente, con helado y salsa de arequipe.</div>
                <button className="add-to-cart-btn" style={{ marginLeft: 0, marginTop: 8 }} onClick={() => addItem({ id: "brownie", name: "Brownie con Helado", price: 13000, isDessert: true, removable: [] })}>+ Agregar</button>
              </div>
              <div style={{ borderTop: "1px solid #1e1e1e", paddingTop: 10 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                  <span style={{ fontFamily: "var(--font-barlow-condensed)", fontSize: 16, fontWeight: 700 }}>Malteada</span>
                  <span style={{ fontFamily: "var(--font-bebas)", fontSize: 18, color: "var(--amarillo)" }}>$13.900</span>
                </div>
                <div className="menu-item-desc">Malteada de cookies &amp; Cream con crema chantilly.</div>
                <button className="add-to-cart-btn" style={{ marginLeft: 0, marginTop: 8 }} onClick={() => addItem({ id: "malteada", name: "Malteada", price: 13900, isDessert: true, removable: [] })}>+ Agregar</button>
              </div>
            </div>
            <span className="menu-item-tag">Para cerrar</span>
          </div>
        </div>

      </div>
    </div>
  );
}
