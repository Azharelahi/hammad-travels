import { FaWhatsapp, FaPhone } from "react-icons/fa";
import "./floating.css"
const FloatingButtons = () => {
  return (
    <div className="fixed bottom-5 left-5 md:bottom-3 md:left-3 flex flex-col gap-3 float-icons">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/923341111427" // Replace with your number
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 md:p-3 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <FaWhatsapp className="w-6 h-6 md:w-5 md:h-5" />
      </a>

      {/* Call Button */}
      <a
        href="tel:+923341111427" // Replace with your number
        className="bg-blue-500 text-white p-4 md:p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
      >
        <FaPhone className="w-6 h-6 md:w-5 md:h-5" />
      </a>
    </div>
  );
};

export default FloatingButtons;
