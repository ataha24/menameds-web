// ─────────────────────────────────────────────
// Events data — Discovery Days & Expo
// Replace with CMS or database fetch when details are finalized
// ─────────────────────────────────────────────

import { EventItem, FAQ, Exhibitor } from "@/types";

export const discoveryDaysAgenda: EventItem[] = [
  {
    id: "dd-1",
    title: "Welcome & Opening Panel",
    description:
      "MENA physicians and medical students share their journeys into medicine. Q&A with students.",
    time: "9:00 AM – 10:00 AM",
    location: "Li Ka Shing Center, Stanford",
    tags: ["panel", "storytelling", "mentorship"],
  },
  {
    id: "dd-2",
    title: "Clinical Skills Workshop",
    description:
      "Hands-on simulation lab experience: suturing, physical exam basics, and point-of-care ultrasound demos.",
    time: "10:15 AM – 12:00 PM",
    location: "Clinical Skills Center",
    tags: ["hands-on", "clinical", "simulation"],
  },
  {
    id: "dd-3",
    title: "Community Health Breakout",
    description:
      "A dedicated session on MENA health disparities, the importance of representation in medicine, and how students can advocate for their communities.",
    time: "1:00 PM – 2:00 PM",
    location: "Stanford Medical School, Room TBD",
    tags: ["health equity", "MENA", "advocacy"],
  },
  {
    id: "dd-4",
    title: "Mentor Match & Networking Lunch",
    description:
      "Structured one-on-one mentoring conversations with MENA physicians, residents, and faculty at Stanford.",
    time: "12:00 PM – 1:00 PM",
    location: "Medical School Commons",
    tags: ["mentorship", "networking", "lunch"],
  },
  {
    id: "dd-5",
    title: "Research & Innovation Showcase",
    description:
      "Student and faculty presentations on MENA-focused health research, global health, and innovation projects.",
    time: "2:15 PM – 3:30 PM",
    location: "Li Ka Shing Auditorium",
    tags: ["research", "global health", "innovation"],
  },
  {
    id: "dd-6",
    title: "Closing Ceremony & Cultural Celebration",
    description:
      "Reflection, certificates, and celebration of MENA heritage in medicine. Includes cultural food and community photos.",
    time: "3:30 PM – 5:00 PM",
    location: "Medical School Courtyard",
    tags: ["cultural", "celebration", "community"],
  },
];

export const discoveryDaysFAQs: FAQ[] = [
  {
    id: "faq-dd-1",
    question: "Who can attend Discovery Days?",
    answer:
      "Discovery Days is open to high school and college students, particularly those from MENA backgrounds or with interest in MENA health equity. We welcome all curious premeds.",
  },
  {
    id: "faq-dd-2",
    question: "Is there a cost to attend?",
    answer:
      "Discovery Days is free to attend. Lunch and materials are provided. Travel scholarships may be available — contact us to inquire.",
  },
  {
    id: "faq-dd-3",
    question: "How can I volunteer or mentor?",
    answer:
      "Medical students, residents, and physicians can sign up as mentors or volunteers. Fill out the Get Involved form or email us directly at menameds@stanford.edu.",
  },
  {
    id: "faq-dd-4",
    question: "When is the next Discovery Days event?",
    answer:
      "Dates for the upcoming cycle are being finalized. Join our mailing list to be notified as soon as registration opens.",
  },
  {
    id: "faq-dd-5",
    question: "Can organizations partner with Discovery Days?",
    answer:
      "Yes. Community organizations, hospitals, and foundations can partner with MENAMeds as sponsors, co-hosts, or resource providers. Reach out via our Contact page.",
  },
];

export const expoExhibitors: Exhibitor[] = [
  {
    id: "ex-1",
    name: "Stanford MENA Health Research Initiative",
    description:
      "Research group studying MENA-specific health disparities and advocating for MENA inclusion in US Census and health data categories.",
    category: "Research",
    website: "#",
  },
  {
    id: "ex-2",
    name: "Arab Cultural & Community Center of Northern California",
    description:
      "Bay Area nonprofit offering social services, cultural programming, and community resources to Arab and MENA families.",
    category: "Community Organization",
    website: "https://acccofc.org",
  },
  {
    id: "ex-3",
    name: "National Arab American Medical Association — Bay Area",
    description:
      "Professional network of Arab American physicians providing mentorship, networking, and advocacy for MENA representation in medicine.",
    category: "Professional Association",
    website: "#",
  },
  {
    id: "ex-4",
    name: "MENAMeds Student Projects",
    description:
      "Showcase of student-led health initiatives, community outreach projects, and research from MENAMeds members at Stanford Medicine.",
    category: "Student Initiative",
  },
];

export const expoSpeakers: EventItem[] = [
  {
    id: "sp-1",
    title: "Keynote: MENA Representation in American Medicine",
    description:
      "A conversation on the history and future of MENA physicians in the United States — identity, advocacy, and the case for representation.",
    tags: ["keynote", "advocacy", "representation"],
  },
  {
    id: "sp-2",
    title: "Panel: Building Health Equity for MENA Communities",
    description:
      "Physicians, researchers, and community leaders discuss actionable strategies for improving MENA health outcomes in the Bay Area.",
    tags: ["panel", "health equity", "community"],
  },
  {
    id: "sp-3",
    title: "Fireside Chat: Navigating Medicine as a MENA Student",
    description:
      "Current Stanford medical students share candid reflections on identity, belonging, and community in medical school.",
    tags: ["student panel", "identity", "mentorship"],
  },
];

export const expoFAQs: FAQ[] = [
  {
    id: "faq-ex-1",
    question: "Who should attend the Expo?",
    answer:
      "The Expo is designed for medical students, premeds, faculty, community organizations, healthcare professionals, and anyone interested in MENA health and representation.",
  },
  {
    id: "faq-ex-2",
    question: "Can my organization exhibit at the Expo?",
    answer:
      "Yes. We welcome Stanford-affiliated and community organizations, research groups, and health initiatives. Submit your organization through the form on this page.",
  },
  {
    id: "faq-ex-3",
    question: "Is registration required?",
    answer:
      "Yes, registration is free but space is limited. Registration details will be posted as the event date approaches.",
  },
  {
    id: "faq-ex-4",
    question: "Will there be food?",
    answer:
      "Yes — we always celebrate with food. The Expo will feature Middle Eastern and North African food from the Bay Area community.",
  },
];
