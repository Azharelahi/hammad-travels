import React from "react";

const HeadlineTicker = ({ text }) => {
  return (
    <div 
      className="relative w-full overflow-hidden px-4 py-1.5 rounded-full mb-4" 
      style={{ background: "linear-gradient(to right, #ff7eb3, #5394d2)" }}
    >
      {/* Scrolling Text */}
      <div className="flex animate-marquee whitespace-nowrap text-sm font-semibold text-white">
        {/* Duplicate text for smooth scrolling */}
        <span className="mx-4">{text} &nbsp; • &nbsp; {text} &nbsp; • &nbsp; {text}</span>
        <span className="mx-4">{text} &nbsp; • &nbsp; {text} &nbsp; • &nbsp; {text}</span>
      </div>
    </div>
  );
};

export default HeadlineTicker;
