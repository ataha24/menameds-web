// Map placeholder — replace with Mapbox, Google Maps, or Leaflet integration
// when ready. Each pin should correspond to a DirectoryEntry with city/coords.

import { MapPin } from "lucide-react";

export default function MapPlaceholder() {
  return (
    <div
      className="relative w-full h-80 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 flex flex-col items-center justify-center gap-3"
      role="img"
      aria-label="Interactive map placeholder — coming soon"
    >
      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      {/* Placeholder pins */}
      {[
        { top: "30%", left: "40%" },
        { top: "45%", left: "52%" },
        { top: "55%", left: "38%" },
        { top: "38%", left: "60%" },
        { top: "62%", left: "55%" },
      ].map((pos, i) => (
        <div
          key={i}
          className="absolute w-5 h-5 bg-cardinal-500 rounded-full border-2 border-white shadow flex items-center justify-center"
          style={{ top: pos.top, left: pos.left }}
          aria-hidden="true"
        >
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </div>
      ))}

      <div className="relative z-10 text-center">
        <MapPin size={28} className="text-cardinal-600 mx-auto mb-2" />
        <p className="text-sm font-semibold text-slate-700">Interactive Map</p>
        <p className="text-xs text-slate-500 max-w-xs px-4">
          Coming soon — Mapbox integration will show Bay Area MENA health organizations, clinics, and community resources.
        </p>
      </div>
    </div>
  );
}
