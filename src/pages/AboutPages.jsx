import { Link } from "react-router-dom";
import Seo from "../components/Seo.jsx";
import Reveal from "../components/Reveal.jsx";
import { CtaBand, PageHero } from "../components/Cards.jsx";
import { ArrowRightIcon, PhoneIcon, StarIcon } from "../components/Icons.jsx";
import {
  CheckIcon,
  HeartIcon,
  ShieldIcon,
  SparkleIcon,
} from "../components/ExtraIcons.jsx";
import { clinic, technology, values } from "../data/clinic.js";
import { dentists, getDentist, leadership } from "../data/team.js";
import { aboutHero, technologyHero } from "../data/media.js";

const timeline = [
  {
    year: "2014",
    title: "Two chairs on South Congress",
    copy: "Amara Osei took over a small practice with two treatment rooms and a waiting list of nervous patients.",
  },
  {
    year: "2017",
    title: "Hygiene-led prevention",
    copy: "We moved to 60-minute hygiene appointments and stopped double-booking, which changed the pace of the whole day.",
  },
  {
    year: "2020",
    title: "Digital scanning and same-visit crowns",
    copy: "Intraoral scanning replaced impression trays, and an in-house mill let us finish many crowns in one visit.",
  },
  {
    year: "2023",
    title: "Specialists under one roof",
    copy: "Periodontics and hygiene joined general and family care, so most treatment stayed in one place.",
  },
  {
    year: "2026",
    title: "Still independent",
    copy: "No private-equity ownership, no production targets. Our clinical decisions are made by the dentists who treat you.",
  },
];

