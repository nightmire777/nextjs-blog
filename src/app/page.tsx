"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import StartLoader from "./startLoader";
import { SideMenu } from "./SideMenu";
import Image from "next/image";
import styles from "./Home.module.css"; // Import CSS module

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [currencyValues, setCurrencyValues] = useState({
    SOL: "8.80",
    MYR: "0.00",
    CNY: "0.00",
    SGD: "0.00",
  });

  const handleChange = (currency: string, value: string) => {
    setCurrencyValues({ ...currencyValues, [currency]: value });
  };

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
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className={styles.walletContainer}
      >
        <div className={styles.balanceSection}>
          <h2 className={styles.totalBalance}>Total balance</h2>
          <h1 className={styles.balanceAmount}>8.80 SOL</h1>
          <div className={styles.balanceActions}>
            <button className={styles.actionButton}>Send</button>
            <button className={styles.actionButton}>Add money</button>
            <button className={styles.actionButton}>Request</button>
          </div>
        </div>
        <div className={styles.currencyGrid}>
          <div className={styles.currencyCard}>
            <Image
              src="/flags/solana-logo.avif"
              alt="SOL"
              width={30}
              height={20}
            />
            <span>SOL</span>
            <input
              type="text"
              value={currencyValues.SOL}
              onChange={(e) => handleChange("SOL", e.target.value)}
              className={styles.currencyInput}
            />
          </div>
          <div className={styles.currencyCard}>
            <Image
              src="/flags/malaysia-flag.jpg"
              alt="MYR"
              width={30}
              height={20}
            />
            <span>MYR</span>
            <input
              type="text"
              value={currencyValues.MYR}
              onChange={(e) => handleChange("MYR", e.target.value)}
              className={styles.currencyInput}
            />
          </div>
          <div className={styles.currencyCard}>
            <Image src="/flags/china-flag.jpg" alt="JPY" width={30} height={20} />
            <span>CNY</span>
            <input
              type="text"
              value={currencyValues.CNY}
              onChange={(e) => handleChange("CNY", e.target.value)}
              className={styles.currencyInput}
            />
          </div>
          <div className={styles.currencyCard}>
            <Image
              src="/flags/singapore-flag.avif"
              alt="SGD"
              width={30}
              height={20}
            />
            <span>SGD</span>
            <input
              type="text"
              value={currencyValues.SGD}
              onChange={(e) => handleChange("SGD", e.target.value)}
              className={styles.currencyInput}
            />
          </div>
        </div>
        <div className={styles.transactionsSection}>
          <h3 className = {styles.transactionword} style={{ color: "#ffffff" }}>Transactions</h3>
          <ul className={styles.transactionsList}>
            <li className={styles.transactionItem}>
              <span>Youtube Premium</span>
              <span>0.0118 SOL</span>
            </li>
            <li className={styles.transactionItem}>
              <span>Spotify Premium</span>
              <span>0.0115 SOL</span>
            </li>
          </ul>
        </div>
      </motion.div>
    </>
  );
}
