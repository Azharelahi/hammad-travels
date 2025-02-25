import React from "react";
import { useLocation } from "react-router-dom";

const HireDetails = () => {
  const { state } = useLocation();
  const car = state?.car;

  if (!car) return <p>No car selected!</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{car.name}</h1>
      <img
        src={car.img}
        alt={car.name}
        className="w-full max-w-md rounded-lg shadow-lg my-4"
      />
      <p>
        <strong>Type:</strong> {car.type}
      </p>
      <p>
        <strong>Passengers:</strong> {car.passengers}
      </p>
      <p>
        <strong>Gear:</strong> {car.gear}
      </p>
      <p>
        <strong>Baggage:</strong> {car.baggage}
      </p>
      <p>
        <strong>Doors:</strong> {car.doors}
      </p>
      <p className="text-indigo-600 font-bold text-xl">{car.price}</p>
    </div>
  );
};

export default HireDetails;
