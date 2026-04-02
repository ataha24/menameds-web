"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/config";
import { cn } from "@/lib/utils";
import { assetPath } from "@/lib/assetPath";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-transparent"
      )}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/directory" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-cardinal-600/20 group-hover:ring-cardinal-600/50 transition-all shadow-sm">
            <Image
              src={assetPath("/logo.png")}
              alt="MENAMeds logo"
              fill
              className="object-cover"
              sizes="44px"
              priority
            />
          </div>
          <span className="font-semibold text-slate-900 text-[15px] tracking-tight leading-tight">
            MENA<span className="text-cardinal-600">Meds</span>
            <span className="block text-[10px] font-normal text-slate-400 tracking-wide">
              Stanford Medicine
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1" role="list">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "px-3 py-1.5 rounded-md text-sm font-medium transition-colors",
                    isActive
                      ? "text-cardinal-700 bg-cardinal-50"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA — hidden until full site launch */}
        {/* <div className="hidden lg:flex items-center gap-3">
          <Link href="/get-involved" className="px-4 py-1.5 rounded-md text-sm font-semibold bg-cardinal-600 text-white hover:bg-cardinal-700 transition-colors">
            Get Involved
          </Link>
        </div> */}

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 rounded-md text-slate-600 hover:bg-slate-100 transition-colors"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <ul className="px-4 pb-4 pt-2 flex flex-col gap-1" role="list">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "block px-3 py-2 rounded-md text-sm font-medium transition-colors",
                        isActive
                          ? "text-cardinal-700 bg-cardinal-50"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              {/* Get Involved CTA — hidden until full site launch */}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
