import React from "react";
import { Carousel } from "react-bootstrap";
import sliderImg from "../../assets/images/slider/1.png";
import sliderImg1 from "../../assets/images/slider/2.png";
import "../Banner/banner.css";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <>
      <section className="slider">
        <Carousel variant="dark">
          <Carousel.Item>
            <img src={sliderImg} className="d-block w-100" alt="First slide" />
            <Carousel.Caption>
              <div className="slider_des">
                <h5 className="heading-des1">
                  JOURNEY TO <span>EXPLORE THE WORLD</span>
                </h5>
                <p className="sub_text">
                  🌍 Unleash the Explorer in You! Discover breathtaking
                  destinations, unique cultures, and unforgettable experiences.
                  Start your adventure today!
                </p>
                <a href="/contact" className="Rent-button"> Rent Now</a>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={sliderImg1} className="d-block w-100" alt="First slide" />
            <Carousel.Caption>
              <div className="slider_des">
                <h5 className="heading-des1">
                  DISCOVER <span>STUNNING DESTINATIONS</span>
                </h5>
                <p className="sub_text">
                  🏝️ Your Dream Vacation Awaits! From serene beaches to majestic
                  mountains, embark on a journey to the most beautiful places on
                  Earth. Let’s make memories!
                </p>
                <a href="/contact" className="Rent-button"> Rent Now</a>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
};

export default Banner;
