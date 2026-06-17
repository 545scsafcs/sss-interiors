import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/+15556541097"
      target="_blank"
      rel="noreferrer"
      className="whatsapp-btn"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsAppButton;