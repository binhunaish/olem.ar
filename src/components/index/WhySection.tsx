import ThemeImage from "../ThemeImage";
import type { ReactNode } from "react";
import Reveal from "./Reveal";
import { whyCards } from "./data";

type WhySectionProps = {
  reducedMotion: boolean;
};

export default function WhySection({
  reducedMotion,
}: WhySectionProps): ReactNode {
  return (
    <section id="why" className="px-12 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal delay={0.05} reducedMotion={reducedMotion}>
          <h2 className="font-bold text-[30px] leading-9 text-[var(--ifm-text-color)] mb-16 text-center">
            لماذا عُلِم؟
          </h2>
        </Reveal>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {whyCards.map((item, index) => (
            <Reveal
              key={item.title}
              delay={0.08 + index * 0.07}
              reducedMotion={reducedMotion}
            >
              <article className="h-full bg-[var(--olem-card)] rounded-4xl p-8 shadow-[var(--olem-card-shadow)]">
                <div className="bg-[var(--olem-accent-soft)] w-14 h-14 flex items-center justify-center rounded-lg ">
                  <ThemeImage dark={item.icon} light={item.lightIcon} alt={item.title} className="w-7 h-7 object-contain" />
                </div>
                <h3 className="mt-6 mb-4 text-5 font-bold leading-7 text-[var(--ifm-text-color)] ">
                  {item.title}
                </h3>
                <p className="text-[var(--ifm-text-color-secondary)] text-4 leading-[26px] font-regular">
                  {item.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
