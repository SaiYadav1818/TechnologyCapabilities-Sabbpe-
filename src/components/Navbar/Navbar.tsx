"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { motion } from "framer-motion";
import clsx from "clsx";
import styles from "./Navbar.module.css";
import { ProductsMenu } from "./ProductsMenu";
import { TechnologyMenu } from "./TechnologyMenu";

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <motion.div
          className={styles.logo}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <span className={styles.logoText}>SabbPe</span>
        </motion.div>

        <NavigationMenu.Root className={styles.navigationMenu} delayDuration={200}>
          <NavigationMenu.List className={styles.menu}>
            {/* Products Menu */}
            <NavigationMenu.Item>
              <NavigationMenu.Trigger className={styles.menuButton}>
                Products
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className={styles.menuContent}>
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{
                    duration: 0.3,
                    ease: [0.16, 1, 0.3, 1], // Premium easing curve
                  }}
                >
                  <ProductsMenu />
                </motion.div>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            {/* Technology Menu */}
            <NavigationMenu.Item>
              <NavigationMenu.Trigger className={styles.menuButton}>
                Technology
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className={styles.menuContent}>
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{
                    duration: 0.22,
                    ease: "easeOut",
                  }}
                >
                  <TechnologyMenu />
                </motion.div>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            {/* Simple Menu Items */}
            <NavigationMenu.Item>
              <NavigationMenu.Link className={styles.menuButton} href="#services">
                Services
              </NavigationMenu.Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Link className={styles.menuButton} href="#saas">
                SaaS
              </NavigationMenu.Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Link className={styles.menuButton} href="#about">
                About Us
              </NavigationMenu.Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Link className={styles.menuButton} href="#contact">
                Contact Us
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>

          {/* Viewport for positioning dropdowns */}
          <div className={styles.viewportPosition}>
            <NavigationMenu.Viewport className={styles.viewport} />
          </div>
        </NavigationMenu.Root>

        <div className={styles.cta}>
          <motion.button
            className={styles.ctaButton}
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </nav>
  );
}
