"use client";

import { motion } from "framer-motion";
import styles from "../../../../styles/TechnologyPage.module.scss";

export default function DigitalTransformationPage() {
  const comparison = [
    { before: "Manual processes", after: "Automated workflows" },
    { before: "Siloed data", after: "Integrated data platform" },
    { before: "Legacy systems", after: "Cloud-based solutions" },
    { before: "Limited insights", after: "Real-time analytics" },
    { before: "Slow operations", after: "Optimized performance" },
    { before: "High costs", after: "Reduced expenses" },
  ];

  return (
    <div className={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.header}
      >
        <h1 className={styles.title}>Digital Transformation</h1>
        <p className={styles.description}>
          Complete business modernization through strategic technology adoption
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={styles.content}
      >
        <section className={styles.section}>
          <h2>Before & After Transformation</h2>
          <div className={styles.comparisonTable}>
            {comparison.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: idx * 0.05 }}
                className={styles.comparisonRow}
              >
                <div className={styles.before}>
                  <span className={styles.icon}>❌</span>
                  <p>{item.before}</p>
                </div>
                <div className={styles.arrow}>→</div>
                <div className={styles.after}>
                  <span className={styles.icon}>✅</span>
                  <p>{item.after}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>Transformation Framework</h2>
          <p>Our proven methodology ensures successful digital transformation:</p>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Phase 1: Assessment</h3>
              <p>Evaluate current state, identify gaps, define vision</p>
            </div>
            <div className={styles.card}>
              <h3>Phase 2: Planning</h3>
              <p>Create roadmap, prioritize initiatives, allocate resources</p>
            </div>
            <div className={styles.card}>
              <h3>Phase 3: Implementation</h3>
              <p>Deploy solutions, integrate systems, migrate data</p>
            </div>
            <div className={styles.card}>
              <h3>Phase 4: Optimization</h3>
              <p>Monitor performance, refine processes, maximize ROI</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Expected Outcomes</h2>
          <ul className={styles.features}>
            <li>📊 50-70% improvement in operational efficiency</li>
            <li>💰 30-40% reduction in operational costs</li>
            <li>⚡ 2-3x faster time to market</li>
            <li>📈 Increased revenue through new opportunities</li>
            <li>👥 Better employee satisfaction & productivity</li>
            <li>🎯 Enhanced customer experience</li>
          </ul>
        </section>
      </motion.div>
    </div>
  );
}
