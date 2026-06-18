import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/14155238886?text=Hi"
      target="_blank"
      rel="noreferrer"
      className="whatsapp-btn"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsAppButton;