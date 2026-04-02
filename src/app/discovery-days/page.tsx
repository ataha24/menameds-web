import type { Metadata } from "next";
import Link from "next/link";
import { Clock, MapPin, Tag } from "lucide-react";
import { discoveryDaysAgenda, discoveryDaysFAQs } from "@/data/events";
import SectionHeader from "@/components/shared/SectionHeader";
import FadeIn from "@/components/shared/FadeIn";
import FAQAccordion from "@/components/shared/FAQAccordion";

export const metadata: Metadata = {
  title: "Discovery Days",
  description:
    "Discovery Days at Stanford Medicine — a hands-on day for Bay Area MENA students exploring clinical medicine and mentorship.",
};

export default function DiscoveryDaysPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-400 mb-3">
              Annual Initiative
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Discovery Days
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl leading-relaxed mb-8">
              A full day at Stanford Medicine designed for Bay Area MENA students — hands-on clinical exposure, one-on-one mentorship with MENA physicians, and a first look at what a career in medicine actually looks like.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/get-involved"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-teal-500 text-white font-semibold text-sm hover:bg-teal-400 transition-colors"
              >
                Get Involved
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/10 text-white font-semibold text-sm hover:bg-white/15 border border-white/10 transition-colors"
              >
                Partner with Us
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Overview */}
      <section className="py-20 bg-white" aria-labelledby="overview-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <FadeIn>
              <SectionHeader
                eyebrow="Overview"
                title="What is Discovery Days?"
                id="overview-heading"
              />
              <div className="mt-5 space-y-4 text-sm text-slate-600 leading-relaxed">
                <p>
                  Discovery Days is MENAMeds' flagship outreach event — designed to open the doors of Stanford Medicine to high school and college students from MENA backgrounds across the Bay Area.
                </p>
                <p>
                  The day blends clinical skills workshops, mentorship conversations, research showcases, and cultural celebration. Every component is intentional: we want students to leave knowing that medicine is for them, and that they have a community within it.
                </p>
                <p>
                  A dedicated MENA health programming track introduces participants to health disparities affecting their communities, career pathways in medicine, and how physicians can advocate for the patients they come from.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Target Audience", value: "High school & college students, MENA background" },
                  { label: "Location", value: "Stanford University School of Medicine, Palo Alto" },
                  { label: "Format", value: "Full-day event with workshops, panels, and mentoring" },
                  { label: "Cost", value: "Free — lunch, materials, and travel support provided" },
                ].map((item) => (
                  <div key={item.label} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                    <p className="text-xs font-semibold text-teal-600 mb-1">{item.label}</p>
                    <p className="text-sm text-slate-700 leading-snug">{item.value}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section className="py-16 bg-slate-50" aria-labelledby="agenda-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              eyebrow="Sample Agenda"
              title="A day at Discovery Days"
              description="The schedule below reflects a representative program. Final event details will be announced closer to the event date."
              id="agenda-heading"
            />
          </FadeIn>

          <div className="mt-10 space-y-4">
            {discoveryDaysAgenda.map((item, i) => (
              <FadeIn key={item.id} delay={i * 0.06}>
                <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-5 flex flex-col sm:flex-row gap-4">
                  <div className="shrink-0 sm:w-40">
                    {item.time && (
                      <span className="flex items-center gap-1.5 text-xs font-medium text-teal-600">
                        <Clock size={12} /> {item.time}
                      </span>
                    )}
                    {item.location && (
                      <span className="flex items-center gap-1.5 text-xs text-slate-400 mt-1">
                        <MapPin size={11} /> {item.location}
                      </span>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed mt-1">{item.description}</p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="flex items-center gap-1 text-[10px] font-medium text-slate-500 bg-slate-100 rounded-full px-2 py-0.5"
                        >
                          <Tag size={9} /> {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer roles */}
      <section className="py-16 bg-white" aria-labelledby="roles-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              eyebrow="Get Involved"
              title="Volunteer and mentor roles"
              description="Discovery Days relies on medical students, residents, physicians, and community volunteers."
              id="roles-heading"
            />
          </FadeIn>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                role: "Physician Mentor",
                description:
                  "Lead a one-on-one mentoring session with a student during the Mentor Match lunch. Share your path into medicine and answer honest questions.",
                who: "Attending physicians, fellows, residents",
              },
              {
                role: "Student Volunteer",
                description:
                  "Help facilitate workshops, support registration, guide students through the day, and share your experience as a current medical student.",
                who: "Stanford medical students (all years)",
              },
              {
                role: "Organizational Partner",
                description:
                  "Bring your organization's work to Discovery Days as a resource table or co-presenter. Great for community organizations, clinics, and advocacy groups.",
                who: "Community organizations, nonprofits, clinics",
              },
            ].map((item, i) => (
              <FadeIn key={item.role} delay={i * 0.1}>
                <div className="bg-slate-50 rounded-xl border border-slate-100 p-6 h-full">
                  <p className="text-xs font-semibold uppercase tracking-widest text-teal-600 mb-2">
                    {item.role}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">{item.description}</p>
                  <p className="text-xs text-slate-400 italic">{item.who}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <div className="mt-8 text-center">
              <Link
                href="/get-involved"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-teal-600 text-white font-semibold text-sm hover:bg-teal-700 transition-colors"
              >
                Sign Up to Volunteer or Mentor →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-50" aria-labelledby="faq-dd-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              eyebrow="FAQ"
              title="Common questions"
              id="faq-dd-heading"
              center
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mt-8">
              <FAQAccordion faqs={discoveryDaysFAQs} />
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
