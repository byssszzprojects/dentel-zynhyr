import { Link } from "react-router-dom";
import Seo from "../components/Seo.jsx";
import Reveal from "../components/Reveal.jsx";
import FaqAccordion from "../components/FaqAccordion.jsx";
import { CtaBand, PageHero } from "../components/Cards.jsx";
import { ArrowRightIcon, PhoneIcon, PinIcon } from "../components/Icons.jsx";
import { CalendarIcon, ClockIcon, GlobeIcon } from "../components/ExtraIcons.jsx";
import { clinic } from "../data/clinic.js";
import { dentists } from "../data/team.js";

const locationFaqs = [
  {
    question: "Where exactly are you?",
    answer:
      "We are on the second floor at 1508 South Congress Avenue, just south of the river between Milton and Elizabeth Street. Look for the green awning; the elevator and stairs are through the courtyard entrance.",
  },
  {
    question: "Is parking free?",
    answer:
      "Yes. There is a free covered garage behind the building on Milton Street, with step-free access to our lobby. Street parking on South Congress is metered and often full on weekends.",
  },
  {
    question: "How do I get there by bus or bike?",
    answer:
      "CapMetro routes 10 and 20 stop within a three-minute walk, and there are bike racks in the courtyard. Rideshare drop-off is on South Congress at Milton.",
  },
  {
    question: "Is the studio accessible?",
    answer:
      "The lobby, elevator, treatment rooms and restrooms are step-free. We have accessible parking in the garage and can arrange extra time or support if you need it — just tell us when booking.",
  },
  {
    question: "Do you see patients from outside Austin?",
    answer:
      "Regularly. Patients travel from Kyle, Buda, Round Rock and San Marcos for specialist care. If you are coming from further away, tell us so we can group appointments into one day.",
  },
];

