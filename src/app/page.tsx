"use client";

import { motion } from 'framer-motion';
import React, { createContext } from 'react';
import { useState } from 'react';
import StartLoader from './startLoader';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';
import Sidebar from './Sidebar';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [balance, setBalance] = useState<number | null>(null);

  const handleGetStarted= ()  => {
    setIsLoading(true);
    // Add logic here to fetch wallet balance if needed
  };

  // Function to connect to Phantom Wallet
  const connectWallet = async () => {
    try {
      const { solana } = window as any;

      if (solana && solana.isPhantom) {
        const response = await solana.connect();
        const account = response.publicKey.toString();
        setWalletAddress(account);

        // Fetch and set balance after connection
        fetchWalletBalance(account);

        toast.success(`Connected: ${account.slice(0, 6)}...${account.slice(-4)}`);
      } else {
        toast.error('Phantom Wallet not found! Please install it from https://phantom.app');
      }
    } catch (error) {
      toast.error('Failed to connect wallet.');
      console.error('Error connecting to Phantom Wallet:', error);
    }
  };

  // Function to fetch the balance from the Solana network
  const fetchWalletBalance = async (account: string) => {
    try {
      const connection = new Connection(clusterApiUrl('devnet'), 'confirmed'); // Change 'devnet' to 'mainnet-beta' for mainnet
      const publicKey = new PublicKey(account);
      const balance = await connection.getBalance(publicKey);
      setBalance(balance / 1e9); // Convert lamports to SOL (1 SOL = 1e9 lamports)
    } catch (error) {
      toast.error('Failed to fetch balance.');
      console.error('Error fetching balance:', error);
    }
  };

  // Function to disconnect the wallet
  const disconnectWallet = () => {
    setWalletAddress(null);
    setBalance(null);
    toast.info('Wallet disconnected.');
  };

  // Auto-connect to Phantom if the user is already connected
  useEffect(() => {
    const { solana } = window as any;
    if (solana && solana.isPhantom) {
      solana.connect({ onlyIfTrusted: true }).then((response: any) => {
        const account = response.publicKey.toString();
        setWalletAddress(account);
        fetchWalletBalance(account);
      });
    }
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
        {walletAddress ? (
          <div>
            <p>Wallet: {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}</p>
            <p>Balance: {balance ? `${balance.toFixed(3)} SOL` : 'Loading...'}</p>
          </div>
        ) : (
          <p>Wallet not connected</p>
        )}
      </div>

      {/* Connect/Disconnect Buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="buttons"
      >
        {walletAddress ? (
          <button className="buttonOutline" onClick={disconnectWallet}>
            Disconnect Wallet
          </button>
        ) : (
          <button className="buttonOutline" onClick={connectWallet}>
            Connect Wallet
          </button>
        )}
      </motion.div>

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
        <button className = "buttonOutline" onClick={handleGetStarted}>Get Started</button>
        <button className="buttonOutline">Learn More</button>
      </motion.div>

      {/* Sidebar */}
      <motion.div>
        <Sidebar />
      </motion.div>

      {/* Toast Notifications */}
      <ToastContainer />
    </motion.div>
  );
}