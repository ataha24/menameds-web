import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { teamMembers } from "@/data/team";
import SectionHeader from "@/components/shared/SectionHeader";
import FadeIn from "@/components/shared/FadeIn";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about MENAMeds — our mission, team, and why MENA representation in medicine matters.",
};

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Page hero */}
      <div className="bg-slate-900 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-cardinal-400 mb-3">
              About MENAMeds
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              Who we are and <br className="hidden sm:block" />
              why it matters.
            </h1>
          </FadeIn>
        </div>
      </div>

      {/* Mission */}
      <section className="py-20 bg-white" aria-labelledby="mission-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              eyebrow="Our Mission"
              title="Advancing MENA representation in medicine"
              id="mission-heading"
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
              <p>
                MENAMeds is a student-led organization within SUMMA at Stanford University School of Medicine. We exist to support Middle Eastern and North African medical students, build connections between Stanford Medicine and Bay Area MENA communities, and advocate for MENA representation across every dimension of healthcare.
              </p>
              <p>
                MENA communities in the United States are among the most medically underrepresented — absent from federal data categories, understudied in health research, and underserved in clinical practice. At the same time, MENA physicians and medical students bring rich cultural, linguistic, and lived experience that strengthens medicine as a whole.
              </p>
              <p>
                MENAMeds creates the infrastructure for that experience to translate into real impact: mentorship pipelines, community partnerships, educational programming, and a shared space to build community.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why it matters */}
      <section className="py-16 bg-slate-50" aria-labelledby="why-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              eyebrow="The Context"
              title="Why MENA representation in medicine matters"
              id="why-heading"
            />
          </FadeIn>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: "Data gaps",
                description:
                  "MENA individuals are classified as 'white' in US federal data, making MENA health disparities nearly invisible in national research and policy.",
              },
              {
                title: "Clinical gaps",
                description:
                  "Limited culturally and linguistically competent care creates barriers to access for Arabic-speaking and MENA immigrant patients.",
              },
              {
                title: "Pipeline gaps",
                description:
                  "MENA premeds often lack community support and visible mentors in medicine, creating a hidden pipeline problem with real downstream effects.",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm h-full">
                  <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Stanford + SUMMA affiliation */}
      <section className="py-16 bg-white" aria-labelledby="affiliation-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              eyebrow="Our Home"
              title="Stanford Medicine & SUMMA"
              id="affiliation-heading"
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mt-6 flex flex-col sm:flex-row gap-8 items-start">
              <div className="flex-1 space-y-4 text-slate-600 leading-relaxed text-sm">
                <p>
                  MENAMeds operates as a student group within SUMMA — the Stanford University Muslim Medical Association — at Stanford University School of Medicine. SUMMA provides an established community infrastructure; MENAMeds extends that reach specifically to MENA health advocacy and engagement.
                </p>
                <p>
                  Our programming connects to broader Stanford initiatives including community health outreach, research, and medical education. We partner with faculty mentors, student organizations across the medical school, and Bay Area community organizations.
                </p>
              </div>
              <div className="shrink-0">
                <Image
                  src="/stanford-logo.png"
                  alt="Stanford University"
                  width={140}
                  height={32}
                  className="opacity-70"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-slate-50" aria-labelledby="team-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              eyebrow="Leadership"
              title="The team behind MENAMeds"
              id="team-heading"
            />
          </FadeIn>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <FadeIn key={member.id} delay={i * 0.08}>
                <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6 flex flex-col gap-4 h-full">
                  {/* Avatar placeholder */}
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cardinal-400 to-cardinal-600 flex items-center justify-center text-white font-bold text-lg">
                    {member.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-slate-900 text-sm">{member.name}</p>
                    <p className="text-xs text-cardinal-600 font-medium mt-0.5">{member.role}</p>
                    {member.year && (
                      <p className="text-xs text-slate-400 mt-0.5">
                        {member.year} · {member.program}
                      </p>
                    )}
                    <p className="text-xs text-slate-500 leading-relaxed mt-3">{member.bio}</p>
                  </div>
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="text-xs text-cardinal-600 hover:text-cardinal-800 transition-colors"
                    >
                      {member.email}
                    </a>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-cardinal-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-2xl font-bold text-white mb-4">Ready to get involved?</h2>
            <p className="text-cardinal-100 mb-8">
              Whether you want to volunteer, mentor, collaborate, or just stay connected — we want to hear from you.
            </p>
            <Link
              href="/get-involved"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-cardinal-700 font-semibold text-sm hover:bg-cardinal-50 transition-colors"
            >
              Get Involved →
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
