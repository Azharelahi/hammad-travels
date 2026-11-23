import React from "react";
import { useNavigate } from "react-router-dom";

const OurTours = () => {
  const tours = [
    {
      id: "mountain-adventure",
      title: "Mountain Adventure",
      description: "Explore breathtaking mountain views.",
      images: [
        "https://dummyimage.com/721x401",
        "https://dummyimage.com/721x402",
        "https://dummyimage.com/721x403",
        "https://dummyimage.com/721x404",
      ],
      video: "https://www.example.com/mountain-video.mp4",
      details:
        "Experience an unforgettable journey through the mountains. Enjoy hiking, camping, and breathtaking views!",
    },
    {
      id: "beach-getaway",
      title: "Beach Getaway",
      description: "Relax on beautiful sandy beaches.",
      images: [
        "https://dummyimage.com/722x401",
        "https://dummyimage.com/722x402",
        "https://dummyimage.com/722x403",
        "https://dummyimage.com/722x404",
      ],
      video: "https://www.example.com/beach-video.mp4",
      details:
        "Spend your time under the sun, listening to the waves and enjoying the golden sand.",
    },
    {
      id: "city-exploration",
      title: "City Exploration",
      description: "Discover hidden gems in urban landscapes.",
      images: [
        "https://dummyimage.com/723x401",
        "https://dummyimage.com/723x402",
        "https://dummyimage.com/723x403",
        "https://dummyimage.com/723x404",
      ],
      video: "https://www.example.com/city-video.mp4",
      details:
        "Take a deep dive into the city's culture, exploring historical landmarks, museums, and nightlife.",
    },
  ];

  const navigate = useNavigate();

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="p-4 md:w-1/3 cursor-pointer"
              onClick={() => navigate(`/tour/${tour.id}`, { state: { tour } })}
            >
              <div className="h-full rounded-lg overflow-hidden shadow-lg">
                <img
                  className="w-full h-48 object-cover"
                  src={tour.images[0]}
                  alt={tour.title}
                />
                <div className="p-4">
                  <h2 className="text-sm font-semibold text-indigo-500 uppercase">
                    {tour.title}
                  </h2>
                  <p className="text-gray-700 text-base mt-2">
                    {tour.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTours;
