import React from "react";
import "./heading.css";
const Heading = ({ heading }) => {
  return (
    <div>
      <div className="heading-div">
        <h1 className="head-name">{heading}</h1>
      </div>
    </div>
  );
};

export default Heading;
