import type { Metadata } from "next";
import DirectoryClient from "@/components/directory/DirectoryClient";

export const metadata: Metadata = {
  title: "Directory",
  description:
    "Searchable directory of MENA health organizations, clinics, mentors, advocacy groups, and community resources in the Bay Area and Stanford.",
};

export default function DirectoryPage() {
  return <DirectoryClient />;
}
