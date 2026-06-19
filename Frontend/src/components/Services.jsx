import { Link } from "react-router-dom";
import { FaHome, FaBuilding, FaUtensils, FaHammer } from "react-icons/fa";

function Services() {
  const services = [
    {
      id: 1,
      title: "Home Interior Design",
      description: "Transform your living spaces into stunning sanctuaries. From living rooms to bedrooms, we create modern and luxury interiors that reflect your lifestyle.",
      icon: FaHome,
      link: "/services/home-interior",
      image: "🏠"
    },
    {
      id: 2,
      title: "Office Interior Design",
      description: "Professional workspace solutions that boost productivity. We design inspiring office environments that impress clients and motivate teams.",
      icon: FaBuilding,
      link: "/services/office-interior",
      image: "🏢"
    },
    {
      id: 3,
      title: "Modular Kitchen",
      description: "Smart and stylish kitchen designs with efficient storage. We combine functionality with aesthetics to create your dream cooking space.",
      icon: FaUtensils,
      link: "/services/modular-kitchen",
      image: "🍳"
    },
    {
      id: 4,
      title: "Renovation Services",
      description: "Complete renovation solutions for homes and offices. We transform existing spaces with careful planning and expert execution.",
      icon: FaHammer,
      link: "/services/renovation",
      image: "🔨"
    }
  ];

  return (
    <section id="services" className="services" data-aos="fade-up">
      <div className="section-header">
        <div className="section-label">OUR EXPERTISE</div>
        <h2 className="section-title">Six services. One studio.</h2>
        <p className="section-subtitle">From a single room to a full renovation, we have the expertise to bring your vision to life.</p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <Link to={service.link} key={service.id} style={{ textDecoration: "none" }}>
            <div className="service-card">
              <div className="service-card-image">
                {service.image}
              </div>
              <div className="service-card-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href={service.link} className="learn-more-link">
                  Learn More →
                </a>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Services;