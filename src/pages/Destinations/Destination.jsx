import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Hotel, Image, MapPin, ArrowRightCircle } from "lucide-react";
import "animate.css";

const Destination = () => {
  useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}, []);
  const location = useLocation();
  const navigate = useNavigate();
  const destination = location.state?.destination;
  const [selectedImage, setSelectedImage] = useState(null);
  const galleryRef = useRef(null);

  const openInGoogleMaps = (place, description) => {
    const query = encodeURIComponent(`${place}, ${description}`);
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${query}`,
      "_blank"
    );
  };

  return (
    <div ref={galleryRef} className="bg-gray-50 min-h-screen pb-10">
      {/* Hero Section */}
      <div className=" relative w-full h-72">
        {/* Background Image */}
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover brightness-75"
        />

        {/* Overlay Content */}
        <div className="mt-12 absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6">
          {/* Title with Map Icon */}
          <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg flex items-center gap-2">
            <MapPin className="w-8 h-8" /> {destination.name}
          </h1>

          {/* Short Description with Better Visibility */}
          <p className="text-lg md:text-xl mt-4 max-w-2xl drop-shadow-md text-white font-medium italic">
            "{destination.shortDes}"
          </p>

          {/* Distance - Styled for Clarity */}
          <p className="mt-3 text-sm md:text-lg bg-white/30 px-4 py-2 rounded-full font-semibold text-white shadow-lg">
            📍 <span className="font-bold">{destination.distance}</span>
          </p>
        </div>
      </div>

      {/* Details Section */}
      <div className=" container mx-auto p-6 text-center">
        <h2
          className="text-3xl font-semibold text-center mb-6 bg-clip-text text-transparent 
                 bg-gradient-to-r from-[#ff7eb3] to-[#5394d2]"
        >
          <Image className="w-6 h-6" /> About {destination.name}
        </h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
          {destination.detailedDes}
        </p>
      </div>

      {/* Hotels Section */}
      <div className="bg-white py-10 px-6 md:px-20 shadow-md rounded-lg max-w-4xl mx-auto my-6">
        <h2
          className="text-3xl font-semibold text-center mb-6 bg-clip-text text-transparent 
                 bg-gradient-to-r from-[#ff7eb3] to-[#5394d2]"
        >
          <Hotel className="w-6 h-6" /> Top Hotels
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {destination.hotels.map((hotel, index) => (
            <div
              key={index}
              className="p-4 bg-gray-100 rounded-lg shadow text-gray-700 text-lg"
            >
              {hotel}
            </div>
          ))}
        </div>
      </div>

      {/** Top Tourism Points */}
      <div className="container mx-auto p-6 bg-gray-100">
        <h2
          className="text-3xl font-semibold text-center mb-6 bg-clip-text text-transparent 
               bg-gradient-to-r from-[#ff7eb3] to-[#5394d2]"
        >
          Top Tourism Points
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {destination.subImages.map((item, index) => (
            <div
              key={index}
              className="relative p-6 cursor-pointer rounded-xl shadow-lg bg-white text-black 
                 flex flex-col items-center justify-center transition-all duration-300 
                 hover:scale-105 hover:shadow-xl active:scale-95"
              onClick={() => setSelectedImage(item)}
            >
              {/* Map Pin Icon */}
              <MapPin className="w-16 h-16 mb-4 text-gray-800 drop-shadow-md" />

              {/* Title with Gradient */}
              <h3
                className="text-2xl font-bold text-center bg-clip-text text-transparent 
                 bg-gradient-to-r from-[#ff7eb3] to-[#5394d2]"
              >
                {item.description}
              </h3>

              {/* Description with One-Line Limit */}
              <p className="text-gray-700 text-md mt-2 text-center truncate w-full px-2">
                {item.Mdes}
              </p>

              {/* Pulsating "Tap to Explore" for Mobile Only */}
              <div
                className="absolute inset-0 bg-black/20 text-white text-lg font-semibold 
                   flex items-center justify-center opacity-0 sm:hidden 
                   transition-all duration-300 hover:opacity-100 animate-pulse"
              >
                Tap to Explore
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="flex flex-col items-center justify-center min-h-[40vh] px-6 text-center">
        {/* Soft & Engaging Call-to-Action Message */}
        <h2
          className="text-3xl md:text-4xl text-gray-900 
               bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent 
               font-[Outfit] tracking-wide leading-snug md:leading-tight max-w-3xl"
        >
          Ready to explore the beauty of {destination.name}? Let’s make your
          journey unforgettable!
        </h2>

        {/* Centered Button with Premium Look */}
        <button
          onClick={() => navigate("/car-hire")}
          className="mt-8 px-10 py-4 text-lg md:text-xl font-semibold text-white rounded-full shadow-lg 
               bg-gradient-to-br from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 
               transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 
               focus:ring-4 focus:ring-indigo-300"
        >
          Start Your Adventure{" "}
          <ArrowRightCircle className="w-6 h-6 animate-bounce" />
        </button>
      </div>

      {/* Animated Popup */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)} // Close when clicking outside
          >
            <motion.div
              className="backdrop-blur-lg bg-white/20 border border-white/30 rounded-lg shadow-xl p-6 max-w-lg w-full text-center relative"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              {/* Close Button (Top Right) */}
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevents event bubbling
                  setSelectedImage(null);
                }}
                className="cursor-pointer absolute top-3 right-4 text-white bg-gray-600/40 p-2 rounded-full hover:bg-gray-800/60 transition"
              >
                ✕
              </button>

              {/* Title & Description with Margin Fix */}
              <h2 className="text-3xl font-bold text-white drop-shadow-lg mt-8">
                {selectedImage.description}
              </h2>
              <p className="text-white/80 text-lg mt-2 drop-shadow-sm">
                {selectedImage.Mdes}
              </p>

              {/* Buttons (Always in One Row) */}
              <div className="mt-6 flex flex-wrap justify-center gap-3 sm:gap-6">
                {/* Show on Map Button */}
                <button
                  onClick={() =>
                    openInGoogleMaps(
                      selectedImage.description,
                      destination.name
                    )
                  }
                  className="px-4 py-2 bg-blue-600/70 text-white rounded-lg flex items-center gap-2 hover:bg-blue-700/70 transition"
                >
                  📍 Show on Map
                </button>

                {/* Rent and Go Button */}
                <button
                  onClick={() => navigate("/car-hire")}
                  className="px-4 py-2 bg-green-600/70 text-white rounded-lg flex items-center hover:bg-green-700/70 transition"
                >
                  🚗 Rent And Go
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Destination;
