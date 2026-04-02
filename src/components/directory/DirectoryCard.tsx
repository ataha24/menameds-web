import Link from "next/link";
import { MapPin, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { DirectoryEntry } from "@/types";
import { cn } from "@/lib/utils";

const categoryLabels: Record<DirectoryEntry["category"], string> = {
  "student-org": "Student Org",
  "faculty-mentor": "Faculty / Mentor",
  "community-org": "Community Org",
  clinic: "Clinic / Health",
  advocacy: "Advocacy",
  research: "Research",
  "event-program": "Event / Program",
};

interface DirectoryCardProps {
  entry: DirectoryEntry;
}

export default function DirectoryCard({ entry }: DirectoryCardProps) {
  return (
    <article className="group flex flex-col bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 overflow-hidden">
      {/* Color bar */}
      <div
        className="h-1.5 w-full"
        style={{ backgroundColor: entry.imagePlaceholder ?? "#0D9488" }}
        aria-hidden="true"
      />

      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
              {categoryLabels[entry.category]}
            </span>
            <h3 className="mt-0.5 text-[15px] font-semibold text-slate-900 leading-snug">
              {entry.title}
            </h3>
          </div>
          {entry.featured && (
            <span className="shrink-0 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-100">
              Featured
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 flex-1">
          {entry.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {entry.tags.slice(0, 4).map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-[11px] px-2 py-0.5 bg-slate-100 text-slate-600 hover:bg-slate-200 border-0"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-50">
          <span className="flex items-center gap-1 text-xs text-slate-400">
            <MapPin size={11} />
            {entry.city}
          </span>
          <div className="flex items-center gap-2">
            {entry.affiliation === "stanford" && (
              <span className="text-[10px] font-medium text-cardinal-700 bg-red-50 border border-red-100 px-1.5 py-0.5 rounded">
                Stanford
              </span>
            )}
            {entry.website && (
              <a
                href={entry.website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${entry.title} website`}
                className={cn(
                  "flex items-center gap-1 text-xs font-medium text-teal-600 hover:text-teal-800 transition-colors"
                )}
              >
                Visit <ExternalLink size={11} />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
