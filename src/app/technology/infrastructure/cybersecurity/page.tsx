"use client";

import { motion } from "framer-motion";
import styles from "../../../../styles/TechnologyPage.module.scss";

export default function Cybersecurity() {
  const services = [
    { title: "Threat Detection", description: "Advanced threat detection systems", icon: "🛡️" },
    { title: "Penetration Testing", description: "Comprehensive security assessments", icon: "🔑" },
    { title: "Compliance Management", description: "GDPR, HIPAA, SOC 2 compliance", icon: "✓" },
    { title: "Incident Response", description: "24/7 security incident management", icon: "🚨" },
  ];

  const features = [
    "Multi-layered security architecture",
    "Real-time threat monitoring",
    "Automated security updates",
    "Employee security training",
    "Incident response protocols",
    "Dedicated security team"
  ];

  return (
    <div className={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.header}
      >
        <h1 className={styles.title}>Cybersecurity</h1>
        <p className={styles.description}>
          Protect your business with comprehensive cybersecurity solutions and threat management
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
