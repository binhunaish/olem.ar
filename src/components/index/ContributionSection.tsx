import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import Reveal from "./Reveal";
import { steps } from "./data";

export default function ContributionSteps({
  reducedMotion,
}: {
  reducedMotion: boolean;
}): ReactNode {
  return (
    <section
      dir="rtl"
      className="w-full flex justify-center gap-16 px-12 py-24 sm:px-6 lg:px-8"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        <Reveal delay={0.1} reducedMotion={reducedMotion}>
          <div className="flex-1 text-left">
            <h2 className=" leading-10 font-bold text-[36px] text-(--ifm-text-color) ">
              كيف تساهم؟
            </h2>

            <p className="font-regular text-[16px] leading-6.5 text-(--ifm-text-color-secondary) my-4 max-w-[316px] max-h-[78px]">
              نحن نؤمن بقوة المجتمع. مساهمتك مهما
              <br /> كانت بسيطة تصنع فرقاً في مستقبل المحتوى
              <br /> التقني العربي.
            </p>

            <Link
              to="https://github.com/binhunaish/olem.ar/blob/main/CONTRIBUTING.md"
              className="inline-flex items-center justify-center gap-2 text-(--ifm-color-primary) hover:text-(--olem-navbar-hover)"
            >
              <div className="text-[16px] font-bold">
                تعرف على دليل المساهمة
              </div>

              <span className="material-symbols-rounded">arrow_back</span>
            </Link>
          </div>
        </Reveal>
        <div className="flex-1 flex flex-col gap-6">
          {steps.map((step) => (
            <Reveal
              key={step.number}
              delay={0.1 * Number(step.number)}
              reducedMotion={reducedMotion}
            >
              <div className="rounded-2xl overflow-clip">
                <div
                  key={step.number}
                  className="flex items-center gap-6
              bg-(--olem-step) w-full p-4 border-0 hover:border-s-4 border-(--ifm-color-primary) transition-all"
                >
                  {/* Text */}
                  <span className="text-(--ifm-color-primary) text-[24px] leading-10 font-bold text-lg opacity-70 ">
                    {step.number}
                  </span>
                  <div className="text-left">
                    <h3 className="text-(--ifm-text-color) font-bold text-[18px] leading-7">
                      {step.title}
                    </h3>
                    <p className=" font-regular m-0 text-(--ifm-text-color-secondary) text-[12px]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
