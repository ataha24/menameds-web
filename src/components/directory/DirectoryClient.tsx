"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { LayoutGrid, List, PlusCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { directoryEntries } from "@/data/directory";
import DirectoryCard from "@/components/directory/DirectoryCard";
import DirectoryFilters, { FilterState } from "@/components/directory/DirectoryFilters";
import MapPlaceholder from "@/components/directory/MapPlaceholder";
import FadeIn from "@/components/shared/FadeIn";

type View = "grid" | "map";

const DEFAULT_FILTERS: FilterState = {
  search: "",
  category: "all",
  focus: "all",
  affiliation: "all",
};

export default function DirectoryClient() {
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);
  const [view, setView] = useState<View>("grid");

  const results = useMemo(() => {
    return directoryEntries.filter((entry) => {
      if (
        filters.search &&
        !entry.title.toLowerCase().includes(filters.search.toLowerCase()) &&
        !entry.description.toLowerCase().includes(filters.search.toLowerCase()) &&
        !entry.tags.some((t) => t.toLowerCase().includes(filters.search.toLowerCase()))
      ) {
        return false;
      }
      if (filters.category !== "all" && entry.category !== filters.category) return false;
      if (filters.focus !== "all" && !entry.focus.includes(filters.focus as never)) return false;
      if (
        filters.affiliation !== "all" &&
        entry.affiliation !== filters.affiliation &&
        entry.affiliation !== "both"
      ) {
        return false;
      }
      return true;
    });
  }, [filters]);

  return (
    <div className="pt-16">
      {/* Page header */}
      <div className="bg-slate-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-400 mb-3">
              Resource Directory
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
              MENA Health & Community Directory
            </h1>
            <p className="text-slate-400 max-w-2xl leading-relaxed">
              A searchable directory of organizations, clinics, mentors, advocacy groups, and community resources serving MENA communities in the Bay Area and at Stanford.
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Filters */}
        <FadeIn>
          <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-6 mb-8">
            <DirectoryFilters filters={filters} onChange={setFilters} />
          </div>
        </FadeIn>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <p className="text-sm text-slate-500">
            {results.length === directoryEntries.length
              ? `Showing all ${results.length} entries`
              : `${results.length} of ${directoryEntries.length} entries`}
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setView("grid")}
              aria-label="Grid view"
              aria-pressed={view === "grid"}
              className={`p-2 rounded-md transition-colors ${
                view === "grid"
                  ? "bg-teal-50 text-teal-600"
                  : "text-slate-400 hover:text-slate-600"
              }`}
            >
              <LayoutGrid size={16} />
            </button>
            <button
              onClick={() => setView("map")}
              aria-label="Map view"
              aria-pressed={view === "map"}
              className={`p-2 rounded-md transition-colors ${
                view === "map"
                  ? "bg-teal-50 text-teal-600"
                  : "text-slate-400 hover:text-slate-600"
              }`}
            >
              <List size={16} />
            </button>
          </div>
        </div>

        {/* Map view */}
        {view === "map" && (
          <FadeIn>
            <div className="mb-8">
              <MapPlaceholder />
            </div>
          </FadeIn>
        )}

        {/* Results */}
        <AnimatePresence mode="wait">
          {results.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20 text-slate-400"
            >
              <p className="text-lg font-medium text-slate-600">No entries match your filters.</p>
              <p className="text-sm mt-2">Try clearing some filters or broadening your search.</p>
              <button
                onClick={() => setFilters(DEFAULT_FILTERS)}
                className="mt-4 text-sm text-teal-600 hover:text-teal-800 font-medium transition-colors"
              >
                Clear all filters
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {results.map((entry, i) => (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                >
                  <DirectoryCard entry={entry} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Suggest entry */}
        <FadeIn>
          <div className="mt-14 bg-teal-50 border border-teal-100 rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="p-3 bg-teal-600 rounded-xl">
              <PlusCircle size={20} className="text-white" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-slate-900">Know a resource we&apos;re missing?</p>
              <p className="text-sm text-slate-500 mt-1">
                Help us grow the directory. Suggest a MENA health organization, mentor, clinic, community resource, or initiative.
              </p>
            </div>
            <Link
              href="/get-involved#suggest"
              className="shrink-0 inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-teal-600 text-white font-semibold text-sm hover:bg-teal-700 transition-colors"
            >
              Suggest an Entry
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
