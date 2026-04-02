import type { Metadata } from "next";
import { Mail, Globe } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import FadeIn from "@/components/shared/FadeIn";
import ContactForm, { NewsletterForm } from "@/components/shared/ContactForm";
import { siteConfig } from "@/data/config";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with MENAMeds at Stanford Medicine.",
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="bg-slate-900 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-400 mb-3">
              Contact
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              Let&apos;s connect.
            </h1>
          </FadeIn>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact info */}
          <FadeIn>
            <div className="space-y-6">
              <SectionHeader eyebrow="Reach us" title="Get in touch" />
              <div className="space-y-4 text-sm">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-slate-600 hover:text-teal-600 transition-colors group"
                >
                  <span className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-teal-50 flex items-center justify-center transition-colors">
                    <Mail size={14} className="text-slate-500 group-hover:text-teal-600" />
                  </span>
                  {siteConfig.email}
                </a>
                {siteConfig.socials.instagram && (
                  <a
                    href={siteConfig.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-600 hover:text-teal-600 transition-colors group"
                  >
                    <span className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-teal-50 flex items-center justify-center transition-colors">
                      <Globe size={14} className="text-slate-500 group-hover:text-teal-600" />
                    </span>
                    @menameds (Instagram)
                  </a>
                )}
              </div>
              <div className="pt-4 border-t border-slate-100 text-xs text-slate-400 leading-relaxed">
                <p className="font-medium text-slate-600 mb-1">Stanford University School of Medicine</p>
                <p>291 Campus Drive</p>
                <p>Stanford, CA 94305</p>
                <p className="mt-2 italic">Part of SUMMA</p>
              </div>
            </div>
          </FadeIn>

          {/* Contact form */}
          <FadeIn delay={0.1} className="lg:col-span-2">
            <ContactForm />
          </FadeIn>
        </div>

        {/* Newsletter */}
        <FadeIn delay={0.2}>
          <NewsletterForm />
        </FadeIn>
      </div>
    </div>
  );
}
