import { useState } from "react";
import axios from "axios";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://sss-interiors-backend.onrender.com/api/leads",
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: formData.service,
          message: formData.message,
        }
      );

      console.log(res.data);

      alert("Lead Submitted Successfully ✅");

      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        budget: "",
        message: "",
      });

    } catch (error) {
      console.error(error);
      alert("Something went wrong ❌");
    }
  };

  return (
    <section
      id="contact"
      className="contact"
      data-aos="zoom-in"
    >

      <div className="contact-header">
        <h2>Let's design something <span>beautiful.</span></h2>

        <p>
          Share a few details about your project, and our design experts will reach out to discuss your vision.
        </p>
      </div>

      <div className="contact-container">

        <div className="contact-info">

          <div className="info-card">
            <div className="info-card-title">
              <FaPhone style={{ marginRight: "8px" }} />
              Phone
            </div>
            <a href="tel:+919999988888" style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}>
              <p>+91 99999 88888</p>
            </a>
          </div>

          <div className="info-card">
            <div className="info-card-title">
              <FaEnvelope style={{ marginRight: "8px" }} />
              Email
            </div>
            <a href="mailto:info@sssinteriors.com" style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}>
              <p>info@sssinteriors.com</p>
            </a>
          </div>

          <div className="info-card">
            <div className="info-card-title">
              <FaMapMarkerAlt style={{ marginRight: "8px" }} />
              Location
            </div>
            <a href="https://maps.google.com/?q=Uttarakhand,India" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}>
              <p>Uttarakhand, India</p>
            </a>
          </div>

        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <div className="contact-form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-form-group full">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-form-group">
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">
                Select Project Type
              </option>

              <option>
                Home Interior
              </option>

              <option>
                Office Interior
              </option>

              <option>
                Modular Kitchen
              </option>

              <option>
                Renovation
              </option>

            </select>

            <input
              type="number"
              name="budget"
              placeholder="Estimated Budget (₹)"
              value={formData.budget}
              onChange={handleChange}
            />
          </div>

          <div className="contact-form-group full">
            <textarea
              rows="4"
              name="message"
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit">
            Request Consultation
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;