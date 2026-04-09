import Image from "next/image";

export default function GaleriaSection() {
  return (
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
  );
}
