import { Link } from "react-router-dom";
import livingRoom from "../assets/living-room.jpg";
import bedroom from "../assets/bedroom.jpg";
import kitchen from "../assets/kitchen.jpg";
import office from "../assets/office.jpg";

function Portfolio() {
  const portfolioCategories = [
    { id: 1, title: "Living Room", link: "/portfolio/living-room", image: livingRoom, count: 6 },
    { id: 2, title: "Bedroom", link: "/portfolio/bedroom", image: bedroom, count: 6 },
    { id: 3, title: "Kitchen", link: "/portfolio/kitchen", image: kitchen, count: 6 },
    { id: 4, title: "Office", link: "/portfolio/office", image: office, count: 6 }
  ];

  return (
    <section id="portfolio" className="portfolio" data-aos="fade-up">
      <div className="section-header">
        <div className="section-label">SELECTED WORK</div>
        <h2 className="section-title">Spaces we've <span>brought to life</span></h2>
        <p className="section-subtitle">Explore our collection of beautifully designed interior spaces.</p>
      </div>

      <div className="portfolio-grid">
        {portfolioCategories.map((category) => (
          <Link to={category.link} key={category.id} style={{ textDecoration: "none" }}>
            <div className="portfolio-card">
              <div className="portfolio-card-image">
                <img src={category.image} alt={category.title} />
              </div>
              <div className="portfolio-card-content">
                <h3>{category.title}</h3>
                <p>{category.count} Projects</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;