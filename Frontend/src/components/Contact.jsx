import { useState } from "react";
import axios from "axios";

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
        "http://localhost:5000/api/leads",
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
        <h2>Let's Design Your Dream Space</h2>

        <p>
          Tell us about your project and our design experts
          will contact you shortly.
        </p>
      </div>

      <div className="contact-container">

        <div className="contact-info">

          <div className="info-card">
            <h3>📞 Phone</h3>
            <p>+91 XXXXX XXXXX</p>
          </div>

          <div className="info-card">
            <h3>📧 Email</h3>
            <p>info@sssinteriors.com</p>
          </div>

          <div className="info-card">
            <h3>📍 Location</h3>
            <p>Uttarakhand, India</p>
          </div>

        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="name"
            placeholder="Full Name"
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

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

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

          <textarea
            rows="5"
            name="message"
            placeholder="Describe Your Project"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">
            Request Consultation
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;