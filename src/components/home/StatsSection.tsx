"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/config";

const items = [
  { value: `${stats.organizations}+`, label: "Organizations & Resources" },
  { value: `${stats.students}+`, label: "Students Reached" },
  { value: `${stats.partners}+`, label: "Community Partners" },
  { value: `${stats.cities}`, label: "Bay Area Cities" },
];

export default function StatsSection() {
  return (
    <section className="bg-cardinal-600 py-14" aria-label="Impact statistics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-center"
            >
              <p className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                {item.value}
              </p>
              <p className="mt-1 text-sm text-cardinal-100/80 font-medium">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
