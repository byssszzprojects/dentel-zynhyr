export const dentists = [
  {
    slug: "amara-osei",
    name: "Dr. Amara Osei",
    role: "General & Cosmetic Dentistry",
    credentials: "DDS",
    image: "/assets/doctors/dr-amara-osei.webp",
    imageAlt: "Dr. Amara Osei, General and Cosmetic Dentist",
    focus: "50% 2%",
    imageWidth: 1200,
    imageHeight: 1800,
    specialties: ["Cosmetic dentistry", "Veneers", "Anxious patients"],
    years: 14,
    education: [
      "DDS, UT Health San Antonio School of Dentistry",
      "Residency, General Practice — Seton Family of Hospitals",
    ],
    languages: ["English", "Twi"],
    memberships: ["American Dental Association", "Academy of General Dentistry"],
    bio: [
      "Amara founded Dentel in 2014 after a decade in community dentistry, with a simple goal: a practice where nobody feels lectured. She still sees patients four days a week and leads our cosmetic and veneer cases.",
      "Her clinical interest is conservative cosmetic work — improving shape and shade while keeping as much natural tooth as possible. She is also the clinician most of our nervous patients ask for by name.",
    ],
  },
  {
    slug: "daniel-reyes",
    name: "Dr. Daniel Reyes",
    role: "Family & Pediatric Dentistry",
    credentials: "DDS",
    image: "/assets/doctors/dr-daniel-reyes.webp",
    imageAlt: "Dr. Daniel Reyes, Family and Pediatric Dentist",
    focus: "50% 14%",
    imageWidth: 1200,
    imageHeight: 1800,
    specialties: ["Children's dentistry", "Sealants", "Family care"],
    years: 11,
    education: [
      "DDS, Texas A&M College of Dentistry",
      "Certificate in Pediatric Dentistry — Baylor College of Dentistry",
    ],
    languages: ["English", "Spanish"],
    memberships: ["American Academy of Pediatric Dentistry"],
    bio: [
      "Daniel looks after our youngest patients and the families who come with them. His appointments start with a conversation at eye level, not a chart.",
      "He is known for turning first visits into a game of show-and-tell, and for being honest with parents about which treatments a child actually needs now versus what can wait.",
    ],
  },
  {
    slug: "linh-tran",
    name: "Dr. Linh Tran",
    role: "Periodontics & Hygiene",
    credentials: "DMD",
    image: "/assets/doctors/dr-linh-tran.webp",
    imageAlt: "Dr. Linh Tran, Periodontist and Hygiene Lead",
    focus: "50% 12%",
    imageWidth: 1200,
    imageHeight: 1800,
    specialties: ["Gum disease", "Deep cleaning", "Maintenance care"],
    years: 12,
    education: [
      "DMD, Tufts University School of Dental Medicine",
      "Certificate in Periodontology — University of Texas Health Science Center",
    ],
    languages: ["English", "Vietnamese"],
    memberships: ["American Academy of Periodontology"],
    bio: [
      "Linh leads our hygiene programme and treats periodontal disease, from early bleeding gums to long-term maintenance after stabilisation.",
      "She measures before she recommends. If a deep cleaning is needed, she will show you the pocket chart and explain what the numbers mean — and what happens if you wait.",
    ],
  },
];

export const leadership = [
  {
    name: "Elena Voss",
    role: "Practice Director",
    initials: "EV",
    bio: "Elena runs scheduling, insurance and the day-to-day experience of the studio. She has spent 15 years in dental operations and believes a calm front desk sets the tone for the whole visit.",
  },
  {
    name: "Tomás Herrera",
    role: "Patient Experience Lead",
    initials: "TH",
    bio: "Tomás trains the team on communication, accessibility and de-escalating anxiety. He is usually the first person to greet you and the one who follows up after surgery.",
  },
  {
    name: "Dr. Amara Osei",
    role: "Clinical Director",
    image: "/assets/doctors/dr-amara-osei.webp",
    imageAlt: "Dr. Amara Osei, Clinical Director",
    focus: "50% 2%",
    bio: "Amara oversees clinical standards, case review and continuing education, and chairs our monthly treatment-planning meeting.",
  },
];

export function getDentist(slug) {
  return dentists.find((dentist) => dentist.slug === slug);
}
