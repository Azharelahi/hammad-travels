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
      title: "Discover the possibilities",
      des: "With nearly half a million attractions, hotels & more, you're sure to find joy.",
    },
    {
      id: 1,
      image: feature2,
      title: "Enjoy deals & delights",
      des: "Quality activities. Great prices. Plus, earn credits to save more.",
    },
    {
      id: 2,
      image: feature3,
      title: "Exploring made easy",
      des: "Book last minute, skip lines & get free cancellation for easier exploring.",
    },
    {
      id: 3,
      image: feature4,
      title: "Travel you can trust",
      des: "Read reviews & get reliable customer support. We're with you at every step.",
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
