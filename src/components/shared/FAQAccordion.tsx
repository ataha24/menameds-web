"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FAQ } from "@/types";
import { cn } from "@/lib/utils";

interface FAQAccordionProps {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="divide-y divide-slate-100 border border-slate-100 rounded-xl overflow-hidden">
      {faqs.map((faq) => (
        <div key={faq.id}>
          <button
            onClick={() => setOpen(open === faq.id ? null : faq.id)}
            className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left bg-white hover:bg-slate-50 transition-colors"
            aria-expanded={open === faq.id}
          >
            <span className="text-sm font-medium text-slate-800">{faq.question}</span>
            <ChevronDown
              size={16}
              className={cn(
                "shrink-0 text-slate-400 transition-transform duration-200",
                open === faq.id && "rotate-180"
              )}
            />
          </button>
          <AnimatePresence initial={false}>
            {open === faq.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4 pt-1 text-sm text-slate-500 leading-relaxed bg-white">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
