"use client";

import { motion } from "framer-motion";
import styles from "../../../../styles/TechnologyPage.module.scss";

export default function ITStaffAugmentationPage() {
  const benefits = [
    { icon: "⚡", title: "Quick Onboarding", desc: "Ready-to-work professionals" },
    { icon: "💰", title: "Cost Effective", desc: "Flexible engagement models" },
    { icon: "🎯", title: "Specialized Skills", desc: "Expert-level professionals" },
    { icon: "📈", title: "Scale Easily", desc: "Grow or shrink team on demand" },
    { icon: "🤝", title: "Cultural Fit", desc: "Integrated team members" },
    { icon: "🔄", title: "Continuous Support", desc: "Ongoing management & coaching" },
  ];

  return (
    <div className={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.header}
      >
        <h1 className={styles.title}>IT Staff Augmentation</h1>
        <p className={styles.description}>
          Extend your team with skilled IT professionals
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={styles.content}
      >
        <section className={styles.section}>
          <h2>Staff Augmentation Benefits</h2>
          <div className={styles.benefitsGrid}>
            {benefits.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.08 }}
                className={styles.benefitCard}
              >
                <div className={styles.benefitIcon}>{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>Our Expertise</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Backend Developers</h3>
              <p>Node.js, Python, Java, Go experts</p>
            </div>
            <div className={styles.card}>
              <h3>Frontend Developers</h3>
              <p>React, Vue, Angular specialists</p>
            </div>
            <div className={styles.card}>
              <h3>DevOps Engineers</h3>
              <p>AWS, Kubernetes, Docker professionals</p>
            </div>
            <div className={styles.card}>
              <h3>QA Engineers</h3>
              <p>Testing automation & quality experts</p>
            </div>
            <div className={styles.card}>
              <h3>Mobile Developers</h3>
              <p>iOS, Android & cross-platform experts</p>
            </div>
            <div className={styles.card}>
              <h3>Tech Leads</h3>
              <p>Senior architects & team leaders</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Engagement Models</h2>
          <ul className={styles.features}>
            <li>✓ Dedicated team members (full-time)</li>
            <li>✓ Part-time resources for specific skills</li>
            <li>✓ Project-based engagement</li>
            <li>✓ Flexible contract terms</li>
            <li>✓ No long-term commitments required</li>
            <li>✓ Easy team scaling & replacements</li>
          </ul>
        </section>
      </motion.div>
    </div>
  );
}
