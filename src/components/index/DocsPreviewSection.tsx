import ThemeImage from "../ThemeImage";
import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { docsCards } from "./data";
type DocsPreviewSectionProps = {
  reducedMotion: boolean;
};

export default function DocsPreviewSection({
  reducedMotion,
}: DocsPreviewSectionProps): ReactNode {
  return (
    <section className="px-12 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal delay={0.05} reducedMotion={reducedMotion}>
          <h2 className="font-bold text-[30px] leading-9 text-[var(--ifm-text-color)] mb-16 text-left">
            استكشف الوثائق
          </h2>
        </Reveal>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {docsCards.map((card) => (
            <Link
              key={card.href}
              className="h-full bg-[var(--olem-card)] rounded-4xl p-8 shadow-[var(--olem-card-shadow)]"
              to={card.href}
            >
              <div className="flex justify-between mb-[34.5px]">
                <ThemeImage dark={card.icon} light={card.lightIcon} alt={card.title} className="w-7 h-7 object-contain" />
                {card.tag && (
                  <span className="inline-block rounded-full bg-[var(--olem-accent-soft)] text-[var(--ifm-color-primary)] px-2.5 py-1 font-regular text-3 leading-4">
                    {card.tag}
                  </span>
                )}
              </div>

              <h3 className=" text-[24px] font-bold leading-8 text-[var(--ifm-text-color)] ">
                {card.title}
              </h3>
              <p className="mt-4 mb-8 text-6 font-regular leading-[26px] text-[var(--ifm-text-color-secondary)] ">
                {card.description}
              </p>
              <span className="font-bold text-4 leading-6 text-[var(--ifm-color-primary)]">
                اقرأ الآن
                <motion.span
                  className="inline-block ml-4"
                  animate={reducedMotion ? undefined : { x: [0, -8, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ThemeImage dark="/img/arrow.png" light="/img/light/arrow.svg" alt="arrow" className="w-4 h-4 object-contain" />
                </motion.span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
