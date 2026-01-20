"use client";

import { motion } from "framer-motion";
import styles from "../../../../styles/TechnologyPage.module.scss";

export default function BigDataSolutions() {
  const solutions = [
    { title: "Data Lakes", description: "Centralized data repository architecture", icon: "💾" },
    { title: "Hadoop & Spark", description: "Distributed processing frameworks", icon: "⚡" },
    { title: "Data Warehousing", description: "Enterprise-scale data warehouses", icon: "🏢" },
    { title: "Stream Processing", description: "Real-time data pipeline management", icon: "🌊" },
  ];

  const features = [
    "Petabyte-scale data processing",
    "Cost-effective infrastructure",
    "High availability & disaster recovery",
    "Data governance & compliance",
    "Advanced data engineering",
    "Dedicated big data team"
  ];

  return (
    <div className={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.header}
      >
        <h1 className={styles.title}>Big Data Solutions</h1>
        <p className={styles.description}>
          Harness massive datasets with scalable big data infrastructure and analytics
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
