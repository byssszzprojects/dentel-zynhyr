import { useEffect } from "react";
import { clinic } from "../data/clinic.js";
import { homeHero } from "../data/media.js";

const SITE_URL = "https://www.denteldental.com";

function upsertMeta(attr, key, content) {
  if (!content) return;
  let tag = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertLink(rel, href) {
  let tag = document.head.querySelector(`link[rel="${rel}"]`);
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", rel);
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", href);
}

export default function Seo({
  title,
  description,
  path = "/",
  image = homeHero.image,
  schema,
}) {
  const schemaJson = schema
    ? JSON.stringify(schema)
    : JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Dentist",
        name: clinic.name,
        url: SITE_URL,
        telephone: clinic.phone,
        email: clinic.email,
        image: `${SITE_URL}${homeHero.image}`,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: `${clinic.address.street}, ${clinic.address.suite}`,
          addressLocality: clinic.address.city,
          addressRegion: clinic.address.state,
          postalCode: clinic.address.zip,
          addressCountry: clinic.address.country,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
            opens: "08:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Friday",
            opens: "08:00",
            closes: "17:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "09:00",
            closes: "15:00",
          },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: clinic.rating,
          reviewCount: clinic.reviewCount,
        },
      });

  useEffect(() => {
    const fullTitle = title.includes(clinic.shortName)
      ? title
      : `${title} | ${clinic.name}`;
    document.title = fullTitle;
    const url = `${SITE_URL}${path}`;

    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", `${SITE_URL}${image}`);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertLink("canonical", url);

    const schemaScript = document.createElement("script");
    schemaScript.type = "application/ld+json";
    schemaScript.dataset.pageSchema = "true";
    schemaScript.textContent = schemaJson;
    document.head.appendChild(schemaScript);

    return () => {
      if (schemaScript.parentNode) schemaScript.parentNode.removeChild(schemaScript);
    };
  }, [title, description, path, image, schemaJson]);

  return null;
}
