import { Link } from "react-router-dom";
import heroImage from "../assets/hero.jpg";
import { FaWhatsapp } from "react-icons/fa";

function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero" style={{
      backgroundImage: `linear-gradient(135deg, rgba(29, 26, 23, 0.4), rgba(199, 154, 99, 0.2)), url(${heroImage})`
    }}>
      <h1>
        Transform Your Dream <span>Space</span> Into Reality
      </h1>
      <p>
        Premium interior design and renovation for homes and workspaces. Thoughtful spaces, crafted to last.
      </p>

      <div className="hero-buttons">
        <button className="primary" onClick={() => scrollToSection("contact")}>
          Book Consultation
        </button>
        <a href="https://wa.me/+14155238886?text=Hi%20SSS%20Interiors,%20I'd%20like%20to%20discuss%20my%20interior%20design%20project." target="_blank" rel="noreferrer" className="primary" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "16px 40px", borderRadius: "50px", textDecoration: "none", fontWeight: "600", background: "white", color: "#1D1A17" }}>
          <FaWhatsapp /> Chat on WhatsApp
        </a>
        <Link to="/#portfolio" className="primary" onClick={() => scrollToSection("portfolio")} style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "16px 40px", borderRadius: "50px", textDecoration: "none", fontWeight: "600", background: "transparent", color: "white", border: "2px solid white" }}>
          View Portfolio →
        </Link>
      </div>

      <div className="hero-stats">
        <div className="stat">
          <div className="stat-number">500+</div>
          <div className="stat-label">Projects</div>
        </div>
        <div className="stat">
          <div className="stat-number">15+</div>
          <div className="stat-label">Years</div>
        </div>
        <div className="stat">
          <div className="stat-number">98%</div>
          <div className="stat-label">Client Satisfaction</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;