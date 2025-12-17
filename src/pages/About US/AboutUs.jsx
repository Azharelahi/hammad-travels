import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./about.css";
import img from "./../../assets/images/logo/logo.png";
import TeamSection from "../../components/Our Team/TeamSection";

const AnimatedText = ({ text, className }) => {
  const lines = text.split("\n"); // Split text by line breaks

  return (
    <span
      className={className}
      style={{
        whiteSpace: "pre-wrap",
        display: "inline-block",
        textAlign: "center",
      }}
    >
      {lines.map((line, lineIndex) => (
        <div key={lineIndex} style={{ display: "block" }}>
          {line.split(" ").map((word, wordIndex) => (
            <span
              key={wordIndex}
              style={{ marginRight: "8px", display: "inline-block" }}
            >
              {word.split("").map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: lineIndex * 0.6 + wordIndex * 0.4 + charIndex * 0.1,
                    ease: "easeOut",
                  }}
                  style={{
                    display: "inline-block",
                    fontFamily: "'Great Vibes', cursive",
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </div>
      ))}
    </span>
  );
};

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-us-container">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        className="hero-section"
      >
        <h1>
          <AnimatedText
            text={"Welcome to\nHammad Travels"}
            className="your-class"
          />
        </h1>

        <p>Your Trusted Partner for Hassle-Free Travel & Car Rentals</p>
      </motion.section>

      {/* About Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        className="about-section"
      >
        <div className="main-div">
          <div className="left-div">
            <h2 className="text-4xl font-bold text-center text-gray-800">
              About Us!
            </h2>
       <p>
  Hammad Travels is a professional travel agency based in Islamabad, dedicated
  to providing reliable travel and tour services across Pakistan. As a trusted
  tourism company, we specialize in well-planned Pakistan tour experiences,
  airport transfers, and comfortable car rental solutions.
</p>


<p>
  Our goal is to help travelers explore Pakistan’s most popular tourist
  destinations with ease, safety, and comfort. From seamless bookings to
  dependable transport, we focus on delivering services that travelers highly
  recommend for creating smooth and unforgettable journeys.
</p>

          </div>
         <img
  src={img}
  alt="Hammad Travels travel agency in Islamabad offering Pakistan tour services"
/>

        </div>
      </motion.section>
      <hr />

      <TeamSection />
    </div>
  );
};

export default AboutUs;
