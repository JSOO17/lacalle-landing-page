"use client";

const B = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const img = (path: string) => `${B}${path}`;

export default function Home() {
  return (
    <>
      {/* NAV */}
      <nav>
        <div className="nav-logo">
          <img
            src="/lacalle-landing-page/logo.png"
            alt="La Calle Burger"
            style={{ height: 44, width: 44, objectFit: "contain", borderRadius: "50%" }}
          />
        </div>
        <ul className="nav-links">
          <li><a href="#menu">Menú</a></li>
          <li><a href="#envenenadas">Envenenadas</a></li>
          <li><a href="#galeria">Galería</a></li>
          <li><a href="#combos">El Parche</a></li>
          <li><a href="#location">Ubicación</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <div className="hero">
        <div className="hero-text">
          <img
            src={img("/img-0.png")}
            alt="La Calle Burger"
            style={{ height: 72, width: 72, objectFit: "contain", borderRadius: "50%", marginBottom: 16, display: "block" }}
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
          <img className="hero-burger-photo" src={img("/img-1.png")} alt="La Calle Burger" />
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
      <div className="section" id="menu">
        <div className="section-header">
          <div className="section-num">01 — Carta</div>
          <h2 className="section-title">Burgers de la Casa</h2>
          <div className="section-line"></div>
        </div>
        <div className="menu-grid">

          <div className="menu-item menu-item-with-photo">
            <img className="menu-item-photo" src={img("/img-1.png")} alt="La Calle" style={{ objectPosition: "center 40%" }} />
            <div className="menu-item-body">
              <div className="menu-item-top">
                <div className="menu-item-name">La Calle ★</div>
                <div className="menu-item-price">$35.500</div>
              </div>
              <div className="menu-item-desc">
                Pan brioche, 150gr de carne artesanal, queso mozzarella fundido, cebolla caramelizada, tocineta, chorizo, guacamole, tomate &amp; lechuga.
              </div>
              <span className="menu-item-tag fav">★ La más barrio</span>
            </div>
          </div>

          <div className="menu-item menu-item-with-photo">
            <img className="menu-item-photo" src={img("/img-2.jpg")} alt="Queen" style={{ objectPosition: "center 35%" }} />
            <div className="menu-item-body">
              <div className="menu-item-top">
                <div className="menu-item-name">Queen ★</div>
                <div className="menu-item-price">$29.900</div>
              </div>
              <div className="menu-item-desc">
                Pan brioche, 200gr de carne artesanal, mermelada de tocineta y cebolla, MIX de queso cheddar y mozzarella, lechuga &amp; tomate.
              </div>
              <span className="menu-item-tag fav">★ La más jugosa</span>
            </div>
          </div>

          <div className="menu-item menu-item-with-photo">
            <img className="menu-item-photo" src={img("/img-3.png")} alt="De Costilla" style={{ objectPosition: "center 70%" }} />
            <div className="menu-item-body">
              <div className="menu-item-top">
                <div className="menu-item-name">De Costilla</div>
                <div className="menu-item-price">$35.500</div>
              </div>
              <div className="menu-item-desc">
                Pan brioche, 150gr de carne artesanal, costilla desmechada en BBQ, queso mozzarella, guacamole, tomate &amp; lechuga.
              </div>
              <span className="menu-item-tag new">Del lugar</span>
            </div>
          </div>

          <div className="menu-item">
            <div className="menu-item-top">
              <div className="menu-item-name">De Chicharrón ★</div>
              <div className="menu-item-price">$36.500</div>
            </div>
            <div className="menu-item-desc">
              Pan brioche, 150gr de carne artesanal, chicharrones carnudos en BBQ, pico de gallo, Sour Cream, plátano dulce &amp; lechuga.
            </div>
            <span className="menu-item-tag new">★ Nuestra master</span>
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
          </div>

          <div className="menu-item">
            <div className="menu-item-top">
              <div className="menu-item-name">Classic</div>
              <div className="menu-item-price">$28.500</div>
            </div>
            <div className="menu-item-desc">
              Pan brioche, 150gr de carne artesanal, queso cheddar derretido, doble tocineta parrillada, tomate &amp; lechuga.
            </div>
            <span className="menu-item-tag">La esencial</span>
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
          </div>

        </div>
        <p style={{ fontSize: 12, color: "#555", marginTop: 16, letterSpacing: 1, textTransform: "uppercase" }}>
          ★ Todas las hamburguesas vienen acompañadas de papas a la francesa crujientes
        </p>
      </div>

      {/* ENTRADAS */}
      <div className="section" style={{ paddingTop: 0 }}>
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
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <div className="menu-item-name">Empanaditas</div>
              <div className="menu-item-price">$17.200</div>
            </div>
            <div className="menu-item-desc">Empanadas de carne y maíz, doradas y crujientes, acompañadas con guacamole.</div>
            <span className="menu-item-tag">Bien colombianas</span>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <div className="menu-item-name">Chicharrones</div>
              <div className="menu-item-price">$18.000</div>
            </div>
            <div className="menu-item-desc">Chicarrón carnudo, bañado en salsa BBQ &amp; con papas a la francesa.</div>
            <span className="menu-item-tag">Crocante</span>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <div className="menu-item-name">Papas Pulled Pork</div>
              <div className="menu-item-price">$15.900</div>
            </div>
            <div className="menu-item-desc">Papitas a la francesa cargadas de pulled pork, salsa BBQ &amp; mayo ajo.</div>
            <span className="menu-item-tag">Cargadas</span>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <div className="menu-item-name">Papas Cheddar &amp; Tocineta</div>
              <div className="menu-item-price">$15.900</div>
            </div>
            <div className="menu-item-desc">Papitas a la francesa, queso cheddar, tocineta &amp; salsa BBQ.</div>
            <span className="menu-item-tag">Clásica</span>
          </div>
          <div className="menu-item">
            <div className="menu-item-top">
              <div className="menu-item-name">Papas Callejeras</div>
              <div className="menu-item-price">$33.700</div>
            </div>
            <div className="menu-item-desc">
              Papa a la francesa en queso cheddar, tocineta, chorizo, plátano maduro, chicharrón en limón pimienta, sour cream &amp; guacamole.
            </div>
            <span className="menu-item-tag new">La más cargada</span>
          </div>
        </div>
      </div>

      {/* OTROS PLATOS */}
      <div className="section" style={{ paddingTop: 0 }}>
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
          </div>

          {/* PAPAS CALLEJERAS */}
          <div className="menu-item">
            <div className="menu-item-top">
              <div className="menu-item-name">Papas Callejeras</div>
              <div className="menu-item-price">$33.700</div>
            </div>
            <div className="menu-item-desc">
              Papa a la francesa en queso cheddar, tocineta parrillada, chorizo, plátano maduro, chicharrón en limón pimienta, sour cream &amp; guacamole.
            </div>
            <span className="menu-item-tag hot">La más cargada</span>
          </div>

          {/* ESPECIALES */}
          <div className="menu-item">
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
          </div>

          {/* POSTRES */}
          <div className="menu-item">
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

      {/* ENVENENADAS */}
      <div className="envenenadas-section" id="envenenadas">
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
              <img className="envenena-card-photo" src={img("/img-4.jpg")} alt="Mango Biche" />
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
      <div className="section" id="drinks">
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
            { name: "Ibiza", price: "$23.900", desc: "Curazao, limón, triple sec, tequila, Coronita" },
            { name: "Gorgojo", price: "$23.900", desc: "Curazao, limón, triple sec, granadina, tequila" },
            { name: "Cúpido Rojo", price: "$29.900", desc: "Sirope de frutos rojos, zumo de limón, ron, soda" },
            { name: "Mojito de Sabores", price: "$23.900", desc: "Fresa y lichee, maracuyá & clásico" },
            { name: "Mojito de Jagermeister", price: "$35.900", desc: "Hierbabuena, limón, endulzante, ron & Jagermeister" },
            { name: "Piña Colada", price: "$23.900", desc: "Piña, leche, crema de coco, leche condensada & ron" },
            { name: "Tequila Sunrise", price: "$21.000", desc: "Jugo de naranja, granadilla & tequila" },
            { name: "Margarita Limón", price: "$21.000", desc: "Limón, triple sec, tequila" },
            { name: "Copa de Sangría", price: "$19.900", desc: "Jarra $66.900" },
            { name: "Copa de Vino", price: "$16.900", desc: "" },
          ].map((c) => (
            <div key={c.name} className="bebida-card">
              <div className="bebida-name">{c.name}</div>
              <div className="bebida-price">{c.price}</div>
              {c.desc && <div className="bebida-desc">{c.desc}</div>}
            </div>
          ))}
        </div>

        <h3 className="sub-section-label">Sodas saborizadas · $10.900</h3>
        <div className="bebidas-grid" style={{ marginBottom: 40 }}>
          {[
            { name: "Mango Biche", desc: "Soda sabor mango" },
            { name: "Sandía", desc: "Soda sabor sandía" },
            { name: "Cereza", desc: "Soda sabor cereza" },
            { name: "Maracuyá", desc: "Soda sabor maracuyá" },
            { name: "Lichi Naranja", desc: "Soda sabor lichi & naranja" },
            { name: "Frutos Rojos", desc: "Soda sabor frutos rojos" },
            { name: "Red Bull", price: "$17.000", desc: "" },
            { name: "Agua & Gaseosa", price: "$5.200+", desc: "" },
          ].map((b) => (
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
      <div className="section" id="galeria" style={{ paddingTop: 0 }}>
        <div className="section-header">
          <div className="section-num">06 — El Ambiente</div>
          <h2 className="section-title">Galería</h2>
          <div className="section-line"></div>
        </div>
        <div className="galeria-grid">
          <div className="galeria-item tall">
            <img className="galeria-photo" src={img("/img-3.png")} alt="El parche" style={{ objectPosition: "center 70%" }} />
            <div className="galeria-label">El parche</div>
          </div>
          <div className="galeria-item">
            <img className="galeria-photo" src={img("/img-1.png")} alt="La Calle" style={{ objectPosition: "center 40%" }} />
            <div className="galeria-label">La Calle</div>
          </div>
          <div className="galeria-item">
            <img className="galeria-photo" src={img("/img-2.jpg")} alt="Queen" style={{ objectPosition: "center 35%" }} />
            <div className="galeria-label">La Queen</div>
          </div>
          <div className="galeria-item">🎸<div className="galeria-label">Noches en vivo</div></div>
          <div className="galeria-item">🥃<div className="galeria-label">El bar</div></div>
        </div>
      </div>

      {/* COMBOS */}
      <div className="section" id="combos" style={{ paddingTop: 0 }}>
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
        </div>
      </div>

      {/* UBICACIÓN */}
      <div className="section" id="location" style={{ paddingTop: 0 }}>
        <div className="section-header">
          <div className="section-num">08 — El Parche</div>
          <h2 className="section-title">Ubícanos</h2>
          <div className="section-line"></div>
        </div>
        <div className="info-row">
          <div className="info-box">
            <div className="info-box-label">Dirección</div>
            <div className="info-box-content">
              <strong>Medellín, Antioquia</strong><br />
              Colombia<br /><br />
              Domicilios:<br />
              <strong>321-530-7022</strong>
            </div>
          </div>
          <div className="info-box">
            <div className="info-box-label">Horarios</div>
            <div className="info-box-content">
              <strong>Lun – Jue:</strong> 12pm – 11pm<br />
              <strong>Vie – Sáb:</strong> 12pm – 1am<br />
              <strong>Dom:</strong> 12pm – 9pm
            </div>
          </div>
          <div className="info-box">
            <div className="info-box-label">Redes</div>
            <div className="info-box-content">
              <strong>La Calle Burger</strong><br />
              Instagram · TikTok<br /><br />
              Domicilios a toda la ciudad<br />
              <strong>321-530-7022</strong>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">
          <img
            src={img("/img-0.png")}
            alt="La Calle Burger"
            style={{ height: 48, width: 48, objectFit: "contain", borderRadius: "50%", opacity: 0.5 }}
          />
        </div>
        <div className="footer-copy">© 2025 La Calle Burger · Medellín · Pa&apos; comer y parchar</div>
        <div className="footer-social">
          <a href="#">Instagram</a>
          <a href="#">TikTok</a>
          <a href="#">WhatsApp</a>
        </div>
      </footer>
    </>
  );
}
