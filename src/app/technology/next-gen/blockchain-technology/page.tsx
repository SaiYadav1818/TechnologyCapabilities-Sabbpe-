"use client";

import { motion } from "framer-motion";
import styles from "../../../../styles/TechnologyPage.module.scss";

export default function BlockchainTechnology() {
  const solutions = [
    { title: "Smart Contracts", description: "Automated contract execution", icon: "📋" },
    { title: "DeFi Solutions", description: "Decentralized finance platforms", icon: "💰" },
    { title: "Supply Chain", description: "Transparent supply chain tracking", icon: "🔗" },
    { title: "NFT Platforms", description: "Digital asset marketplaces", icon: "🎨" },
  ];

  const features = [
    "Ethereum & Web3 expertise",
    "Secure smart contract development",
    "Gas optimization strategies",
    "Regulatory compliance support",
    "Mainnet deployment experience",
    "Dedicated blockchain team"
  ];

  return (
    <div className={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.header}
      >
        <h1 className={styles.title}>Blockchain Technology</h1>
        <p className={styles.description}>
          Build decentralized applications with enterprise-grade blockchain solutions
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={styles.content}
      >
        <section className={styles.section}>
          <h2>Solutions</h2>
          <div className={styles.grid}>
            {solutions.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className={styles.card}
              >
                <div className={styles.cardIcon}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>Why Choose Us</h2>
          <ul className={styles.features}>
            {features.map((feature, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                {feature}
              </motion.li>
            ))}
          </ul>
        </section>
      </motion.div>
    </div>
  );
}
