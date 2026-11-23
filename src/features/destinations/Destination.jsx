import React, { useEffect, useRef, useState, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Hotel, Image, MapPin, ArrowRightCircle } from "lucide-react";
import "animate.css";

const Destination = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const galleryRef = useRef(null);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Ensure destination data exists before accessing its properties
  const destination = useMemo(() => location.state?.destination || {}, [location.state]);

  // Open location in Google Maps
  const openInGoogleMaps = (place, description) => {
    const query = encodeURIComponent(`${place}, ${description}`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, "_blank");
  };

  return (
    <div ref={galleryRef} className="bg-gray-50 min-h-screen pb-10">
      {/* Hero Section */}
      <div className="relative w-full h-72">
        {/* Background Image */}
        <img
          src={destination.image}
          alt={destination.name || "Destination"}
          className="w-full h-full object-cover brightness-75"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6">
          <h1 className="text-4xl md:text-5xl font-extrabold flex items-center gap-2 drop-shadow-lg mt-8">
            <MapPin className="w-8 h-8" /> {destination.name || "Unknown Destination"}
          </h1>

          <p className="text-lg md:text-xl mt-4 max-w-2xl text-white font-medium italic drop-shadow-md">
            "{destination.shortDes || "Explore the beauty of this place!"}"
          </p>

          <p className="mt-3 text-sm md:text-lg bg-white/30 px-4 py-2 rounded-full font-semibold text-white shadow-lg">
            📍 <span className="font-bold">{destination.distance || "Distance unknown"}</span>
          </p>
        </div>
      </div>

      {/* Details Section */}
      <div className="container mx-auto p-6 text-center">
        <h2 className="text-3xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#ff7eb3] to-[#5394d2]">
          <Image className="w-6 h-6 inline-block" /> About {destination.name || "this place"}
        </h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
          {destination.detailedDes || "No detailed description available."}
        </p>
      </div>

      {/* Hotels Section */}
      {destination.hotels?.length > 0 && (
        <div className="bg-white py-10 px-6 md:px-20 shadow-md rounded-lg max-w-4xl mx-auto my-6">
          <h2 className="text-3xl font-semibold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#ff7eb3] to-[#5394d2]">
            <Hotel className="w-6 h-6 inline-block" /> Top Hotels
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {destination.hotels.map((hotel, index) => (
              <div key={index} className="p-4 bg-gray-100 rounded-lg shadow text-gray-700 text-lg">
                {hotel}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Top Tourism Points */}
      {destination.subImages?.length > 0 && (
        <div className="container mx-auto p-6 bg-gray-100">
          <h2 className="text-3xl font-semibold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#ff7eb3] to-[#5394d2]">
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
                <MapPin className="w-16 h-16 mb-4 text-gray-800 drop-shadow-md" />
                <h3 className="text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#ff7eb3] to-[#5394d2]">
                  {item.description}
                </h3>
                <p className="text-gray-700 text-md mt-2 text-center truncate w-full px-2">
                  {item.Mdes}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Call to Action */}
      <div className="flex flex-col items-center justify-center min-h-[40vh] px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent max-w-3xl">
          Ready to explore the beauty of {destination.name || "this place"}? Let’s make your journey unforgettable!
        </h2>

        <button
          onClick={() => navigate("/car-hire")}
          className="mt-8 px-10 py-4 text-lg font-semibold text-white rounded-full shadow-lg 
               bg-gradient-to-br from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 
               transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
        >
          Start Your Adventure <ArrowRightCircle className="w-6 h-6 animate-bounce" />
        </button>
      </div>

      {/* Animated Popup */}
      {/* Animated Popup */}
{/* Animated Popup */}
<AnimatePresence>
  {selectedImage && (
    <motion.div
      className="fixed inset-0 bg-black/50 flex justify-center items-center p-4 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedImage(null)}
    >
      <motion.div
        className="bg-white/30 backdrop-blur-md rounded-2xl shadow-2xl p-6 w-full max-w-md text-center relative flex flex-col items-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setSelectedImage(null)}
          className="absolute top-4 right-4 text-gray-700 hover:text-red-600 text-2xl"
        >
          ✕
        </button>

        {/* Icon */}
        <div className="bg-white p-4 rounded-full shadow-md">
          <MapPin className="text-blue-500 w-12 h-12" />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 mt-4">{selectedImage.description}</h2>

        {/* Description */}
        <p className="text-gray-700 mt-2 text-md px-4">{selectedImage.Mdes}</p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row w-full gap-4">
          {/* Show on Map */}
          <button
            onClick={() => openInGoogleMaps(selectedImage.description, selectedImage.Mdes)}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 text-lg font-semibold text-white rounded-full bg-blue-500 hover:bg-blue-600 transition-all duration-300 shadow-md"
          >
            <MapPin className="w-5 h-5" /> Show on Map
          </button>

          {/* Rent and Go */}
          <button
            onClick={() => navigate("/car-hire")}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 text-lg font-semibold text-white rounded-full bg-green-500 hover:bg-green-600 transition-all duration-300 shadow-md"
          >
            <ArrowRightCircle className="w-5 h-5" /> Rent and Go
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
