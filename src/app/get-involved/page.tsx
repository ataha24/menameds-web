import type { Metadata } from "next";
import Link from "next/link";
import { Heart, Users, BookOpen, PlusCircle, Mail } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import FadeIn from "@/components/shared/FadeIn";
import GetInvolvedForm from "@/components/shared/GetInvolvedForm";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Volunteer, mentor, collaborate, submit a resource, or join the MENAMeds community.",
};

const pathways = [
  {
    icon: Heart,
    title: "Volunteer",
    description:
      "Help organize and run Discovery Days, the Expo, and community events. Great for medical students at any year.",
    audience: "Stanford medical students",
    color: "teal",
  },
  {
    icon: Users,
    title: "Mentor",
    description:
      "Lead mentoring sessions at Discovery Days or connect one-on-one with MENA premeds navigating their path to medicine.",
    audience: "Residents, fellows, attending physicians",
    color: "amber",
  },
  {
    icon: BookOpen,
    title: "Collaborate",
    description:
      "Bring your organization, research initiative, or program into partnership with MENAMeds for events, panels, or joint programming.",
    audience: "Organizations, researchers, faculty",
    color: "teal",
  },
  {
    icon: PlusCircle,
    title: "Submit a Resource",
    description:
      "Know a Bay Area clinic, community org, mentorship program, or health initiative serving MENA communities? Add it to the directory.",
    audience: "Anyone with a relevant resource",
    color: "amber",
    anchor: "suggest",
  },
  {
    icon: Mail,
    title: "Join Our Mailing List",
    description:
      "Stay in the loop on events, opportunities, and community updates from MENAMeds and our Bay Area partners.",
    audience: "Students, community members, supporters",
    color: "teal",
    anchor: "mailing",
  },
];

const colorStyles: Record<string, { icon: string; bg: string; border: string }> = {
  teal: { icon: "text-teal-600", bg: "bg-teal-50", border: "border-teal-100" },
  amber: { icon: "text-amber-600", bg: "bg-amber-50", border: "border-amber-100" },
};

export default function GetInvolvedPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="bg-slate-900 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-400 mb-3">
              Get Involved
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-5">
              There&apos;s a place for you here.
            </h1>
            <p className="text-slate-400 max-w-xl leading-relaxed">
              MENAMeds grows through people who show up — as mentors, volunteers, collaborators, and community members. Here&apos;s how to plug in.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Pathways */}
      <section className="py-20 bg-white" aria-labelledby="pathways-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              eyebrow="Ways to Participate"
              title="How you can contribute"
              id="pathways-heading"
            />
          </FadeIn>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pathways.map((item, i) => {
              const styles = colorStyles[item.color];
              const Icon = item.icon;
              return (
                <FadeIn key={item.title} delay={i * 0.07}>
                  <div
                    id={item.anchor}
                    className={`bg-white border ${styles.border} rounded-xl shadow-sm p-6 flex flex-col gap-4 h-full`}
                  >
                    <div className={`w-10 h-10 rounded-lg ${styles.bg} flex items-center justify-center`}>
                      <Icon size={18} className={styles.icon} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                    </div>
                    <p className="text-xs text-slate-400 italic border-t border-slate-50 pt-3">
                      {item.audience}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Forms */}
      <section className="py-16 bg-slate-50" aria-labelledby="forms-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              eyebrow="Sign Up"
              title="Express your interest"
              description="Fill out the form below and we'll be in touch with the right opportunity."
              center
              id="forms-heading"
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <GetInvolvedForm />
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
