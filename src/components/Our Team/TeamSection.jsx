import React from "react";
import { motion } from "framer-motion";
import ceo from "./../../assets/images/Our Team/ceo.jpg";
import ceo2 from "./../../assets/images/Our Team/assad.jpg";
import ceo3 from "./../../assets/images/Our Team/yasir.jpg";
import Abbas from "./../../assets/images/Our Team/Abbas.jpg";
import waseem from "./../../assets/images/Our Team/waseem.png"; // Add Waseem's image

const teamMembers = [
  {
    name: "Asif Khan",
    role: "CEO",
    image: ceo,
    style: "border-yellow-500 shadow-xl scale-110 bg-gradient-to-b from-yellow-100 to-white",
    textStyle: "text-yellow-500",
  },
  {
    name: "Waseem Khan",
    role: "Co-Owner",
    image: waseem,
    style: "border-yellow-400 shadow-lg bg-gradient-to-b from-yellow-50 to-white",
    textStyle: "text-yellow-400",
  },
  {
    name: "Assad Khan",
    role: "Managing Director",
    image: ceo2,
    style: "border-blue-500 shadow-lg bg-gradient-to-b from-blue-100 to-white",
    textStyle: "text-blue-500",
  },
  {
    name: "Muhammad Yasir",
    role: "Managing Director",
    image: ceo3,
    style: "border-blue-500 shadow-lg bg-gradient-to-b from-blue-100 to-white",
    textStyle: "text-blue-500",
  },
  {
    name: "Abbas Khan",
    role: "Accountant",
    image: Abbas,
    style: "border-gray-400 shadow-md bg-gray-50",
    textStyle: "text-gray-600",
  },
];

const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

const TeamSection = () => {
  return (
    <section className="max-w-screen-lg mx-auto px-4 py-12">
      <motion.h2 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-center text-gray-800"
      >
        Executives!
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.3, delay: 0.3 }}
        className="text-center text-gray-600 mt-2"
      >
        Our leadership team brings expertise and vision to drive success.
      </motion.p>
      
      <div className="grid gap-8 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
  {teamMembers.map((member, index) => (
    <motion.div
      key={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={slideInLeft}
      className={`relative flex flex-col items-center p-6 rounded-lg transition transform hover:scale-105 ${member.style}`}
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-28 h-28 object-cover rounded-full border-4"
      />
      <h3 className="mt-4 text-lg font-semibold text-gray-800">
        {member.name}
      </h3>
      <p className={`mt-1 text-sm font-medium ${member.textStyle}`}>
        {member.role}
      </p>
    </motion.div>
  ))}
</div>

    </section>
  );
};

export default TeamSection;
