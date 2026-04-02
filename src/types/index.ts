// ─────────────────────────────────────────────
// Core type definitions for MENAMeds website
// Replace data sources with Supabase / Airtable / CMS later
// ─────────────────────────────────────────────

export type DirectoryCategory =
  | "student-org"
  | "faculty-mentor"
  | "community-org"
  | "clinic"
  | "advocacy"
  | "research"
  | "event-program";

export type DirectoryAudience =
  | "medical-students"
  | "premeds"
  | "community"
  | "all";

export type DirectoryFocus =
  | "health"
  | "mentorship"
  | "advocacy"
  | "research"
  | "community";

export interface DirectoryEntry {
  id: string;
  title: string;
  description: string;
  category: DirectoryCategory;
  focus: DirectoryFocus[];
  tags: string[];
  city: string;
  affiliation: "stanford" | "community" | "both";
  audience: DirectoryAudience[];
  website?: string;
  email?: string;
  featured: boolean;
  imagePlaceholder?: string; // color hex for placeholder bg
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  year?: string;
  program?: string;
  bio: string;
  linkedin?: string;
  email?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface EventItem {
  id: string;
  title: string;
  description: string;
  time?: string;
  location?: string;
  tags: string[];
}

export interface Exhibitor {
  id: string;
  name: string;
  description: string;
  category: string;
  website?: string;
}

export interface SiteStats {
  organizations: number;
  students: number;
  partners: number;
  cities: number;
}
