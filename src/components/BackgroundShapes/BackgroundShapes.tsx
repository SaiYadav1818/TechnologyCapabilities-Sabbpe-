"use client";

import styles from "./BackgroundShapes.module.css";

export function BackgroundShapes() {
  return (
    <div className={styles.container}>
      <div className={styles.shape1} />
      <div className={styles.shape2} />
      <div className={styles.shape3} />
      <div className={styles.shape4} />
      <div className={styles.shape5} />
    </div>
  );
}

