import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./about.css";
import img from "./../../assets/images/logo/logo.png";
import TeamSection from "../../components/Our Team/TeamSection";

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
        <h1>Welcome to Hammad Travels</h1>
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
            <h2 className="text-4xl font-bold text-center text-gray-800">About Us!</h2>
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

      {/* Why Choose Us Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        className="why-choose-us"
      >
        <h2 className="text-4xl font-bold text-center text-gray-800">Why Us?</h2>
        <div className="features">
          <div className="feature">
            <h3>✅ Affordable Pricing</h3>
            <p>We provide the best rental rates with no hidden charges.</p>
          </div>
          <div className="feature">
            <h3>🚗 Wide Vehicle Selection</h3>
            <p>Choose from a variety of well-maintained vehicles.</p>
          </div>
          <div className="feature">
            <h3>📍 Convenient Booking</h3>
            <p>Easy and fast online booking system available 24/7.</p>
          </div>
          <div className="feature">
            <h3>🛠 24/7 Support</h3>
            <p>Our customer support team is always available to assist you.</p>
          </div>
        </div>
      </motion.section>

      <TeamSection />

      {/* Our Services */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        className="our-services"
      >
        <h2 className="text-4xl font-bold text-center text-gray-800">Our Services</h2>
        <ul>
          <li>✈️ Airport Transfers</li>
          <li>🚘 Daily & Monthly Car Rentals</li>
          <li>🏝️ Tour & Travel Packages</li>
          <li>🚖 City & Intercity Transport</li>
        </ul>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        className="testimonials"
      >
        <h2 className="text-4xl font-bold text-center text-gray-800">What Our Customers Say</h2>
        <div className="testimonial">
          <p>
            "Hammad Travels made my trip stress-free! The car was in perfect
            condition, and their service was top-notch!"
          </p>
          <h4>- Sarah Ahmed</h4>
        </div>
        <div className="testimonial">
          <p>
            "Booking with Hammad Travels was super easy, and their customer
            support is fantastic. Highly recommended!"
          </p>
          <h4>- Ali Khan</h4>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutUs;