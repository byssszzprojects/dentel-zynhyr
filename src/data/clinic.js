export const clinic = {
  name: "Dentel Dental Studio",
  shortName: "Dentel",
  tagline: "Dentistry that feels like a deep breath.",
  city: "Austin",
  state: "TX",
  phone: "(512) 555-0148",
  phoneHref: "tel:+15125550148",
  email: "hello@denteldental.com",
  address: {
    street: "1508 South Congress Avenue",
    suite: "Suite 200",
    city: "Austin",
    state: "TX",
    zip: "78704",
    country: "US",
  },
  addressLine: "1508 South Congress Avenue, Suite 200, Austin, TX 78704",
  hours: [
    { day: "Monday – Thursday", time: "8:00am – 6:00pm" },
    { day: "Friday", time: "8:00am – 5:00pm" },
    { day: "Saturday", time: "9:00am – 3:00pm" },
    { day: "Sunday", time: "Closed" },
  ],
  hoursShort: "Mon–Thu 8–6 · Fri 8–5 · Sat 9–3",
  mapEmbed:
    "https://www.google.com/maps?q=1508%20South%20Congress%20Avenue%20Austin%20TX%2078704&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=1508+South+Congress+Avenue+Austin+TX+78704",
  dentists: 3,
  languages: ["English", "Spanish", "Vietnamese"],
  established: 2014,
  rating: 4.9,
  reviewCount: 312,
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    google: "https://google.com/maps",
  },
  emergencyNote:
    "Same-day emergency visits, seven days a week. Call and we will make room for you.",
};

export const insurers = [
  "Delta Dental",
  "Cigna",
  "Aetna",
  "MetLife",
  "Guardian",
  "United Concordia",
  "Blue Cross Blue Shield",
  "Humana",
];

export const reviews = [
  {
    name: "Maya R.",
    detail: "Patient since 2019",
    rating: 5,
    quote:
      "I put off the dentist for almost four years. Nobody made me feel bad about it — they just made a plan and got started. I've kept every cleaning since.",
  },
  {
    name: "Daniel K.",
    detail: "Family dental care",
    rating: 5,
    quote:
      "We book all four of us back to back on a Saturday morning and are out in under two hours. My seven-year-old actually asks when we're going back.",
  },
  {
    name: "Priya S.",
    detail: "Invisalign patient",
    rating: 5,
    quote:
      "The 3D scan took about five minutes and I could see the projected movement on screen. Fourteen months later my retainers fit and my bite feels normal.",
  },
  {
    name: "Luis M.",
    detail: "Emergency visit",
    rating: 5,
    quote:
      "Chipped a molar on a Friday night. I called Saturday at 9am, was in the chair by 10:30, and walked out with a temporary crown and a clear estimate.",
  },
  {
    name: "Hannah T.",
    detail: "Hygiene & cleaning",
    rating: 5,
    quote:
      "As someone with sensitive gums, the cleaning was genuinely comfortable. They explained what they were doing before every step and checked in constantly.",
  },
  {
    name: "Greg W.",
    detail: "Implant patient",
    rating: 5,
    quote:
      "The consultation covered what an implant would involve, what it would cost, and what the alternatives were. No pressure, no upselling — I booked two weeks later.",
  },
];

export const trustPoints = [
  { value: "4.9/5", label: `From ${312} verified patient reviews` },
  { value: "6", label: "Dentists across general, ortho and surgical care" },
  { value: "10 yrs", label: "Caring for South Austin families" },
  { value: "3", label: "Languages spoken: English, Spanish, Vietnamese" },
];

export const values = [
  {
    title: "Plain-language dentistry",
    copy: "You will always know what we found, what we recommend, what it costs, and what happens if you wait. No jargon, no pressure.",
  },
  {
    title: "Comfort as standard",
    copy: "Numbing that works, breaks when you need them, noise-reducing headphones and a team trained to move at your pace.",
  },
  {
    title: "One studio, one record",
    copy: "Hygiene, restorative, ortho and surgical care under one roof, so your plan and your history stay in one place.",
  },
  {
    title: "Transparent pricing",
    copy: "Written estimates before treatment, insurance checked in advance, and an in-house plan for patients without coverage.",
  },
];

