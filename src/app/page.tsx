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
    MYR: "8.80",
    CNY: "0.00",
    JPY: "0",
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
            <Image
              src="/flags/china-flag.jpg"
              alt="CNY"
              width={30}
              height={20}
            />
            <span>CNY</span>
            <input
              type="text"
              value={currencyValues.CNY}
              onChange={(e) => handleChange("CNY", e.target.value)}
              className={styles.currencyInput}
            />
          </div>
          <div className={styles.currencyCard}>
            <Image src="/flags/japan-flag.png" alt="JPY" width={30} height={20} />
            <span>JPY</span>
            <input
              type="text"
              value={currencyValues.JPY}
              onChange={(e) => handleChange("JPY", e.target.value)}
              className={styles.currencyInput}
            />
          </div>
          <div className={styles.currencyCard}>
            <Image
              src="/flags/singapore-flag.png"
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
          <h3 style={{ color: "#ffffff" }}>Transactions</h3>
          <ul className={styles.transactionsList}>
            <li className={styles.transactionItem}>
              <span>Edisijuta Parking</span>
              <span>2 MYR</span>
            </li>
            <li className={styles.transactionItem}>
              <span>Edisijuta Parking</span>
              <span>2 MYR</span>
            </li>
          </ul>
        </div>
      </motion.div>
    </>
  );
}
