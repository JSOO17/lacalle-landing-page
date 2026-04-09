import Image from "next/image";
import { CartItem } from "../../hooks/useCart";

interface Props {
  addItem: (item: Omit<CartItem, "quantity">) => void;
}

export default function EntradasSection({ addItem }: Props) {
  return (
    <div className="section fade-up" style={{ paddingTop: 0 }}>
      <div className="section-header">
        <div className="section-num">02 — Entradas</div>
        <h2 className="section-title">Para picar</h2>
        <div className="section-line"></div>
      </div>
      <div className="menu-grid">

        <div className="menu-item">
          <div className="menu-item-top">
            <div className="menu-item-name">Deditos de Queso</div>
            <div className="menu-item-price">$20.700</div>
          </div>
          <div className="menu-item-desc">Dedos de queso mozzarella apanados, con salsa miel mostaza.</div>
          <span className="menu-item-tag hot">Favorita</span>
          <button className="add-to-cart-btn" onClick={() => addItem({ id: "deditos-queso", name: "Deditos de Queso", price: 20700, removable: ["Salsa miel mostaza"] })}>+ Agregar</button>
        </div>

        <div className="menu-item">
          <div className="menu-item-top">
            <div className="menu-item-name">Empanaditas</div>
            <div className="menu-item-price">$17.200</div>
          </div>
          <div className="menu-item-desc">Empanadas de carne y maíz, doradas y crujientes, acompañadas con guacamole.</div>
          <span className="menu-item-tag">Bien colombianas</span>
          <button className="add-to-cart-btn" onClick={() => addItem({ id: "empanaditas", name: "Empanaditas", price: 17200, removable: ["Guacamole"] })}>+ Agregar</button>
        </div>

        <div className="menu-item">
          <div className="menu-item-top">
            <div className="menu-item-name">Chicharrones</div>
            <div className="menu-item-price">$18.000</div>
          </div>
          <div className="menu-item-desc">Chicarrón carnudo, bañado en salsa BBQ &amp; con papas a la francesa.</div>
          <span className="menu-item-tag">Crocante</span>
          <button className="add-to-cart-btn" onClick={() => addItem({ id: "chicharrones", name: "Chicharrones", price: 18000, removable: ["Salsa BBQ"] })}>+ Agregar</button>
        </div>

        <div className="menu-item menu-item-with-photo">
          <div style={{ position: "relative", height: 200 }}>
            <Image src="/Platos/papaspulledpork.jpeg" alt="Papas Pulled Pork" fill style={{ objectFit: "cover", objectPosition: "center center" }} sizes="(max-width: 768px) 100vw, 400px" />
          </div>
          <div className="menu-item-body">
            <div className="menu-item-top">
              <div className="menu-item-name">Papas Pulled Pork</div>
              <div className="menu-item-price">$15.900</div>
            </div>
            <div className="menu-item-desc">Papitas a la francesa cargadas de pulled pork, salsa BBQ &amp; mayo ajo.</div>
            <span className="menu-item-tag">Cargadas</span>
            <button className="add-to-cart-btn" onClick={() => addItem({ id: "papas-pulled-pork", name: "Papas Pulled Pork", price: 15900, removable: ["Pulled pork", "Salsa BBQ", "Mayo ajo"] })}>+ Agregar</button>
          </div>
        </div>

        <div className="menu-item menu-item-with-photo">
          <div style={{ position: "relative", height: 200 }}>
            <Image src="/Platos/papasquesocheddar.jpeg" alt="Papas Cheddar & Tocineta" fill style={{ objectFit: "cover", objectPosition: "center center" }} sizes="(max-width: 768px) 100vw, 400px" />
          </div>
          <div className="menu-item-body">
            <div className="menu-item-top">
              <div className="menu-item-name">Papas Cheddar &amp; Tocineta</div>
              <div className="menu-item-price">$15.900</div>
            </div>
            <div className="menu-item-desc">Papitas a la francesa, queso cheddar, tocineta &amp; salsa BBQ.</div>
            <span className="menu-item-tag">Clásica</span>
            <button className="add-to-cart-btn" onClick={() => addItem({ id: "papas-cheddar", name: "Papas Cheddar & Tocineta", price: 15900, removable: ["Queso cheddar", "Tocineta", "Salsa BBQ"] })}>+ Agregar</button>
          </div>
        </div>

        <div className="menu-item menu-item-with-photo">
          <div style={{ position: "relative", height: 200 }}>
            <Image src="/Platos/papasmayoajo.jpeg" alt="Papas Mayo Ajo" fill style={{ objectFit: "cover", objectPosition: "center center" }} sizes="(max-width: 768px) 100vw, 400px" />
          </div>
          <div className="menu-item-body">
            <div className="menu-item-top">
              <div className="menu-item-name">Papas Mayo Ajo</div>
              <div className="menu-item-price">$15.900</div>
            </div>
            <div className="menu-item-desc">Papa a la francesa, queso fundido &amp; maduritos.</div>
            <span className="menu-item-tag">Sabor & contraste</span>
            <button className="add-to-cart-btn" onClick={() => addItem({ id: "papas-mayo-ajo", name: "Papas Mayo Ajo", price: 15900, removable: ["Queso fundido", "Plátano maduro"] })}>+ Agregar</button>
          </div>
        </div>

      </div>
    </div>
  );
}
