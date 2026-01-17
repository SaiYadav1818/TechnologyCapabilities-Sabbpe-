"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import styles from "./TechnologyMenu.module.css";
import { TechnologySidebarAnimation } from "./TechnologySidebarAnimation";

type Category = "capabilities" | "advanced";

const categories = [
  { id: "capabilities" as Category, name: "Technology Capabilities" },
  { id: "advanced" as Category, name: "Advanced Technologies" },
];

// Technology Capabilities Content (3 columns)
const technologyCapabilitiesContent = {
  column1: {
    title: "Development & Mobility",
    items: [
      {
        name: "Custom App Development",
        description: "Tailored applications built for your business needs",
      },
      {
        name: "Digital Transformation",
        description: "Transform your business with digital solutions",
      },
      {
        name: "Enterprise Mobility",
        description: "Mobile solutions for enterprise operations",
      },
    ],
  },
  column2: {
    title: "Design & Strategy",
    items: [
      {
        name: "UI/UX Design Thinking (HExA)",
        description: "Human-centered design approach for better experiences",
      },
      {
        name: "Technology Consulting",
        description: "Strategic advice to leverage emerging tech for growth",
      },
    ],
  },
  column3: {
    title: "Specialized Services",
    items: [
      {
        name: "IT Staff Augmentation & Consulting",
        description: "Expert IT resources and strategic consulting",
      },
      {
        name: "Managed Recruitment Solutions",
        description: "End-to-end recruitment and talent management",
      },
    ],
  },
};

// Advanced Technologies Content (3 columns)
const advancedTechnologiesContent = {
  column1: {
    title: "AI & Data",
    items: [
      {
        name: "Artificial Intelligence",
        description: "AI-powered solutions for intelligent automation",
      },
      {
        name: "Machine Learning",
        description: "ML models and algorithms for data-driven insights",
      },
      {
        name: "Big Data & Predictive Analytics",
        description: "Data analytics and predictive modeling solutions",
      },
    ],
  },
  column2: {
    title: "Infrastructure",
    items: [
      {
        name: "Cloud Computing",
        description: "Scalable cloud infrastructure and services",
      },
      {
        name: "Blockchain Development",
        description: "Secure blockchain solutions and smart contracts",
      },
      {
        name: "Internet of Things",
        description: "IoT solutions for connected devices and systems",
      },
    ],
  },
  column3: {
    title: "Next-Gen",
    items: [
      {
        name: "Chatbot Development",
        description: "Intelligent chatbots and conversational AI",
      },
      {
        name: "Progressive Web Apps",
        description: "Modern PWAs with native app-like experiences",
      },
      {
        name: "Metaverse & AR/VR",
        description: "Immersive experiences and virtual environments",
      },
    ],
  },
};

const categoryContent: Record<Category, typeof technologyCapabilitiesContent> = {
  capabilities: technologyCapabilitiesContent,
  advanced: advancedTechnologiesContent,
};

function TechnologyIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3"
        y="4"
        width="14"
        height="12"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M7 8h6M7 12h4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MenuItem({
  item,
  isDense = false,
  index = 0,
}: {
  item: { name: string; description: string; badge?: string };
  isDense?: boolean;
  index?: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={clsx(styles.item, isDense && styles.itemDense)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.2,
        delay: index * 0.03,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        x: 2,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
    >
      <motion.div
        className={styles.itemIcon}
        animate={{
          opacity: isHovered ? 1 : 0.6,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <TechnologyIcon size={isDense ? 16 : 18} />
      </motion.div>
      <div className={styles.itemContent}>
        <div className={styles.itemHeader}>
          <motion.span
            className={styles.itemName}
            animate={{
              color: isHovered ? "var(--text-primary)" : "var(--text-secondary)",
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {item.name}
          </motion.span>
          {item.badge && (
            <motion.span
              className={styles.badge}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.3,
                delay: 0.1,
                ease: "easeOut",
              }}
            >
              {item.badge}
            </motion.span>
          )}
        </div>
        <motion.div
          className={styles.itemDescriptionWrapper}
          initial={{ opacity: 0, y: -4 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : -4,
            height: isHovered ? "auto" : 0,
          }}
          transition={{
            duration: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <span className={styles.itemDescription}>{item.description}</span>
        </motion.div>
      </div>
    </motion.div>
  );
}


export function TechnologyMenu() {
  const [activeCategory, setActiveCategory] = useState<Category>("capabilities");
  const content = categoryContent[activeCategory];

  return (
    <div className={styles.megaMenu}>
      <div className={styles.container}>
        {/* Left Sidebar - Category Switcher */}
        <div className={styles.leftPanel}>
          <div className={styles.categoryList}>
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                className={clsx(
                  styles.categoryButton,
                  activeCategory === category.id && styles.active
                )}
                onMouseEnter={() => setActiveCategory(category.id)}
                onClick={() => setActiveCategory(category.id)}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  x: 4,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
          <TechnologySidebarAnimation />
        </div>

        {/* Right Panel - Content Area with 3 Columns */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{
              duration: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={styles.rightPanel}
          >
            <div className={styles.contentGrid}>
              {/* Column 1 */}
              <motion.div
                className={styles.column}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <motion.h3
                  className={styles.columnTitle}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.15,
                    ease: "easeOut",
                  }}
                >
                  {content.column1.title}
                </motion.h3>
                <div className={styles.items}>
                  {content.column1.items.map((item, index) => (
                    <MenuItem key={index} item={item} index={index} />
                  ))}
                </div>
              </motion.div>

              {/* Column 2 */}
              <motion.div
                className={styles.column}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <motion.h3
                  className={styles.columnTitle}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.2,
                    ease: "easeOut",
                  }}
                >
                  {content.column2.title}
                </motion.h3>
                <div className={styles.items}>
                  {content.column2.items.map((item, index) => (
                    <MenuItem key={index} item={item} index={index} />
                  ))}
                </div>
              </motion.div>

              {/* Column 3 */}
              <motion.div
                className={styles.column}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <motion.h3
                  className={styles.columnTitle}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.25,
                    ease: "easeOut",
                  }}
                >
                  {content.column3.title}
                </motion.h3>
                <div className={styles.items}>
                  {content.column3.items.map((item, index) => (
                    <MenuItem key={index} item={item} isDense={true} index={index} />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
