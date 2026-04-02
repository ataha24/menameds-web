// FULL PAGE CONTENT — preserved for when the Expo is ready to launch.
// To restore: delete page.tsx and rename this file → page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Info } from "lucide-react";
import { expoExhibitors, expoSpeakers, expoFAQs } from "@/data/events";
import SectionHeader from "@/components/shared/SectionHeader";
import FadeIn from "@/components/shared/FadeIn";
import FAQAccordion from "@/components/shared/FAQAccordion";

export const metadata: Metadata = {
  title: "Expo",
  description:
    "The MENAMeds Expo — Stanford Medicine's showcase for MENA health organizations, research, and community partners.",
};

export default function ExpoPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-slate-900 via-amber-950/40 to-slate-900 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-amber-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3">
              Flagship Annual Event
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              MENAMeds Expo
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl leading-relaxed mb-8">
              A full day bringing together MENA health organizations, researchers, physicians, and community members from across the Bay Area — for panels, showcases, mentorship, and dialogue.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/get-involved"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-amber-500 text-white font-semibold text-sm hover:bg-amber-400 transition-colors"
              >
                Register Interest
              </Link>
              <Link
                href="#exhibitors"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/10 text-white font-semibold text-sm hover:bg-white/15 border border-white/10 transition-colors"
              >
                Submit Your Organization
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Update notice */}
      <div className="bg-amber-50 border-b border-amber-100 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex items-center gap-2 text-xs text-amber-700">
          <Info size={14} className="shrink-0" />
          <span>
            Final event details, date, and location are being finalized. This page will be updated once confirmed. Join our mailing list to be notified.
          </span>
        </div>
      </div>

      {/* Overview */}
      <section className="py-20 bg-white" aria-labelledby="expo-overview-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <FadeIn>
              <SectionHeader eyebrow="Overview" title="A community-centered showcase" id="expo-overview-heading" />
              <div className="mt-5 space-y-4 text-sm text-slate-600 leading-relaxed">
                <p>
                  The MENAMeds Expo is our annual flagship event — a convening space for the entire Bay Area MENA medical and community ecosystem. The Expo brings together student organizations, faculty, physicians, researchers, nonprofits, and advocates to share work, build connections, and make the MENA health landscape more visible.
                </p>
                <p>
                  The event includes an exhibitor showcase, speaker panels, mentorship programming, and a community reception. It is intentionally designed to serve both the Stanford Medicine community and the broader Bay Area.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Format", value: "Full-day conference and showcase" },
                  { label: "Audience", value: "Medical students, premeds, physicians, community organizations, advocates" },
                  { label: "Location", value: "Stanford University School of Medicine — date and venue TBD" },
                  { label: "Registration", value: "Free — details to be announced" },
                ].map((item) => (
                  <div key={item.label} className="bg-amber-50 rounded-xl p-4 border border-amber-100">
                    <p className="text-xs font-semibold text-amber-600 mb-1">{item.label}</p>
                    <p className="text-sm text-slate-700 leading-snug">{item.value}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section className="py-16 bg-slate-50" aria-labelledby="speakers-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              eyebrow="Programming"
              title="Talks & panels"
              description="The Expo features keynote speakers, moderated panels, and student fireside chats. Speaker details will be announced as the event approaches."
              id="speakers-heading"
            />
          </FadeIn>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {expoSpeakers.map((item, i) => (
              <FadeIn key={item.id} delay={i * 0.08}>
                <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-5 h-full">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {item.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-medium bg-amber-50 text-amber-700 border border-amber-100 rounded-full px-2 py-0.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Exhibitors */}
      <section id="exhibitors" className="py-16 bg-white" aria-labelledby="exhibitors-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              eyebrow="Exhibitors & Partners"
              title="Organizations at the Expo"
              description="The Expo showcases student initiatives, community organizations, research groups, and health services. Additional exhibitors will be confirmed closer to the event."
              id="exhibitors-heading"
            />
          </FadeIn>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {expoExhibitors.map((exhibitor, i) => (
              <FadeIn key={exhibitor.id} delay={i * 0.07}>
                <div className="flex gap-4 bg-slate-50 rounded-xl border border-slate-100 p-5">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-bold text-sm">
                    {exhibitor.name[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-widest text-amber-600">{exhibitor.category}</p>
                        <h3 className="text-sm font-semibold text-slate-900 mt-0.5">{exhibitor.name}</h3>
                      </div>
                      {exhibitor.website && exhibitor.website !== "#" && (
                        <a href={exhibitor.website} target="_blank" rel="noopener noreferrer" className="shrink-0 text-slate-400 hover:text-amber-600 transition-colors" aria-label={`Visit ${exhibitor.name}`}>
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed mt-1.5">{exhibitor.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <div className="mt-8 bg-amber-50 border border-amber-100 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-1">
                <p className="text-sm font-semibold text-slate-800">Want to exhibit at the Expo?</p>
                <p className="text-sm text-slate-500 mt-1">We welcome applications from community organizations, research groups, student initiatives, and health services.</p>
              </div>
              <Link href="/get-involved" className="shrink-0 inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-amber-500 text-white font-semibold text-sm hover:bg-amber-400 transition-colors">
                Submit Your Organization
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-50" aria-labelledby="faq-expo-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader eyebrow="FAQ" title="Common questions" id="faq-expo-heading" center />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mt-8">
              <FAQAccordion faqs={expoFAQs} />
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
