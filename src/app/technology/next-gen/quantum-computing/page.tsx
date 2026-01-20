"use client";

import { motion } from "framer-motion";
import styles from "../../../../styles/TechnologyPage.module.scss";

export default function QuantumComputing() {
  const capabilities = [
    { title: "Quantum Algorithms", description: "Develop quantum computing solutions", icon: "⚛️" },
    { title: "Optimization", description: "Solve complex optimization problems", icon: "🔬" },
    { title: "Cryptography", description: "Quantum-safe security protocols", icon: "🔐" },
    { title: "Simulation", description: "Quantum system simulation services", icon: "🌐" },
  ];

  const features = [
    "Access to quantum cloud platforms",
    "Quantum algorithm development",
    "Hybrid classical-quantum computing",
    "Research partnerships with universities",
    "Custom quantum applications",
    "Quantum computing consulting"
  ];

  return (
    <div className={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.header}
      >
        <h1 className={styles.title}>Quantum Computing</h1>
        <p className={styles.description}>
          Prepare for the future with cutting-edge quantum computing solutions and research
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={styles.content}
      >
        <section className={styles.section}>
          <h2>Capabilities</h2>
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
