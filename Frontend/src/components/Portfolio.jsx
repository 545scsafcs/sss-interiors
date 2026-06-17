import livingRoom from "../assets/living-room.jpg";
import bedroom from "../assets/bedroom.jpg";
import kitchen from "../assets/kitchen.jpg";
import office from "../assets/office.jpg";

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio" data-aos="fade-up">
      <h2>Our Portfolio</h2>

      <div className="portfolio-grid">

        <div className="portfolio-card">
          <img src={livingRoom} alt="Living Room" />
          <h3>Living Room Design</h3>
        </div>

        <div className="portfolio-card">
          <img src={bedroom} alt="Bedroom" />
          <h3>Bedroom Design</h3>
        </div>

        <div className="portfolio-card">
          <img src={kitchen} alt="Kitchen" />
          <h3>Modular Kitchen</h3>
        </div>

        <div className="portfolio-card">
          <img src={office} alt="Office" />
          <h3>Office Interior</h3>
        </div>

      </div>
    </section>
  );
}

export default Portfolio;