"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  className?: string;
  id?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  center = false,
  className,
  id,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={cn(center ? "text-center" : "", className)}
    >
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-widest text-cardinal-600 mb-2">
          {eyebrow}
        </p>
      )}
      <h2 id={id} className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-3 text-slate-500 leading-relaxed",
            center ? "max-w-2xl mx-auto" : "max-w-2xl"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
