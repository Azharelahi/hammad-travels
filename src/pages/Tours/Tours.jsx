import React from "react";
import { motion } from "framer-motion";
import Heading from "../../components/Heading/Heading";

const Tours = () => {
  return (
    <div>
      <Heading heading={"Our Tours"} />
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-6 p-6 bg-yellow-100 rounded-2xl shadow-lg max-w-lg"
        >
          <p className="text-xl font-semibold text-gray-800">
            🚧Exclusive tours are coming soon! 🚗🌍
          </p>
          <p className="text-gray-600 mt-2">
            We're working hard to bring you exciting tour packages. Stay tuned!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Tours;
