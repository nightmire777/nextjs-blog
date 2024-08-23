"use client";

import { motion } from 'framer-motion';
import React, { useState } from 'react';
import StartLoader from './startLoader';
import { SideMenu } from "./SideMenu";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  const handleGetStarted = () => {
    setIsLoading(true);
  };

  if (isLoading) {
    return <StartLoader />;
  }

  return (
    <>
      <SideMenu />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="container"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="title"
        >
          Monash Hackfest Landing Page Test!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="description"
        >
          Experience Smooth Transitions and Animations!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="buttons"
        >
          <button className="buttonOutline" onClick={handleGetStarted}>Get Started</button>
          <button className="buttonOutline">Learn More</button>
        </motion.div>
      </motion.div>
    </>
  );
}
