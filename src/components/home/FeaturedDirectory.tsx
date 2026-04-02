import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { directoryEntries } from "@/data/directory";
import DirectoryCard from "@/components/directory/DirectoryCard";
import SectionHeader from "@/components/shared/SectionHeader";

export default function FeaturedDirectory() {
  const featured = directoryEntries.filter((e) => e.featured).slice(0, 4);

  return (
    <section className="py-20 bg-slate-50" aria-labelledby="directory-preview-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <SectionHeader
            eyebrow="Resource Directory"
            title="MENA health & community in the Bay Area"
            description="Discover Stanford-affiliated and community organizations, clinics, mentors, and initiatives serving MENA communities."
            id="directory-preview-heading"
          />
          <Link
            href="/directory"
            className="shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-cardinal-600 hover:text-cardinal-800 transition-colors whitespace-nowrap"
          >
            View full directory <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((entry) => (
            <DirectoryCard key={entry.id} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  );
}
