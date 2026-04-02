// ─────────────────────────────────────────────
// Directory seed data
// Replace with Supabase / Airtable fetch in production
// ─────────────────────────────────────────────

import { DirectoryEntry } from "@/types";

export const directoryEntries: DirectoryEntry[] = [
  {
    id: "1",
    title: "MENAMeds at Stanford Medicine",
    description:
      "A student-led group within SUMMA focused on MENA health equity, mentorship, and community engagement. Hosts educational events, cultural programming, and community health outreach.",
    category: "student-org",
    focus: ["health", "mentorship", "community"],
    tags: ["Stanford", "medical students", "MENA", "SUMMA"],
    city: "Stanford",
    affiliation: "stanford",
    audience: ["medical-students"],
    email: "menameds@stanford.edu",
    featured: true,
    imagePlaceholder: "#1B4965",
  },
  {
    id: "2",
    title: "SUMMA — Stanford University Muslim Medical Association",
    description:
      "A Stanford Medical School organization supporting Muslim and MENA medical students through community, spiritual support, clinical mentorship, and advocacy for underserved patient populations.",
    category: "student-org",
    focus: ["mentorship", "community", "advocacy"],
    tags: ["Stanford", "Muslim", "medical students", "mentorship"],
    city: "Stanford",
    affiliation: "stanford",
    audience: ["medical-students"],
    website: "https://summa.stanford.edu",
    featured: true,
    imagePlaceholder: "#2D6A4F",
  },
  {
    id: "4",
    title: "Arab Cultural & Community Center of Northern California",
    description:
      "Bay Area nonprofit providing social services, cultural programming, and community support for Arab and MENA immigrants and families across the Bay Area.",
    category: "community-org",
    focus: ["community", "health", "advocacy"],
    tags: ["Bay Area", "Arab", "nonprofit", "social services", "immigrants"],
    city: "San Francisco",
    affiliation: "community",
    audience: ["community"],
    website: "https://acccofc.org",
    featured: true,
    imagePlaceholder: "#B5838D",
  },
  {
    id: "6",
    title: "API Wellness Center",
    description:
      "San Francisco-based community health center offering physical and mental health services to Asian and Pacific Islander communities, including Arabic-speaking and MENA patients.",
    category: "clinic",
    focus: ["health", "community"],
    tags: ["community health", "San Francisco", "mental health", "immigrant"],
    city: "San Francisco",
    affiliation: "community",
    audience: ["community"],
    website: "https://apiwellness.org",
    featured: false,
    imagePlaceholder: "#3D5A80",
  },
  {
    id: "9",
    title: "Islamic Networks Group (ING)",
    description:
      "Non-profit organization promoting understanding of Muslims through education and interfaith dialogue. Offers presentations on Muslim patient care for healthcare providers.",
    category: "community-org",
    focus: ["community", "advocacy"],
    tags: ["Muslim", "education", "Bay Area", "healthcare sensitivity"],
    city: "San Jose",
    affiliation: "community",
    audience: ["community", "all"],
    website: "https://ing.org",
    featured: false,
    imagePlaceholder: "#2A6F97",
  },
  {
    id: "11",
    title: "Palo Alto Medical Foundation — Community Health",
    description:
      "Part of the Sutter Health network, PAMF offers community health initiatives including immigrant health services and multilingual care coordination in the South Bay.",
    category: "clinic",
    focus: ["health", "community"],
    tags: ["Palo Alto", "community health", "multilingual", "South Bay"],
    city: "Palo Alto",
    affiliation: "community",
    audience: ["community", "all"],
    website: "https://pamf.org",
    featured: false,
    imagePlaceholder: "#344E41",
  },

  // ── Volunteer opportunities sourced from "MENA-Related Volunteer Opportunities
  //    in the San Francisco Bay Area" (April 2026) ──────────────────────────────

  {
    id: "13",
    title: "Jewish Family & Community Services East Bay (JFCS East Bay)",
    description:
      "Refugee and immigrant services organization serving the East Bay, including Afghan and MENA newcomers. Volunteer roles include ESL tutoring, pro bono asylum support, career coaching, housing outreach, transportation, and translation/interpretation (Dari/Farsi listed among service languages).",
    category: "community-org",
    focus: ["community", "health", "mentorship"],
    tags: ["refugee resettlement", "East Bay", "Afghan", "ESL", "asylum", "translation", "Dari", "Farsi", "volunteer"],
    city: "Oakland",
    affiliation: "community",
    audience: ["community", "all"],
    website: "https://jfcs-eastbay.org/get-involved/volunteer-opportunities/",
    featured: false,
    imagePlaceholder: "#2563EB",
  },
  {
    id: "14",
    title: "International Rescue Committee (IRC) — Oakland",
    description:
      "IRC Oakland runs an explicit Afghan Program with volunteer and intern opportunities. Roles include Afghan Program Support (Dari/Pashto helpful) and general refugee resettlement support for MENA and other newcomer communities.",
    category: "community-org",
    focus: ["community", "advocacy"],
    tags: ["IRC", "Afghan", "refugee", "East Bay", "Dari", "Pashto", "resettlement", "volunteer"],
    city: "Oakland",
    affiliation: "community",
    audience: ["community", "all"],
    website: "https://www.rescue.org/volunteer-opportunities/oakland-ca",
    featured: false,
    imagePlaceholder: "#0369A1",
  },
  {
    id: "15",
    title: "International Rescue Committee (IRC) — San Jose",
    description:
      "IRC San Jose offers structured volunteer and intern opportunities in youth tutoring, housing support, immigration services, digital literacy, employment coaching, and the BRIDGE youth mentoring program — all serving refugee and MENA newcomer communities in the South Bay.",
    category: "community-org",
    focus: ["community", "health", "mentorship"],
    tags: ["IRC", "refugee", "South Bay", "tutoring", "immigration", "housing", "youth", "volunteer"],
    city: "San Jose",
    affiliation: "community",
    audience: ["community", "all"],
    website: "https://www.rescue.org/se/volunteer-opportunities/san-jose-ca",
    featured: false,
    imagePlaceholder: "#075985",
  },
  {
    id: "16",
    title: "Respond Crisis Translation",
    description:
      "Volunteer-powered translation and interpretation organization supporting asylum seekers, refugees, and immigrants. Seeks Arabic, Dari, Farsi, Pashto, and other language volunteers for crisis interpretation, document translation, and pro bono language access work.",
    category: "advocacy",
    focus: ["advocacy", "community", "health"],
    tags: ["translation", "interpretation", "Arabic", "Dari", "Farsi", "Pashto", "asylum", "language access", "remote", "Bay Area"],
    city: "San Francisco",
    affiliation: "community",
    audience: ["community", "all"],
    website: "https://respondcrisistranslation.org/en/get-involved",
    featured: true,
    imagePlaceholder: "#7C3AED",
  },
  {
    id: "17",
    title: "Alameda County Newcomers Welcome — Volunteer & Resource Directory",
    description:
      "County-maintained directory of volunteer and donation opportunities supporting newcomers — including Afghan, Arab, and MENA immigrant families — across Alameda County. A hub for finding vetted resettlement, legal, tutoring, and housing support roles.",
    category: "community-org",
    focus: ["community", "advocacy"],
    tags: ["Alameda County", "newcomers", "refugees", "Afghan", "Arab", "directory", "East Bay", "volunteer"],
    city: "Oakland",
    affiliation: "community",
    audience: ["community", "all"],
    website: "https://newcomerswelcome.acgov.org/resource-directory/ncw-category/volunteer-donation-opportunities/",
    featured: false,
    imagePlaceholder: "#065F46",
  },
];
