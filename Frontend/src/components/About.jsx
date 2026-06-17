function About() {
  return (
    <section id="about" className="about" data-aos="fade-up">
      <div className="about-left">
        <h2>About SSS Interiors</h2>

        <p>
          Since 2010, SSS Interiors has been transforming homes,
          offices, and commercial spaces into elegant and functional
          environments.
        </p>

        <p>
          Our team combines creativity, innovation, and premium
          craftsmanship to deliver interiors that reflect your
          personality and lifestyle.
        </p>

        <button className="about-btn">
          Learn More
        </button>
      </div>

      <div className="about-right">
        <div className="stat-card">
          <h3>14+</h3>
          <p>Years Experience</p>
        </div>

        <div className="stat-card">
          <h3>500+</h3>
          <p>Projects Completed</p>
        </div>

        <div className="stat-card">
          <h3>300+</h3>
          <p>Happy Clients</p>
        </div>

        <div className="stat-card">
          <h3>24/7</h3>
          <p>Support</p>
        </div>
      </div>

    </section>
  );
}

export default About;