// Living Room
import livingRoom1 from "../assets/living-room-1.jpg";
import livingRoom2 from "../assets/living-room-2.jpg";
import livingRoom3 from "../assets/living-room-3.jpg";
import livingRoom4 from "../assets/living-room-4.jpg";
import livingRoom5 from "../assets/living-room-5.jpg";
import livingRoom6 from "../assets/living-room-6.jpg";

// Bedroom
import bedroom1 from "../assets/bedroom-1.jpg";
import bedroom2 from "../assets/bedroom-2.jpg";
import bedroom3 from "../assets/bedroom-3.jpg";
import bedroom4 from "../assets/bedroom-4.jpg";
import bedroom5 from "../assets/bedroom-5.jpg";
import bedroom6 from "../assets/bedroom-6.jpg";

// Kitchen
import kitchen1 from "../assets/kitchen-1.jpg";
import kitchen2 from "../assets/kitchen-2.jpg";
import kitchen3 from "../assets/kitchen-3.jpg";
import kitchen4 from "../assets/kitchen-4.jpg";
import kitchen5 from "../assets/kitchen-5.jpg";
import kitchen6 from "../assets/kitchen-6.jpg";

// Office
import office1 from "../assets/office-1.jpg";
import office2 from "../assets/office-2.jpg";
import office3 from "../assets/office-3.jpg";
import office4 from "../assets/office-4.jpg";
import office5 from "../assets/office-5.jpg";
import office6 from "../assets/office-6.jpg";

import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";

