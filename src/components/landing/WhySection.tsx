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
          <h2 className="font-bold text-[30px] leading-9 text-[#E6E6E6] mb-16 text-center">
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
              <article className="h-full bg-[#333333] rounded-4xl p-8 shadow-[0_18px_34px_-26px_rgba(0,0,0,0.8)]">
                <div className="bg-[#8C5AF633] w-14 h-14 flex items-center justify-center rounded-lg ">
                  <img src={item.icon} alt={item.title} className="w-fit" />
                </div>
                <h3 className="mt-6 mb-4 text-5 font-bold leading-7 text-[#E6E6E6] ">
                  {item.title}
                </h3>
                <p className="text-[#B3B3B3] text-4 leading-[26px] font-regular">
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
