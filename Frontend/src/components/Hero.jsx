import heroImage from "../assets/hero.jpg";

function Hero() {
  return (
    <section id="home" className="hero"
      style={{
        backgroundImage: `linear-gradient(
          rgba(0,0,0,0.5),
          rgba(0,0,0,0.5)
        ), url(${heroImage})`,
      }}
    >
      <h1>Transform Your Dream Space Into Reality</h1>

      <p>
        Premium Interior Design Solutions for Homes and Offices
      </p>

      <button> <a href="#contact">Book Consultation</a></button>
    </section>
  );
}

export default Hero;