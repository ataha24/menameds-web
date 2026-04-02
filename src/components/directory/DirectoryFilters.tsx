"use client";

import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export type FilterState = {
  search: string;
  category: string;
  focus: string;
  affiliation: string;
};

const CATEGORIES = [
  { value: "all", label: "All Types" },
  { value: "student-org", label: "Student Org" },
  { value: "community-org", label: "Community Org" },
  { value: "clinic", label: "Clinic / Health" },
  { value: "advocacy", label: "Advocacy" },
  { value: "research", label: "Research" },
  { value: "faculty-mentor", label: "Faculty / Mentor" },
  { value: "event-program", label: "Event / Program" },
];

const FOCUSES = [
  { value: "all", label: "All Focus Areas" },
  { value: "health", label: "Health" },
  { value: "mentorship", label: "Mentorship" },
  { value: "advocacy", label: "Advocacy" },
  { value: "research", label: "Research" },
  { value: "community", label: "Community" },
];

const AFFILIATIONS = [
  { value: "all", label: "All" },
  { value: "stanford", label: "Stanford-Affiliated" },
  { value: "community", label: "Community-Based" },
];

interface DirectoryFiltersProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
}

export default function DirectoryFilters({ filters, onChange }: DirectoryFiltersProps) {
  const set = (key: keyof FilterState, value: string) =>
    onChange({ ...filters, [key]: value });

  const hasActiveFilters =
    filters.search ||
    filters.category !== "all" ||
    filters.focus !== "all" ||
    filters.affiliation !== "all";

  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="relative">
        <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
        <Input
          type="search"
          placeholder="Search organizations, clinics, programs…"
          value={filters.search}
          onChange={(e) => set("search", e.target.value)}
          className="pl-9 bg-white border-slate-200 focus-visible:ring-cardinal-500"
          aria-label="Search directory"
        />
      </div>

      {/* Filter chips */}
      <div className="flex flex-wrap gap-4">
        {/* Category */}
        <div>
          <p className="text-xs font-semibold text-slate-500 mb-1.5">Type</p>
          <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filter by type">
            {CATEGORIES.map((c) => (
              <button
                key={c.value}
                onClick={() => set("category", c.value)}
                className={cn(
                  "text-xs px-3 py-1 rounded-full border font-medium transition-colors",
                  filters.category === c.value
                    ? "bg-cardinal-600 text-white border-cardinal-600"
                    : "bg-white text-slate-600 border-slate-200 hover:border-cardinal-400 hover:text-cardinal-700"
                )}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Focus */}
        <div>
          <p className="text-xs font-semibold text-slate-500 mb-1.5">Focus</p>
          <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filter by focus">
            {FOCUSES.map((f) => (
              <button
                key={f.value}
                onClick={() => set("focus", f.value)}
                className={cn(
                  "text-xs px-3 py-1 rounded-full border font-medium transition-colors",
                  filters.focus === f.value
                    ? "bg-amber-500 text-white border-amber-500"
                    : "bg-white text-slate-600 border-slate-200 hover:border-amber-400 hover:text-amber-700"
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Affiliation */}
        <div>
          <p className="text-xs font-semibold text-slate-500 mb-1.5">Affiliation</p>
          <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filter by affiliation">
            {AFFILIATIONS.map((a) => (
              <button
                key={a.value}
                onClick={() => set("affiliation", a.value)}
                className={cn(
                  "text-xs px-3 py-1 rounded-full border font-medium transition-colors",
                  filters.affiliation === a.value
                    ? "bg-slate-700 text-white border-slate-700"
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-500 hover:text-slate-800"
                )}
              >
                {a.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Clear */}
      {hasActiveFilters && (
        <button
          onClick={() =>
            onChange({ search: "", category: "all", focus: "all", affiliation: "all" })
          }
          className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 transition-colors"
        >
          <X size={12} /> Clear all filters
        </button>
      )}
    </div>
  );
}
