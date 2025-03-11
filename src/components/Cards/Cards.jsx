import React from "react";
import { Card } from "react-bootstrap";
import "../Cards/card.css";
import { Navigate, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Cards = ({ destination }) => {
  return (
    <>
      <div className="img-box">
        <NavLink
          className="body-text text-dark text-decoration-none"
          to={{
            pathname: `/destination/${destination.name}`,
          }}
          state={{ destination: destination }}
        >
          <Card>
            <Card.Img
              variant="top"
              src={destination.image}
              className="img-fluid dest-cont"
              alt={destination.name}
            />
            <Card.Title>{destination.name}</Card.Title>

            <span className="tours">{destination.tours}</span>
          </Card>
        </NavLink>
      </div>
    </>
  );
};

export default Cards;