function PortfolioGalleryPage() {
  const { category } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);

  const portfolioData = {
    "living-room": {
      title: "Living Room Designs",
      description: "Discover our collection of beautifully designed living rooms that combine comfort with elegance.",
      count: 8
    },
    "bedroom": {
      title: "Bedroom Interiors",
      description: "Explore serene and luxurious bedroom designs that create the perfect retreat.",
      count: 7
    },
    "kitchen": {
      title: "Modular Kitchen Gallery",
      description: "View our stunning kitchen designs featuring modern functionality and premium aesthetics.",
      count: 9
    },
    "office": {
      title: "Office Spaces",
      description: "Explore professional office environments designed for productivity and inspiration.",
      count: 6
    }
  };

  const data = portfolioData[category];
  const galleryImages = {
  "living-room": [
    livingRoom1,
    livingRoom2,
    livingRoom3,
    livingRoom4,
    livingRoom5,
    livingRoom6,
  ],

  bedroom: [
    bedroom1,
    bedroom2,
    bedroom3,
    bedroom4,
    bedroom5,
    bedroom6,
  ],

  kitchen: [
    kitchen1,
    kitchen2,
    kitchen3,
    kitchen4,
    kitchen5,
    kitchen6,
  ],

  office: [
    office1,
    office2,
    office3,
    office4,
    office5,
    office6,
  ],
};

  if (!data) {
    return <div>Category not found</div>;
  }

  const images = galleryImages[category] || [];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section style={{
        minHeight: "50vh",
        background: "linear-gradient(135deg, #1D1A17, #2C2C2C)",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px 40px 80px",
        marginTop: "70px"
      }}>
        <div style={{ textAlign: "center", maxWidth: "800px" }}>
          <h1 style={{ fontSize: "3.5rem", fontFamily: "var(--font-heading)", marginBottom: "15px" }}>
            {data.title}
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.8)" }}>
            {data.description}
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section style={{ padding: "80px 60px", background: "#F7F3EE" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ marginBottom: "60px", textAlign: "center" }}>
            <p style={{ fontSize: "1rem", color: "#C79A63", fontWeight: "600", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "15px" }}>
              {images.length} Projects
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "25px"
          }}>
            {images.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(image)}
                style={{
                  background: "white",
                  borderRadius: "8px",
                  overflow: "hidden",
                  border: "1px solid #E6DDD2",
                  transition: "var(--transition)",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 15px 40px rgba(0, 0, 0, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.05)";
                }}
              >
                <img
                    src={image}
                    alt={`Project ${index + 1}`}
                    style={{
                        width: "100%",
                        height: "280px",
                        objectFit: "cover",
                        display: "block"
                        }}
                />
                <div style={{ padding: "20px" }}>
                  <h3 style={{ fontSize: "1.1rem", color: "#1D1A17", marginBottom: "5px", fontFamily: "var(--font-heading)" }}>
                    {`${data.title} - Project ${index + 1}`}
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "#C79A63", fontWeight: "600" }}>
                    Project {index + 1}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Note about images */}
          <div style={{
            marginTop: "60px",
            padding: "30px",
            background: "white",
            borderRadius: "8px",
            border: "1px solid #E6DDD2",
            textAlign: "center"
          }}>
            <p style={{ color: "#666", fontSize: "1rem", lineHeight: "1.8" }}>
            Every  project in our portfolio reflects our commitment to thoughtful design,
             premium craftsmanship, and attention to detail. From modern living spaces
            and luxurious bedrooms to functional kitchens and inspiring workspaces,
           we create interiors that blend beauty, comfort, and practicality.
           Explore our work and discover how we transform ideas into timeless spaces.
              <br />
             Note: Every project is thoughtfully designed to blend aesthetics, comfort, and functionality, creating spaces that truly feel like home.
            </p>
            <p style={{ color: "#999", fontSize: "0.9rem", marginTop: "15px" }}>
              More project images and case studies are continuously being added to our portfolio.
            </p>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section style={{ padding: "80px 60px", background: "white" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "2.5rem", fontFamily: "var(--font-heading)", color: "#1D1A17", marginBottom: "15px" }}>
            Other Categories
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#666", marginBottom: "40px" }}>
            Explore more of our work in other design categories
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "25px"
          }}>
            {Object.entries(portfolioData).map(([key, value]) => {
              if (key !== category) {
                return (
                  <Link
                    key={key}
                    to={`/portfolio/${key}`}
                    style={{
                      display: "block",
                      padding: "30px",
                      background: "#F7F3EE",
                      border: "1px solid #E6DDD2",
                      borderRadius: "8px",
                      textDecoration: "none",
                      color: "inherit",
                      transition: "var(--transition)"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-5px)";
                      e.currentTarget.style.boxShadow = "0 10px 30px rgba(199, 154, 99, 0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <h3 style={{ fontSize: "1.2rem", color: "#1D1A17", marginBottom: "10px", fontFamily: "var(--font-heading)" }}>
                      {value.title}
                    </h3>
                    <p style={{ fontSize: "0.9rem", color: "#C79A63", fontWeight: "600" }}>
                      {value.count} Projects →
                    </p>
                  </Link>
                );
              }
              return null;
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: "80px 60px",
        background: "#1D1A17",
        color: "white",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "2.5rem", fontFamily: "var(--font-heading)", marginBottom: "15px" }}>
          Ready to create your next <span style={{ color: "#C79A63", fontStyle: "italic" }}>project?</span>
        </h2>
        <p style={{ fontSize: "1.1rem", marginBottom: "30px", color: "rgba(255,255,255,0.8)" }}>
          Let's bring your vision to life with our expert design and execution.
        </p>
        <Link to="/" onClick={() => {
          setTimeout(() => {
            const contactSection = document.getElementById("contact");
            if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }} style={{
          display: "inline-block",
          padding: "16px 40px",
          background: "#C79A63",
          color: "white",
          textDecoration: "none",
          borderRadius: "50px",
          fontWeight: "600",
          transition: "var(--transition)",
          cursor: "pointer"
        }}>
          Book a Consultation <FaArrowRight style={{ marginLeft: "8px", display: "inline" }} />
        </Link>
      </section>
      {selectedImage && (
  <div
    onClick={() => setSelectedImage(null)}
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.95)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: "99999",
      cursor: "pointer",
      padding: "20px",
    }}
  >
    <img
      src={selectedImage}
      alt="Full View"
      onClick={(e) => e.stopPropagation()}
      style={{
        maxWidth: "95%",
        maxHeight: "95%",
        borderRadius: "12px",
        objectFit: "contain",
      }}
    />

    <button
      onClick={() => setSelectedImage(null)}
      style={{
        position: "absolute",
        top: "20px",
        right: "25px",
        background: "transparent",
        border: "none",
        color: "white",
        fontSize: "2rem",
        cursor: "pointer",
      }}
    >
      ✕
    </button>
  </div>
)}

      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default PortfolioGalleryPage;