export default function Locations() {
  return (
    <>
      <Seo
        title="Dentist on South Congress, Austin | Location & Hours"
        description="Visit Dentel Dental Studio at 1508 South Congress Avenue, Suite 200, Austin, TX 78704. Free garage parking, step-free access and Saturday hours."
        path="/locations"
      />

      <PageHero
        eyebrow="Find us"
        title="South Congress, Austin."
        lead="Two blocks from the Congress Avenue bridge, with free covered parking and step-free access from the garage to the chair."
        chips={["Free garage parking", "Step-free access", "Saturday hours"]}
        breadcrumbs={[{ label: "Locations" }]}
      >
        <a href={clinic.phoneHref} className="btn btn-primary">
          <PhoneIcon className="h-4 w-4" />
          Call {clinic.phone}
        </a>
        <a
          href={clinic.mapLink}
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline"
        >
          <PinIcon className="h-4 w-4" />
          Get directions
        </a>
      </PageHero>

      <section className="section">
        <div className="container-page grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <Reveal className="overflow-hidden rounded-[28px] border border-line bg-white">
            <iframe
              title={`Map of ${clinic.name} at ${clinic.addressLine}`}
              src={clinic.mapEmbed}
              width="100%"
              height="480"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            />
          </Reveal>

          <Reveal delay={80}>
            <div className="surface p-6 md:p-8">
              <p className="eyebrow" data-anim="fade" data-anim-y="16">The studio</p>
              <h2 className="display-3 mt-2" data-anim="heading">{clinic.name}</h2>
              <address className="mt-3 not-italic text-[16px] leading-[1.7] text-ink">
                {clinic.address.street}
                <br />
                {clinic.address.suite}
                <br />
                {clinic.address.city}, {clinic.address.state} {clinic.address.zip}
              </address>

              <div className="mt-5 flex flex-wrap gap-4 text-[15px]">
                <a
                  href={clinic.phoneHref}
                  className="flex items-center gap-2 font-medium text-teal-deep"
                >
                  <PhoneIcon className="h-4 w-4" />
                  {clinic.phone}
                </a>
                <a
                  href={`mailto:${clinic.email}`}
                  className="text-ink-soft hover:text-teal-deep"
                >
                  {clinic.email}
                </a>
              </div>

              <dl className="mt-6 border-t border-line pt-5">
                <dt className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-soft">
                  <ClockIcon className="h-4 w-4" />
                  Opening hours
                </dt>
                <dd className="mt-3 space-y-2 text-[15px]">
                  {clinic.hours.map((row) => (
                    <div key={row.day} className="flex justify-between gap-4">
                      <span className="text-ink-soft">{row.day}</span>
                      <span className="font-medium text-teal-deep">{row.time}</span>
                    </div>
                  ))}
                </dd>
              </dl>

              <div className="mt-6 rounded-[16px] bg-mint p-4 text-[14px] leading-[1.6] text-ink">
                <p className="flex items-start gap-2">
                  <GlobeIcon className="mt-0.5 h-4 w-4 flex-none text-teal-deep" />
                  We speak {clinic.languages.join(", ")}. Ask for an interpreter
                  when booking if that helps.
                </p>
              </div>

              <Link to="/book" className="btn btn-primary mt-6 w-full">
                <CalendarIcon className="h-4 w-4" />
                Book at this studio
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white/60">
        <div className="container-page grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Parking",
              copy: "Free covered garage on Milton Street, behind the building. No validation needed — drive in, park, take the elevator to level two.",
            },
            {
              title: "Directions",
              copy: "From downtown, head south on Congress Avenue. We are on the east side, just past Milton Street. From I-35, exit Riverside and follow the river west.",
            },
            {
              title: "Arriving with kids",
              copy: "There is space for a stroller in the waiting area, a changing table in the accessible restroom, and books in the treatment rooms.",
            },
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 60}>
              <div className="h-full rounded-[22px] border border-line bg-white p-6">
                <h3 className="font-serif text-[21px] font-bold text-teal-deep">
                  {item.title}
                </h3>
                <p className="mt-2 text-[15px] leading-[1.7] text-ink-soft">
                  {item.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow" data-anim="fade" data-anim-y="16">Who you will meet</p>
              <h2 className="display-2 mt-3" data-anim="heading" data-highlight="South Congress">Your team at South Congress.</h2>
            </div>
            <Link to="/about/dentists" className="link-arrow">
              All dentists
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </Reveal>

          <div
          className="mt-9 grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3"
          data-anim="stagger"
        >
            {dentists.map((dentist, index) => (
              <Reveal key={dentist.slug} delay={index * 50} className="h-full">
                <Link
                  to={`/about/dentists/${dentist.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-line bg-white transition-shadow duration-300 hover:shadow-[0_18px_40px_#2a413c14]"
                >
                  <img
                    src={dentist.image}
                    alt={dentist.imageAlt}
                    width={dentist.imageWidth}
                    height={dentist.imageHeight}
                    loading="lazy"
                    style={{ objectPosition: dentist.focus }}
                    className="aspect-[4/5] w-full bg-cream-200 object-cover"
                  />
                  <div className="flex flex-1 flex-col p-4">
                    <p className="font-serif text-[18px] font-bold text-teal-deep">
                      {dentist.name}
                    </p>
                    <p className="mt-1 text-[13px] uppercase tracking-[0.06em] text-teal-500">
                      {dentist.role}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-mint/40">
        <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow" data-anim="fade" data-anim-y="16">Getting here</p>
            <h2 className="display-2 mt-3" data-anim="heading" data-highlight="about the visit">Questions about the visit.</h2>
            <p className="lead mt-4 max-w-[40ch]" data-anim="fade">
              If something is not covered here, call the studio and we will talk
              it through.
            </p>
            <a href={clinic.phoneHref} className="btn btn-outline mt-6">
              <PhoneIcon className="h-4 w-4" />
              {clinic.phone}
            </a>
          </Reveal>
          <Reveal delay={80}>
            <FaqAccordion items={locationFaqs} idPrefix="location-faq" />
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Book at the South Congress studio"
        copy="Same-week openings for most treatments, and same-day slots for emergencies. Free parking, step-free access and Saturday appointments."
      />
    </>
  );
}
