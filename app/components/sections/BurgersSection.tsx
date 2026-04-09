import Image from "next/image";
import { CartItem } from "../../hooks/useCart";

interface Props {
  addItem: (item: Omit<CartItem, "quantity">) => void;
}

export default function BurgersSection({ addItem }: Props) {
  return (
    <div className="section fade-up" id="menu">
      <div className="section-header">
        <div className="section-num">01 — Carta</div>
        <h2 className="section-title">Burgers de la Casa</h2>
        <div className="section-line"></div>
      </div>
      <div className="menu-grid">

        <div className="menu-item menu-item-with-photo">
          <div style={{ position: "relative", height: 200 }}>
            <Image src="/Platos/img-1.png" alt="La Calle" fill style={{ objectFit: "cover", objectPosition: "center 40%" }} sizes="(max-width: 768px) 100vw, 400px" />
          </div>
          <div className="menu-item-body">
            <div className="menu-item-top">
              <div className="menu-item-name">La Calle ★</div>
              <div className="menu-item-price">$35.500</div>
            </div>
            <div className="menu-item-desc">
              Pan brioche, 150gr de carne artesanal, queso mozzarella fundido, cebolla caramelizada, tocineta, chorizo, guacamole, tomate &amp; lechuga.
            </div>
            <span className="menu-item-tag fav">★ La más barrio</span>
            <button className="add-to-cart-btn" onClick={() => addItem({ id: "la-calle", name: "La Calle ★", price: 35500, removable: ["Queso mozzarella", "Cebolla caramelizada", "Tocineta", "Chorizo", "Guacamole", "Tomate", "Lechuga"] })}>+ Agregar</button>
          </div>
        </div>

        <div className="menu-item menu-item-with-photo">
          <div style={{ position: "relative", height: 200 }}>
            <Image src="/Platos/img-2.jpg" alt="Queen" fill style={{ objectFit: "cover", objectPosition: "center 35%" }} sizes="(max-width: 768px) 100vw, 400px" />
          </div>
          <div className="menu-item-body">
            <div className="menu-item-top">
              <div className="menu-item-name">Queen ★</div>
              <div className="menu-item-price">$29.900</div>
            </div>
            <div className="menu-item-desc">
              Pan brioche, 200gr de carne artesanal, mermelada de tocineta y cebolla, MIX de queso cheddar y mozzarella, lechuga &amp; tomate.
            </div>
            <span className="menu-item-tag fav">★ La más jugosa</span>
            <button className="add-to-cart-btn" onClick={() => addItem({ id: "queen", name: "Queen ★", price: 29900, removable: ["Tocineta", "Cebolla", "Queso cheddar", "Queso mozzarella", "Lechuga", "Tomate"] })}>+ Agregar</button>
          </div>
        </div>

        <div className="menu-item menu-item-with-photo">
          <div style={{ position: "relative", height: 200 }}>
            <Image src="/Platos/img-3.png" alt="De Costilla" fill style={{ objectFit: "cover", objectPosition: "center 70%" }} sizes="(max-width: 768px) 100vw, 400px" />
          </div>
          <div className="menu-item-body">
            <div className="menu-item-top">
              <div className="menu-item-name">De Costilla</div>
              <div className="menu-item-price">$35.500</div>
            </div>
            <div className="menu-item-desc">
              Pan brioche, 150gr de carne artesanal, costilla desmechada en BBQ, queso mozzarella, guacamole, tomate &amp; lechuga.
            </div>
            <span className="menu-item-tag new">Del lugar</span>
            <button className="add-to-cart-btn" onClick={() => addItem({ id: "de-costilla", name: "De Costilla", price: 35500, removable: ["Queso mozzarella", "Guacamole", "Tomate", "Lechuga"] })}>+ Agregar</button>
          </div>
        </div>

        <div className="menu-item menu-item-with-photo">
          <div style={{ position: "relative", height: 200 }}>
            <Image src="/Platos/chicharron.jpeg" alt="De Chicharrón" fill style={{ objectFit: "cover", objectPosition: "center center" }} sizes="(max-width: 768px) 100vw, 400px" />
          </div>
          <div className="menu-item-body">
            <div className="menu-item-top">
              <div className="menu-item-name">De Chicharrón ★</div>
              <div className="menu-item-price">$36.500</div>
            </div>
            <div className="menu-item-desc">
              Pan brioche, 150gr de carne artesanal, chicharrones carnudos en BBQ, pico de gallo, Sour Cream, plátano dulce &amp; lechuga.
            </div>
            <span className="menu-item-tag new">★ Nuestra master</span>
            <button className="add-to-cart-btn" onClick={() => addItem({ id: "de-chicharron", name: "De Chicharrón ★", price: 36500, removable: ["Pico de gallo", "Sour cream", "Plátano dulce", "Lechuga"] })}>+ Agregar</button>
          </div>
        </div>

        <div className="menu-item">
          <div className="menu-item-top">
            <div className="menu-item-name">Doble Carne</div>
            <div className="menu-item-price">$42.500</div>
          </div>
          <div className="menu-item-desc">
            300gr de carne artesanal, bañada en queso cheddar, doble tocineta parrillada, cebolla crispy, tomate y lechuga.
          </div>
          <span className="menu-item-tag hot">La más grande</span>
          <button className="add-to-cart-btn" onClick={() => addItem({ id: "doble-carne", name: "Doble Carne", price: 42500, removable: ["Queso cheddar", "Tocineta", "Cebolla crispy", "Tomate", "Lechuga"] })}>+ Agregar</button>
        </div>

        <div className="menu-item">
          <div className="menu-item-top">
            <div className="menu-item-name">Love</div>
            <div className="menu-item-price">$29.900</div>
          </div>
          <div className="menu-item-desc">
            Pan brioche, 150gr de carne artesanal, queso cheddar derretido, doble tocineta parrillada, tomate, lechuga &amp; montada sobre papas a la francesa bañadas en queso cheddar y tocineta.
          </div>
          <span className="menu-item-tag fav">Con papas incluidas</span>
          <button className="add-to-cart-btn" onClick={() => addItem({ id: "love", name: "Love", price: 29900, removable: ["Queso cheddar", "Tocineta", "Tomate", "Lechuga"] })}>+ Agregar</button>
        </div>

        <div className="menu-item">
          <div className="menu-item-top">
            <div className="menu-item-name">Francesa</div>
            <div className="menu-item-price">$35.500</div>
          </div>
          <div className="menu-item-desc">
            Pan brioche, 150gr de carne artesanal, tocineta BBQ, cebolla caramelizada, guacamole y tomate, sobre papas en queso cheddar fundido.
          </div>
          <span className="menu-item-tag">Con papas incluidas</span>
          <button className="add-to-cart-btn" onClick={() => addItem({ id: "francesa", name: "Francesa", price: 35500, removable: ["Tocineta", "Cebolla caramelizada", "Guacamole", "Tomate"] })}>+ Agregar</button>
        </div>

        <div className="menu-item menu-item-with-photo">
          <div style={{ position: "relative", height: 200 }}>
            <Image src="/Platos/clasica.jpg" alt="Classic" fill style={{ objectFit: "cover", objectPosition: "center center" }} sizes="(max-width: 768px) 100vw, 400px" />
          </div>
          <div className="menu-item-body">
            <div className="menu-item-top">
              <div className="menu-item-name">Classic</div>
              <div className="menu-item-price">$28.500</div>
            </div>
            <div className="menu-item-desc">
              Pan brioche, 150gr de carne artesanal, queso cheddar derretido, doble tocineta parrillada, tomate &amp; lechuga.
            </div>
            <span className="menu-item-tag">La esencial</span>
            <button className="add-to-cart-btn" onClick={() => addItem({ id: "classic", name: "Classic", price: 28500, removable: ["Queso cheddar", "Tocineta", "Tomate", "Lechuga"] })}>+ Agregar</button>
          </div>
        </div>

        <div className="menu-item menu-item-with-photo">
          <div style={{ position: "relative", height: 200 }}>
            <Image src="/Platos/philadelphia.jpeg" alt="Philadelphia" fill style={{ objectFit: "cover", objectPosition: "center center" }} sizes="(max-width: 768px) 100vw, 400px" />
          </div>
          <div className="menu-item-body">
            <div className="menu-item-top">
              <div className="menu-item-name">Philadelphia</div>
              <div className="menu-item-price">$35.500</div>
            </div>
            <div className="menu-item-desc">
              Pan brioche, 150gr de carne artesanal, queso Philadelphia en mermelada de pimentón dulce, tocineta BBQ, 2 aros de cebolla, tomate &amp; lechuga.
            </div>
            <span className="menu-item-tag">Cremosa</span>
            <button className="add-to-cart-btn" onClick={() => addItem({ id: "philadelphia", name: "Philadelphia", price: 35500, removable: ["Queso Philadelphia", "Tocineta", "Aros de cebolla", "Tomate", "Lechuga"] })}>+ Agregar</button>
          </div>
        </div>

        <div className="menu-item menu-item-with-photo">
          <div style={{ position: "relative", height: 200 }}>
            <Image src="/Platos/italiana.jpeg" alt="Italiana" fill style={{ objectFit: "cover", objectPosition: "center 78%" }} sizes="(max-width: 768px) 100vw, 400px" />
          </div>
          <div className="menu-item-body">
            <div className="menu-item-top">
              <div className="menu-item-name">Italiana</div>
              <div className="menu-item-price">$36.000</div>
            </div>
            <div className="menu-item-desc">
              Pan brioche, 150gr de carne artesanal, mermelada de tomate rústico, queso Philadelphia, tocineta parrillada en BBQ, cebolla crispy &amp; lechuga bañada en reducción de balsámico.
            </div>
            <span className="menu-item-tag new">Sabor europeo</span>
            <button className="add-to-cart-btn" onClick={() => addItem({ id: "italiana", name: "Italiana", price: 36000, removable: ["Queso Philadelphia", "Tocineta", "Cebolla crispy", "Lechuga", "Reducción de balsámico"] })}>+ Agregar</button>
          </div>
        </div>

        <div className="menu-item">
          <div className="menu-item-top">
            <div className="menu-item-name">De Pollo</div>
            <div className="menu-item-price">$34.500</div>
          </div>
          <div className="menu-item-desc">
            Pan brioche, pechuga de pollo apanada, tomate, guacamole, tocineta parrillada en BBQ &amp; queso cheddar.
          </div>
          <span className="menu-item-tag">Sin res</span>
          <button className="add-to-cart-btn" onClick={() => addItem({ id: "de-pollo", name: "De Pollo", price: 34500, removable: ["Tomate", "Guacamole", "Tocineta", "Queso cheddar"] })}>+ Agregar</button>
        </div>

        <div className="menu-item menu-item-with-photo">
          <div style={{ position: "relative", height: 200 }}>
            <Image src="/Platos/piña.jpeg" alt="Piña" fill style={{ objectFit: "cover", objectPosition: "center center" }} sizes="(max-width: 768px) 100vw, 400px" />
          </div>
          <div className="menu-item-body">
            <div className="menu-item-top">
              <div className="menu-item-name">De Piña</div>
              <div className="menu-item-price">$35.500</div>
            </div>
            <div className="menu-item-desc">
              Pan brioche, 150gr de carne artesanal, queso Philadelphia, piña asada y caramelizada, lechuga &amp; tocineta parrillada en BBQ flameada en salsa de piña anisada.
            </div>
            <span className="menu-item-tag new">Dulce & ahumada</span>
            <button className="add-to-cart-btn" onClick={() => addItem({ id: "de-pina", name: "De Piña", price: 35500, removable: ["Queso Philadelphia", "Piña asada", "Lechuga", "Tocineta"] })}>+ Agregar</button>
          </div>
        </div>

      </div>
      <p style={{ fontSize: 12, color: "#555", marginTop: 16, letterSpacing: 1, textTransform: "uppercase" }}>
        ★ Todas las hamburguesas vienen acompañadas de papas a la francesa crujientes
      </p>
    </div>
  );
}
