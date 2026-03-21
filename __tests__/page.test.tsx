import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("La Calle Burger — Página principal", () => {

  // ─── NAVEGACIÓN ────────────────────────────────────────────────────────────
  describe("Navegación", () => {
    it("renderiza el logo en el nav", () => {
      render(<Home />);
      const logos = screen.getAllByAltText("La Calle Burger");
      expect(logos.length).toBeGreaterThanOrEqual(2); // nav + hero
    });

    it("muestra los 5 links de navegación", () => {
      render(<Home />);
      expect(screen.getByRole("link", { name: /menú/i })).toBeInTheDocument();
      expect(screen.getByRole("link", { name: /envenenadas/i })).toBeInTheDocument();
      expect(screen.getByRole("link", { name: /galería/i })).toBeInTheDocument();
      expect(screen.getByRole("link", { name: /el parche/i })).toBeInTheDocument();
      expect(screen.getByRole("link", { name: /ubicación/i })).toBeInTheDocument();
    });

    it("los links apuntan a los anchors correctos", () => {
      render(<Home />);
      expect(screen.getByRole("link", { name: /menú/i })).toHaveAttribute("href", "#menu");
      expect(screen.getByRole("link", { name: /envenenadas/i })).toHaveAttribute("href", "#envenenadas");
      expect(screen.getByRole("link", { name: /ubicación/i })).toHaveAttribute("href", "#location");
    });
  });

  // ─── HERO ──────────────────────────────────────────────────────────────────
  describe("Hero", () => {
    it("muestra el título LA CALLE BURGER", () => {
      render(<Home />);
      const h1 = screen.getByRole("heading", { level: 1 });
      expect(h1).toHaveTextContent("LA");
      expect(h1).toHaveTextContent("CALLE");
      expect(h1).toHaveTextContent("BURGER");
    });

    it("muestra el tag del restaurante", () => {
      render(<Home />);
      expect(screen.getByText(/Medellín · Burgers & Bar/)).toBeInTheDocument();
    });

    it("muestra el subtítulo con descripción del restaurante", () => {
      render(<Home />);
      expect(screen.getByText(/Burgers artesanales · Coctelería/)).toBeInTheDocument();
    });

    it("muestra el botón de ver menú", () => {
      render(<Home />);
      expect(screen.getByRole("button", { name: /ver el menú/i })).toBeInTheDocument();
    });

    it("muestra el badge de la burger destacada", () => {
      render(<Home />);
      expect(screen.getByText(/La firma del barrio/i)).toBeInTheDocument();
    });

    it("muestra el nombre y precio de la burger en el hero", () => {
      render(<Home />);
      // "La Calle" aparece también en galería
      expect(screen.getAllByText("La Calle").length).toBeGreaterThan(0);
      expect(screen.getAllByText("$35.500").length).toBeGreaterThan(0);
    });
  });

  // ─── MENÚ DE BURGERS ───────────────────────────────────────────────────────
  describe("Menú de Burgers", () => {
    it("muestra el encabezado de la sección", () => {
      render(<Home />);
      expect(screen.getByText("Burgers de la Casa")).toBeInTheDocument();
      expect(screen.getByText("01 — Carta")).toBeInTheDocument();
    });

    it("muestra las 9 burgers de la carta", () => {
      render(<Home />);
      expect(screen.getByText("La Calle ★")).toBeInTheDocument();
      expect(screen.getByText("Queen ★")).toBeInTheDocument();
      expect(screen.getByText("De Costilla")).toBeInTheDocument();
      expect(screen.getByText("De Chicharrón ★")).toBeInTheDocument();
      expect(screen.getByText("Doble Carne")).toBeInTheDocument();
      expect(screen.getByText("Francesa")).toBeInTheDocument();
      expect(screen.getByText("Classic")).toBeInTheDocument();
      expect(screen.getByText("Philadelphia")).toBeInTheDocument();
      expect(screen.getByText("De Pollo")).toBeInTheDocument();
    });

    it("muestra precios de burgers únicas", () => {
      render(<Home />);
      expect(screen.getByText("$42.500")).toBeInTheDocument(); // Doble Carne (único)
      expect(screen.getByText("$28.500")).toBeInTheDocument(); // Classic (único)
      expect(screen.getByText("$34.500")).toBeInTheDocument(); // De Pollo (único)
      expect(screen.getByText("$36.500")).toBeInTheDocument(); // De Chicharrón (único)
    });

    it("muestra las fotos de las burgers principales", () => {
      render(<Home />);
      // "La Calle" y "Queen" también aparecen en la galería
      expect(screen.getAllByAltText("La Calle").length).toBeGreaterThan(0);
      expect(screen.getAllByAltText("Queen").length).toBeGreaterThan(0);
      expect(screen.getByAltText("De Costilla")).toBeInTheDocument();
    });

    it("muestra la nota de papas incluidas", () => {
      render(<Home />);
      expect(screen.getByText(/papas a la francesa crujientes/i)).toBeInTheDocument();
    });
  });

  // ─── ENTRADAS ──────────────────────────────────────────────────────────────
  describe("Entradas", () => {
    it("muestra el encabezado de la sección", () => {
      render(<Home />);
      expect(screen.getByText("Para picar")).toBeInTheDocument();
      expect(screen.getByText("02 — Entradas")).toBeInTheDocument();
    });

    it("muestra las 6 entradas", () => {
      render(<Home />);
      expect(screen.getByText("Deditos de Queso")).toBeInTheDocument();
      expect(screen.getByText("Empanaditas")).toBeInTheDocument();
      expect(screen.getByText("Chicharrones")).toBeInTheDocument();
      expect(screen.getByText("Papas Pulled Pork")).toBeInTheDocument();
      expect(screen.getByText(/Papas Cheddar/)).toBeInTheDocument();
    });

    it("muestra los precios de las entradas", () => {
      render(<Home />);
      expect(screen.getByText("$20.700")).toBeInTheDocument();
      expect(screen.getByText("$17.200")).toBeInTheDocument();
      expect(screen.getByText("$18.000")).toBeInTheDocument();
    });
  });

  // ─── OTROS PLATOS ──────────────────────────────────────────────────────────
  describe("Otros Platos", () => {
    it("muestra el encabezado de la sección", () => {
      render(<Home />);
      expect(screen.getByText("Otros Platos")).toBeInTheDocument();
      expect(screen.getByText("03 — Otros Platos")).toBeInTheDocument();
    });

    it("muestra las alitas con sus combos de tamaño", () => {
      render(<Home />);
      expect(screen.getByText("Alitas de Pollo")).toBeInTheDocument();
      expect(screen.getByText("Combo x12 unid")).toBeInTheDocument();
      expect(screen.getByText("Combo x18 unid")).toBeInTheDocument();
      expect(screen.getByText("Combo x24 unid")).toBeInTheDocument();
      expect(screen.getByText("$38.900")).toBeInTheDocument();
      expect(screen.getByText("$54.500")).toBeInTheDocument();
      expect(screen.getByText("$70.500")).toBeInTheDocument();
    });

    it("muestra las salsas de las alitas", () => {
      render(<Home />);
      expect(screen.getByText("BBQ")).toBeInTheDocument();
      expect(screen.getByText("BBQ de Uchuva")).toBeInTheDocument();
      expect(screen.getByText("Miel Ajo")).toBeInTheDocument();
      expect(screen.getByText("Miel Mostaza")).toBeInTheDocument();
    });

    it("muestra las picadas con sus tamaños", () => {
      render(<Home />);
      expect(screen.getByText("Picadas")).toBeInTheDocument();
      expect(screen.getByText("Personal")).toBeInTheDocument();
      expect(screen.getByText("$38.500")).toBeInTheDocument();
    });

    it("muestra las costillas de cerdo", () => {
      render(<Home />);
      expect(screen.getByText("Costillas de Cerdo")).toBeInTheDocument();
      expect(screen.getByText("$37.700")).toBeInTheDocument();
    });

    it("muestra los postres", () => {
      render(<Home />);
      expect(screen.getByText("Brownie con Helado")).toBeInTheDocument();
      expect(screen.getByText("$13.000")).toBeInTheDocument();
      expect(screen.getByText("$13.900")).toBeInTheDocument();
    });
  });

  // ─── ENVENENADAS ───────────────────────────────────────────────────────────
  describe("Envenenadas", () => {
    it("muestra el encabezado de la sección", () => {
      render(<Home />);
      // "Envenenadas" aparece también en el nav link
      expect(screen.getAllByText("Envenenadas").length).toBeGreaterThan(0);
      expect(screen.getByText(/Cervezas intervenidas/i)).toBeInTheDocument();
    });

    it("muestra las 6 envenenadas", () => {
      render(<Home />);
      expect(screen.getByText("Fresa Sandía")).toBeInTheDocument();
      expect(screen.getAllByText("Mango Biche").length).toBeGreaterThanOrEqual(3);
      // Maracuyá aparece también en sodas, usamos getAllByText
      expect(screen.getAllByText("Maracuyá").length).toBeGreaterThan(0);
      // "Mango Biche" aparece en envenenadas, sodas y limonadas
      expect(screen.getAllByText("Mango Biche").length).toBeGreaterThanOrEqual(3);
      expect(screen.getByText("Chela Dorada")).toBeInTheDocument();
      expect(screen.getByText("Chelita")).toBeInTheDocument();
      expect(screen.getByText("Chela Roja")).toBeInTheDocument();
    });

    it("muestra el precio de Fresa Sandía", () => {
      render(<Home />);
      expect(screen.getByText("$20.900")).toBeInTheDocument();
    });

    it("muestra la foto de la Mango Biche", () => {
      render(<Home />);
      expect(screen.getByAltText("Mango Biche")).toBeInTheDocument();
    });
  });

  // ─── COCTELES Y BEBIDAS ────────────────────────────────────────────────────
  describe("Cocteles y Bebidas", () => {
    it("muestra el encabezado de la sección", () => {
      render(<Home />);
      expect(screen.getByText("05 — Barra")).toBeInTheDocument();
    });

    it("muestra los 12 cocteles", () => {
      render(<Home />);
      expect(screen.getByText("Cuba Libre")).toBeInTheDocument();
      expect(screen.getByText("De Café")).toBeInTheDocument();
      expect(screen.getByText("Ibiza")).toBeInTheDocument();
      expect(screen.getByText("Gorgojo")).toBeInTheDocument();
      expect(screen.getByText("Cúpido Rojo")).toBeInTheDocument();
      expect(screen.getByText("Mojito de Sabores")).toBeInTheDocument();
      expect(screen.getByText("Mojito de Jagermeister")).toBeInTheDocument();
      expect(screen.getByText("Piña Colada")).toBeInTheDocument();
      expect(screen.getByText("Tequila Sunrise")).toBeInTheDocument();
      expect(screen.getByText("Margarita Limón")).toBeInTheDocument();
      expect(screen.getByText("Copa de Sangría")).toBeInTheDocument();
      expect(screen.getByText("Copa de Vino")).toBeInTheDocument();
    });

    it("muestra las sodas saborizadas con su precio", () => {
      render(<Home />);
      expect(screen.getByText(/Sodas saborizadas · \$10\.900/i)).toBeInTheDocument();
      // "Mango Biche" aparece también en envenenadas y limonadas
      expect(screen.getAllByText("Mango Biche").length).toBeGreaterThan(0);
      expect(screen.getByText("Frutos Rojos")).toBeInTheDocument();
      expect(screen.getByText("Red Bull")).toBeInTheDocument();
    });

    it("muestra la sección de limonadas", () => {
      render(<Home />);
      expect(screen.getByText("Limonadas")).toBeInTheDocument();
      expect(screen.getByText("Limonada de Coco")).toBeInTheDocument();
      expect(screen.getByText("Natural")).toBeInTheDocument();
      expect(screen.getByText("$7.000")).toBeInTheDocument();
    });
  });

  // ─── GALERÍA ───────────────────────────────────────────────────────────────
  describe("Galería", () => {
    it("muestra el encabezado de la sección", () => {
      render(<Home />);
      // "Galería" aparece también en el link del nav
      expect(screen.getAllByText("Galería").length).toBeGreaterThan(0);
      expect(screen.getByText("06 — El Ambiente")).toBeInTheDocument();
    });

    it("muestra las fotos con sus etiquetas", () => {
      render(<Home />);
      expect(screen.getByAltText("El parche")).toBeInTheDocument();
      expect(screen.getByText("El parche")).toBeInTheDocument();
      expect(screen.getByText("La Queen")).toBeInTheDocument();
    });

    it("muestra las etiquetas de ambiente", () => {
      render(<Home />);
      expect(screen.getByText("Noches en vivo")).toBeInTheDocument();
      expect(screen.getByText("El bar")).toBeInTheDocument();
    });
  });

  // ─── COMBOS ────────────────────────────────────────────────────────────────
  describe("Combos", () => {
    it("muestra el encabezado de la sección", () => {
      render(<Home />);
      expect(screen.getByText("Combos")).toBeInTheDocument();
      expect(screen.getByText("07 — Combos")).toBeInTheDocument();
    });

    it("muestra los 3 combos con sus precios", () => {
      render(<Home />);
      expect(screen.getByText("Todas las burgers")).toBeInTheDocument();
      expect(screen.getByText("$25.000")).toBeInTheDocument();
      expect(screen.getByText("Combo más pedido")).toBeInTheDocument();
      expect(screen.getByText("$69.900")).toBeInTheDocument();
      expect(screen.getByText("$45.900")).toBeInTheDocument();
    });

    it("muestra la restricción del combo de Martes a Jueves", () => {
      render(<Home />);
      expect(screen.getByText(/Martes a Jueves/i)).toBeInTheDocument();
    });
  });

  // ─── UBICACIÓN ─────────────────────────────────────────────────────────────
  describe("Ubicación", () => {
    it("muestra el encabezado de la sección", () => {
      render(<Home />);
      expect(screen.getByText("Ubícanos")).toBeInTheDocument();
      expect(screen.getByText("08 — El Parche")).toBeInTheDocument();
    });

    it("muestra la ciudad y el número de domicilios", () => {
      render(<Home />);
      expect(screen.getByText(/Medellín, Antioquia/)).toBeInTheDocument();
      const phones = screen.getAllByText("321-530-7022");
      expect(phones.length).toBeGreaterThanOrEqual(1);
    });

    it("muestra los horarios completos", () => {
      render(<Home />);
      expect(screen.getByText(/12pm – 11pm/)).toBeInTheDocument();
      expect(screen.getByText(/12pm – 1am/)).toBeInTheDocument();
      expect(screen.getByText(/12pm – 9pm/)).toBeInTheDocument();
    });

    it("muestra las 3 info boxes", () => {
      render(<Home />);
      expect(screen.getByText("Dirección")).toBeInTheDocument();
      expect(screen.getByText("Horarios")).toBeInTheDocument();
      expect(screen.getByText("Redes")).toBeInTheDocument();
    });
  });

  // ─── FOOTER ────────────────────────────────────────────────────────────────
  describe("Footer", () => {
    it("muestra el copyright", () => {
      render(<Home />);
      expect(screen.getByText(/2025 La Calle Burger · Medellín/)).toBeInTheDocument();
    });

    it("muestra los 3 links de redes sociales", () => {
      render(<Home />);
      expect(screen.getByRole("link", { name: "Instagram" })).toBeInTheDocument();
      expect(screen.getByRole("link", { name: "TikTok" })).toBeInTheDocument();
      expect(screen.getByRole("link", { name: "WhatsApp" })).toBeInTheDocument();
    });

    it("muestra el logo en el footer", () => {
      render(<Home />);
      const logos = screen.getAllByAltText("La Calle Burger");
      expect(logos.length).toBeGreaterThanOrEqual(2); // nav + footer
    });
  });

});
