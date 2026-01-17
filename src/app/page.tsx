import { Navbar } from "@/components/Navbar/Navbar";
import { Hero } from "@/components/Hero/Hero";
import { BackgroundShapes } from "@/components/BackgroundShapes/BackgroundShapes";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <BackgroundShapes />
        <Hero />
      </main>
    </div>
  );
}
