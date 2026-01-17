"use client";

import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.headline}>
            Enterprise-Grade Digital Payments
            <span className={styles.highlight}> Built for India</span>
          </h1>
          <p className={styles.subheadline}>
            Modern payment infrastructure that scales with your business.
            Seamless, secure, and designed for the future of fintech.
          </p>
          <div className={styles.ctaGroup}>
            <button className={styles.primaryCta}>Get Started</button>
            <button className={styles.secondaryCta}>Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

