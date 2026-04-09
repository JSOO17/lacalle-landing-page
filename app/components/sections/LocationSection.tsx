export default function LocationSection() {
  return (
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
            <a href="tel:+573215307022" style={{ color: "var(--amarillo)", fontWeight: 700, textDecoration: "none" }}>321-530-7022</a>
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
  );
}
