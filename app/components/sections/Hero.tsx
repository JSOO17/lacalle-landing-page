import Image from "next/image";

export default function Hero() {
  return (
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
        <Image
          className="hero-burger-photo"
          src="/Platos/img-1.png"
          alt="La Calle Burger"
          fill
          style={{ objectFit: "cover", objectPosition: "center 40%" }}
          sizes="(max-width: 768px) 100vw, 460px"
          priority
        />
        <div className="hero-photo-badge">★ La firma del barrio</div>
        <div className="hero-photo-footer">
          <span className="hero-name">La Calle</span>
          <span className="hero-price">$35.500</span>
        </div>
      </div>
    </div>
  );
}
