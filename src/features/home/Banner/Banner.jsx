import React from "react";
import { Carousel } from "react-bootstrap";
import { ArrowDown, ArrowRight, MapPin } from "lucide-react";
import sliderImg from "assets/images/slider/1.png";
import sliderImg1 from "assets/images/slider/2.png";
import "./banner.css";
import { Link } from "react-router-dom";

const slides = [
  {
    image: sliderImg,
    alt: "Scenic northern Pakistan landscape",
    eyebrow: "Your next great escape starts here",
    title: (
      <>
        Find your
        <br />
        <span>own kind of wild.</span>
      </>
    ),
    description:
      "From quiet mountain valleys to the heart of Islamabad, discover Pakistan with people who know it best.",
  },
  {
    image: sliderImg1,
    alt: "Pakistan's dramatic mountains and valleys",
    eyebrow: "Made for the curious",
    title: (
      <>
        Take the scenic
        <br />
        <span>way through Pakistan.</span>
      </>
    ),
    description:
      "Thoughtful trips, comfortable rides and local know-how—everything you need for a journey worth remembering.",
  },
];

const Banner = () => (
  <section className="slider" aria-label="Featured travel experiences">
    <Carousel interval={6500} pause="hover">
      {slides.map((slide, index) => (
        <Carousel.Item key={slide.alt}>
          <img
            src={slide.image}
            className="hero-image"
            alt={slide.alt}
            width={1920}
            height={900}
            fetchpriority={index === 0 ? "high" : undefined}
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
          />
          <Carousel.Caption>
            <div className="slider_des">
              <span className="hero-eyebrow">
                <MapPin size={14} aria-hidden="true" />
                {slide.eyebrow}
              </span>
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-description">{slide.description}</p>
              <div className="hero-actions">
                <Link to="/tours" className="hero-button hero-button--primary">
                  Explore our tours
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>
                <Link to="/car-hire" className="hero-button hero-button--glass">
                  Find a ride
                </Link>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
    <a className="hero-scroll" href="#home-highlights" aria-label="Scroll to explore">
      <ArrowDown size={17} aria-hidden="true" />
    </a>
    <div className="hero-location" aria-hidden="true">
      <span>33.6844° N</span>
      <span className="hero-location-divider" />
      <span>73.0479° E</span>
    </div>
  </section>
);

export default Banner;
