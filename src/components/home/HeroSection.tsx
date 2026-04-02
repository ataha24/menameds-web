"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-slate-950"
      aria-label="Hero"
    >
      {/* Geometric background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-cardinal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-amber-500/8 rounded-full blur-3xl" />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden ring-2 ring-cardinal-400/30">
              <Image src="/logo.png" alt="MENAMeds" fill className="object-cover" sizes="32px" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-cardinal-400">
              Part of SUMMA · Stanford Medicine
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight"
          >
            Building community for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cardinal-400 to-cardinal-300">
              MENA medicine
            </span>{" "}
            at Stanford.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-slate-400 leading-relaxed max-w-2xl"
          >
            MENAMeds brings together medical students, faculty mentors, and Bay Area communities to advance MENA representation in healthcare — through mentorship, research, advocacy, and authentic connection.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-3"
          >
            <Link
              href="/directory"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-cardinal-500 text-white font-semibold text-sm hover:bg-cardinal-400 transition-colors"
            >
              Explore Directory <ArrowRight size={15} />
            </Link>
            <Link
              href="/get-involved"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white/10 text-white font-semibold text-sm hover:bg-white/15 border border-white/10 transition-colors"
            >
              Get Involved
            </Link>
            <Link
              href="/expo"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-slate-300 font-semibold text-sm hover:text-white transition-colors"
            >
              View Expo →
            </Link>
          </motion.div>
        </div>

        {/* Affiliation badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 flex items-center gap-4"
        >
          <div className="h-px flex-1 max-w-[80px] bg-slate-800" />
          <span className="text-xs text-slate-600 uppercase tracking-widest">
            Stanford University School of Medicine
          </span>
          <div className="h-px flex-1 max-w-[80px] bg-slate-800" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={20} className="text-slate-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}
