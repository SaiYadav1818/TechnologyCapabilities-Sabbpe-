"use client";

import { motion } from "framer-motion";
import styles from "../../../../styles/TechnologyPage.module.scss";

export default function DevOpsAutomation() {
  const practices = [
    { title: "CI/CD Pipelines", description: "Automated testing and deployment", icon: "🔄" },
    { title: "Infrastructure Monitoring", description: "Real-time system health tracking", icon: "📊" },
    { title: "Log Management", description: "Centralized logging and analytics", icon: "📝" },
    { title: "Performance Optimization", description: "Continuous performance tuning", icon: "⚡" },
  ];

  const features = [
    "Fully automated deployment pipelines",
    "Continuous monitoring and alerting",
    "Infrastructure as Code practices",
    "Version control integration",
    "Reduced time-to-market",
    "Dedicated DevOps specialists"
  ];

  return (
    <div className={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.header}
      >
        <h1 className={styles.title}>DevOps & Automation</h1>
        <p className={styles.description}>
          Streamline operations and accelerate deployment with modern DevOps practices
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={styles.content}
      >
        <section className={styles.section}>
          <h2>Practices</h2>
          <div className={styles.grid}>
            {practices.map((item, idx) => (
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