export const homeFaqs = [
  {
    question: "Are you accepting new patients?",
    answer:
      "Yes. We welcome new patients of every age, including families looking to book several people in one visit. New-patient appointments usually include a full exam, X-rays, a cleaning and a written treatment plan.",
  },
  {
    question: "Do you take my insurance?",
    answer:
      "We are in-network with most major PPO plans, including Delta Dental, Cigna, Aetna, MetLife and Guardian. If we are out-of-network with your plan we can still file on your behalf, and we will confirm your benefits before treatment so there are no surprises.",
  },
  {
    question: "What if I don't have insurance?",
    answer:
      "Our in-house membership plan covers two cleanings, exams, X-rays and a discount on other treatment for one annual fee. It is not insurance, but it makes routine care predictable. You can read the details on our dental plans page.",
  },
  {
    question: "How quickly can I be seen for an emergency?",
    answer:
      "We hold same-day slots for emergencies seven days a week. Call us and describe what happened; if we cannot see you immediately we will tell you what to do in the meantime and when to go to urgent care instead.",
  },
  {
    question: "How often should I have a cleaning?",
    answer:
      "Most adults do well with a cleaning and exam every six months. If you have gum disease, a history of cavities, or wear braces or aligners, we may recommend a shorter interval. We will explain why if we suggest something different from six months.",
  },
  {
    question: "Where do I park?",
    answer:
      "There is a free covered garage behind the building on Milton Street, with step-free access to our lobby. Rideshare drop-off is on South Congress, and we are a short walk from the Butler Road bus stops.",
  },
];

export const technology = [
  {
    title: "Digital X-rays",
    copy: "Low-dose sensors that show the image on screen in seconds, with far less radiation than traditional film and no chemical processing.",
  },
  {
    title: "Intraoral 3D scanning",
    copy: "A small wand maps your teeth without trays of impression material — used for aligners, crowns, retainers and implant planning.",
  },
  {
    title: "Same-visit crowns",
    copy: "For eligible teeth, we design and mill a ceramic crown in the studio so you can leave with a finished restoration instead of a temporary.",
  },
  {
    title: "Guided implant planning",
    copy: "CBCT imaging and digital planning let us place implants with a surgical guide, which can mean smaller incisions and a more predictable fit.",
  },
];

export const membershipPlans = [
  {
    name: "Essentials",
    price: "$29",
    period: "per month",
    audience: "For adults without dental insurance",
    includes: [
      "Two exams and cleanings per year",
      "Annual X-rays",
      "Oral cancer screening",
      "10% off restorative treatment",
    ],
  },
  {
    name: "Complete",
    price: "$49",
    period: "per month",
    audience: "For adults who expect more than routine care",
    includes: [
      "Everything in Essentials",
      "One emergency visit per year",
      "20% off restorative treatment",
      "20% off whitening and orthodontics",
    ],
  },
  {
    name: "Family",
    price: "$119",
    period: "per month",
    audience: "Two adults and up to three children",
    includes: [
      "Cleanings and exams for everyone",
      "Annual X-rays for everyone",
      "15% off restorative treatment",
      "Priority Saturday appointments",
    ],
  },
];

export const financingOptions = [
  {
    title: "Monthly payment plans",
    copy: "Treatment over $500 can be split into fixed monthly payments through our financing partner, subject to approval. We will show the monthly amount before you commit.",
  },
  {
    title: "0% interest promo periods",
    copy: "Eligible treatment may qualify for a promotional period with no interest if paid in full. Terms depend on your application and are explained in writing.",
  },
  {
    title: "HSA and FSA",
    copy: "We accept HSA and FSA cards for treatment and for membership fees. Ask us for an itemised receipt if your plan needs one.",
  },
  {
    title: "In-house membership",
    copy: "No insurance? Our membership plan spreads routine care across the year and discounts other treatment, with no deductibles or waiting periods.",
  },
];

export const careers = [
  {
    title: "Registered Dental Hygienist",
    type: "Full-time · Austin, TX",
    summary:
      "Four-day week, 60-minute hygiene appointments, and a hygiene-led recall program. Texas license and local anesthesia certification required.",
  },
  {
    title: "Dental Assistant",
    type: "Full-time · Austin, TX",
    summary:
      "Chairside support across general and surgical care. We will support your radiology certification if you are early in your career.",
  },
  {
    title: "Patient Experience Coordinator",
    type: "Full-time · Austin, TX",
    summary:
      "Front-desk scheduling, insurance verification and the first welcome. Warm, organised and comfortable with detail.",
  },
  {
    title: "Associate Dentist",
    type: "Part-time · Austin, TX",
    summary:
      "Two to three days a week in general dentistry, with mentoring and full clinical autonomy. Texas license required.",
  },
];
