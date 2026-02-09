import { ReactNode } from "react";
import { motion } from "motion/react";

interface SectionCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function SectionCard({ children, delay = 0, className = "" }: SectionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className={`rounded-[28px] bg-gradient-to-br from-[#1a1d26]/40 via-[#12141a]/50 to-[#1a1d26]/40 border border-white/[0.06] hover:border-white/[0.08] transition-all duration-500 ${className}`}
    >
      {children}
    </motion.div>
  );
}
