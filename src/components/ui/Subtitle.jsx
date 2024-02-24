import React from "react";
import { motion } from "framer-motion";

const Subtitle = ({ title, className }) => {
  return (
    <motion.p
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`${className} text-base text-designColor uppercase font-medium`}
    >
      {title}
    </motion.p>
  );
};

export default Subtitle;
