// Non-service page imagery. Each slot is defined once here so Home, the list
// pages and the detail pages all read the same source.
//
// The WebP renditions in public/images are the files the site serves.
// Photographer credits live in ./image-credits.json. These are licensed stock
// photographs, not photographs of Dentel patients.

export const homeHero = {
  image: "/images/home-hero-clinic.webp",
  srcSet:
    "/images/home-hero-clinic-800.webp 800w, /images/home-hero-clinic.webp 1600w",
  alt: "A bright, modern dental treatment room with wood cabinetry and natural light",
  focus: "50% 50%",
  width: 1600,
  height: 1068,
};

export const aboutHero = {
  image: "/images/about-consultation.webp",
  srcSet:
    "/images/about-consultation-800.webp 800w, /images/about-consultation.webp 1600w",
  alt: "A dentist smiling while talking with a patient during a consultation",
  focus: "50% 40%",
  width: 1600,
  height: 1149,
};

export const technologyHero = {
  image: "/images/technology-xray.webp",
  srcSet:
    "/images/technology-xray-800.webp 800w, /images/technology-xray.webp 1600w",
  alt: "A dental panoramic X-ray displayed on a monitor in the clinic",
  focus: "50% 50%",
  width: 1600,
  height: 1067,
};

export const careersHero = {
  image: "/images/careers-clinic.webp",
  srcSet:
    "/images/careers-clinic-800.webp 800w, /images/careers-clinic.webp 1600w",
  alt: "Two dental professionals standing in a bright, modern treatment room",
  focus: "50% 45%",
  width: 1600,
  height: 1068,
};

export const smileGallery = [
  {
    title: "Everyday smiles",
    detail: "Care that keeps natural teeth healthy",
    image: "/images/smile-gallery-1.webp",
    alt: "Close-up of an older woman smiling naturally",
    focus: "50% 38%",
    width: 1200,
    height: 800,
  },
  {
    title: "All ages",
    detail: "First visits through to lifelong check-ups",
    image: "/images/smile-gallery-2.webp",
    alt: "Close-up of a young woman with curly hair smiling",
    focus: "50% 35%",
    width: 1200,
    height: 676,
  },
  {
    title: "Calm visits",
    detail: "Everything explained before it starts",
    image: "/images/smile-gallery-3.webp",
    alt: "Close-up of a bearded man laughing in a bright room",
    focus: "50% 32%",
    width: 1200,
    height: 802,
  },
];

const portrait = (image, alt, width, height, focus) => ({
  image,
  alt,
  focus,
  width,
  height,
  ratio: height > width ? "portrait" : "landscape",
});

export const patientPageMedia = {
  insurance: portrait(
    "/images/patient-1.webp",
    "A smiling patient in a light top",
    1200,
    1020,
    "50% 40%",
  ),
  financing: portrait(
    "/images/patient-2.webp",
    "A smiling patient with curly hair and hoop earrings",
    1200,
    800,
    "52% 30%",
  ),
  plans: portrait(
    "/images/patient-3.webp",
    "A smiling older man with a white beard in a grey shirt",
    1200,
    1800,
    "50% 28%",
  ),
};
