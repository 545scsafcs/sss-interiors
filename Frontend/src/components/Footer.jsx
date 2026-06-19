import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  const navigate = useNavigate();
  const goToSection = (sectionId) => {
  navigate("/");

  setTimeout(() => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, 300);
};

  return (
    <footer className="footer" data-aos="fade-up">
      <div className="footer-container">
        <div className="footer-section">
          <h3>SSS Interiors</h3>
          <p>
            Premium interior design and renovation studio creating elegant, functional spaces since 2010. Transforming dreams into reality.
          </p>
          <div className="social-links">
            <a href="https://www.facebook.com/sssinteriors" target="_blank" rel="noopener noreferrer" title="Facebook">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/sssinteriors" target="_blank" rel="noopener noreferrer" title="Instagram">
              <FaInstagram />
            </a>
            <a href="https://twitter.com/sssinteriors" target="_blank" rel="noopener noreferrer" title="Twitter">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/company/sssinteriors" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="footer-section">
  <h3>Quick Links</h3>

  <ul className="footer-links">
    <li>
      <button
        className="footer-nav-btn"
        onClick={() => goToSection("home")}
      >
        Home
      </button>
    </li>

    <li>
      <Link to="/about">About</Link>
    </li>

    <li>
      <button
        className="footer-nav-btn"
        onClick={() => goToSection("services")}
      >
        Services
      </button>
    </li>

    <li>
      <button
        className="footer-nav-btn"
        onClick={() => goToSection("portfolio")}
      >
        Portfolio
      </button>
    </li>

    <li>
      <button
        className="footer-nav-btn"
        onClick={() => goToSection("contact")}
      >
        Contact
      </button>
    </li>
  </ul>
</div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p><a href="tel:+919999988888" style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}>📞 +91 99999 88888</a></p>
          <p><a href="mailto:info@sssinteriors.com" style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}>📧 info@sssinteriors.com</a></p>
          <p><a href="https://maps.google.com/?q=Uttarakhand,India" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}>📍 Uttarakhand, India</a></p>
          <p style={{ marginTop: "15px", fontSize: "0.85rem" }}>
            Hours: Mon-Sat 10AM-6PM
          </p>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <div className="copyright">
          © 2026 SSS Interiors. All Rights Reserved.
        </div>
        <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem" }}>
          <a href="#" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", marginRight: "20px" }}>
            Privacy Policy
          </a>
          <a href="#" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;