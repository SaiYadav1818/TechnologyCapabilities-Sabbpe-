"use client";

import { motion } from "framer-motion";
import styles from "../../../../styles/TechnologyPage.module.scss";

export default function StrategicStaffingPage() {
  const caseStudies = [
    { title: "Tech Startup", challenge: "Rapid team growth", result: "Built 50-person team in 3 months", icon: "📱" },
    { title: "Fortune 500", challenge: "Specialized talent", result: "Filled 15 hard-to-find positions", icon: "🏢" },
    { title: "Healthcare Org", challenge: "Compliance staffing", result: "Maintained HIPAA-compliant team", icon: "🏥" },
  ];

  return (
    <div className={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.header}
      >
        <h1 className={styles.title}>Strategic Staffing</h1>
        <p className={styles.description}>
          Workforce optimization through intelligent planning
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={styles.content}
      >
        <section className={styles.section}>
          <h2>Success Cases</h2>
          <div className={styles.caseStudyGrid}>
            {caseStudies.map((study, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={styles.caseStudy}
              >
                <div className={styles.caseIcon}>{study.icon}</div>
                <h4>{study.title}</h4>
                <p><strong>Challenge:</strong> {study.challenge}</p>
                <p><strong>Result:</strong> {study.result}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>Staffing Models</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>🔗 Permanent Staffing</h3>
              <p>Full-time, long-term team members</p>
            </div>
            <div className={styles.card}>
              <h3>⏰ Contract Staffing</h3>
              <p>Project-based or temporary roles</p>
            </div>
            <div className={styles.card}>
              <h3>🌍 Remote Teams</h3>
              <p>Distributed workforce management</p>
            </div>
            <div className={styles.card}>
              <h3>🔀 Hybrid Models</h3>
              <p>Mix of permanent & contract resources</p>
            </div>
            <div className={styles.card}>
              <h3>📊 Managed Services</h3>
              <p>End-to-end staffing solutions</p>
            </div>
            <div className={styles.card}>
              <h3>🎓 Executive Search</h3>
              <p>Leadership & specialized roles</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Our Methodology</h2>
          <ul className={styles.features}>
            <li>✓ Workforce gap analysis & benchmarking</li>
            <li>✓ Skills assessment & matching</li>
            <li>✓ Cost optimization without compromise</li>
            <li>✓ Compliance & regulatory adherence</li>
            <li>✓ Performance tracking & KPIs</li>
            <li>✓ Continuous improvement planning</li>
          </ul>
        </section>
      </motion.div>
    </div>
  );
}
