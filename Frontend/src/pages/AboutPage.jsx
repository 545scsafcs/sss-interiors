import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { FaArrowRight } from "react-icons/fa";

function AboutPage() {
  const navigate = useNavigate();

const goToContact = () => {
  navigate("/");

  setTimeout(() => {
    const section = document.getElementById("contact");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, 300);
};

  const teamMembers = [
    { id: 1, name: "Sarah Shaw", role: "Principal Designer", initial: "S" },
    { id: 2, name: "Vikram Rao", role: "Senior Designer", initial: "V" },
    { id: 3, name: "Monica Jain", role: "Design Lead", initial: "M" },
    { id: 4, name: "Aditya Verma", role: "Project Manager", initial: "A" }
  ];

  const testimonials = [
    {
      id: 1,
      text: "SSS Interiors completely transformed our home. The design is stunning and the team was incredibly professional throughout the process.",
      author: "Priya Malhotra",
      role: "Homeowner, Mumbai"
    },
    {
      id: 2,
      text: "The office redesign has boosted our team's productivity and morale. We couldn't be happier with the results!",
      author: "Rajesh Agarwal",
      role: "CEO, Tech Company"
    },
    {
      id: 3,
      text: "From concept to completion, SSS Interiors delivered beyond our expectations. Highly recommended!",
      author: "Priya Sharma",
      role: "Entrepreneur, Delhi"
    }
  ];
  

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="about-page-hero" style={{
        minHeight: "60vh",
        background: "linear-gradient(135deg, #1D1A17, #2C2C2C)",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "100px 40px 80px",
        marginTop: "70px"
      }}>
        <div>
          <h1 style={{ fontSize: "3.5rem", fontFamily: "var(--font-heading)", marginBottom: "20px" }}>
            A studio shaped by <span style={{ color: "#C79A63", fontStyle: "italic" }}>craft.</span>
          </h1>
          <p style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.8)", maxWidth: "600px", margin: "0 auto" }}>
            Founded in 2010, SSS Interiors has been transforming spaces and creating lasting impressions for over 15 years.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section style={{ padding: "100px 60px", background: "#F7F3EE" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.5rem", fontFamily: "var(--font-heading)", color: "#1D1A17", marginBottom: "20px" }}>
            Our Journey
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.8", color: "#666", marginBottom: "20px" }}>
            SSS Interiors was founded with a simple vision: to create beautiful, functional spaces that enhance the way people live and work. What started as a small design studio has grown into a full-service interior design and renovation company.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.8", color: "#666", marginBottom: "20px" }}>
            Over the years, we've had the privilege of working with hundreds of clients – from homeowners looking to refresh their living spaces to corporate offices seeking productive work environments. Each project is unique, and we approach every design challenge with the same passion and commitment to excellence.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.8", color: "#666" }}>
            Today, our team of talented designers, architects, and craftspeople continue to push the boundaries of interior design, combining creativity with innovation to deliver spaces that truly inspire.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{ padding: "100px 60px", background: "white" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px" }}>
          <div style={{ padding: "40px", background: "#F7F3EE", borderRadius: "8px" }}>
            <h3 style={{ fontSize: "1.8rem", fontFamily: "var(--font-heading)", color: "#1D1A17", marginBottom: "15px" }}>
              Our Mission
            </h3>
            <p style={{ fontSize: "1rem", lineHeight: "1.8", color: "#666" }}>
              To design innovative and functional interior spaces that reflect the unique personality and lifestyle of our clients while maintaining the highest standards of craftsmanship and sustainability.
            </p>
          </div>
          <div style={{ padding: "40px", background: "#1D1A17", borderRadius: "8px", color: "white" }}>
            <h3 style={{ fontSize: "1.8rem", fontFamily: "var(--font-heading)", color: "#C79A63", marginBottom: "15px" }}>
              Our Vision
            </h3>
            <p style={{ fontSize: "1rem", lineHeight: "1.8", color: "rgba(255,255,255,0.8)" }}>
              To be the leading interior design studio known for transforming spaces into extraordinary environments where people thrive, creating a legacy of beautiful, timeless design.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section style={{ padding: "100px 60px", background: "#F7F3EE" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.5rem", fontFamily: "var(--font-heading)", color: "#1D1A17", marginBottom: "15px", textAlign: "center" }}>
            Meet Our Team
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#666", marginBottom: "60px", textAlign: "center" }}>
            Our talented team brings creativity, expertise, and passion to every project.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "30px" }}>
            {teamMembers.map((member) => (
              <div key={member.id} style={{
                background: "white",
                padding: "30px",
                borderRadius: "8px",
                textAlign: "center",
                border: "1px solid #E6DDD2",
                transition: "var(--transition)"
              }}>
                <div style={{
                  width: "80px",
                  height: "80px",
                  background: "#C79A63",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2rem",
                  color: "white",
                  margin: "0 auto 15px",
                  fontWeight: "bold"
                }}>
                  {member.initial}
                </div>
                <h3 style={{ fontSize: "1.2rem", color: "#1D1A17", marginBottom: "5px", fontFamily: "var(--font-heading)" }}>
                  {member.name}
                </h3>
                <p style={{ color: "#C79A63", fontSize: "0.9rem", fontWeight: "600" }}>
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Achievements */}
      <section style={{ padding: "100px 60px", background: "white" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.5rem", fontFamily: "var(--font-heading)", color: "#1D1A17", marginBottom: "60px", textAlign: "center" }}>
            Experience & Achievements
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "40px" }}>
            <div style={{ textAlign: "center", padding: "30px", background: "#F7F3EE", borderRadius: "8px" }}>
              <div style={{ fontSize: "3rem", fontFamily: "var(--font-heading)", color: "#C79A63", marginBottom: "10px", fontWeight: "700" }}>
                15+
              </div>
              <p style={{ fontSize: "1rem", color: "#1D1A17", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px" }}>
                Years in Business
              </p>
            </div>

            <div style={{ textAlign: "center", padding: "30px", background: "#F7F3EE", borderRadius: "8px" }}>
              <div style={{ fontSize: "3rem", fontFamily: "var(--font-heading)", color: "#C79A63", marginBottom: "10px", fontWeight: "700" }}>
                500+
              </div>
              <p style={{ fontSize: "1rem", color: "#1D1A17", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px" }}>
                Projects Completed
              </p>
            </div>

            <div style={{ textAlign: "center", padding: "30px", background: "#F7F3EE", borderRadius: "8px" }}>
              <div style={{ fontSize: "3rem", fontFamily: "var(--font-heading)", color: "#C79A63", marginBottom: "10px", fontWeight: "700" }}>
                300+
              </div>
              <p style={{ fontSize: "1rem", color: "#1D1A17", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px" }}>
                Happy Clients
              </p>
            </div>

            <div style={{ textAlign: "center", padding: "30px", background: "#F7F3EE", borderRadius: "8px" }}>
              <div style={{ fontSize: "3rem", fontFamily: "var(--font-heading)", color: "#C79A63", marginBottom: "10px", fontWeight: "700" }}>
                98%
              </div>
              <p style={{ fontSize: "1rem", color: "#1D1A17", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px" }}>
                Client Satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: "100px 60px", background: "#F7F3EE" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.5rem", fontFamily: "var(--font-heading)", color: "#1D1A17", marginBottom: "60px", textAlign: "center" }}>
            What Clients Say
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} style={{
                background: "white",
                padding: "30px",
                borderRadius: "8px",
                border: "1px solid #E6DDD2"
              }}>
                <p style={{ fontSize: "1rem", color: "#666", marginBottom: "20px", fontStyle: "italic" }}>
                  "{testimonial.text}"
                </p>
                <div style={{ borderTop: "1px solid #E6DDD2", paddingTop: "15px" }}>
                  <p style={{ fontSize: "0.95rem", color: "#1D1A17", fontWeight: "600", marginBottom: "3px" }}>
                    {testimonial.author}
                  </p>
                  <p style={{ fontSize: "0.85rem", color: "#C79A63", fontWeight: "600" }}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
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
          Ready to begin your <span style={{ color: "#C79A63", fontStyle: "italic" }}>project?</span>
        </h2>
        <p style={{ fontSize: "1.1rem", marginBottom: "30px", color: "rgba(255,255,255,0.8)" }}>
          Let's create something beautiful together. Schedule a consultation with our design experts today.
        </p>
        <button
  onClick={goToContact}
  style={{
    display: "inline-block",
    padding: "16px 40px",
    background: "#C79A63",
    color: "white",
    border: "none",
    borderRadius: "50px",
    fontWeight: "600",
    transition: "var(--transition)",
    cursor: "pointer"
  }}
>
  Book Consultation
  <FaArrowRight
    style={{
      marginLeft: "8px",
      display: "inline"
    }}
  />
</button>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default AboutPage;
