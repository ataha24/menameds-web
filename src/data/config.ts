// ─────────────────────────────────────────────
// Site-wide configuration — edit here to update stats, CTAs, nav
// ─────────────────────────────────────────────

import { SiteStats } from "@/types";

export const siteConfig = {
  name: "MENAMeds",
  tagline: "MENA Health, Mentorship & Community at Stanford Medicine",
  description:
    "MENAMeds is a student group within SUMMA at Stanford Medicine dedicated to advancing MENA representation in healthcare, building community bridges, and supporting the next generation of MENA physicians and health advocates.",
  email: "menameds@stanford.edu",
  socials: {
    instagram: "https://instagram.com/menameds",
    linkedin: "",
    twitter: "",
  },
};

export const stats: SiteStats = {
  organizations: 40,
  students: 120,
  partners: 15,
  cities: 8,
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Discovery Days", href: "/discovery-days" },
  { label: "Expo", href: "/expo" },
  { label: "Directory", href: "/directory" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Contact", href: "/contact" },
];
