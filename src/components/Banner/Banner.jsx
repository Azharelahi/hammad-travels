import React from "react";
import { Carousel } from "react-bootstrap";
import sliderImg from "../../assets/images/slider/1.png";
import sliderImg1 from "../../assets/images/slider/2.png";
import "../Banner/banner.css";
import "animate.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="slider">
      <Carousel variant="dark">
        <Carousel.Item>
          <img src={sliderImg} className="d-block w-100" alt="First slide" />
          <Carousel.Caption>
            <div className="slider_des">
           <h5 className="heading-des1">
  Travel & Tour Services in <span>Islamabad, Pakistan</span>
</h5>

           <p className="sub_text animate__animated animate__backInDown">
  Hammad Travels is a trusted travel and tour agency in Islamabad, offering
  domestic and international tour packages, Islamabad airport transfers,
  car rentals, and customized travel solutions for individuals and families.
</p>


              {/* Corrected Link */}
              <Link to="/car-hire" className="Rent-button animate__animated animate__pulse animate__infinite">
                Rent Now
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={sliderImg1} className="d-block w-100" alt="Second slide" />
          <Carousel.Caption>
            <div className="slider_des">
          <h5 className="heading-des1">
  Explore Top <span>Tour Destinations in Pakistan</span>
</h5>

<p className="sub_text animate__animated animate__backInDown">
  Based in Islamabad, Hammad Travels provides domestic tour services across
  Pakistan, offering customized travel plans, comfortable transport, and
  dependable tour arrangements for families and groups.
</p>



             
              <Link to="/car-hire" className="Rent-button animate__animated animate__pulse animate__infinite">
                Rent Now
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Banner;
