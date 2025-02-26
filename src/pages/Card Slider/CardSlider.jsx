import React from "react";
import { useNavigate } from "react-router-dom";
const CardSlider = () => {
  const navigate = useNavigate();
  return (
    <main className="grid gap-4 p-4 max-w-screen-lg mx-auto sm:grid-cols-2 lg:grid-cols-4">
      {/* Card 1 */}
      <div className="relative flex items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg group h-64">
        <div
          className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 ease-out group-hover:scale-110"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
        <div className="relative flex flex-col items-center text-white p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out">
          <h2 className="text-lg font-bold">Mountain View</h2>
          <p className="mt-2 italic text-sm">
            Check out all of these gorgeous mountain trips with beautiful views
            of, you guessed it, the mountains
          </p>
          <button
            onClick={() => navigate("/mountaines")}
            className="mt-4 px-4 py-2 bg-darklw text-white font-bold text-xs uppercase tracking-wide rounded-lg hover:bg-gray-800 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            View Trips
          </button>
        </div>
      </div>

      {/* Card 2 */}
      <div className="relative flex items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg group h-64">
        <div
          className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 ease-out group-hover:scale-110"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
        <div className="relative flex flex-col items-center text-white p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out">
          <h2 className="text-lg font-bold">To The Beach</h2>
          <p className="mt-2 italic text-sm">
            Plan your next beach trip with these fabulous destinations
          </p>
          <button
            onClick={() => navigate("/beaches")}
            className="mt-4 px-4 py-2 bg-darklw text-white font-bold text-xs uppercase tracking-wide rounded-lg hover:bg-gray-800 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            View Trips
          </button>
        </div>
      </div>

      {/* Card 3 */}
      <div className="relative flex items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg group h-64">
        <div
          className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 ease-out group-hover:scale-110"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/1001435/pexels-photo-1001435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
        <div className="relative flex flex-col items-center text-white p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out">
          <h2 className="text-lg font-bold">To The Desert</h2>
          <p className="mt-2 italic text-sm">
            Plan your next Desert trip with these fabulous destinations
          </p>
          <button
            onClick={() => navigate("/deserts")}
            className="mt-4 px-4 py-2 bg-darklw text-white font-bold text-xs uppercase tracking-wide rounded-lg hover:bg-gray-800 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            View Trips
          </button>
        </div>
      </div>

      {/* Card 4 */}
      <div className="relative flex items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg group h-64">
        <div
          className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 ease-out group-hover:scale-110"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/142497/pexels-photo-142497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
        <div className="relative flex flex-col items-center text-white p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out">
          <h2 className="text-lg font-bold">Into the Forest</h2>
          <p className="mt-2 italic text-sm">
            Discover serene forests and reconnect with nature's beauty.
          </p>
          <button
            onClick={() => navigate("/forests")}
            className="mt-4 px-4 py-2 bg-darklw text-white font-bold text-xs uppercase tracking-wide rounded-lg hover:bg-gray-800 focus:outline-none focus:ring focus:ring-green-400"
          >
            Explore Forests
          </button>
        </div>
      </div>
    </main>
  );
};

export default CardSlider;
