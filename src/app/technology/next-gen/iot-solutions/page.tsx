"use client";

import { motion } from "framer-motion";
import styles from "../../../../styles/TechnologyPage.module.scss";

export default function IoTSolutions() {
  const services = [
    { title: "IoT Platform", description: "Cloud-based IoT device management", icon: "📡" },
    { title: "Edge Computing", description: "Distributed processing at the edge", icon: "🔧" },
    { title: "Sensor Integration", description: "Connect and manage sensor networks", icon: "📊" },
    { title: "Predictive Maintenance", description: "AI-powered equipment monitoring", icon: "🤖" },
  ];

  const features = [
    "5G and LTE connectivity support",
    "Real-time data processing",
    "Scalable to millions of devices",
    "Security and privacy by design",
    "Custom device integration",
    "24/7 IoT support team"
  ];

  return (
    <div className={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.header}
      >
        <h1 className={styles.title}>IoT Solutions</h1>
        <p className={styles.description}>
          Connect and manage billions of devices with our comprehensive IoT platform
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={styles.content}
      >
        <section className={styles.section}>
          <h2>Services</h2>
          <div className={styles.grid}>
            {services.map((item, idx) => (
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
