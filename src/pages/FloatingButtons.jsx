import { FaWhatsapp, FaPhone } from "react-icons/fa";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-5 left-5 flex flex-col gap-3 z-50">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/923341111427" // Replace with your number
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <FaWhatsapp size={24} />
      </a>

      {/* Call Button */}
      <a
        href="tel:+923341111427" // Replace with your number
        className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition"
      >
        <FaPhone size={24} />
      </a>
    </div>
  );
};

export default FloatingButtons;
