import React from "react";
import { Carousel } from "react-bootstrap";
import sliderImg from "../../assets/images/slider/1.png";
import sliderImg1 from "../../assets/images/slider/2.png";
import "../Banner/banner.css";
import "animate.css";
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
                <p className="sub_text animate__animated animate__backInDown">
                  🌍 Unleash the Explorer in You! Discover breathtaking
                  destinations, unique cultures, and unforgettable experiences.
                  Start your adventure today!
                </p>
                <a
                  href="/car-hire"
                  className="Rent-button animate__animated animate__pulse animate__infinite"
                >
                  {" "}
                  Rent Now
                </a>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={sliderImg1} className="d-block w-100" alt="First slide" />
            <Carousel.Caption>
              <div className="slider_des">
                <h5 className="heading-des1">
                  DISCOVER STUNNING<span> DESTINATIONS</span>
                </h5>
                <p className="sub_text animate__animated animate__backInDown">
                  🏝️ Your Dream Vacation Awaits! From serene beaches to majestic
                  mountains, embark on a journey to the most beautiful places on
                  Earth. Let’s make memories!
                </p>
                <a
                  href="/car-hire
                  "
                  className="Rent-button animate__animated animate__pulse animate__infinite"
                >
                  {" "}
                  Rent Now
                </a>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
};

export default Banner;
