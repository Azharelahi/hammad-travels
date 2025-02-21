import React from "react";
import { useLocation } from "react-router-dom";
const Destination = () => {
  const location = useLocation();
  const destination = location.state?.destination;
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 1, 1, 1, 1, 1].map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-4">
            <img
              src={destination.image}
              alt="dummy "
              className="w-full h-48 object-cover rounded-md"
            />
            <h1 className="text-xl font-semibold text-center mt-3">
              {destination.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destination;
