"use client";

import { motion } from "framer-motion";
import styles from "../../../../styles/TechnologyPage.module.scss";

export default function DataAnalytics() {
  const capabilities = [
    { title: "Data Processing", description: "Transform raw data into actionable insights", icon: "📊" },
    { title: "Predictive Analytics", description: "Forecast trends and patterns", icon: "🔮" },
    { title: "Visualization", description: "Interactive dashboards and reports", icon: "📈" },
    { title: "Real-time Analysis", description: "Monitor data streams in real-time", icon: "⚡" },
  ];

  const features = [
    "Advanced data mining and pattern recognition",
    "Scalable analytics infrastructure",
    "Custom reporting solutions",
    "Data quality assurance",
    "Integration with existing systems",
    "24/7 analytical support"
  ];

  return (
    <div className={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.header}
      >
        <h1 className={styles.title}>Data Analytics</h1>
        <p className={styles.description}>
          Transform your data into strategic advantages with advanced analytics solutions
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={styles.content}
      >
        <section className={styles.section}>
          <h2>Key Capabilities</h2>
          <div className={styles.grid}>
            {capabilities.map((item, idx) => (
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
