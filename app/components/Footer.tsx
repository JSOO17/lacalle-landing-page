import Image from "next/image";

export default function Footer() {
  return (
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
        <a href="https://wa.me/573215307022" target="_blank" rel="noopener noreferrer">WhatsApp</a>
      </div>
    </footer>
  );
}
