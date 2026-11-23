import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const trips = [
  {
    title: "Mountain escapes",
    desc: "Find stillness in the valleys and wide-open views up north.",
    img: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=900",
    link: "/mountaines",
  },
  {
    title: "By the water",
    desc: "Trade the everyday for blue skies, soft sand and slower days.",
    img: "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=900",
    link: "/beaches",
  },
  {
    title: "Desert horizons",
    desc: "Follow the golden hour into Pakistan's expansive landscapes.",
    img: "https://images.pexels.com/photos/1001435/pexels-photo-1001435.jpeg?auto=compress&cs=tinysrgb&w=900",
    link: "/deserts",
  },
  {
    title: "Into the forest",
    desc: "Take the quieter trail and reconnect with the natural world.",
    img: "https://images.pexels.com/photos/142497/pexels-photo-142497.jpeg?auto=compress&cs=tinysrgb&w=900",
    link: "/forests",
  },
];

const CardSlider = () => (
  <div className="trip-grid">
    {trips.map((trip, index) => (
      <motion.article
        key={trip.title}
        className="trip-card"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.45, delay: index * 0.08 }}
      >
        <div
          className="trip-card__image"
          style={{ backgroundImage: `url("${trip.img}")` }}
          aria-hidden="true"
        />
        <div className="trip-card__scrim" aria-hidden="true" />
        <div className="trip-card__content">
          <h3>{trip.title}</h3>
          <p>{trip.desc}</p>
          <Link to={trip.link} className="trip-card__link">
            Explore trips
            <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </motion.article>
    ))}
  </div>
);

export default CardSlider;
