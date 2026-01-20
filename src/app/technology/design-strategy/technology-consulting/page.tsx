"use client";

import { motion } from "framer-motion";
import styles from "../../../../styles/TechnologyPage.module.scss";

export default function TechnologyConsultingPage() {
  const testimonials = [
    { company: "Tech Startup", impact: "Saved $500K in infrastructure costs" },
    { company: "Financial Services", impact: "Reduced time-to-market by 6 months" },
    { company: "Healthcare Provider", impact: "Improved system performance by 70%" },
    { company: "Retail Corporation", impact: "Increased revenue by 35% with new platform" },
  ];

  return (
    <div className={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.header}
      >
        <h1 className={styles.title}>Technology Consulting</h1>
        <p className={styles.description}>
          Strategic guidance to align technology with your business goals
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={styles.content}
      >
        <section className={styles.section}>
          <h2>Client Success Stories</h2>
          <div className={styles.testimonialGrid}>
            {testimonials.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={styles.testimonialCard}
              >
                <div className={styles.testimonialCompany}>{item.company}</div>
                <div className={styles.testimonialImpact}>💡 {item.impact}</div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>Consulting Expertise</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>🎯 Strategy & Roadmap</h3>
              <p>Define technology vision and implementation plan</p>
            </div>
            <div className={styles.card}>
              <h3>🏗️ Architecture Design</h3>
              <p>Build scalable and maintainable systems</p>
            </div>
            <div className={styles.card}>
              <h3>☁️ Cloud Transformation</h3>
              <p>Migration strategy and optimization</p>
            </div>
            <div className={styles.card}>
              <h3>🔒 Risk & Compliance</h3>
              <p>Security assessment and governance</p>
            </div>
            <div className={styles.card}>
              <h3>💼 Vendor Management</h3>
              <p>Partner selection and negotiations</p>
            </div>
            <div className={styles.card}>
              <h3>📈 Performance Optimization</h3>
              <p>System tuning and cost reduction</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Our Approach</h2>
          <ul className={styles.features}>
            <li>✓ Industry expertise across sectors</li>
            <li>✓ Proven methodologies & best practices</li>
            <li>✓ Technology-agnostic recommendations</li>
            <li>✓ Executive advisory services</li>
            <li>✓ Measurable business outcomes</li>
            <li>✓ Long-term partnership model</li>
          </ul>
        </section>
      </motion.div>
    </div>
  );
}
