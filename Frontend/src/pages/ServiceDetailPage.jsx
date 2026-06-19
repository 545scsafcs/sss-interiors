import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import homeImage from "../assets/living-room-1.jpg";
import officeImage from "../assets/office-1.jpg";
import kitchenImage from "../assets/kitchen-1.jpg";
import renovationImage from "../assets/renovation.jpg";

function ServiceDetailPage() {
  const { service } = useParams();

  const services = {
    "home-interior": {
      title: "Home Interior Design",
      shortTitle: "Home Interiors",
      description: "Transform your living spaces into stunning sanctuaries with our premium home interior design services.",
      longDescription: "We specialize in creating beautiful, functional home interiors that reflect your lifestyle and personality. From contemporary minimalist designs to luxurious traditional aesthetics, we bring your vision to life.",
      image: "🏠",
      features: [
        "Living Room Design",
        "Bedroom Interiors",
        "Kitchen & Dining",
        "Bathroom Design",
        "Home Office Setup",
        "Complete Renovation"
      ],
      benefits: [
        "Increased home value",
        "Improved functionality",
        "Personal style expression",
        "Quality of life enhancement",
        "Better space utilization",
        "Timeless design"
      ],
      process: [
        { step: 1, title: "Consultation", description: "We meet to understand your needs, preferences, and budget." },
        { step: 2, title: "Design Concept", description: "Our designers create detailed concepts and 3D visualizations." },
        { step: 3, title: "Approval", description: "You review and approve the designs with any modifications." },
        { step: 4, title: "Execution", description: "Our team executes the design with precision and quality." },
        { step: 5, title: "Final Touches", description: "We complete the project and ensure your satisfaction." }
      ]
    },
    "office-interior": {
      title: "Office Interior Design",
      shortTitle: "Office Interiors",
      description: "Professional workspace solutions that boost productivity and inspire your team.",
      longDescription: "Create inspiring workspaces that enhance productivity and reflect your company's values. Our office design solutions combine functionality with aesthetics to create environments where teams thrive.",
      image: "🏢",
      features: [
        "Open Plan Offices",
        "Executive Suites",
        "Meeting Rooms",
        "Collaborative Spaces",
        "Reception Areas",
        "Breakout Zones"
      ],
      benefits: [
        "Increased productivity",
        "Better collaboration",
        "Employee satisfaction",
        "Professional image",
        "Optimal space usage",
        "Brand representation"
      ],
      process: [
        { step: 1, title: "Space Analysis", description: "We analyze your office space and workflow requirements." },
        { step: 2, title: "Ergonomic Design", description: "We design ergonomic and productive workspaces." },
        { step: 3, title: "Brand Integration", description: "We incorporate your brand identity into the design." },
        { step: 4, title: "Implementation", description: "Our team implements the design seamlessly." },
        { step: 5, title: "Optimization", description: "We optimize the space for maximum productivity." }
      ]
    },
    "modular-kitchen": {
      title: "Modular Kitchen Design",
      shortTitle: "Modular Kitchens",
      description: "Smart and stylish kitchen designs with efficient storage and modern functionality.",
      longDescription: "Elevate your cooking experience with our modular kitchen designs. We combine smart storage solutions with contemporary aesthetics to create functional, beautiful kitchens.",
      image: "🍳",
      features: [
        "Modular Cabinets",
        "Smart Storage",
        "Premium Appliances",
        "Countertop Solutions",
        "Lighting Design",
        "Material Selection"
      ],
      benefits: [
        "Optimal storage",
        "Easy maintenance",
        "Modern aesthetics",
        "Better functionality",
        "Cost efficiency",
        "Durability"
      ],
      process: [
        { step: 1, title: "Assessment", description: "We assess your kitchen space and cooking habits." },
        { step: 2, title: "Design Planning", description: "We create modular designs with optimal storage." },
        { step: 3, title: "Material Selection", description: "You choose premium materials and finishes." },
        { step: 4, title: "Installation", description: "Our experts install the kitchen with precision." },
        { step: 5, title: "Quality Check", description: "We ensure everything works perfectly." }
      ]
    },
    "renovation": {
      title: "Renovation Services",
      shortTitle: "Renovations",
      description: "Complete renovation solutions that transform your existing spaces into modern, beautiful environments.",
      longDescription: "Whether it's a partial update or a complete overhaul, our renovation services breathe new life into your spaces. We handle everything from planning to execution.",
      image: "🔨",
      features: [
        "Structural Changes",
        "Complete Makeovers",
        "Partial Renovations",
        "Restoration Work",
        "Modernization",
        "Sustainability Focus"
      ],
      benefits: [
        "Improved aesthetics",
        "Enhanced functionality",
        "Increased property value",
        "Modern amenities",
        "Energy efficiency",
        "Better space flow"
      ],
      process: [
        { step: 1, title: "Planning", description: "We create a comprehensive renovation plan." },
        { step: 2, title: "Design", description: "We design the new space with all improvements." },
        { step: 3, title: "Coordination", description: "We coordinate all contractors and suppliers." },
        { step: 4, title: "Execution", description: "We oversee the entire renovation process." },
        { step: 5, title: "Completion", description: "We deliver your beautifully renovated space." }
      ]
    }
  };

  const serviceData = services[service];
  const heroImages = {
  "home-interior": homeImage,
  "office-interior": officeImage,
  "modular-kitchen": kitchenImage,
  "renovation": renovationImage,
};

const heroImage = heroImages[service];

  if (!serviceData) {
    return <div>Service not found</div>;
  }

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
  style={{
    minHeight: "70vh",
    backgroundImage: `
      linear-gradient(
        rgba(0,0,0,0.55),
        rgba(0,0,0,0.55)
      ),
      url(${heroImage})
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "100px 40px 80px",
    marginTop: "70px",
  }}
>
        <div style={{ textAlign: "center", maxWidth: "900px" }}>
          
          <h1 style={{ fontSize: "3.5rem", fontFamily: "var(--font-heading)", marginBottom: "20px" }}>
            {serviceData.title}
          </h1>
          <p style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.8)" }}>
            {serviceData.longDescription}
          </p>
        </div>
      </section>

      {/* Description */}
      <section style={{ padding: "80px 60px", background: "#F7F3EE" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.5rem", fontFamily: "var(--font-heading)", color: "#1D1A17", marginBottom: "20px" }}>
            Why Choose Our {serviceData.shortTitle}?
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.8", color: "#666", marginBottom: "40px" }}>
            {serviceData.longDescription}
          </p>
        </div>
      </section>

      {/* Features & Benefits Grid */}
      <section className="service-section" style={{ background: "white" }}>
        <div
  className="features-benefits-grid"
  style={{
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gap: "80px"
  }}
>
          {/* Features */}
          <div>
            <h3 style={{ fontSize: "2rem", fontFamily: "var(--font-heading)", color: "#1D1A17", marginBottom: "30px" }}>
              What We Offer
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              {serviceData.features.map((feature, index) => (
                <div key={index} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <FaCheck style={{ color: "#C79A63", fontSize: "1.2rem", flexShrink: 0 }} />
                  <span style={{ color: "#666", fontSize: "1rem" }}>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h3 style={{ fontSize: "2rem", fontFamily: "var(--font-heading)", color: "#1D1A17", marginBottom: "30px" }}>
              Key Benefits
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              {serviceData.benefits.map((benefit, index) => (
                <div key={index} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <FaCheck style={{ color: "#C79A63", fontSize: "1.2rem", flexShrink: 0 }} />
                  <span style={{ color: "#666", fontSize: "1rem" }}>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Process */}
      <section style={{ padding: "80px 60px", background: "#F7F3EE" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.5rem", fontFamily: "var(--font-heading)", color: "#1D1A17", marginBottom: "60px", textAlign: "center" }}>
            Our Process
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "30px" }}>
            {serviceData.process.map((item) => (
              <div key={item.step} style={{
                background: "white",
                padding: "30px",
                borderRadius: "8px",
                border: "1px solid #E6DDD2",
                textAlign: "center"
              }}>
                <div style={{
                  width: "50px",
                  height: "50px",
                  background: "#C79A63",
                  color: "white",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 15px",
                  fontSize: "1.5rem",
                  fontWeight: "bold"
                }}>
                  {item.step}
                </div>
                <h3 style={{ fontSize: "1.2rem", color: "#1D1A17", marginBottom: "10px", fontFamily: "var(--font-heading)" }}>
                  {item.title}
                </h3>
                <p style={{ color: "#666", fontSize: "0.9rem" }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Teaser */}
      <section style={{ padding: "80px 60px", background: "white" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "2.5rem", fontFamily: "var(--font-heading)", color: "#1D1A17", marginBottom: "15px" }}>
            See Our Work
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#666", marginBottom: "40px" }}>
            Explore more beautiful projects in our portfolio
          </p>
          <Link to="/" style={{
            display: "inline-block",
            padding: "16px 40px",
            background: "#C79A63",
            color: "white",
            textDecoration: "none",
            borderRadius: "50px",
            fontWeight: "600",
            transition: "var(--transition)"
          }} onClick={(e) => {
            e.preventDefault();
            const portfolioSection = document.getElementById("portfolio");
            if (portfolioSection) portfolioSection.scrollIntoView({ behavior: "smooth" });
          }}>
            View Portfolio
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: "80px 60px",
        background: "#1D1A17",
        color: "white",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "2.5rem", fontFamily: "var(--font-heading)", marginBottom: "15px" }}>
          Ready to transform your <span style={{ color: "#C79A63", fontStyle: "italic" }}>space?</span>
        </h2>
        <p style={{ fontSize: "1.1rem", marginBottom: "30px", color: "rgba(255,255,255,0.8)" }}>
          Let's discuss your {serviceData.shortTitle.toLowerCase()} project and bring your vision to life.
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
          border: "none",
          borderRadius: "50px",
          fontWeight: "600",
          cursor: "pointer",
          fontSize: "1rem",
          transition: "var(--transition)",
          textDecoration: "none"
        }}>
          Book a Consultation <FaArrowRight style={{ marginLeft: "8px", display: "inline" }} />
        </Link>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default ServiceDetailPage;
