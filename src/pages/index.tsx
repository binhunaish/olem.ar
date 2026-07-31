import type { ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { useReducedMotion } from "framer-motion";
import ContributionSection from "../components/index/ContributionSection";
import DocsPreviewSection from "../components/index/DocsPreviewSection";
import HeroSection from "../components/index/HeroSection";
import WhySection from "../components/index/WhySection";
import styles from "./index.module.css";

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <Layout
      {...{} /* @ts-ignore */}
      title={`${siteConfig.title}`}
      description="منصة عربية لتعلم البرمجة عبر مسارات عملية ووثائق مرتبة."
    >
      <main className={styles.landingRoot} dir="rtl">
        <HeroSection reducedMotion={reducedMotion} />
        <WhySection reducedMotion={reducedMotion} />
        <DocsPreviewSection reducedMotion={reducedMotion} />
        <ContributionSection reducedMotion={reducedMotion} />
      </main>
    </Layout>
  );
}
