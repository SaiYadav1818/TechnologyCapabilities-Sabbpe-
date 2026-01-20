"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import styles from "./TechnologyMenu.module.scss";
import { PlaceholderModal } from "./PlaceholderModal";

interface TechItem {
  name: string;
  href: string;
  disabled?: boolean;
}

interface TechColumn {
  title: string;
  items: TechItem[];
}

interface TechContent {
  columns: TechColumn[];
}

const categories = [
  { id: "capabilities", label: "Technology Capabilities" },
  { id: "advanced", label: "Advanced Technologies" },
];

const techContent: Record<string, TechContent> = {
  capabilities: {
    columns: [
      {
        title: "Development",
        items: [
          { name: "Custom App Development", href: "/technology/development/custom-app-development" },
          { name: "Digital Transformation", href: "/technology/development/digital-transformation" },
          { name: "Enterprise Mobility", href: "/technology/development/enterprise-mobility" },
        ],
      },
      {
        title: "Design & Strategy",
        items: [
          { name: "UI/UX Design Thinking", href: "/technology/design-strategy/uiux-design-thinking" },
          { name: "Technology Consulting", href: "/technology/design-strategy/technology-consulting" },
          { name: "IT Staff Augmentation", href: "/technology/design-strategy/it-staff-augmentation" },
        ],
      },
      {
        title: "Recruitment",
        items: [
          { name: "Managed Recruitment", href: "/technology/recruitment/managed-recruitment" },
          { name: "Talent Solutions", href: "/technology/recruitment/talent-solutions" },
          { name: "Strategic Staffing", href: "/technology/recruitment/strategic-staffing" },
        ],
      },
    ],
  },
  advanced: {
    columns: [
      {
        title: "AI & Data",
        items: [
          { name: "AI & Machine Learning", href: "/technology/ai-data/ai-machine-learning", disabled: true },
          { name: "Data Analytics", href: "/technology/ai-data/data-analytics", disabled: true },
          { name: "Big Data Solutions", href: "/technology/ai-data/big-data-solutions", disabled: true },
        ],
      },
      {
        title: "Infrastructure",
        items: [
          { name: "Cloud Infrastructure", href: "/technology/infrastructure/cloud-infrastructure", disabled: true },
          { name: "DevOps & Automation", href: "/technology/infrastructure/devops-automation", disabled: true },
          { name: "Cybersecurity", href: "/technology/infrastructure/cybersecurity", disabled: true },
        ],
      },
      {
        title: "Next-Gen Tech",
        items: [
          { name: "Blockchain Technology", href: "/technology/next-gen/blockchain-technology", disabled: true },
          { name: "IoT Solutions", href: "/technology/next-gen/iot-solutions", disabled: true },
          { name: "Quantum Computing", href: "/technology/next-gen/quantum-computing", disabled: true },
        ],
      },
    ],
  },
};

export function TechnologyMenu() {
  const [activeCategory, setActiveCategory] = useState("capabilities");
  const [showPlaceholder, setShowPlaceholder] = useState(false);
  const [placeholderItem, setPlaceholderItem] = useState("");

  const handleDisabledClick = (itemName: string) => {
    setPlaceholderItem(itemName);
    setShowPlaceholder(true);
  };

  return (
    <div className={styles.technologyMenu}>
      {/* Sidebar */}
      <div className={styles.sidebar}>
        {categories.map((category) => (
          <motion.button
            key={category.id}
            className={`${styles.categoryButton} ${activeCategory === category.id ? styles.active : ""}`}
            onClick={() => setActiveCategory(category.id)}
            onMouseEnter={() => setActiveCategory(category.id)}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <span className={styles.label}>{category.label}</span>
            {activeCategory === category.id && (
              <motion.div
                className={styles.activeBar}
                layoutId="techBar"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </motion.button>
        ))}

        {/* Tech Animation Placeholder */}
        <div className={styles.animationBox}>
          <div className={styles.animationPlaceholder}>
            <div className={styles.animationContent}>
              <span className={styles.animationTitle}>SabbPe Tech Graph</span>
              <span className={styles.animationSubtitle}>Connected innovation</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className={styles.contentArea}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.2 }}
            className={styles.columnGrid}
          >
            {techContent[activeCategory as keyof typeof techContent]?.columns.map((column, idx) => (
              <div key={idx} className={styles.column}>
                <h4 className={styles.columnTitle}>{column.title}</h4>
                <ul className={styles.itemList}>
                  {column.items.map((item, itemIdx) => (
                    item.disabled ? (
                      <motion.li
                        key={itemIdx}
                        className={`${styles.item} ${styles.disabled}`}
                        onClick={() => handleDisabledClick(item.name)}
                        whileHover={{ x: 8, rotate: 1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.name}
                        <motion.span
                          className={styles.placeholderDot}
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </motion.li>
                    ) : (
                      <motion.li
                        key={itemIdx}
                        className={styles.item}
                        whileHover={{ x: 4, backgroundColor: "rgba(37, 99, 235, 0.05)" }}
                        transition={{ duration: 0.15 }}
                      >
                        <Link href={item.href} className={styles.itemLink}>
                          {item.name}
                        </Link>
                      </motion.li>
                    )
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <PlaceholderModal
        isOpen={showPlaceholder}
        onClose={() => setShowPlaceholder(false)}
        itemName={placeholderItem}
      />
    </div>
  );
}
