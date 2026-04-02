import Link from "next/link";
import Image from "next/image";
import { Globe, Mail } from "lucide-react";
import { siteConfig, navLinks } from "@/data/config";
// Note: Stanford logo is intentionally not used here — we reference the affiliation
// as plain text only to avoid any implication of official Stanford endorsement.

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/directory" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-white/10 group-hover:ring-cardinal-500/40 transition-all shadow">
                <Image src="/logo.png" alt="MENAMeds" fill className="object-cover" sizes="48px" />
              </div>
              <span className="font-semibold text-white text-sm tracking-tight leading-tight">
                MENA<span className="text-cardinal-400">Meds</span>
                <span className="block text-[10px] font-normal text-slate-500 tracking-wide">
                  Stanford Medicine
                </span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-3 pt-1">
              {siteConfig.socials.instagram && (
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-2 rounded-md bg-slate-800 hover:bg-cardinal-600 text-slate-400 hover:text-white transition-colors"
                >
                  <Globe size={16} />
                </a>
              )}
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="Email"
                className="p-2 rounded-md bg-slate-800 hover:bg-cardinal-600 text-slate-400 hover:text-white transition-colors"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
              Contact
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-cardinal-400 transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="leading-relaxed">
                Stanford University School of Medicine
                <br />
                Part of SUMMA · Stanford, CA 94305
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/get-involved"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-cardinal-400 hover:text-cardinal-300 transition-colors"
              >
                Get Involved →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} MENAMeds · A student group within SUMMA at Stanford University School of Medicine.
            Not an official Stanford University publication.
          </p>
        </div>
      </div>
    </footer>
  );
}
