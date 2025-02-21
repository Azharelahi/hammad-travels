import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const TourDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const tour = location.state?.tour;

  if (!tour) {
    return <h2 className="text-center text-2xl mt-10">Tour not found</h2>;
  }

  return (
    <div className="container mx-auto px-5 py-12">
      {/* Back Button */}
      <button
        className="mb-5 px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
        onClick={() => navigate(-1)}
      >
        ⬅ Back
      </button>

      {/* Tour Title */}
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6 text-center">
        <h1 className="text-3xl font-bold text-indigo-700">{tour.title}</h1>
        <p className="mt-3 text-gray-700">{tour.description}</p>
      </div>

      {/* Tour Images */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {tour.images.map((image, index) => (
          <img
            key={index}
            className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            src={image}
            alt={`Tour Image ${index + 1}`}
          />
        ))}
      </div>

      {/* Video Section */}
      <div className="mt-10 flex justify-center">
        <video
          controls
          className="w-full max-w-2xl rounded-lg shadow-lg border-2 border-indigo-500"
        >
          <source src={tour.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default TourDetails;
