import ThemeImage from "../ThemeImage";
import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { GITHUB_URL } from "../../config/constants";

type HeroSectionProps = {
  reducedMotion: boolean;
};

export default function HeroSection({
  reducedMotion,
}: HeroSectionProps): ReactNode {
  return (
    <section
      dir="rtl"
      className="relative overflow-hidden px-4 pt-20 pb-28 sm:px-6 lg:px-8
       bg-[radial-gradient(85.66%_165.89%_at_22.66%_31.39%,rgba(163,118,255,0.15)_0%,rgba(163,118,255,0)_50%),radial-gradient(87.79%_170%_at_80%_70%,rgba(139,213,255,0.1)_0%,rgba(139,213,255,0)_50%)] "
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute w-[700px] h-[500px] left-[10%] top-[10%]
          bg-[radial-gradient(circle_at_center,rgba(163,118,255,0.25),transparent_60%)]
          blur-[120px]"
        />

        <div
          className="absolute w-[600px] h-[500px] right-[5%] bottom-[5%]
          bg-[radial-gradient(circle_at_center,rgba(139,213,255,0.18),transparent_60%)]
          blur-[120px]"
        />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <Reveal delay={0.1} reducedMotion={reducedMotion}>
          <div className="">
            <span
              className="inline-block rounded-full px-4 py-1 bg-[var(--olem-accent-soft)]
            text-4 leading-6 font-regular text-[var(--ifm-color-primary)]"
            >
              <ThemeImage dark="/img/Container1.png" light="/img/light/badge.svg" alt="logo" className="inline-block mr-[6px] w-3.5 h-3.5" />
              عُلِم، تعلم واستخدم المحتوى المفيد
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-[var(--olem-hero-heading)] sm:text-5xl lg:text-[72px]">
              عُلِم — تعلم
              <span className="text-[var(--ifm-color-primary)] [filter:var(--olem-heading-shadow)] ">
                <br />
                البرمجة بالعربية
              </span>
            </h1>

            <p className="mt-5 max-w-xl font-regular text-[20px] text-[var(--ifm-text-color-secondary)] leading-[32.5px]">
              دروس منظمة على شكل مستندات، مفتوحة المصدر، والمساهمات تبدأ رحلتك
              البرمجية بلغة الضاد عبر GitHub.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/docs/basics-doc"
                className="px-8 py-4 rounded-full bg-[var(--ifm-color-primary)] text-white font-bold text-[18px] leading-[28px]
                hover:opacity-90 transition
                shadow-[var(--olem-accent-shadow)]"
              >
                ابدأ القراءة
              </Link>

              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 rounded-full   bg-[var(--olem-secondary-button)]
                text-[var(--ifm-text-color)] font-bold text-[18px] leading-[28px] border border-[var(--olem-border)] "
              >
                &lt; &gt; ساهم على GitHub
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2} reducedMotion={reducedMotion}>
          <div className="olem-code-visual">
          <motion.div
            animate={reducedMotion ? undefined : { y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="mx-auto w-full p-6 rounded-4xl border-8 olem-code-preview
            bg-[#0F0F0F]
            backdrop-blur-xl"
          >
            <div className="mb-4 flex flex-row-reverse justify-end gap-2">
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-red-400" />
            </div>

            <p dir="ltr" className="font-mono text-[15px] leading-4 text-white">
              <span className="text-[#7BC279]">System</span>.out.
              <span className="text-[#FF78CB]">println</span>(
              <span className="text-[#FF9595]">"Hello World"</span>);
            </p>
          </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
