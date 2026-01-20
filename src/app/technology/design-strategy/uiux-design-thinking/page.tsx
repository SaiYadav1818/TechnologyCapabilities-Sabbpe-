"use client";

import { motion } from "framer-motion";
import styles from "../../../../styles/TechnologyPage.module.scss";

export default function UIUXDesignPage() {
  const designProcess = [
    { step: 1, title: "Research", details: "User interviews & market analysis" },
    { step: 2, title: "Analysis", details: "Persona development & journey mapping" },
    { step: 3, title: "Ideation", details: "Brainstorming & concept generation" },
    { step: 4, title: "Prototyping", details: "Wireframes & interactive mockups" },
    { step: 5, title: "Testing", details: "Usability testing & validation" },
    { step: 6, title: "Refinement", details: "Iterations & optimization" },
  ];

  return (
    <div className={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.header}
      >
        <h1 className={styles.title}>UI/UX Design Thinking</h1>
        <p className={styles.description}>
          User-centered design that creates engaging digital experiences
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={styles.content}
      >
        <section className={styles.section}>
          <h2>Design Process</h2>
          <div className={styles.designSteps}>
            {designProcess.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={styles.designStep}
              >
                <div className={styles.stepNumber}>{item.step}</div>
                <h4>{item.title}</h4>
                <p>{item.details}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>Design Services</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>🎨 Visual Design</h3>
              <p>Beautiful interfaces aligned with brand identity</p>
            </div>
            <div className={styles.card}>
              <h3>💬 User Research</h3>
              <p>Deep insights through interviews and testing</p>
            </div>
            <div className={styles.card}>
              <h3>📱 Responsive Design</h3>
              <p>Seamless experience across all devices</p>
            </div>
            <div className={styles.card}>
              <h3>✨ Interaction Design</h3>
              <p>Smooth animations and micro-interactions</p>
            </div>
            <div className={styles.card}>
              <h3>♿ Accessibility</h3>
              <p>WCAG compliant & inclusive design</p>
            </div>
            <div className={styles.card}>
              <h3>🎯 Usability Testing</h3>
              <p>Validate designs with real users</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Results We Deliver</h2>
          <ul className={styles.features}>
            <li>📊 Increased user engagement & conversion</li>
            <li>⭐ Higher user satisfaction scores</li>
            <li>🚀 Faster time to market</li>
            <li>💼 Professional brand representation</li>
            <li>🎯 Better alignment with business goals</li>
            <li>♿ Accessibility compliance achieved</li>
          </ul>
        </section>
      </motion.div>
    </div>
  );
}
