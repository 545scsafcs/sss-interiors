import { Link } from "react-router-dom";

function About() {
  return (
    <section id="about" className="about" data-aos="fade-up">
      <div className="section-header">
        <div className="section-label">ABOUT OUR STUDIO</div>
        <h2 className="section-title">A studio shaped by <span>craft.</span></h2>
      </div>

      <div className="about-content">
        <div className="about-left">
          <h2>SSS Interiors</h2>

          <p>
            Founded in 2010, SSS Interiors has been at the forefront of premium interior design and renovation. Our studio has transformed hundreds of homes, offices, and commercial spaces into elegant and functional environments that inspire.
          </p>

          <p>
            We believe that every space tells a story. Our team combines creativity, innovation, and meticulous craftsmanship to deliver interiors that don't just look beautiful – they enhance the way you live and work.
          </p>

          <Link to="/about" className="about-cta">
            Learn More →
          </Link>
        </div>

        <div className="about-right">
          <div className="stat-card">
            <div className="stat-card-number">15+</div>
            <div className="stat-card-label">Years of Experience</div>
          </div>

          <div className="stat-card">
            <div className="stat-card-number">500+</div>
            <div className="stat-card-label">Projects Completed</div>
          </div>

          <div className="stat-card">
            <div className="stat-card-number">300+</div>
            <div className="stat-card-label">Happy Clients</div>
          </div>

          <div className="stat-card">
            <div className="stat-card-number">98%</div>
            <div className="stat-card-label">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;