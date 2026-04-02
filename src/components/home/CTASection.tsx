"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-20 bg-slate-900" aria-label="Call to action">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-cardinal-400 mb-3">
            Join the community
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
            Be part of MENA medicine at Stanford.
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto leading-relaxed">
            Whether you&apos;re a medical student, premed, physician, or community member — there&apos;s a place for you in the MENAMeds community.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/get-involved"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-cardinal-500 text-white font-semibold text-sm hover:bg-cardinal-400 transition-colors"
            >
              Get Involved
            </Link>
            <Link
              href="/directory"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/10 text-white font-semibold text-sm hover:bg-white/15 border border-white/10 transition-colors"
            >
              Browse Directory
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-slate-400 font-semibold text-sm hover:text-white transition-colors"
            >
              Contact Us →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
