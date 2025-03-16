import React, { useEffect } from "react";
import { FaMapMarkerAlt, FaTree, FaHiking, FaWater } from "react-icons/fa";
import Heading from "../../components/Heading/Heading";
import { forestDestinations } from "../../utils/data";
import { Link } from "react-router-dom";

const Forests = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Heading heading={"Enchanting Forests Of Pakistan"} />
      <div className="container mx-auto px-4 py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {Object.values(forestDestinations).map((region) =>
            region.destinations.map((destination, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all transform hover:scale-105 hover:shadow-2xl"
              >
                {/* Image */}
                <div className="relative">
                  <img
                    className="w-full h-56 object-cover rounded-t-2xl"
                    src={destination.image}
                    alt={destination.name}
                  />
                  <div className="absolute top-3 left-3 bg-green-600 text-white px-3 py-1 text-sm font-semibold rounded-lg shadow">
                    <FaMapMarkerAlt className="inline-block mr-1" />
                    {region.region}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 bg-gradient-to-b from-white to-gray-100 rounded-b-2xl">
                  <h5 className="text-2xl font-bold text-gray-900 mb-3">
                    {destination.name}
                  </h5>
                  <p className="text-gray-700 text-sm">
                    {destination.description}
                  </p>

                  {/* Attractions List */}
                  <div className="mt-4">
                    <span className="font-semibold text-gray-800">
                      Top Attractions:
                    </span>
                    <ul className="mt-2 space-y-2 text-gray-600">
                      {destination.attractions.map((attraction, i) => (
                        <li key={i} className="flex items-center gap-2">
                          {/* Select Icon Based on Attraction Type */}
                          {attraction.toLowerCase().includes("forest") && (
                            <FaTree className="text-green-700" />
                          )}
                          {attraction.toLowerCase().includes("hiking") && (
                            <FaHiking className="text-brown-600" />
                          )}
                          {attraction.toLowerCase().includes("waterfall") && (
                            <FaWater className="text-blue-500" />
                          )}
                          {attraction}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Explore Button */}
                  <Link
                    to="/car-hire"
                    className="mt-6 inline-flex text-decoration-none items-center justify-center w-full bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                  >
                    Rent And Go!
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Forests;
