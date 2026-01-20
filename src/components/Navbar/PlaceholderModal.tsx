"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import styles from "./PlaceholderModal.module.scss";

interface PlaceholderModalProps {
  isOpen: boolean;
  onClose: () => void;
  itemName: string;
}

export function PlaceholderModal({ isOpen, onClose, itemName }: PlaceholderModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            transition={{ duration: 0.2 }}
          />

          {/* Modal */}
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0, scale: 0.8, y: -50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -50 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {/* Close Button */}
            <motion.button
              className={styles.closeBtn}
              onClick={onClose}
              whileHover={{ rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              ✕
            </motion.button>

            {/* Content */}
            <div className={styles.content}>
              {/* Animated Icon */}
              <motion.div
                className={styles.iconContainer}
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className={styles.icon}>🔨</div>
              </motion.div>

              {/* Title */}
              <motion.h2
                className={styles.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                Under Development
              </motion.h2>

              {/* Item Name */}
              <motion.p
                className={styles.itemName}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {itemName}
              </motion.p>

              {/* Description */}
              <motion.p
                className={styles.description}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                This feature is being developed by another team member. More details coming soon!
              </motion.p>

              {/* Animated Dots */}
              <motion.div className={styles.dots}>
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className={styles.dot}
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                  />
                ))}
              </motion.div>

              {/* Action Button */}
              <motion.button
                className={styles.closeActionBtn}
                onClick={onClose}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Got It
              </motion.button>
            </div>

            {/* Corner Accents */}
            <motion.div
              className={styles.accent1}
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className={styles.accent2}
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
