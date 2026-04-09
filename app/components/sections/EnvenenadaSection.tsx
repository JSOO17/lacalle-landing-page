import Image from "next/image";

export default function EnvenenadaSection() {
  return (
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
            <div style={{ position: "relative", height: 200 }}>
              <Image src="/Platos/img-4.jpg" alt="Mango Biche" fill style={{ objectFit: "cover", objectPosition: "center 30%" }} sizes="(max-width: 768px) 100vw, 400px" />
            </div>
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
  );
}
