"use client";

import React from "react";
import { motion } from "framer-motion";

type AnimatedPageProps = {
  children: React.ReactNode;
};

const animations = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

const AnimatedFadeInPage = ({ children }: AnimatedPageProps) => {
  return (
    <>
      <motion.div
        variants={animations}
        initial="intial"
        animate="animate"
        exit="exit"
        transition={{ duration: 2 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default AnimatedFadeInPage;
