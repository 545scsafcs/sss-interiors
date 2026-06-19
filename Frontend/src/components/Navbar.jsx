import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.jpg";

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const goToSection = (sectionId) => {
    setMenuOpen(false);

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
    <nav className="navbar">
      <div className="logo">
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            textDecoration: "none",
          }}
        >
          <img
            src={logo}
            alt="SSS Interiors"
            style={{ height: "40px" }}
          />
          <h2>SSS Interiors</h2>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰ Menu"}
      </button>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <button
            className="nav-btn"
            onClick={() => goToSection("home")}
          >
            Home
          </button>
        </li>

        <li>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
        </li>

        <li>
          <button
            className="nav-btn"
            onClick={() => goToSection("services")}
          >
            Services
          </button>
        </li>

        <li>
          <button
            className="nav-btn"
            onClick={() => goToSection("portfolio")}
          >
            Portfolio
          </button>
        </li>

        <li>
          <button
            className="nav-btn"
            onClick={() => goToSection("contact")}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;