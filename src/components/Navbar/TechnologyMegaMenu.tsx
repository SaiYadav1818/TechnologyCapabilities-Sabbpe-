"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import styles from "./TechnologyMegaMenu.module.scss";
import { PlaceholderModal } from "./PlaceholderModal";

/**
 * Data types for the Technology Mega Menu
 */
interface Category {
  id: string;
  label: string;
}

interface MenuItem {
  name: string;
  href: string;
  disabled?: boolean;
}

interface ContentColumn {
  title: string;
  items: MenuItem[];
}

/**
 * Technology categories displayed in the left sidebar
 */
const categories: Category[] = [
  { id: "capabilities", label: "Technology Capabilities" },
  { id: "advanced", label: "Advanced Technologies" },
];

/**
 * Mega menu content organized by category
 * Each category contains 3 columns of menu items
 */
const megaMenuContent: Record<string, ContentColumn[]> = {
  capabilities: [
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
  advanced: [
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
};

/**
 * MenuItemComponent - Reusable menu item with hover animation
 */
interface MenuItemComponentProps {
  item: MenuItem;
}

function MenuItemComponent({ item }: MenuItemComponentProps) {
  const [showPlaceholder, setShowPlaceholder] = useState(false);

  if (item.disabled) {
    return (
      <>
        <motion.li
          className={`${styles.item} ${styles.disabled}`}
          onClick={() => setShowPlaceholder(true)}
          whileHover={{ x: 8, rotate: 1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <span className={styles.disabledLink}>
            {item.name}
            <motion.span
              className={styles.placeholderDot}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </span>
        </motion.li>
        <PlaceholderModal 
          isOpen={showPlaceholder} 
          onClose={() => setShowPlaceholder(false)} 
          itemName={item.name}
        />
      </>
    );
  }

  return (
    <motion.li
      className={styles.item}
      whileHover={{ x: 4 }}
      transition={{ duration: 0.15 }}
    >
      <Link href={item.href}>
        <span>{item.name}</span>
      </Link>
    </motion.li>
  );
}

/**
 * CategoryButtonComponent - Reusable sidebar category button
 */
interface CategoryButtonComponentProps {
  category: Category;
  isActive: boolean;
  onHover: (categoryId: string) => void;
}

function CategoryButtonComponent({
  category,
  isActive,
  onHover,
}: CategoryButtonComponentProps) {
  return (
    <motion.button
      className={`${styles.categoryButton} ${isActive ? styles.active : ""}`}
      onClick={() => onHover(category.id)}
      onMouseEnter={() => onHover(category.id)}
      whileHover={{ x: 4 }}
      transition={{ duration: 0.15 }}
    >
      {isActive && (
        <motion.div
          className={styles.activeIndicator}
          layoutId="techActiveBar"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
      {category.label}
    </motion.button>
  );
}

/**
 * TechnologyMegaMenu - Premium mega menu for Technology dropdown
 * Features:
 * - 2 categories in sidebar
 * - 3-column layout for menu items
 * - Smooth category switching animation
 * - Hover-safe implemented at parent level
 */
export function TechnologyMegaMenu() {
  const [activeCategory, setActiveCategory] = useState<string>("capabilities");

  const content = megaMenuContent[activeCategory] || megaMenuContent.capabilities;

  return (
    <div className={styles.container}>
      {/* Left Sidebar - Categories */}
      <div className={styles.sidebar}>
        {categories.map((category) => (
          <CategoryButtonComponent
            key={category.id}
            category={category}
            isActive={activeCategory === category.id}
            onHover={setActiveCategory}
          />
        ))}

        {/* Animation Placeholder */}
        <div className={styles.animationPlaceholder}>
          <div>SabbPe Tech Graph</div>
        </div>
      </div>

      {/* Right Content Area - 3 Columns */}
      <div className={styles.content}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={styles.columnGrid}
          >
            {content.map((column, idx) => (
              <div key={idx} className={styles.column}>
                <h4 className={styles.columnTitle}>{column.title}</h4>
                <ul className={styles.itemsList}>
                  {column.items.map((item, itemIdx) => (
                    <MenuItemComponent key={itemIdx} item={item} />
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
