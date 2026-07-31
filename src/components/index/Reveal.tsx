import type { ReactNode } from "react";
import { motion } from "framer-motion";

type RevealProps = {
  children: ReactNode;
  delay: number;
  reducedMotion: boolean;
};

export default function Reveal({
  children,
  delay,
  reducedMotion,
}: RevealProps): ReactNode {
  return (
    <motion.div
      initial={{ opacity: 0, y: reducedMotion ? 0 : 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: reducedMotion ? 0 : 0.5,
        delay: reducedMotion ? 0 : delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
