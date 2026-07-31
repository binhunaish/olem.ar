import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import Reveal from "./Reveal";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { steps } from "./data";

export default function ContributionSteps({
  reducedMotion,
}: {
  reducedMotion: boolean;
}): ReactNode {
  const arrowImg = useBaseUrl("/img/arrow.png");
  return (
    <section
      dir="rtl"
      className="w-full flex justify-center gap-16 px-12 py-24 sm:px-6 lg:px-8"
    >
      <div className="w-full max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-16">
        <Reveal delay={0.1} reducedMotion={reducedMotion}>
          <div className="flex-1 text-left">
            <h2 className=" leading-10 font-bold text-[36px] text-[#E6E6E6] ">
              كيف تساهم؟
            </h2>

            <p className="font-regular text-[16px] leading-[26px] text-[#B3B3B3] my-4 max-w-[316px] max-h-[78px]">
              نحن نؤمن بقوة المجتمع. مساهمتك مهما
              <br /> كانت بسيطة تصنع فرقاً في مستقبل المحتوى
              <br /> التقني العربي.
            </p>

            <Link
              to="https://github.com/binhunaish/olem.ar/blob/main/CONTRIBUTING.md"
              className="inline-flex items-center gap-2 text-[#8C5AF6] hover:underline"
            >
              <p className="text-[16px] leading-[26px] font-bold">
                تعرف على دليل المساهمة
              </p>

              <img src={arrowImg} alt="arrow" className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
        <div className="flex-1 flex flex-col gap-6">
          {steps.map((step) => (
            <Reveal key={step.number} delay={0.1 * Number(step.number)} reducedMotion={reducedMotion}>
              <div
                key={step.number}
                className="flex items-center rounded-2xl gap-6
              bg-[#33333380] h-[104px] w-full p-4"
              >
                {/* Text */}
                <span className="text-[#8C5AF6] text-[36px] leading-10 font-bold text-lg opacity-70 ">
                  {step.number}
                </span>
                <div className="text-left">
                  <h3 className="text-[#E6E6E6] font-bold text-[18px] leading-7">
                    {step.title}
                  </h3>
                  <p className=" font-regular text-[#B3B3B3] text-[16px] leading-[26px]">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
