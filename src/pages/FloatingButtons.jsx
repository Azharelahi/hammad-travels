import { FaWhatsapp, FaPhone } from "react-icons/fa";
import "./floating.css";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-4 left-4 sm:bottom-5 sm:left-5 md:bottom-6 md:left-6 xl:bottom-8 xl:left-8 flex flex-col gap-2 sm:gap-3 xl:gap-4 float-icons">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/923341111427"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-3 sm:p-4 md:p-5 xl:p-6 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 xl:w-8 xl:h-8" />
      </a>

      {/* Call Button */}
      <a
        href="tel:+923341111427"
        className="bg-blue-500 text-white p-3 sm:p-4 md:p-5 xl:p-6 rounded-full shadow-lg hover:bg-blue-600 transition"
      >
        <FaPhone className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 xl:w-8 xl:h-8" />
      </a>
    </div>
  );
};

export default FloatingButtons;
