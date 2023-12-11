"use client";

import React, { useEffect } from "react";
import "./style.css"
import { motion, useScroll } from "framer-motion";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const { scrollYProgress } = useScroll();

  

  return (
    <>
      <motion.div
        className="progress-bar relative"
        style={{ scaleX: scrollYProgress }}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ delay: 0.15 }}
        className="px-8  mx-auto"
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageWrapper;