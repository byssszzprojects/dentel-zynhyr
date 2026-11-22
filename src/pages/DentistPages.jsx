import { Link, Navigate, useParams } from "react-router-dom";
import Seo from "../components/Seo.jsx";
import Reveal from "../components/Reveal.jsx";
import { Breadcrumbs, CtaBand, PageHero, ServiceCard } from "../components/Cards.jsx";
import { ArrowRightIcon, PhoneIcon } from "../components/Icons.jsx";
import { CheckIcon, GlobeIcon } from "../components/ExtraIcons.jsx";
import { clinic } from "../data/clinic.js";
import { getDentist, dentists } from "../data/team.js";
import { getService } from "../data/services/index.js";

export function Dentists() {
  return (
    <>
      <Seo
        title="Meet Our Dentists in Austin, TX | Dentel Dental Studio"
        description="Meet the dentists at Dentel in South Austin — general and cosmetic dentistry, family and pediatric care, periodontics and hygiene, all under one roof."
        path="/about/dentists"
      />

      <PageHero
        eyebrow="About · Our dentists"
        title="Three dentists, one standard of care."
        lead="General, family and periodontal expertise in one studio, on one record system, with a monthly case-review meeting. You can ask for a particular dentist when you book."
        chips={["Same-week availability", "3 languages", "Saturday appointments"]}
        breadcrumbs={[
          { label: "About", to: "/about" },
          { label: "Our dentists" },
        ]}
      >
        <Link to="/book" className="btn btn-primary">
          Book an appointment
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
        <a href={clinic.phoneHref} className="btn btn-outline">
          <PhoneIcon className="h-4 w-4" />
          {clinic.phone}
        </a>
      </PageHero>

      <section className="section pt-10">
        <div className="container-page">
          <div
          className="grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3"
          data-anim="stagger"
        >
            {dentists.map((dentist, index) => (
              <Reveal key={dentist.slug} delay={(index % 3) * 60} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-[26px] border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_48px_#2a413c14]">
                  <Link
                    to={`/about/dentists/${dentist.slug}`}
                    className="block overflow-hidden bg-cream-200"
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <img
                      src={dentist.image}
                      alt={dentist.imageAlt}
                      width={dentist.imageWidth}
                      height={dentist.imageHeight}
                      loading="lazy"
                      style={{ objectPosition: dentist.focus }}
                      className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col p-5">
                    <h2 className="font-serif text-[22px] font-bold leading-tight text-teal-deep">
                      <Link to={`/about/dentists/${dentist.slug}`}>{dentist.name}</Link>
                    </h2>
                    <p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.1em] text-teal-500">
                      {dentist.role}
                    </p>
                    <p className="mt-3 line-clamp-3 text-[14px] leading-[1.65] text-ink-soft">
                      {dentist.bio[0]}
                    </p>
                    <div className="mt-auto flex items-center justify-between gap-3 pt-4">
                      <Link
                        to={`/about/dentists/${dentist.slug}`}
                        className="link-arrow text-[12px]"
                      >
                        Read profile
                        <ArrowRightIcon className="h-3.5 w-3.5" />
                      </Link>
                      <span className="text-[12px] text-ink-soft">
                        {dentist.years} yrs
                      </span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <p className="mt-8 max-w-[70ch] text-[13px] leading-[1.7] text-ink-soft">
            Our hygienists, assistants and front-desk team work alongside these
            dentists. Ask for a particular clinician when you book and we will do
            our best to match the appointment.
          </p>
        </div>
      </section>

      <CtaBand
        title="Ask for the right clinician"
        copy="Tell us what you need — a nervous-patient visit, a second opinion, a child's first check-up — and we will match you with the dentist best suited to it."
      />
    </>
  );
}

export function DentistProfile() {
  const { slug } = useParams();
  const dentist = getDentist(slug);

  if (!dentist) return <Navigate to="/404" replace />;

  const others = dentists.filter((item) => item.slug !== dentist.slug);
  const related = ["dental-exams", "hygiene-cleaning", "veneers"]
    .map(getService)
    .filter(Boolean);

  return (
    <>
      <Seo
        title={`${dentist.name}, ${dentist.credentials} | Dentist in Austin`}
        description={`${dentist.name} practises ${dentist.role.toLowerCase()} at Dentel Dental Studio in South Austin. ${dentist.bio[0]}`}
        path={`/about/dentists/${dentist.slug}`}
        image={dentist.image}
        schema={{
          "@context": "https://schema.org",
          "@type": "Physician",
          name: `${dentist.name}, ${dentist.credentials}`,
          medicalSpecialty: "Dentistry",
          image: `https://www.denteldental.com${dentist.image}`,
          worksFor: { "@type": "Dentist", name: clinic.name },
          address: {
            "@type": "PostalAddress",
            streetAddress: `${clinic.address.street}, ${clinic.address.suite}`,
            addressLocality: clinic.address.city,
            addressRegion: clinic.address.state,
            postalCode: clinic.address.zip,
          },
          telephone: clinic.phone,
        }}
      />

      <section className="pt-6 md:pt-10">
        <div className="container-page">
          <Breadcrumbs
            items={[
              { label: "About", to: "/about" },
              { label: "Our dentists", to: "/about/dentists" },
              { label: dentist.name },
            ]}
          />

          <div className="mt-6 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            <div className="overflow-hidden rounded-[32px] rounded-tr-[110px] bg-cream-200">
              <img
                src={dentist.image}
                alt={dentist.imageAlt}
                width={dentist.imageWidth}
                height={dentist.imageHeight}
                style={{ objectPosition: dentist.focus }}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>

            <div>
              <p className="eyebrow" data-anim="fade" data-anim-y="16">{dentist.role}</p>
              <h1 className="display-1 mt-3 text-[clamp(34px,5vw,54px)]" data-anim="lines">
                {dentist.name}
              </h1>
              <p className="mt-2 text-[15px] font-medium uppercase tracking-[0.08em] text-teal-500">
                {dentist.credentials} · {dentist.years} years in practice
              </p>

              <div className="mt-5 space-y-4">
                {dentist.bio.map((paragraph) => (
                  <p key={paragraph} className="body-text">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {dentist.specialties.map((item) => (
                  <span key={item} className="chip chip-mint">
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                    Education
                  </p>
                  <ul className="mt-2 space-y-2 text-[15px] leading-[1.6] text-ink">
                    {dentist.education.map((item) => (
                      <li key={item} className="flex gap-2">
                        <CheckIcon className="mt-1 h-3.5 w-3.5 flex-none text-teal" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                    Languages
                  </p>
                  <p className="mt-2 flex items-center gap-2 text-[15px] text-ink">
                    <GlobeIcon className="h-4 w-4 text-teal" />
                    {dentist.languages.join(", ")}
                  </p>
                  <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                    Memberships
                  </p>
                  <p className="mt-2 text-[15px] leading-[1.6] text-ink">
                    {dentist.memberships.join("; ")}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/book" className="btn btn-primary">
                  Book with {dentist.name.split(" ").slice(0, 2).join(" ")}
                </Link>
                <a href={clinic.phoneHref} className="btn btn-outline">
                  <PhoneIcon className="h-4 w-4" />
                  {clinic.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="display-2" data-anim="heading">Care {dentist.name.split(" ")[0]} provides</h2>
            <Link to="/services" className="link-arrow">
              All services
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
          <div
          className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          data-anim="stagger"
        >
            {related.map((service, index) => (
              <Reveal key={service.slug} delay={index * 50}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white/60 pt-10">
        <div className="container-page">
          <h2 className="display-2" data-anim="heading" data-highlight="at the studio">Also at the studio</h2>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {others.map((person) => (
              <Link
                key={person.slug}
                to={`/about/dentists/${person.slug}`}
                className="group flex items-center gap-4 rounded-[20px] border border-line bg-white p-4 transition-shadow duration-300 hover:shadow-[0_16px_36px_#2a413c14]"
              >
                <img
                  src={person.image}
                  alt={person.imageAlt}
                  width={person.imageWidth}
                  height={person.imageHeight}
                  loading="lazy"
                  style={{ objectPosition: person.focus }}
                  className="h-16 w-16 flex-none rounded-full bg-cream-200 object-cover"
                />
                <div>
                  <p className="font-serif text-[18px] font-bold leading-tight text-teal-deep">
                    {person.name}
                  </p>
                  <p className="mt-1 text-[13px] text-ink-soft">{person.role}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
