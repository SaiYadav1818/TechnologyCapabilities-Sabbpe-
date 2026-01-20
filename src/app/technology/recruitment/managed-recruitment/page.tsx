"use client";

import { motion } from "framer-motion";
import styles from "../../../../styles/TechnologyPage.module.scss";

export default function ManagedRecruitmentPage() {
  const steps = [
    { number: 1, title: "Position Analysis", icon: "📋" },
    { number: 2, title: "Candidate Sourcing", icon: "🔍" },
    { number: 3, title: "Screening & Vetting", icon: "✓" },
    { number: 4, title: "Interview Process", icon: "💬" },
    { number: 5, title: "Reference Checks", icon: "🔎" },
    { number: 6, title: "Offer & Onboarding", icon: "🎉" },
  ];

  return (
    <div className={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.header}
      >
        <h1 className={styles.title}>Managed Recruitment</h1>
        <p className={styles.description}>
          End-to-end recruitment solutions for quality hires
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={styles.content}
      >
        <section className={styles.section}>
          <h2>Our Recruitment Process</h2>
          <div className={styles.processFlow}>
            {steps.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.12 }}
                className={styles.processStep}
              >
                <div className={styles.processNumber}>{item.number}</div>
                <div className={styles.processIcon}>{item.icon}</div>
                <div className={styles.processTitle}>{item.title}</div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>Recruitment Services</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Executive Search</h3>
              <p>C-suite and leadership positions</p>
            </div>
            <div className={styles.card}>
              <h3>Tech Recruitment</h3>
              <p>Engineers, developers, architects</p>
            </div>
            <div className={styles.card}>
              <h3>Contract Staffing</h3>
              <p>Temporary & project-based roles</p>
            </div>
            <div className={styles.card}>
              <h3>Internal Mobility</h3>
              <p>Succession planning & promotion</p>
            </div>
            <div className={styles.card}>
              <h3>Diversity Hiring</h3>
              <p>Building inclusive teams</p>
            </div>
            <div className={styles.card}>
              <h3>RPO Services</h3>
              <p>Recruitment process outsourcing</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Why Choose Us</h2>
          <ul className={styles.features}>
            <li>✓ Average time-to-hire: 25 days</li>
            <li>✓ 90% placement retention rate</li>
            <li>✓ Access to 50K+ qualified candidates</li>
            <li>✓ Industry expertise & networks</li>
            <li>✓ Competitive salary benchmarking</li>
            <li>✓ Dedicated recruitment team</li>
          </ul>
        </section>
      </motion.div>
    </div>
  );
}
