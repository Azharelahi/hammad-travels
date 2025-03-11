import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const CardSlider = () => {
  const navigate = useNavigate();

  return (
    <main className="grid gap-4 p-4 max-w-screen-lg mx-auto sm:grid-cols-2 lg:grid-cols-4">
      {[
        {
          title: "Mountain View",
          desc: "Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains",
          img: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
          link: "/mountaines",
        },
        {
          title: "To The Beach",
          desc: "Plan your next beach trip with these fabulous destinations",
          img: "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg",
          link: "/beaches",
        },
        {
          title: "To The Desert",
          desc: "Plan your next Desert trip with these fabulous destinations",
          img: "https://images.pexels.com/photos/1001435/pexels-photo-1001435.jpeg",
          link: "/deserts",
        },
        {
          title: "Into the Forest",
          desc: "Discover serene forests and reconnect with nature's beauty.",
          img: "https://images.pexels.com/photos/142497/pexels-photo-142497.jpeg",
          link: "/forests",
        },
      ].map((card, index) => (
        <div
          key={index}
          className="relative flex items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg group h-64"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 ease-out group-hover:scale-110"
            style={{ backgroundImage: `url('${card.img}')` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
          <motion.div
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative flex flex-col items-center text-white p-6 transform translate-y-full sm:translate-y-0 group-hover:translate-y-0 transition-transform duration-700 ease-out"
          >
            <h2 className="text-lg font-bold">{card.title}</h2>
            <p className="mt-2 italic text-sm text-white text-center">
              {card.desc}
            </p>
           <button
  onClick={() => navigate(card.link)}
  className="mt-4 px-4 py-2 bg-darklw text-white text-xs uppercase tracking-wide rounded-lg transition duration-300 
             hover:bg-white/10 hover:backdrop-blur-md hover:border hover:border-white focus:outline-none focus:ring focus:ring-yellow-400"
>
  View Trips
</button>

          </motion.div>
        </div>
      ))}
    </main>
  );
};

export default CardSlider;
