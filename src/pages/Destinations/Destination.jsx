import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Gallery from "../../components/Gallery/Gallery";

const Destination = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const destination = location.state?.destination;

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <Gallery />
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destination.subImages.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-4 cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.url}
                alt="Destination"
                className="w-full h-48 object-cover rounded-md"
              />
              <h1 className="text-xl font-semibold text-center mt-3">
                {item.description}
              </h1>
            </div>
          ))}
        </div>
      </div>

      {/* Animated Popup */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg shadow-xl p-6 max-w-lg w-full text-center"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
            >
              <img
                src={selectedImage.url}
                alt="Popup"
                className="w-full h-64 object-cover rounded-md"
              />
              <h2 className="text-2xl font-semibold mt-4">
                {selectedImage.description}
              </h2>
              <p className="text-gray-600 mt-2">{selectedImage.description}</p>

              <div className="mt-6 flex justify-between">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={() => navigate("/")}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Let's Go
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
