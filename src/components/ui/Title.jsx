import React from "react";
import { motion } from "framer-motion";

const Title = ({ title, className }) => {
  return (
    <motion.h2
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`${className} text-6xl font-bold text-titleColor`}
    >
      {title}
    </motion.h2>
  );
};

export default Title;
