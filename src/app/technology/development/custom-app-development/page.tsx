"use client";

import { motion } from "framer-motion";
import styles from "../../../../styles/TechnologyPage.module.scss";

export default function CustomAppDevelopmentPage() {
  const timeline = [
    { phase: "Discovery", description: "Requirements analysis & planning", icon: "🔍" },
    { phase: "Design", description: "UI/UX & architecture design", icon: "🎨" },
    { phase: "Development", description: "Agile development & coding", icon: "⚙️" },
    { phase: "Testing", description: "QA & security testing", icon: "✓" },
    { phase: "Deployment", description: "Launch & monitoring", icon: "🚀" },
    { phase: "Support", description: "Maintenance & optimization", icon: "🛠️" },
  ];

  return (
    <div className={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.header}
      >
        <h1 className={styles.title}>Custom App Development</h1>
        <p className={styles.description}>
          Build powerful applications tailored to your business needs with our expert development team
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={styles.content}
      >
        <section className={styles.section}>
          <h2>Development Process</h2>
          <div className={styles.timeline}>
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={styles.timelineItem}
              >
                <div className={styles.timelineIcon}>{item.icon}</div>
                <div className={styles.timelineContent}>
                  <h4>{item.phase}</h4>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>Technology Stack</h2>
          <p>We use modern technologies to build scalable, maintainable applications:</p>
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>📱</div>
              <h3>Frontend</h3>
              <p>React, Next.js, TypeScript, Tailwind CSS</p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>⚡</div>
              <h3>Backend</h3>
              <p>Node.js, Python, Java, GraphQL, REST</p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>☁️</div>
              <h3>Cloud</h3>
              <p>AWS, Azure, GCP, Docker, Kubernetes</p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>🔐</div>
              <h3>Security</h3>
              <p>Encryption, Authentication, Compliance</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Why Choose Us</h2>
          <ul className={styles.features}>
            <li>🎯 Custom solutions aligned with your goals</li>
            <li>⚡ Fast delivery with agile methodology</li>
            <li>🔒 Enterprise-grade security standards</li>
            <li>📈 Scalable architecture for growth</li>
            <li>🛡️ Full ownership & source code</li>
            <li>🤝 Dedicated support team</li>
          </ul>
        </section>
      </motion.div>
    </div>
  );
}
