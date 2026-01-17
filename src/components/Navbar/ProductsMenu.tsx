"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import styles from "./ProductsMenu.module.css";
import { OfflinePaymentsAnimation } from "./OfflinePaymentsAnimation";

type Category = "offline" | "online" | "banking" | "payroll";

const categories = [
  { id: "offline" as Category, name: "Offline Payments" },
  { id: "online" as Category, name: "Online Payments" },
  { id: "banking" as Category, name: "Banking Suite" },
  { id: "payroll" as Category, name: "Payroll & HR" },
];

const offlinePaymentsContent = {
  column1: {
    title: "UPI & Assisted",
    items: [
      {
        name: "UPI Payments",
        description: "Accept UPI & QR payments instantly",
      },
      {
        name: "SabbPe Minis",
        description: "Lightweight payment widgets for quick integration",
        badge: "POPULAR",
      },
      {
        name: "VAS",
        description: "Value Added Services for enhanced customer experience",
      },
    ],
  },
  column2: {
    title: "Collections & Recurring",
    items: [
      {
        name: "UPI Collections",
        description: "Collect payments via UPI with ease",
      },
      {
        name: "UPI AutoPay",
        description: "Automated recurring payments through UPI",
      },
      {
        name: "BBPS Services",
        description: "Bill payment services for utilities and more",
      },
    ],
  },
  column3: {
    title: "Assisted Solutions",
    items: [
      {
        name: "Payment Gateway",
        description: "Robust payment gateway for online transactions",
      },
      {
        name: "Payment Links",
        description: "Generate and share payment links instantly",
      },
      {
        name: "Payment Forms",
        description: "Customizable payment forms for your business",
      },
      {
        name: "Subscriptions",
        description: "Manage recurring subscriptions effortlessly",
      },
      {
        name: "Payouts",
        description: "Send money to vendors, employees, and partners",
      },
      {
        name: "SabbPe Integration",
        description: "Complete integration solutions and APIs",
      },
    ],
  },
};

const onlinePaymentsContent = {
  column1: {
    title: "Payment Processing",
    items: [
      {
        name: "Payment Gateway",
        description: "Robust payment gateway for online transactions",
      },
      {
        name: "Payment Links",
        description: "Generate and share payment links instantly",
      },
      {
        name: "Payment Forms",
        description: "Customizable payment forms for your business",
      },
    ],
  },
  column2: {
    title: "Recurring & Subscriptions",
    items: [
      {
        name: "Subscriptions",
        description: "Manage recurring subscriptions effortlessly",
      },
      {
        name: "UPI AutoPay",
        description: "Automated recurring payments through UPI",
      },
    ],
  },
  column3: {
    title: "Payouts & Integration",
    items: [
      {
        name: "Payouts",
        description: "Send money to vendors, employees, and partners",
      },
      {
        name: "SabbPe Integration",
        description: "Complete integration solutions and APIs",
      },
    ],
  },
};

const bankingSuiteContent = {
  column1: {
    title: "Banking Services",
    items: [
      {
        name: "Business Banking",
        description: "Comprehensive banking solutions for businesses",
      },
      {
        name: "Account Management",
        description: "Manage business accounts with ease",
      },
    ],
  },
  column2: {
    title: "Financial Tools",
    items: [
      {
        name: "Financial Analytics",
        description: "Advanced analytics for financial insights",
      },
      {
        name: "Reporting",
        description: "Comprehensive financial reporting tools",
      },
    ],
  },
  column3: {
    title: "Compliance",
    items: [
      {
        name: "Regulatory Compliance",
        description: "Stay compliant with financial regulations",
      },
    ],
  },
};

const payrollHRContent = {
  column1: {
    title: "Payroll Management",
    items: [
      {
        name: "Payroll Processing",
        description: "Automated payroll processing and management",
      },
      {
        name: "Salary Disbursement",
        description: "Seamless salary payments to employees",
      },
    ],
  },
  column2: {
    title: "HR Solutions",
    items: [
      {
        name: "Employee Management",
        description: "Comprehensive employee management system",
      },
      {
        name: "Attendance Tracking",
        description: "Track and manage employee attendance",
      },
    ],
  },
  column3: {
    title: "Benefits & Compliance",
    items: [
      {
        name: "Benefits Administration",
        description: "Manage employee benefits efficiently",
      },
      {
        name: "HR Compliance",
        description: "Stay compliant with HR regulations",
      },
    ],
  },
};

const categoryContent: Record<Category, typeof offlinePaymentsContent> = {
  offline: offlinePaymentsContent,
  online: onlinePaymentsContent,
  banking: bankingSuiteContent,
  payroll: payrollHRContent,
};

function ProductIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="4"
        y="6"
        width="12"
        height="8"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path d="M4 9h12" stroke="currentColor" strokeWidth="1.5" />
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
        ease: [0.16, 1, 0.3, 1], // Custom easing for premium feel
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
        <ProductIcon size={isDense ? 16 : 18} />
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

export function ProductsMenu() {
  const [activeCategory, setActiveCategory] = useState<Category>("offline");
  const content = categoryContent[activeCategory];

  // Animation is visible when menu is open (component is mounted)
  const isVisible = true;

  return (
    <div className={styles.megaMenu}>
      <div className={styles.container}>
        {/* Sidebar - 3 columns */}
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
          <OfflinePaymentsAnimation isVisible={isVisible} />
        </div>

        {/* Content Area - 9 columns (3 + 3 + 3) */}
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
              {/* Column A - 3 columns */}
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

              {/* Column B - 3 columns */}
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

              {/* Column C - 3 columns (dense) */}
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
