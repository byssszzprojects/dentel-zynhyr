import { Link, Navigate, useParams } from "react-router-dom";
import Seo from "../components/Seo.jsx";
import Reveal from "../components/Reveal.jsx";
import FaqAccordion from "../components/FaqAccordion.jsx";
import { CtaBand, PageHero, ServiceCard } from "../components/Cards.jsx";
import { ArrowRightIcon, PhoneIcon } from "../components/Icons.jsx";
import {
  AlertIcon,
  CalendarIcon,
  CheckIcon,
  ClockIcon,
  ShieldIcon,
} from "../components/ExtraIcons.jsx";
import { clinic } from "../data/clinic.js";
import { getRelated, getService } from "../data/services/index.js";

const SECTIONS = [
  { id: "what-it-is", label: "What it is" },
  { id: "who-its-for", label: "Who it is for" },
  { id: "process", label: "The process" },
  { id: "what-to-expect", label: "What to expect" },
  { id: "benefits", label: "Benefits" },
  { id: "risks-aftercare", label: "Risks & aftercare" },
  { id: "cost", label: "Cost & insurance" },
  { id: "faqs", label: "FAQs" },
];

export default function ServicePage() {
  const { slug } = useParams();
  const service = getService(slug);

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  const related = getRelated(service);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.name,
        serviceType: service.name,
        description: service.metaDescription,
        url: `https://www.denteldental.com/services/${service.slug}`,
        areaServed: ["Austin", "South Austin", "Travis County"],
        provider: {
          "@type": "Dentist",
          name: clinic.name,
          telephone: clinic.phone,
          address: {
            "@type": "PostalAddress",
            streetAddress: `${clinic.address.street}, ${clinic.address.suite}`,
            addressLocality: clinic.address.city,
            addressRegion: clinic.address.state,
            postalCode: clinic.address.zip,
            addressCountry: clinic.address.country,
          },
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.denteldental.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://www.denteldental.com/services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.name,
            item: `https://www.denteldental.com/services/${service.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <Seo
        title={service.metaTitle}
        description={service.metaDescription}
        path={`/services/${service.slug}`}
        image={service.image}
        schema={schema}
      />

      <PageHero
        eyebrow={service.category === "core" ? "Core service" : "Special service"}
        title={service.heroTitle}
        lead={service.benefit}
        image={service.image}
        imageSrcSet={service.imageSrcSet}
        imageAlt={service.imageAlt}
        imageFocus={service.focus}
        imageWidth={service.imageWidth}
        imageHeight={service.imageHeight}
        imageRatio={
          service.imageHeight > service.imageWidth ? "portrait" : "landscape"
        }
        chips={service.chips}
        breadcrumbs={[
          { label: "Services", to: "/services" },
          { label: service.name },
        ]}
      >
        <Link to="/book" className="btn btn-primary">
          Book {service.name.toLowerCase()}
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
        <a href={clinic.phoneHref} className="btn btn-outline">
          <PhoneIcon className="h-4 w-4" />
          {clinic.phone}
        </a>
      </PageHero>

      <div className="container-page mt-12 md:mt-16">
        <div className="grid gap-12 lg:grid-cols-[250px_1fr] lg:gap-16">
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="eyebrow text-[11px]" data-anim="fade" data-anim-y="16">On this page</p>
              <nav aria-label="On this page" className="mt-3">
                {SECTIONS.map((section) => (
                  <a key={section.id} href={`#${section.id}`} className="toc-link">
                    {section.label}
                  </a>
                ))}
              </nav>

              <div className="mt-6 rounded-[20px] border border-line bg-white p-5">
                <p className="font-serif text-[19px] font-bold text-teal-deep">
                  Talk it through first?
                </p>
                <p className="mt-2 text-[14px] leading-[1.6] text-ink-soft">
                  A coordinator can answer questions before you book, including
                  costs and insurance.
                </p>
                <a href={clinic.phoneHref} className="btn btn-outline btn-sm mt-4 w-full">
                  <PhoneIcon className="h-4 w-4" />
                  Call us
                </a>
                <Link to="/contact" className="link-inline mt-3 block text-center text-[13px]">
                  Send a message
                </Link>
              </div>
            </div>
          </aside>

          <article className="max-w-[820px]">
            <Reveal>
              <p className="eyebrow" data-anim="fade" data-anim-y="16">In plain language</p>
              <h2 id="what-it-is" className="display-3 mt-3 scroll-mt-28" data-anim="heading">
                What {service.name.toLowerCase()} is
              </h2>
              <div className="mt-4 space-y-4">
                {service.whatIs.map((paragraph) => (
                  <p key={paragraph} className="body-text">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal className="mt-12">
              <section
                id="who-its-for"
                className="surface-mint scroll-mt-28 p-6 md:p-8"
                aria-labelledby="who-its-for-heading"
              >
                <p className="eyebrow" data-anim="fade" data-anim-y="16">Who it is for</p>
                <h2 id="who-its-for-heading" className="display-3 mt-2" data-anim="heading">
                  {service.whoNeeds.title}
                </h2>
                <p className="mt-3 max-w-[62ch] text-[16px] leading-[1.7] text-ink">
                  {service.whoNeeds.intro}
                </p>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {service.whoNeeds.signs.map((sign) => (
                    <li key={sign} className="flex gap-3 text-[15px] leading-[1.6] text-ink">
                      <span className="mt-0.5 grid h-6 w-6 flex-none place-items-center rounded-full bg-white text-teal-deep">
                        <CheckIcon className="h-3.5 w-3.5" />
                      </span>
                      {sign}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>

            <Reveal className="mt-12">
              <p className="eyebrow" data-anim="fade" data-anim-y="16">Step by step</p>
              <h2 id="process" className="display-3 mt-3 scroll-mt-28" data-anim="heading">
                What the process looks like
              </h2>
              <ol className="mt-6 grid gap-4 sm:grid-cols-2">
                {service.process.map((step, index) => (
                  <li
                    key={step.title}
                    className="rounded-[20px] border border-line bg-white p-5"
                  >
                    <span className="font-serif text-[22px] font-bold text-mint-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 font-sans text-[17px] font-semibold text-teal-deep">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-[15px] leading-[1.65] text-ink-soft">
                      {step.copy}
                    </p>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal className="mt-12">
              <p className="eyebrow" data-anim="fade" data-anim-y="16">Comfort &amp; timing</p>
              <h2 id="what-to-expect" className="display-3 mt-3 scroll-mt-28" data-anim="heading">
                What to expect
              </h2>
              <dl className="mt-5 divide-y divide-line overflow-hidden rounded-[20px] border border-line bg-white">
                {service.expect.map((item, index) => {
                  const Icon = [ClockIcon, ShieldIcon, CalendarIcon][index % 3];
                  return (
                    <div key={item.label} className="flex gap-4 p-5">
                      <span className="mt-0.5 grid h-9 w-9 flex-none place-items-center rounded-full bg-mint text-teal-deep">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div>
                        <dt className="text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-soft">
                          {item.label}
                        </dt>
                        <dd className="mt-1 text-[16px] leading-[1.6] text-ink">
                          {item.value}
                        </dd>
                      </div>
                    </div>
                  );
                })}
              </dl>
            </Reveal>

            <Reveal className="mt-12">
              <p className="eyebrow" data-anim="fade" data-anim-y="16">Why patients choose it</p>
              <h2 id="benefits" className="display-3 mt-3 scroll-mt-28" data-anim="heading">
                Benefits
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex gap-3 rounded-[16px] border border-line bg-white p-4 text-[15px] leading-[1.6] text-ink"
                  >
                    <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-teal" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="mt-12">
              <p className="eyebrow" data-anim="fade" data-anim-y="16">Honest expectations</p>
              <h2 id="risks-aftercare" className="display-3 mt-3 scroll-mt-28" data-anim="heading">
                Risks and aftercare
              </h2>
              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <div className="rounded-[20px] border border-line bg-white p-5">
                  <h3 className="flex items-center gap-2 font-sans text-[15px] font-semibold uppercase tracking-[0.08em] text-teal-deep">
                    <AlertIcon className="h-4 w-4" />
                    What can go wrong
                  </h3>
                  <ul className="mt-3 space-y-3">
                    {service.risks.map((risk) => (
                      <li
                        key={risk}
                        className="flex gap-2.5 text-[15px] leading-[1.65] text-ink-soft"
                      >
                        <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-teal-400" />
                        {risk}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-[20px] border border-mint-200 bg-mint/60 p-5">
                  <h3 className="flex items-center gap-2 font-sans text-[15px] font-semibold uppercase tracking-[0.08em] text-teal-deep">
                    <CheckIcon className="h-4 w-4" />
                    Looking after it
                  </h3>
                  <ul className="mt-3 space-y-3">
                    {service.aftercare.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2.5 text-[15px] leading-[1.65] text-ink"
                      >
                        <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-teal-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal className="mt-12">
              <p className="eyebrow" data-anim="fade" data-anim-y="16">Money, explained</p>
              <h2 id="cost" className="display-3 mt-3 scroll-mt-28" data-anim="heading">
                Cost, insurance and financing
              </h2>
              <div className="surface-sand mt-4 p-6">
                <p className="body-text">{service.cost}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link to="/patients/insurance" className="btn btn-outline btn-sm">
                    Insurance &amp; benefits
                  </Link>
                  <Link
                    to="/patients/payment-financing"
                    className="btn btn-outline btn-sm"
                  >
                    Payment plans
                  </Link>
                  <Link to="/patients/dental-plans" className="btn btn-outline btn-sm">
                    Membership plan
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal className="mt-12">
              <figure>
                <div className="overflow-hidden rounded-[24px] border border-line bg-cream-200">
                  <img
                    src={service.image}
                    srcSet={service.imageSrcSet}
                    sizes="(min-width: 1024px) 700px, 100vw"
                    alt={service.imageAlt}
                    loading="lazy"
                    style={service.focus ? { objectPosition: service.focus } : undefined}
                    className="aspect-[16/9] w-full object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-[12px] leading-[1.6] text-ink-soft">
                  Stock photography used for illustration. Individual results vary with
                  starting condition, oral health and home care.
                </figcaption>
              </figure>
            </Reveal>

            <Reveal className="mt-12 scroll-mt-28" id="faqs">
              <p className="eyebrow" data-anim="fade" data-anim-y="16">Questions we hear</p>
              <h2 className="display-3 mt-3" data-anim="heading" data-highlight="asked">Frequently asked</h2>
              <div className="mt-5">
                <FaqAccordion
                  items={service.faqs.map((faq) => ({
                    question: faq.q,
                    answer: faq.a,
                  }))}
                  idPrefix={`svc-${service.slug}`}
                />
              </div>
              <p className="mt-4 text-[14px] text-ink-soft">
                Still have a question?{" "}
                <Link to="/contact" className="link-inline">
                  Send it to the studio
                </Link>{" "}
                or call{" "}
                <a href={clinic.phoneHref} className="link-inline">
                  {clinic.phone}
                </a>
                .
              </p>
            </Reveal>
          </article>
        </div>
      </div>

      {related.length > 0 && (
        <section className="section">
          <div className="container-page">
            <Reveal className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="display-2" data-anim="heading" data-highlight="Related care">Related care</h2>
              <Link to="/services" className="link-arrow">
                All services
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </Reveal>
            <div
          className="mt-8 grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3"
          data-anim="stagger"
        >
              {related.map((item, index) => (
                <Reveal key={item.slug} delay={index * 60}>
                  <ServiceCard service={item} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand
        title={`Ready to book ${service.name.toLowerCase()}?`}
        copy="Choose a time online or call the studio. We will confirm what your visit includes, how long to allow and what it will cost."
      />
    </>
  );
}
