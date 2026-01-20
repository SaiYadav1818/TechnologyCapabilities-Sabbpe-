"use client";

import { motion } from "framer-motion";
import styles from "../../../../styles/TechnologyPage.module.scss";

export default function EnterpriseMobilityPage() {
  const benefits = [
    { metric: "95%", label: "Workforce Mobile-Ready" },
    { metric: "40%", label: "Productivity Increase" },
    { metric: "60%", label: "Faster Decision Making" },
    { metric: "24/7", label: "Access Availability" },
  ];

  return (
    <div className={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.header}
      >
        <h1 className={styles.title}>Enterprise Mobility</h1>
        <p className={styles.description}>
          Empower your workforce with secure, scalable mobile solutions
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={styles.content}
      >
        <section className={styles.section}>
          <h2>Key Benefits & Metrics</h2>
          <div className={styles.statsGrid}>
            {benefits.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                className={styles.statCard}
              >
                <div className={styles.statNumber}>{item.metric}</div>
                <div className={styles.statLabel}>{item.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>Mobility Solutions</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>📱 Mobile App Development</h3>
              <p>Native and cross-platform mobile applications</p>
            </div>
            <div className={styles.card}>
              <h3>🔐 Security & MDM</h3>
              <p>Enterprise device management & data protection</p>
            </div>
            <div className={styles.card}>
              <h3>📊 Analytics & Reporting</h3>
              <p>Real-time insights and performance tracking</p>
            </div>
            <div className={styles.card}>
              <h3>🤝 Team Collaboration</h3>
              <p>Seamless communication across locations</p>
            </div>
            <div className={styles.card}>
              <h3>⚙️ Integration Services</h3>
              <p>Connect with existing business systems</p>
            </div>
            <div className={styles.card}>
              <h3>🛠️ Support & Maintenance</h3>
              <p>24/7 technical support and updates</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Why Enterprise Mobility</h2>
          <ul className={styles.features}>
            <li>✓ Enable work from anywhere, anytime</li>
            <li>✓ Reduce time spent on administrative tasks</li>
            <li>✓ Improve customer response times</li>
            <li>✓ Enhance employee satisfaction</li>
            <li>✓ Secure sensitive business information</li>
            <li>✓ Measurable ROI in months</li>
          </ul>
        </section>
      </motion.div>
    </div>
  );
}
