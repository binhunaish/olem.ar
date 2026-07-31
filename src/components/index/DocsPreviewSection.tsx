import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { docsCards } from "./data";
import useBaseUrl from "@docusaurus/useBaseUrl";
type DocsPreviewSectionProps = {
  reducedMotion: boolean;
};

export default function DocsPreviewSection({
  reducedMotion,
}: DocsPreviewSectionProps): ReactNode {
  const arrow = useBaseUrl("/img/arrow.png");
  return (
    <section className="px-12 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal delay={0.05} reducedMotion={reducedMotion}>
          <h2 className="font-bold text-[30px] leading-9 text-[#E6E6E6] mb-16 text-left">
            استكشف الوثائق
          </h2>
        </Reveal>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {docsCards.map((card) => (
            <Link
              key={card.href}
              className="h-full bg-[#333333] rounded-4xl p-8 shadow-[0_18px_34px_-26px_rgba(0,0,0,0.8)]"
              to={card.href}
            >
              <div className="flex justify-between mb-[34.5px]">
                <img src={card.icon} alt={card.title} className="w-fit" />
                {card.tag && (
                  <span className="inline-block rounded-full bg-[#8C5AF633] text-[#8C5AF6] px-2.5 py-1 font-regular text-3 leading-4">
                    {card.tag}
                  </span>
                )}
              </div>

              <h3 className=" text-[24px] font-bold leading-8 text-[#E6E6E6] ">
                {card.title}
              </h3>
              <p className="mt-4 mb-8 text-6 font-regular leading-[26px] text-[#B3B3B3] ">
                {card.description}
              </p>
              <span className="font-bold text-4 leading-6 text-[#8C5AF6]">
                اقرأ الآن
                <motion.img
                  src={arrow}
                  alt="arrow"
                  className="inline-block ml-4"
                  animate={reducedMotion ? undefined : { x: [0, -8, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
