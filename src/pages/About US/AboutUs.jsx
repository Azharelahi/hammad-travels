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
              At Hammad Travels, we specialize in providing top-quality travel
              and rental services to make your journey smooth and memorable.
              Whether you're planning a road trip, need an airport transfer, or
              require a comfortable rental car, we are here to serve you. Our
              expert team ensures every aspect of your trip is taken care of,
              from booking the best routes to providing premium vehicles. Let us
              help you create the perfect travel experience, wherever your
              journey may take you.
            </p>
          </div>
          <div className="right-div">
            <img src={img} alt="there is an image" />
          </div>
        </div>
      </motion.section>
      <hr />

      <TeamSection />
    </div>
  );
};

export default AboutUs;
