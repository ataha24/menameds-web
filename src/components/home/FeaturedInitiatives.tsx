"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Map } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const initiatives = [
  {
    icon: Calendar,
    label: "Annual Event",
    title: "Discovery Days",
    description:
      "A hands-on day at Stanford Medicine where Bay Area MENA students explore clinical skills, meet physician mentors, and discover pathways into healthcare.",
    href: "/discovery-days",
    accent: "cardinal",
    tags: ["Mentorship", "Clinical Exposure", "MENA Youth"],
  },
  {
    icon: Map,
    label: "Flagship Showcase",
    title: "MENAMeds Expo",
    description:
      "Our signature annual event connecting MENA organizations, researchers, physicians, and community members for a full day of panels, showcases, and dialogue.",
    href: "/expo",
    accent: "amber",
    tags: ["Community", "Research", "Networking"],
  },
];

const accentStyles: Record<string, { bg: string; text: string; tag: string; arrow: string }> = {
  cardinal: {
    bg: "bg-cardinal-600",
    text: "text-cardinal-600",
    tag: "bg-cardinal-50 text-cardinal-700 border-cardinal-100",
    arrow: "group-hover:bg-cardinal-600",
  },
  amber: {
    bg: "bg-amber-500",
    text: "text-amber-600",
    tag: "bg-amber-50 text-amber-700 border-amber-100",
    arrow: "group-hover:bg-amber-500",
  },
};

export default function FeaturedInitiatives() {
  return (
    <section className="py-20 bg-white" aria-labelledby="initiatives-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Featured Initiatives"
          title="Signature programs shaping MENA medicine"
          description="Two flagship programs that define how MENAMeds creates impact — building pipelines for tomorrow's physicians and convening community for collective action."
          id="initiatives-heading"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {initiatives.map((item, i) => {
            const styles = accentStyles[item.accent];
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="group flex flex-col h-full bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  {/* Top accent bar */}
                  <div className={`h-1 w-full ${styles.bg}`} aria-hidden="true" />

                  <div className="flex flex-col flex-1 p-8 gap-5">
                    {/* Icon + label */}
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${styles.bg}/10`}>
                        <Icon size={18} className={styles.text} />
                      </div>
                      <span className={`text-xs font-semibold uppercase tracking-widest ${styles.text}`}>
                        {item.label}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-xs font-medium px-2.5 py-1 rounded-full border ${styles.tag}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 pt-2 border-t border-slate-50">
                      <span className={`text-sm font-semibold ${styles.text}`}>
                        Learn more
                      </span>
                      <ArrowRight
                        size={14}
                        className={`${styles.text} transition-transform group-hover:translate-x-1`}
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
