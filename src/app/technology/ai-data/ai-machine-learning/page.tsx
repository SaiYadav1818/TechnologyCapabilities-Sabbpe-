"use client";

import { motion } from "framer-motion";
import styles from "../../../../styles/TechnologyPage.module.scss";

export default function AIandMachineLearning() {
  const solutions = [
    { title: "Neural Networks", description: "Deep learning and AI models", icon: "🧠" },
    { title: "NLP Solutions", description: "Natural language processing", icon: "💬" },
    { title: "Computer Vision", description: "Image recognition and analysis", icon: "👁️" },
    { title: "Recommendation Engines", description: "Personalization systems", icon: "⭐" },
  ];

  const features = [
    "TensorFlow and PyTorch expertise",
    "Custom ML model development",
    "Real-time inference capabilities",
    "Model optimization and deployment",
    "Ethical AI practices",
    "Dedicated AI team support"
  ];

  return (
    <div className={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.header}
      >
        <h1 className={styles.title}>AI & Machine Learning</h1>
        <p className={styles.description}>
          Leverage artificial intelligence and machine learning to transform your business
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
