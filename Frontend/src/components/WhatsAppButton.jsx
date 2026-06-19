import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/+14155238886?text=Hi%20SSS%20Interiors,%20I'd%20like%20to%20discuss%20my%20interior%20design%20project."
      target="_blank"
      rel="noreferrer"
      className="whatsapp-btn"
      title="Chat with us on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsAppButton;