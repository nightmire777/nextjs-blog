"use client";

import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import StartLoader from './startLoader';
import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js'; // Ensure this import is included

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [walletBalance, setWalletBalance] = useState<number | null>(null);

  const handleGetStarted = () => {
    setIsLoading(true);
    // Add logic here to fetch wallet balance if needed
  };

  // Fetch wallet balance logic
  const fetchWalletBalance = async () => {
    try {
      const { solana } = window as any;
      if (solana && solana.isPhantom) {
        const response = await solana.connect();
        const publicKey = response.publicKey;

        const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
        const balance = await connection.getBalance(new PublicKey(publicKey.toString()));
        setWalletBalance(balance / 1e9); // Convert from lamports to SOL
      }
    } catch (error) {
      console.error('Error fetching wallet balance:', error);
    }
  };

  useEffect(() => {
    fetchWalletBalance(); // Automatically fetch balance when the component loads
  }, []);

  if (isLoading) {
    return <StartLoader />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="container"
    >
      {/* Wallet Balance Display */}
      <div className="balance-display">
        {walletBalance !== null ? `Balance: ${walletBalance} SOL` : 'Connecting...'}
      </div>

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
        <button className="buttonOutline" onClick={handleGetStarted}>
          Get Started
        </button>
        <button className="buttonOutline">Learn More</button>
      </motion.div>
    </motion.div>
  );
}
