"use client";

import { motion } from "framer-motion";
import styles from "../../../../styles/TechnologyPage.module.scss";

export default function TalentSolutionsPage() {
  const solutions = [
    { category: "Acquisition", items: ["Sourcing", "Recruitment", "Placement"] },
    { category: "Development", items: ["Training", "Mentoring", "Career paths"] },
    { category: "Retention", items: ["Engagement", "Culture", "Benefits"] },
    { category: "Performance", items: ["Management", "Reviews", "Growth plans"] },
  ];

  return (
    <div className={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.header}
      >
        <h1 className={styles.title}>Talent Solutions</h1>
        <p className={styles.description}>
          Build and nurture high-performing teams
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={styles.content}
      >
        <section className={styles.section}>
          <h2>Complete Talent Management</h2>
          <div className={styles.solutionMatrix}>
            {solutions.map((solution, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className={styles.solutionBox}
              >
                <h4>{solution.category}</h4>
                <ul>
                  {solution.items.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>Our Solutions</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>👥 Workforce Planning</h3>
              <p>Strategic planning for talent needs</p>
            </div>
            <div className={styles.card}>
              <h3>📚 Learning & Development</h3>
              <p>Customized training programs</p>
            </div>
            <div className={styles.card}>
              <h3>🎯 Succession Planning</h3>
              <p>Building leadership pipeline</p>
            </div>
            <div className={styles.card}>
              <h3>💼 Career Development</h3>
              <p>Individual growth paths</p>
            </div>
            <div className={styles.card}>
              <h3>🤝 Engagement Programs</h3>
              <p>Culture & retention initiatives</p>
            </div>
            <div className={styles.card}>
              <h3>📊 Talent Analytics</h3>
              <p>Data-driven insights</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Key Outcomes</h2>
          <ul className={styles.features}>
            <li>📈 35% improvement in employee engagement</li>
            <li>🎯 50% reduction in turnover</li>
            <li>⚡ 40% faster promotion of high-performers</li>
            <li>💪 Stronger leadership pipeline</li>
            <li>🌟 Improved employer brand</li>
            <li>💰 Lower recruitment & training costs</li>
          </ul>
        </section>
      </motion.div>
    </div>
  );
}