export function About() {
  return (
    <>
      <Seo
        title="About Dentel Dental Studio | South Austin Dentists"
        description="Meet the independent dental studio on South Congress in Austin: three dentists, unhurried appointments and a prevention-first philosophy since 2014."
        path="/about"
      />

      <PageHero
        eyebrow="About us"
        title="A dental studio built around calm."
        lead="Independent, prevention-first and deliberately unhurried. We opened in 2014 with two chairs; today three dentists work in the same building, on the same record, with the same manners."
        image={aboutHero.image}
        imageSrcSet={aboutHero.srcSet}
        imageAlt={aboutHero.alt}
        imageFocus={aboutHero.focus}
        imageWidth={aboutHero.width}
        imageHeight={aboutHero.height}
        chips={["Independent since 2014", "3 dentists", "3 languages"]}
        breadcrumbs={[{ label: "About" }]}
      >
        <Link to="/book" className="btn btn-primary">
          Book a visit
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
        <Link to="/about/dentists" className="btn btn-outline">
          Meet the dentists
        </Link>
      </PageHero>

      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow" data-anim="fade" data-anim-y="16">Our story</p>
            <h2 className="display-2 mt-3" data-anim="heading" data-highlight="shortest version">The shortest version.</h2>
            <div className="mt-5 space-y-4">
              <p className="body-text">
                Dentel started because a dentist was tired of watching people
                apologise for their teeth. Amara Osei had spent a decade in
                community clinics where appointments ran fifteen minutes late and
                nobody had time to explain anything.
              </p>
              <p className="body-text">
                The plan was not complicated: longer appointments, fewer patients
                per day, and a rule that no treatment starts without a written
                estimate and a conversation you can actually follow.
              </p>
              <p className="body-text">
                Twelve years later we are three dentists, a hygiene team and a
                front desk that knows most patients by name. We are still
                independent, still on South Congress, and still not owned by a
                chain.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80} className="grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-[24px] bg-cream-200 sm:col-span-2">
              <img
                src="/images/cta-bg.jpg"
                alt="Warm stone and greenery in a Dentel treatment room"
                className="aspect-[16/9] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="rounded-[22px] border border-line bg-white p-5">
              <p className="font-serif text-[30px] font-bold leading-none text-teal-deep">
                {clinic.established}
              </p>
              <p className="mt-1 text-[13px] uppercase tracking-[0.1em] text-ink-soft">
                Independent since
              </p>
            </div>
            <div className="rounded-[22px] border border-line bg-white p-5">
              <p className="flex items-center gap-2 font-serif text-[30px] font-bold leading-none text-teal-deep">
                {clinic.rating} <StarIcon className="h-5 w-5 text-star" />
              </p>
              <p className="mt-1 text-[13px] uppercase tracking-[0.1em] text-ink-soft">
                From {clinic.reviewCount} reviews
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white/60">
        <div className="container-page">
          <Reveal className="max-w-[620px]">
            <p className="eyebrow" data-anim="fade" data-anim-y="16">What we believe</p>
            <h2 className="display-2 mt-3" data-anim="heading" data-highlight="do not bend">Four rules we do not bend.</h2>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2" data-anim="stagger">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={(index % 2) * 60}>
                <div className="h-full rounded-[22px] border border-line bg-white p-6">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-mint text-teal-deep">
                    {index === 0 ? (
                      <HeartIcon className="h-5 w-5" />
                    ) : index === 1 ? (
                      <SparkleIcon className="h-5 w-5" />
                    ) : index === 2 ? (
                      <ShieldIcon className="h-5 w-5" />
                    ) : (
                      <CheckIcon className="h-5 w-5" />
                    )}
                  </span>
                  <h3 className="mt-4 font-serif text-[21px] font-bold text-teal-deep">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-[1.7] text-ink-soft">
                    {value.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow" data-anim="fade" data-anim-y="16">Milestones</p>
            <h2 className="display-2 mt-3" data-anim="heading" data-highlight="got here">How we got here.</h2>
            <p className="lead mt-4 max-w-[38ch]" data-anim="fade">
              Slow, deliberate growth — mostly funded by the chairs in the room.
            </p>
          </Reveal>
          <ol className="space-y-6">
            {timeline.map((item, index) => (
              <Reveal key={item.year} delay={index * 50}>
                <li className="relative border-l border-line pl-6">
                  <span className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-cream bg-teal-deep" />
                  <p className="font-serif text-[22px] font-bold text-teal-deep">
                    {item.year}
                  </p>
                  <h3 className="mt-1 font-sans text-[17px] font-semibold text-teal-deep">
                    {item.title}
                  </h3>
                  <p className="mt-1 max-w-[56ch] text-[15px] leading-[1.7] text-ink-soft">
                    {item.copy}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-mint/40">
        <div className="container-page">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow" data-anim="fade" data-anim-y="16">The people</p>
              <h2 className="display-2 mt-3" data-anim="heading" data-highlight="one standard">Three dentists, one standard.</h2>
            </div>
            <Link to="/about/dentists" className="link-arrow">
              All profiles
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </Reveal>
          <div
            className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            data-anim="stagger"
          >
            {dentists.map((dentist) => (
              <Reveal key={dentist.slug}>
                <Link
                  to={`/about/dentists/${dentist.slug}`}
                  className="group flex items-center gap-4 rounded-[20px] border border-line bg-white p-4 transition-shadow duration-300 hover:shadow-[0_16px_36px_#2a413c14]"
                >
                  <img
                    src={dentist.image}
                    alt={dentist.imageAlt}
                    width={dentist.imageWidth}
                    height={dentist.imageHeight}
                    loading="lazy"
                    style={{ objectPosition: dentist.focus }}
                    className="h-16 w-16 flex-none rounded-full bg-cream-200 object-cover"
                  />
                  <div>
                    <p className="font-serif text-[19px] font-bold leading-tight text-teal-deep">
                      {dentist.name}
                    </p>
                    <p className="mt-1 text-[13px] text-ink-soft">{dentist.role}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Come and see the place."
        copy="Book a new-patient exam, or ask for a five-minute walkthrough if you are deciding whether we are the right fit."
      />
    </>
  );
}

export function Leadership() {
  const clinicalDirector = getDentist("amara-osei");
  return (
    <>
      <Seo
        title="Leadership Team | Dentel Dental Studio Austin"
        description="Meet the people who run Dentel Dental Studio: clinical leadership, practice operations and patient experience in South Austin."
        path="/about/leadership"
      />

      <PageHero
        eyebrow="About · Leadership"
        title="The people responsible for the standard."
        lead="A small leadership team with a simple mandate: protect clinical judgment from commercial pressure, and keep the experience calm from the first phone call."
        image={clinicalDirector.image}
        imageAlt={clinicalDirector.imageAlt}
        imageFocus={clinicalDirector.focus}
        imageRatio="portrait"
        chips={["Clinician-led", "Independent ownership", "Monthly case review"]}
        breadcrumbs={[
          { label: "About", to: "/about" },
          { label: "Leadership" },
        ]}
      />

      <section className="section">
        <div className="container-page grid gap-5 md:grid-cols-3" data-anim="stagger">
          {leadership.map((person, index) => (
            <Reveal key={person.name} delay={index * 70}>
              <article className="h-full overflow-hidden rounded-[24px] border border-line bg-white">
                {person.image ? (
                  <img
                    src={person.image}
                    alt={person.imageAlt}
                    width={1200}
                    height={1800}
                    loading="lazy"
                    style={{ objectPosition: person.focus }}
                    className="aspect-[4/5] w-full bg-cream-200 object-cover"
                  />
                ) : (
                  <div
                    aria-hidden="true"
                    className="grid aspect-[4/5] w-full place-items-center bg-mint text-teal-deep"
                  >
                    <span className="font-serif text-[52px] font-bold leading-none">
                      {person.initials}
                    </span>
                  </div>
                )}
                <div className="p-5">
                  <h2 className="font-serif text-[22px] font-bold text-teal-deep">
                    {person.name}
                  </h2>
                  <p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.1em] text-teal-500">
                    {person.role}
                  </p>
                  <p className="mt-3 text-[15px] leading-[1.7] text-ink-soft">
                    {person.bio}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section bg-white/60">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow" data-anim="fade" data-anim-y="16">How we govern care</p>
            <h2 className="display-2 mt-3" data-anim="heading" data-highlight="stay clinical">Clinical decisions stay clinical.</h2>
            <p className="body-text mt-4">
              Every treatment plan above a set value is reviewed by a second
              clinician before it is presented. We do not pay associates on
              production, and no one at the studio earns a bonus for selling
              cosmetic work.
            </p>
            <p className="body-text mt-3">
              Complaints go to the clinical director and are logged, discussed at
              the monthly team meeting, and answered in writing within five
              working days.
            </p>
          </Reveal>
          <Reveal delay={80} className="surface p-6 md:p-8">
            <p className="eyebrow" data-anim="fade" data-anim-y="16">Accountability</p>
            <ul className="mt-4 space-y-4">
              {[
                "Second-clinician review for treatment plans over $1,500.",
                "Annual clinical audit of radiographs and record keeping.",
                "Documented infection-control training for every team member.",
                "Patient feedback reviewed monthly, including negative comments.",
                "Written response to any formal complaint within five working days.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-[15px] leading-[1.65] text-ink">
                  <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-teal" />
                  {item}
                </li>
              ))}
            </ul>
            <a href={clinic.phoneHref} className="btn btn-outline btn-sm mt-6">
              <PhoneIcon className="h-4 w-4" />
              Contact the practice director
            </a>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

export function Technology() {
  return (
    <>
      <Seo
        title="Dental Technology in Austin | Digital X-Rays & 3D Scans"
        description="Digital X-rays, intraoral 3D scanning, same-visit crowns and guided implant planning at Dentel Dental Studio in South Austin."
        path="/about/technology"
      />

      <PageHero
        eyebrow="About · Innovation & technology"
        title="Better tools, fewer uncomfortable minutes."
        lead="Technology is only worth it when it makes a visit shorter, safer or easier to understand. These are the tools we actually use every day — and why."
        image={technologyHero.image}
        imageSrcSet={technologyHero.srcSet}
        imageAlt={technologyHero.alt}
        imageFocus={technologyHero.focus}
        imageWidth={technologyHero.width}
        imageHeight={technologyHero.height}
        chips={["Low-dose digital X-rays", "3D intraoral scanning", "Same-visit crowns"]}
        breadcrumbs={[
          { label: "About", to: "/about" },
          { label: "Technology" },
        ]}
      />

      <section className="section">
        <div className="container-page">
          <div className="grid gap-5 sm:grid-cols-2" data-anim="stagger">
            {technology.map((item, index) => (
              <Reveal key={item.title} delay={(index % 2) * 60}>
                <div className="h-full rounded-[24px] border border-line bg-white p-6 md:p-7">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-mint text-teal-deep">
                    <SparkleIcon className="h-5 w-5" />
                  </span>
                  <h2 className="mt-4 font-serif text-[22px] font-bold text-teal-deep">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-[15px] leading-[1.7] text-ink-soft">
                    {item.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 grid gap-6 rounded-[26px] border border-line bg-white p-6 md:grid-cols-[1.1fr_0.9fr] md:p-9">
            <div>
              <p className="eyebrow" data-anim="fade" data-anim-y="16">Radiation, in context</p>
              <h2 className="display-3 mt-2" data-anim="heading" data-highlight="not no dose">Lower dose, not no dose.</h2>
              <p className="mt-3 text-[15px] leading-[1.7] text-ink-soft">
                Digital sensors need far less radiation than film, and we image
                only what is clinically useful. A set of bitewing X-rays is
                comparable to a short flight or a few hours of background
                radiation. We still avoid unnecessary imaging, especially for
                children and pregnant patients.
              </p>
            </div>
            <div className="surface-mint p-5">
              <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-teal-500">
                Safety practices
              </p>
              <ul className="mt-3 space-y-2 text-[14px] leading-[1.6] text-ink">
                <li>Lead aprons and thyroid collars on request</li>
                <li>Weekly processor and sensor checks</li>
                <li>Autoclave validation logged daily</li>
                <li>Single-use items where sterility matters</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Curious what your scan shows?"
        copy="Ask to see your own images at your next visit. We will walk you through what we are looking at and what it means."
      />
    </>
  );
}
