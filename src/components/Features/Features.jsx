import React from "react";
import "../Features/features.css";

import feature1 from "../../assets/images/feature/beach-umbrella.png";
import feature2 from "../../assets/images/feature/deal.png";
import feature3 from "../../assets/images/feature/location.png";
import feature4 from "../../assets/images/feature/medal.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { Card, Col, Container, Row } from "react-bootstrap";

const Features = () => {
const featureList = [
  {
    id: 0,
    image: feature1,
    title: "Explore Top Tourist Destinations in Pakistan",
    des: "Discover Pakistan’s most beautiful tourist destinations with our carefully planned Pakistan tour services, designed to create unforgettable journeys for every traveler.",
  },
  {
    id: 1,
    image: feature2,
    title: "Affordable Travel & Tour Services",
    des: "As a reliable travel agency, we offer quality travel and tour services at competitive prices, making us a highly recommend choice for local travelers.",
  },
  {
    id: 2,
    image: feature3,
    title: "Easy & Hassle-Free Tour Planning",
    des: "Our tourism company simplifies your Pakistan tour experience with smooth planning, flexible bookings, and expert support from start to finish.",
  },
  {
    id: 3,
    image: feature4,
    title: "A Travel Agency You Can Trust",
    des: "Hammad Travels is a trusted travel and tour partner, highly recommend by travelers for delivering safe, comfortable, and unforgettable journeys across Pakistan.",
  },
];

  return (
    <section className="feature-section">
      <Container>
        <Row>
          <Col md="12">
            <Splide
              options={{
                type: "loop",
                perPage: 4,
                perMove: 1,
                gap: "1rem",
                pagination: false,
                arrows: false,
                breakpoints: {
                  1024: { perPage: 4 },
                  991: { perPage: 3 },
                  600: { perPage: 2 },
                  480: { perPage: 1 },
                },
                autoScroll: {
                  speed: 1, // Adjust speed (higher = faster)
                },
              }}
              extensions={{ AutoScroll }}
            >
              {featureList.map((feature, index) => (
                <SplideSlide key={index}>
                  <Card className="text-center p-3">
                    <Card.Img
                      variant="top"
                      src={feature.image}
                      className="img-fluid"
                      alt={feature.title}
                    />
                    <Card.Title className="mt-2">{feature.title}</Card.Title>
                    <Card.Text>{feature.des}</Card.Text>
                  </Card>
                </SplideSlide>
              ))}
            </Splide>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Features;
