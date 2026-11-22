import { coreServicesA } from "./core-a.js";
import { coreServicesB } from "./core-b.js";
import { coreServicesC } from "./core-c.js";
import { specialServicesA } from "./special-a.js";
import { specialServicesB } from "./special-b.js";
import { specialServicesC } from "./special-c.js";
import { clinic } from "../clinic.js";

export function buildSrcSet(image) {
  if (!image) return undefined;
  return `${image} 1600w, ${image.replace(/\.webp$/, "-800.webp")} 800w`;
}

const withImageSrcSet = (service) => ({
  ...service,
  imageSrcSet: buildSrcSet(service.image),
});

export const coreServices = [...coreServicesA, ...coreServicesB, ...coreServicesC].map(
  withImageSrcSet
);
export const specialServices = [
  ...specialServicesA,
  ...specialServicesB,
  ...specialServicesC,
].map(withImageSrcSet);
export const allServices = [...coreServices, ...specialServices];

export const servicesHero = {
  image: "/assets/services/services-hero.webp",
  imageAlt: "A calm, modern dental treatment room with a black chair",
  focus: "50% 50%",
  imageWidth: 1600,
  imageHeight: 1067,
  imageSrcSet: buildSrcSet("/assets/services/services-hero.webp"),
};

export const serviceGroups = [
  {
    key: "core",
    title: "Core services",
    intro:
      "The everyday care that keeps a mouth healthy — exams, hygiene, repairs and the cosmetic options that build on them.",
    services: coreServices,
  },
  {
    key: "special",
    title: "Special services",
    intro:
      "More involved treatment, delivered in-house or coordinated with trusted specialists when that is the safer choice.",
    services: specialServices,
  },
];

export function getService(slug) {
  return allServices.find((service) => service.slug === slug);
}

export function getRelated(service) {
  return (service.related || [])
    .map((slug) => getService(slug))
    .filter(Boolean);
}

export function serviceUrl(slug) {
  return `/services/${slug}`;
}

export const emergencyService = getService("emergency-dentistry");

export const serviceFaqs = allServices.flatMap((service) =>
  service.faqs.map((faq) => ({ ...faq, service: service.name }))
);

export const clinicFacts = {
  name: clinic.name,
  city: clinic.city,
  state: clinic.state,
};
