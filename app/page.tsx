"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useCart } from "./hooks/useCart";
import Cart from "./components/Cart";

const B = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const img = (path: string) => `${B}${path}`;

export default function Home() {
  const [activeSection, setActiveSection] = useState("");
  const { items, addItem, updateQuantity, clear, total, count, isOpen, setIsOpen, placeOrder } = useCart();

  useEffect(() => {
    // Fade-up on scroll
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in-view")),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));

    // Active nav based on scroll position
    const sections = ["menu", "envenenadas", "drinks", "galeria", "combos", "location"];
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) navObserver.observe(el);
    });

    return () => { observer.disconnect(); navObserver.disconnect(); };
  }, []);

  const navLink = (href: string, label: string) => {
    const id = href.replace("#", "");
    return (
      <li>
        <a href={href} className={activeSection === id ? "active" : ""}>
          {label}
        </a>
      </li>
    );
  };
  return (
    <>
      {/* NAV */}
      <nav>
        <div className="nav-logo">
          <Image
            src="/logo.png"
            alt="La Calle Burger"
            width={44}
            height={44}
            style={{ objectFit: "contain", borderRadius: "50%" }}
          />
        </div>
        <ul className="nav-links">
          {navLink("#menu", "Menú")}
          {navLink("#envenenadas", "Envenenadas")}
          {navLink("#galeria", "Galería")}
          {navLink("#combos", "El Parche")}
          {navLink("#location", "Ubicación")}
        </ul>
      </nav>

      {/* HERO */}
      <div className="hero">
        <div className="hero-text">
          <Image
            src="/img-0.png"
            alt="La Calle Burger"
            width={72}
            height={72}
            style={{ objectFit: "contain", borderRadius: "50%", marginBottom: 16, display: "block" }}
          />
          <div className="hero-tag">Medellín · Burgers &amp; Bar</div>
          <h1 className="hero-title">
            LA<br /><span className="accent">CALLE</span><br />BURGER
          </h1>
          <p className="hero-sub">
            Donde te parchas, te la pasás bien y comés de verdad.<br />
            <strong>Burgers artesanales · Coctelería · Ambiente de barrio.</strong>
          </p>
          <button
            className="btn-primary"
            onClick={() => document.querySelector(".menu-grid")?.scrollIntoView({ behavior: "smooth" })}
          >
            Ver el Menú ↓
          </button>
        </div>
        <div className="hero-img">
          <Image className="hero-burger-photo" src="/Platos/img-1.png" alt="La Calle Burger" fill style={{ objectFit: "cover", objectPosition: "center 40%" }} sizes="(max-width: 768px) 100vw, 460px" priority />
          <div className="hero-photo-badge">★ La firma del barrio</div>
          <div className="hero-photo-footer">
            <span className="hero-name">La Calle</span>
            <span className="hero-price">$35.500</span>
          </div>
        </div>
      </div>

      {/* STRIPE */}
      <div className="stripe">
        <div className="stripe-inner">
          <span className="stripe-item">Burgers artesanales</span><span className="stripe-dot">·</span>
          <span className="stripe-item">Parche en la calle</span><span className="stripe-dot">·</span>
          <span className="stripe-item">Pa&apos; comer y parchar</span><span className="stripe-dot">·</span>
          <span className="stripe-item">Medellín</span><span className="stripe-dot">·</span>
          <span className="stripe-item">Envenenadas</span><span className="stripe-dot">·</span>
          <span className="stripe-item">Burgers artesanales</span><span className="stripe-dot">·</span>
          <span className="stripe-item">Parche en la calle</span><span className="stripe-dot">·</span>
          <span className="stripe-item">Pa&apos; comer y parchar</span><span className="stripe-dot">·</span>
          <span className="stripe-item">Medellín</span><span className="stripe-dot">·</span>
          <span className="stripe-item">Envenenadas</span><span className="stripe-dot">·</span>
        </div>
      </div>

      {/* MENU BURGERS */}
      <div className="section fade-up" id="menu">
        <div className="section-header">
          <div className="section-num">01 — Carta</div>
          <h2 className="section-title">Burgers de la Casa</h2>
          <div className="section-line"></div>
        </div>
        <div className="menu-grid">

          <div className="menu-item menu-item-with-photo">
            <div style={{ position: "relative", height: 200 }}><Image src="/Platos/img-1.png" alt="La Calle" fill style={{ objectFit: "cover", objectPosition: "center 40%" }} sizes="(max-width: 768px) 100vw, 400px" /></div>
            <div className="menu-item-body">
              <div className="menu-item-top">
                <div className="menu-item-name">La Calle ★</div>
                <div className="menu-item-price">$35.500</div>
              </div>
              <div className="menu-item-desc">
                Pan brioche, 150gr de carne artesanal, queso mozzarella fundido, cebolla caramelizada, tocineta, chorizo, guacamole, tomate &amp; lechuga.
              </div>
              <span className="menu-item-tag fav">★ La más barrio</span>
              <button className="add-to-cart-btn" onClick={() => addItem({ id: "la-calle", name: "La Calle ★", price: 35500 })}>+ Agregar</button>
            </div>
          </div>

          <div className="menu-item menu-item-with-photo">
            <div style={{ position: "relative", height: 200 }}><Image src="/Platos/img-2.jpg" alt="Queen" fill style={{ objectFit: "cover", objectPosition: "center 35%" }} sizes="(max-width: 768px) 100vw, 400px" /></div>
            <div className="menu-item-body">
              <div className="menu-item-top">
                <div className="menu-item-name">Queen ★</div>
                <div className="menu-item-price">$29.900</div>
              </div>
              <div className="menu-item-desc">
                Pan brioche, 200gr de carne artesanal, mermelada de tocineta y cebolla, MIX de queso cheddar y mozzarella, lechuga &amp; tomate.
              </div>
              <span className="menu-item-tag fav">★ La más jugosa</span>
              <button className="add-to-cart-btn" onClick={() => addItem({ id: "queen", name: "Queen ★", price: 29900 })}>+ Agregar</button>
            </div>
          </div>

          <div className="menu-item menu-item-with-photo">
            <div style={{ position: "relative", height: 200 }}><Image src="/Platos/img-3.png" alt="De Costilla" fill style={{ objectFit: "cover", objectPosition: "center 70%" }} sizes="(max-width: 768px) 100vw, 400px" /></div>
            <div className="menu-item-body">
              <div className="menu-item-top">
                <div className="menu-item-name">De Costilla</div>
                <div className="menu-item-price">$35.500</div>
              </div>
              <div className="menu-item-desc">
                Pan brioche, 150gr de carne artesanal, costilla desmechada en BBQ, queso mozzarella, guacamole, tomate &amp; lechuga.
              </div>
              <span className="menu-item-tag new">Del lugar</span>
              <button className="add-to-cart-btn" onClick={() => addItem({ id: "de-costilla", name: "De Costilla", price: 35500 })}>+ Agregar</button>
            </div>
          </div>

          <div className="menu-item menu-item-with-photo">
            <div style={{ position: "relative", height: 200 }}><Image src="/Platos/chicharron.jpeg" alt="De Chicharrón" fill style={{ objectFit: "cover", objectPosition: "center center" }} sizes="(max-width: 768px) 100vw, 400px" /></div>
            <div className="menu-item-body">
              <div className="menu-item-top">
                <div className="menu-item-name">De Chicharrón ★</div>
                <div className="menu-item-price">$36.500</div>
              </div>
              <div className="menu-item-desc">
                Pan brioche, 150gr de carne artesanal, chicharrones carnudos en BBQ, pico de gallo, Sour Cream, plátano dulce &amp; lechuga.
              </div>
              <span className="menu-item-tag new">★ Nuestra master</span>
              <button className="add-to-cart-btn" onClick={() => addItem({ id: "de-chicharron", name: "De Chicharrón ★", price: 36500 })}>+ Agregar</button>
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
            <button className="add-to-cart-btn" onClick={() => addItem({ id: "doble-carne", name: "Doble Carne", price: 42500 })}>+ Agregar</button>
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
            <button className="add-to-cart-btn" onClick={() => addItem({ id: "francesa", name: "Francesa", price: 35500 })}>+ Agregar</button>
          </div>

          <div className="menu-item menu-item-with-photo">
            <div style={{ position: "relative", height: 200 }}><Image src="/Platos/clasica.jpg" alt="Classic" fill style={{ objectFit: "cover", objectPosition: "center center" }} sizes="(max-width: 768px) 100vw, 400px" /></div>
            <div className="menu-item-body">
              <div className="menu-item-top">
                <div className="menu-item-name">Classic</div>
                <div className="menu-item-price">$28.500</div>
              </div>
              <div className="menu-item-desc">
                Pan brioche, 150gr de carne artesanal, queso cheddar derretido, doble tocineta parrillada, tomate &amp; lechuga.
              </div>
              <span className="menu-item-tag">La esencial</span>
              <button className="add-to-cart-btn" onClick={() => addItem({ id: "classic", name: "Classic", price: 28500 })}>+ Agregar</button>
            </div>
          </div>

          <div className="menu-item">
            <div className="menu-item-top">
              <div className="menu-item-name">Philadelphia</div>
              <div className="menu-item-price">$35.500</div>
            </div>
            <div className="menu-item-desc">
              Pan brioche, 150gr de carne artesanal, queso Philadelphia en mermelada de pimentón dulce, tocineta BBQ, 2 aros de cebolla, tomate &amp; lechuga.
            </div>
            <span className="menu-item-tag">Cremosa</span>
            <button className="add-to-cart-btn" onClick={() => addItem({ id: "philadelphia", name: "Philadelphia", price: 35500 })}>+ Agregar</button>
          </div>

          <div className="menu-item menu-item-with-photo">
            <div style={{ position: "relative", height: 200 }}><Image src="/Platos/italiana.jpeg" alt="Italiana" fill style={{ objectFit: "cover", objectPosition: "center center" }} sizes="(max-width: 768px) 100vw, 400px" /></div>
            <div className="menu-item-body">
              <div className="menu-item-top">
                <div className="menu-item-name">Italiana</div>
                <div className="menu-item-price">$35.500</div>
              </div>
              <div className="menu-item-desc">
                Pan brioche, 150gr de carne artesanal, mermelada de tomate rústico, queso Philadelphia, tocineta parrillada en BBQ, cebolla crispy &amp; lechuga bañada en reducción de balsámico.
              </div>
              <span className="menu-item-tag new">Sabor europeo</span>
              <button className="add-to-cart-btn" onClick={() => addItem({ id: "italiana", name: "Italiana", price: 35500 })}>+ Agregar</button>
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
            <button className="add-to-cart-btn" onClick={() => addItem({ id: "de-pollo", name: "De Pollo", price: 34500 })}>+ Agregar</button>
          </div>

          <div className="menu-item menu-item-with-photo">
            <div style={{ position: "relative", height: 200 }}><Image src="/Platos/piña.jpeg" alt="Piña" fill style={{ objectFit: "cover", objectPosition: "center center" }} sizes="(max-width: 768px) 100vw, 400px" /></div>
            <div className="menu-item-body">
              <div className="menu-item-top">
                <div className="menu-item-name">De Piña</div>
                <div className="menu-item-price">$35.500</div>
              </div>
              <div className="menu-item-desc">
                Pan brioche, 150gr de carne artesanal, queso Philadelphia, piña asada y caramelizada, lechuga &amp; tocineta parrillada en BBQ flameada en salsa de piña anisada.
              </div>
              <span className="menu-item-tag new">Dulce & ahumada</span>
              <button className="add-to-cart-btn" onClick={() => addItem({ id: "de-pina", name: "De Piña", price: 35500 })}>+ Agregar</button>
            </div>
          </div>

        </div>
        <p style={{ fontSize: 12, color: "#555", marginTop: 16, letterSpacing: 1, textTransform: "uppercase" }}>
          ★ Todas las hamburguesas vienen acompañadas de papas a la francesa crujientes
        </p>
      </div>

      {/* ENTRADAS */}
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
            <button className="add-to-cart-btn" onClick={() => addItem({ id: "deditos-queso", name: "Deditos de Queso", price: 20700 })}>+ Agregar</button>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <div className="menu-item-name">Empanaditas</div>
              <div className="menu-item-price">$17.200</div>
            </div>
            <div className="menu-item-desc">Empanadas de carne y maíz, doradas y crujientes, acompañadas con guacamole.</div>
            <span className="menu-item-tag">Bien colombianas</span>
            <button className="add-to-cart-btn" onClick={() => addItem({ id: "empanaditas", name: "Empanaditas", price: 17200 })}>+ Agregar</button>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <div className="menu-item-name">Chicharrones</div>
              <div className="menu-item-price">$18.000</div>
            </div>
            <div className="menu-item-desc">Chicarrón carnudo, bañado en salsa BBQ &amp; con papas a la francesa.</div>
            <span className="menu-item-tag">Crocante</span>
            <button className="add-to-cart-btn" onClick={() => addItem({ id: "chicharrones", name: "Chicharrones", price: 18000 })}>+ Agregar</button>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <div className="menu-item-name">Papas Pulled Pork</div>
              <div className="menu-item-price">$15.900</div>
            </div>
            <div className="menu-item-desc">Papitas a la francesa cargadas de pulled pork, salsa BBQ &amp; mayo ajo.</div>
            <span className="menu-item-tag">Cargadas</span>
            <button className="add-to-cart-btn" onClick={() => addItem({ id: "papas-pulled-pork", name: "Papas Pulled Pork", price: 15900 })}>+ Agregar</button>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <div className="menu-item-name">Papas Cheddar &amp; Tocineta</div>
              <div className="menu-item-price">$15.900</div>
            </div>
            <div className="menu-item-desc">Papitas a la francesa, queso cheddar, tocineta &amp; salsa BBQ.</div>
            <span className="menu-item-tag">Clásica</span>
            <button className="add-to-cart-btn" onClick={() => addItem({ id: "papas-cheddar", name: "Papas Cheddar & Tocineta", price: 15900 })}>+ Agregar</button>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <div className="menu-item-name">Papas Mayo Ajo</div>
              <div className="menu-item-price">$15.900</div>
            </div>
            <div className="menu-item-desc">Papa a la francesa, queso fundido &amp; maduritos.</div>
            <span className="menu-item-tag">Sabor & contraste</span>
            <button className="add-to-cart-btn" onClick={() => addItem({ id: "papas-mayo-ajo", name: "Papas Mayo Ajo", price: 15900 })}>+ Agregar</button>
          </div>
        </div>
      </div>

      {/* OTROS PLATOS */}
      <div className="section fade-up" style={{ paddingTop: 0 }}>
        <div className="section-header">
          <div className="section-num">03 — Otros Platos</div>
          <h2 className="section-title">Otros Platos</h2>
          <div className="section-line"></div>
        </div>
        <div className="menu-grid">

          {/* ALITAS */}
          <div className="menu-item">
            <div className="menu-item-top">
              <div className="menu-item-name">Alitas de Pollo</div>
              <div className="menu-item-price"></div>
            </div>
            <div className="menu-item-desc" style={{ marginBottom: 12 }}>
              Apanadas y bañadas en tu salsa favorita, acompañadas de papitas y mayo ajo.
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 12 }}>
              {["BBQ", "BBQ de Uchuva", "BBQ Picante", "Miel Ajo", "Miel Mostaza", "Limón & Pimienta"].map((s) => (
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
              <button className="add-to-cart-btn" onClick={() => addItem({ id: "alitas-x12", name: "Alitas x12", price: 38900 })}>+ x12</button>
              <button className="add-to-cart-btn" onClick={() => addItem({ id: "alitas-x18", name: "Alitas x18", price: 54500 })}>+ x18</button>
              <button className="add-to-cart-btn" onClick={() => addItem({ id: "alitas-x24", name: "Alitas x24", price: 70500 })}>+ x24</button>
            </div>
          </div>

          {/* PICADAS */}
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

          {/* COSTILLAS */}
          <div className="menu-item">
            <div className="menu-item-top">
              <div className="menu-item-name">Costillas de Cerdo</div>
              <div className="menu-item-price">$37.700</div>
            </div>
            <div className="menu-item-desc">
              350gr de jugosas costillas de cerdo, bañadas en salsa BBQ de la casa, con 4 arepas &amp; papitas.
            </div>
            <span className="menu-item-tag new">De la casa</span>
            <button className="add-to-cart-btn" onClick={() => addItem({ id: "costillas", name: "Costillas de Cerdo", price: 37700 })}>+ Agregar</button>
          </div>

          {/* PAPAS CALLEJERAS */}
          <div className="menu-item menu-item-with-photo">
            <div style={{ position: "relative", height: 200 }}><Image src="/Platos/papascalle.jpeg" alt="Papas Callejeras" fill style={{ objectFit: "cover", objectPosition: "center center" }} sizes="(max-width: 768px) 100vw, 400px" /></div>
            <div className="menu-item-body">
              <div className="menu-item-top">
                <div className="menu-item-name">Papas Callejeras</div>
                <div className="menu-item-price">$33.700</div>
              </div>
              <div className="menu-item-desc">
                Papa a la francesa en queso cheddar, tocineta parrillada, chorizo, plátano maduro, chicharrón en limón pimienta, sour cream &amp; guacamole.
              </div>
              <span className="menu-item-tag hot">La más cargada</span>
              <button className="add-to-cart-btn" onClick={() => addItem({ id: "papas-callejeras", name: "Papas Callejeras", price: 33700 })}>+ Agregar</button>
            </div>
          </div>

          {/* ESPECIALES */}
          <div className="menu-item menu-item-with-photo">
            <div style={{ position: "relative", height: 200 }}><Image src="/Platos/especiales.jpeg" alt="Especiales" fill style={{ objectFit: "cover", objectPosition: "center center" }} sizes="(max-width: 768px) 100vw, 400px" /></div>
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
              <button className="add-to-cart-btn" onClick={() => addItem({ id: "especiales", name: "Especiales", price: 30000 })}>+ Agregar</button>
            </div>
          </div>

          {/* POSTRES */}
          <div className="menu-item menu-item-with-photo">
            <div style={{ position: "relative", height: 200 }}><Image src="/Platos/brownieconhelado.jpeg" alt="Postres" fill style={{ objectFit: "cover", objectPosition: "center center" }} sizes="(max-width: 768px) 100vw, 400px" /></div>
            <div className="menu-item-body">
            <div className="menu-item-top">
              <div className="menu-item-name">Postres</div>
              <div className="menu-item-price"></div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                  <span style={{ fontFamily: "var(--font-barlow-condensed)", fontSize: 16, fontWeight: 700 }}>
                    Brownie con Helado
                  </span>
                  <span style={{ fontFamily: "var(--font-bebas)", fontSize: 18, color: "var(--amarillo)" }}>
                    $13.000
                  </span>
                </div>
                <div className="menu-item-desc">Clásico brownie caliente, con helado y salsa de arequipe.</div>
              </div>
              <div style={{ borderTop: "1px solid #1e1e1e", paddingTop: 10 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                  <span style={{ fontFamily: "var(--font-barlow-condensed)", fontSize: 16, fontWeight: 700 }}>
                    Malteada
                  </span>
                  <span style={{ fontFamily: "var(--font-bebas)", fontSize: 18, color: "var(--amarillo)" }}>
                    $13.900
                  </span>
                </div>
                <div className="menu-item-desc">Malteada de cookies &amp; Cream con crema chantilly.</div>
              </div>
            </div>
            <span className="menu-item-tag">Para cerrar</span>
            </div>
          </div>

        </div>
      </div>

      {/* ENVENENADAS */}
      <div className="envenenadas-section fade-up" id="envenenadas">
        <div className="envenenadas-inner">
          <div className="envenenadas-header">
            <div className="section-num" style={{ color: "#D62828" }}>04 — Especiales</div>
            <h2 className="envenenadas-title">Envenenadas</h2>
            <div className="section-line" style={{ background: "#D6282830" }}></div>
          </div>
          <p className="envenenadas-sub">
            Cervezas intervenidas · <span>Solo para los que aguantan el parche</span>
          </p>
          <div className="envenenadas-grid">

            <div className="envenena-card">
              <div className="envenena-card-no-photo">
                <div className="envenena-base">🍺</div>
                <div className="envenena-top">
                  <div className="envenena-name">Fresa Sandía</div>
                  <div className="envenena-price">$20.900</div>
                </div>
                <div className="envenena-desc">Cerveza Águila Light · Trozos de fresa · Sabor a sandía · Vodka</div>
              </div>
            </div>

            <div className="envenena-card">
              <div style={{ position: "relative", height: 200 }}><Image src="/Platos/img-4.jpg" alt="Mango Biche" fill style={{ objectFit: "cover", objectPosition: "center 30%" }} sizes="(max-width: 768px) 100vw, 400px" /></div>
              <div className="envenena-card-body">
                <div className="envenena-top">
                  <div className="envenena-name">Mango Biche</div>
                  <div className="envenena-price">$18.900</div>
                </div>
                <div className="envenena-desc">Cerveza Costeñita · Mango rallado · Sal · Pimienta · Limón · Tequila</div>
              </div>
            </div>

            <div className="envenena-card">
              <div className="envenena-card-no-photo">
                <div className="envenena-base">🍋</div>
                <div className="envenena-top">
                  <div className="envenena-name">Maracuyá</div>
                  <div className="envenena-price"></div>
                </div>
                <div className="envenena-desc">Cerveza Coronita · Maracuyá · Limón · Tequila</div>
              </div>
            </div>

            <div className="envenena-card">
              <div className="envenena-card-no-photo">
                <div className="envenena-base">🍺</div>
                <div className="envenena-top">
                  <div className="envenena-name">Chela Dorada</div>
                  <div className="envenena-price"></div>
                </div>
                <div className="envenena-desc">Club Colombia Dorada · Salpimienta · Limón · Tabasco · Salsa inglesa · Vodka</div>
              </div>
            </div>

            <div className="envenena-card">
              <div className="envenena-card-no-photo">
                <div className="envenena-base">🍺</div>
                <div className="envenena-top">
                  <div className="envenena-name">Chelita</div>
                  <div className="envenena-price"></div>
                </div>
                <div className="envenena-desc">Club Colombia Roja · Salpimienta · Limón · Endulzante · Tequila</div>
              </div>
            </div>

            <div className="envenena-card">
              <div className="envenena-card-no-photo">
                <div className="envenena-base">🍺</div>
                <div className="envenena-top">
                  <div className="envenena-name">Chela Roja</div>
                  <div className="envenena-price"></div>
                </div>
                <div className="envenena-desc">Club Colombia Roja · Champú · Limón · Gotas amargas · Tequila</div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* COCTELES Y BEBIDAS */}
      <div className="section fade-up" id="drinks">
        <div className="section-header">
          <div className="section-num">05 — Barra</div>
          <h2 className="section-title">Cocteles &amp; Bebidas</h2>
          <div className="section-line"></div>
        </div>

        <h3 className="sub-section-label">Cocteles</h3>
        <div className="bebidas-grid" style={{ marginBottom: 40 }}>
          {[
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
          ].map((c) => (
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
          {([
            { name: "Mango Biche", desc: "Soda sabor mango" },
            { name: "Sandía", desc: "Soda sabor sandía" },
            { name: "Cereza", desc: "Soda sabor cereza" },
            { name: "Maracuyá", desc: "Soda sabor maracuyá" },
            { name: "Lichi Naranja", desc: "Soda sabor lichi & naranja" },
            { name: "Frutos Rojos", desc: "Soda sabor frutos rojos" },
          ] as { name: string; desc: string; price?: string }[]).map((b) => (
            <div key={b.name} className="bebida-card">
              <div className="bebida-name">{b.name}</div>
              {b.price && <div className="bebida-price">{b.price}</div>}
              {b.desc && <div className="bebida-desc">{b.desc}</div>}
            </div>
          ))}
        </div>

        <h3 className="sub-section-label">Limonadas</h3>
        <div className="bebidas-grid">
          {[
            { name: "Limonada de Coco", price: "$10.900" },
            { name: "Piña & Coco", price: "$10.900" },
            { name: "Cereza", price: "$10.500" },
            { name: "Mango Biche", price: "$10.500" },
            { name: "Natural", price: "$7.000" },
          ].map((l) => (
            <div key={l.name} className="bebida-card">
              <div className="bebida-name">{l.name}</div>
              <div className="bebida-price">{l.price}</div>
            </div>
          ))}
        </div>
      </div>

      {/* GALERIA */}
      <div className="section fade-up" id="galeria" style={{ paddingTop: 0 }}>
        <div className="section-header">
          <div className="section-num">06 — El Ambiente</div>
          <h2 className="section-title">Galería</h2>
          <div className="section-line"></div>
        </div>
        <div className="galeria-grid">
          <div className="galeria-item tall">
            <Image src="/Platos/img-3.png" alt="El parche" fill style={{ objectFit: "cover", objectPosition: "center 70%" }} sizes="(max-width: 768px) 100vw, 50vw" />
            <div className="galeria-label">El parche</div>
          </div>
          <div className="galeria-item">
            <Image src="/Platos/img-1.png" alt="La Calle" fill style={{ objectFit: "cover", objectPosition: "center 40%" }} sizes="(max-width: 768px) 100vw, 33vw" />
            <div className="galeria-label">La Calle</div>
          </div>
          <div className="galeria-item">
            <Image src="/Platos/img-2.jpg" alt="Queen" fill style={{ objectFit: "cover", objectPosition: "center 35%" }} sizes="(max-width: 768px) 100vw, 33vw" />
            <div className="galeria-label">La Queen</div>
          </div>
          <div className="galeria-item">
            <Image src="/Galeria/pecera.PNG" alt="El bar" fill style={{ objectFit: "cover", objectPosition: "center center" }} sizes="(max-width: 768px) 100vw, 33vw" />
            <div className="galeria-label">El bar</div>
          </div>
          <div className="galeria-item tall">
            <Image src="/Galeria/restmujer.jpg" alt="El ambiente" fill style={{ objectFit: "cover", objectPosition: "center center" }} sizes="(max-width: 768px) 100vw, 50vw" />
            <div className="galeria-label">El ambiente</div>
          </div>
          <div className="galeria-item">
            <Image src="/Galeria/rest1.jpg" alt="La Calle Burger" fill style={{ objectFit: "cover", objectPosition: "center center" }} sizes="(max-width: 768px) 100vw, 33vw" />
            <div className="galeria-label">La Calle</div>
          </div>
        </div>
      </div>

      {/* COMBOS */}
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
          <div className="menu-item">
            <div className="menu-item-top">
              <div className="menu-item-name">Combo pa&apos; compartir</div>
              <div className="menu-item-price">$45.900</div>
            </div>
            <div className="menu-item-desc">2 Classic + 2 Papas + 2 Limonadas.</div>
            <span className="menu-item-tag">Para dos</span>
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

      {/* UBICACIÓN */}
      <div className="section fade-up" id="location" style={{ paddingTop: 0 }}>
        <div className="section-header">
          <div className="section-num">08 — El Parche</div>
          <h2 className="section-title">Ubícanos</h2>
          <div className="section-line"></div>
        </div>
        <div className="info-row">
          <div className="info-box">
            <div className="info-box-label">Dirección</div>
            <div className="info-box-content">
              <strong>Av 33 #76-132</strong><br />
              Medellín, Antioquia<br />
              Colombia<br /><br />
              Domicilios:<br />
              <strong>321-530-7022</strong>
            </div>
          </div>
          <div className="info-box">
            <div className="info-box-label">Horarios</div>
            <div className="info-box-content">
              <strong>Lun – Jue:</strong> 4pm – 10pm<br />
              <strong>Vie – Sáb:</strong> 4pm – 12am<br />
              <strong>Dom:</strong> 4pm – 10pm
            </div>
          </div>
          <div className="info-box">
            <div className="info-box-label">Google Maps</div>
            <div className="info-box-content" style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ color: "#fbbc04", fontSize: "1.1rem", letterSpacing: 2 }}>★★★★★</span>
              </div>
              <div style={{ fontSize: "0.85rem", color: "var(--texto-suave)" }}>La Calle Burger 33</div>
              <a
                href="https://maps.app.goo.gl/FsNfkX6zCQb43NtV8"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: 4,
                  padding: "6px 14px",
                  background: "var(--amarillo)",
                  color: "var(--negro)",
                  fontFamily: "var(--font-barlow-condensed)",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  borderRadius: 4,
                  textDecoration: "none",
                }}
              >
                Ver en Google Maps
              </a>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 32, borderRadius: 8, overflow: "hidden", border: "1px solid #2a2a2a" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d935!2d-75.5979427!3d6.2390886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44299801eaa925%3A0xdf1c2635e74af77d!2sLa+Calle+Burger+33!5e0!3m2!1ses!2sco!4v1700000000000!5m2!1ses!2sco"
            width="100%"
            height="280"
            style={{ border: 0, display: "block", filter: "grayscale(1) invert(0.9) contrast(0.85)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">
          <Image
            src="/img-0.png"
            alt="La Calle Burger"
            width={48}
            height={48}
            style={{ objectFit: "contain", borderRadius: "50%", opacity: 0.5 }}
          />
        </div>
        <div className="footer-copy">© 2025 La Calle Burger · Medellín · Pa&apos; comer y parchar</div>
        <div className="footer-social">
          <a href="#">Instagram</a>
          <a href="#">TikTok</a>
          <a href="#">WhatsApp</a>
        </div>
      </footer>

      {/* Carrito */}
      <Cart
        items={items}
        total={total}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onUpdateQuantity={updateQuantity}
        onPlaceOrder={placeOrder}
        onClear={clear}
      />

      {/* Botón flotante */}
      <button
        onClick={() => setIsOpen(true)}
        style={{
          position: "fixed",
          bottom: 32,
          right: 32,
          zIndex: 997,
          background: count > 0 ? "var(--amarillo)" : "#1a1a1a",
          color: count > 0 ? "var(--negro)" : "var(--blanco)",
          border: count > 0 ? "none" : "1px solid #333",
          borderRadius: 50,
          padding: count > 0 ? "14px 22px" : "14px 18px",
          fontFamily: "var(--font-bebas)",
          fontSize: "1rem",
          letterSpacing: 2,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: 8,
          boxShadow: count > 0 ? "0 4px 20px rgba(253,216,53,0.35)" : "0 2px 10px rgba(0,0,0,0.4)",
          transition: "all 0.3s ease",
        }}
      >
        🛒
        {count > 0 && <span>{count} — ${total.toLocaleString("es-CO")}</span>}
      </button>
    </>
  );
}
