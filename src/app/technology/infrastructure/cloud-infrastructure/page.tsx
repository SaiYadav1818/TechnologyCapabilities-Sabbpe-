"use client";

import { motion } from "framer-motion";
import styles from "../../../../styles/TechnologyPage.module.scss";

export default function CloudInfrastructure() {
  const services = [
    { title: "Multi-Cloud Strategy", description: "Optimize across AWS, Azure, and GCP", icon: "☁️" },
    { title: "Infrastructure as Code", description: "Automated provisioning and management", icon: "🔧" },
    { title: "Container Orchestration", description: "Kubernetes and Docker management", icon: "🐳" },
    { title: "Serverless Architecture", description: "Event-driven computing solutions", icon: "⚙️" },
  ];

  const features = [
    "99.99% uptime SLA",
    "Auto-scaling capabilities",
    "Cost optimization",
    "Security-first approach",
    "Multi-region deployment",
    "24/7 infrastructure support"
  ];

  return (
    <div className={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.header}
      >
        <h1 className={styles.title}>Cloud Infrastructure</h1>
        <p className={styles.description}>
          Scalable, secure, and cost-effective cloud infrastructure for modern enterprises
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
