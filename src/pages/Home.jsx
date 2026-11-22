import { Link } from "react-router-dom";
import Seo from "../components/Seo.jsx";
import Reveal from "../components/Reveal.jsx";
import FaqAccordion from "../components/FaqAccordion.jsx";
import ReviewsSlider from "../components/ReviewsSlider.jsx";
import { ServiceCard, CtaBand } from "../components/Cards.jsx";
import Marquee from "../components/fx/Marquee.jsx";
import PinLines from "../components/fx/PinLines.jsx";
import ScrollText from "../components/fx/ScrollText.jsx";
import { ArrowRightIcon, PhoneIcon, PinIcon, StarIcon } from "../components/Icons.jsx";
import {
  CalendarIcon,
  CheckIcon,
  ClockIcon,
  GlobeIcon,
  ShieldIcon,
  SparkleIcon,
} from "../components/ExtraIcons.jsx";
import { clinic, homeFaqs, insurers, reviews, values } from "../data/clinic.js";
import { coreServices } from "../data/services/index.js";
import { dentists } from "../data/team.js";
import { homeHero, smileGallery } from "../data/media.js";

const seoSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Dentist",
      "@id": "https://www.denteldental.com/#clinic",
      name: clinic.name,
      description:
        "General, cosmetic and specialist dentistry for families in South Austin, Texas.",
      url: "https://www.denteldental.com",
      telephone: clinic.phone,
      email: clinic.email,
      priceRange: "$$",
      image: `https://www.denteldental.com${homeHero.image}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: `${clinic.address.street}, ${clinic.address.suite}`,
        addressLocality: clinic.address.city,
        addressRegion: clinic.address.state,
        postalCode: clinic.address.zip,
        addressCountry: clinic.address.country,
      },
      geo: { "@type": "GeoCoordinates", latitude: 30.2479, longitude: -97.7513 },
      areaServed: ["Austin", "South Austin", "Travis County"],
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
      availableLanguage: clinic.languages,
    },
    {
      "@type": "FAQPage",
      mainEntity: homeFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <Seo
        title="Dentist in South Austin, TX | Dentel Dental Studio"
        description="Calm, modern family dentistry in South Austin. Same-week appointments, three dentists, clear pricing and most insurance accepted. Book online or call (512) 555-0148."
        path="/"
        schema={seoSchema}
      />

      <section className="pb-10 pt-8 md:pb-16 md:pt-12">
        <div className="container-page grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
          <div>
            <p
              className="eyebrow"
              data-anim="fade"
              data-anim-mode="hero"
              data-anim-y="16"
              data-anim-delay="0.05"
            >
              <PinIcon className="h-3.5 w-3.5" />
              South Austin · {clinic.address.street}
            </p>
            <h1
              className="display-1 mt-4 max-w-[15ch]"
              data-anim="lines"
            >
              Dentistry that feels like a deep breath.
            </h1>
            <p
              className="lead mt-6 max-w-[48ch]"
              data-anim="fade"
              data-anim-mode="hero"
              data-anim-delay="0.1"
            >
              Calm rooms, unhurried appointments and a team that explains things
              before doing them. Family, cosmetic and specialist care under one
              roof in {clinic.city}.
            </p>

            <div
              className="mt-8 flex flex-wrap items-center gap-3"
              data-anim="fade"
              data-anim-mode="hero"
              data-anim-y="16"
              data-anim-delay="0.2"
            >
              <Link to="/book" className="btn btn-primary">
                Book an appointment
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <a href={clinic.phoneHref} className="btn btn-outline">
                <PhoneIcon className="h-4 w-4" />
                {clinic.phone}
              </a>
            </div>

            <ul
              className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-[14px] text-ink-soft"
              data-anim="fade"
              data-anim-mode="hero"
              data-anim-y="16"
              data-anim-delay="0.25"
            >
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-teal" />
                Same-week appointments
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-teal" />
                Most PPO plans accepted
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-teal" />
                Saturday hours
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/4.4] overflow-hidden rounded-[40px] rounded-tr-[130px] bg-cream-200 shadow-[0_30px_70px_#2a413c1f]">
              <img
                src={homeHero.image}
                srcSet={homeHero.srcSet}
                sizes="(min-width: 1024px) 50vw, 100vw"
                alt={homeHero.alt}
                style={{ objectPosition: homeHero.focus }}
                className="parallax-media h-full w-full object-cover"
                width={homeHero.width}
                height={homeHero.height}
                data-anim="image"
                data-anim-mode="hero"
                data-parallax
              />
            </div>

            <div
              className="absolute -bottom-5 left-2 flex items-center gap-3 rounded-[20px] border border-line bg-white px-4 py-3 shadow-[0_18px_44px_#2a413c1f] md:left-6"
              data-anim="fade"
              data-anim-mode="hero"
              data-anim-y="16"
              data-anim-delay="0.35"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-mint text-teal-deep">
                <StarIcon className="h-5 w-5 text-star" />
              </span>
              <div>
                <p className="text-[15px] font-medium leading-tight text-teal-deep">
                  {clinic.rating}/5 from {clinic.reviewCount} reviews
                </p>
                <p className="mt-0.5 text-[12px] text-ink-soft">
                  Verified patient feedback
                </p>
              </div>
            </div>

            <div
              className="absolute -right-2 top-6 rotate-[4deg] rounded-[18px] bg-mint-300 px-4 py-3 shadow-[0_10px_30px_#2a413c1f] md:right-2"
              data-anim="fade"
              data-anim-mode="hero"
              data-anim-y="16"
              data-anim-delay="0.4"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-teal-900">
                Now accepting
              </p>
              <p className="mt-0.5 font-serif text-[18px] font-bold leading-tight text-teal-900">
                New patients
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Ratings and insurance" className="border-y border-line bg-white/60">
        <div className="container-page flex flex-col gap-5 py-6 md:flex-row md:items-center md:justify-between md:gap-10">
          <div className="flex items-center gap-3">
            <div className="flex gap-0.5 text-star" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((star) => (
                <StarIcon key={star} className="h-4 w-4" />
              ))}
            </div>
            <p className="text-[14px] text-ink">
              <strong
                className="font-semibold text-teal-deep"
                data-anim="counter"
                data-counter="4.9"
                data-counter-decimals="1"
                data-counter-suffix=" out of 5"
              >
                4.9 out of 5
              </strong>{" "}
              · {clinic.reviewCount} patient reviews
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink-soft">
              In-network
            </span>
            {insurers.slice(0, 5).map((insurer) => (
              <span
                key={insurer}
                className="font-serif text-[16px] font-bold text-teal-700/70"
              >
                {insurer}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-[620px]">
              <p className="eyebrow" data-anim="fade" data-anim-y="16">What we do</p>
              <h2 className="display-2 mt-3" data-anim="heading" data-highlight="whole family">Care for the whole mouth, and the whole family.</h2>
              <ScrollText className="lead mt-4">
                Three dentists covering everyday prevention through to implants,
                aligners and surgery — so most treatment stays in one place.
              </ScrollText>
            </div>
            <Link to="/services" className="link-arrow">
              All services
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </Reveal>

          <div
            className="mt-10 grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3"
            data-anim="stagger"
          >
            {coreServices.map((service, index) => (
              <Reveal key={service.slug} delay={(index % 3) * 60} fx="tilt">
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Marquee />

      <section className="section bg-white/60">
        <div className="container-page grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal className="relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-[36px] rounded-tl-[110px] bg-cream-200">
              <img
                src="/images/cta-bg.jpg"
                alt="Warm stone and greenery in a Dentel treatment room"
                className="aspect-[4/3.6] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 right-2 rounded-[18px] border border-line bg-white px-4 py-3 shadow-[0_16px_40px_#2a413c1a]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                On the team
              </p>
              <p className="mt-0.5 font-serif text-[19px] font-bold text-teal-deep">
                {clinic.dentists} dentists · 3 languages
              </p>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <p className="eyebrow" data-anim="fade" data-anim-y="16">Why patients stay</p>
            <h2 className="display-2 mt-3" data-anim="heading" data-highlight="don’t have to brace for">A dental visit you don’t have to brace for.</h2>
            <ul className="mt-7 grid gap-5" data-anim="stagger">
              {values.map((value) => (
                <li key={value.title} className="flex gap-4">
                  <span className="mt-0.5 grid h-9 w-9 flex-none place-items-center rounded-full bg-mint text-teal-deep">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="font-sans text-[17px] font-semibold text-teal-deep">
                      {value.title}
                    </h3>
                    <p className="mt-1 max-w-[48ch] text-[15px] leading-[1.65] text-ink-soft">
                      {value.copy}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <Link to="/about" className="link-arrow mt-8">
              Meet the studio
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <PinLines />

      <section className="section">
        <div className="container-page">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow" data-anim="fade" data-anim-y="16">Your clinicians</p>
              <h2 className="display-2 mt-3" data-anim="heading" data-highlight="get to know">People you will actually get to know.</h2>
            </div>
            <Link to="/about/dentists" className="link-arrow">
              All dentists
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </Reveal>

          <div
            className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            data-anim="stagger"
          >
            {dentists.map((dentist, index) => (
              <Reveal key={dentist.slug} delay={index * 70} className="h-full" fx="tilt">
                <Link
                  to={`/about/dentists/${dentist.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[26px] border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_#2a413c14]"
                >
                  <div className="overflow-hidden bg-cream-200">
                    <img
                      src={dentist.image}
                      alt={dentist.imageAlt}
                      width={dentist.imageWidth}
                      height={dentist.imageHeight}
                      loading="lazy"
                      style={{ objectPosition: dentist.focus }}
                      className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-serif text-[21px] font-bold text-teal-deep">
                      {dentist.name}
                    </h3>
                    <p className="mt-1 text-[13px] uppercase tracking-[0.08em] text-teal-500">
                      {dentist.role}
                    </p>
                    <p className="mt-3 line-clamp-3 text-[15px] leading-[1.6] text-ink-soft">
                      {dentist.bio[0]}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-mint/50">
        <div className="container-page">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow" data-anim="fade" data-anim-y="16">Patient reviews</p>
              <h2 className="display-2 mt-3" data-anim="heading" data-highlight="their words">In their words.</h2>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-mint-300 bg-white px-4 py-2">
              <StarIcon className="h-4 w-4 text-star" />
              <p className="text-[14px] font-medium text-teal-deep">
                {clinic.rating} average · {clinic.reviewCount} reviews
              </p>
            </div>
          </Reveal>
          <ReviewsSlider reviews={reviews} />
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow" data-anim="fade" data-anim-y="16">Smile gallery</p>
              <h2 className="display-2 mt-3" data-anim="heading" data-highlight="smiles we look after">A few of the smiles we look after.</h2>
            </div>
            <Link to="/services" className="link-arrow">
              Treatments
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </Reveal>

          <div
            className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            data-anim="stagger"
          >
            {smileGallery.map((item, index) => (
              <Reveal key={item.title} delay={index * 60} fx="tilt">
                <figure className="overflow-hidden rounded-[22px] border border-line bg-white">
                  <div className="relative aspect-square overflow-hidden bg-cream-200">
                    <img
                      src={item.image}
                      alt={item.alt}
                      width={item.width}
                      height={item.height}
                      loading="lazy"
                      style={{ objectPosition: item.focus }}
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-teal-deep">
                      Smile gallery
                    </span>
                  </div>
                  <figcaption className="p-4">
                    <p className="font-serif text-[18px] font-bold text-teal-deep">
                      {item.title}
                    </p>
                    <p className="mt-1 text-[13px] text-ink-soft">{item.detail}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <p className="mt-5 max-w-[80ch] text-[12px] leading-[1.6] text-ink-soft">
            Stock photography, shown for illustration only. These are not
            photographs of Dentel patients and do not show treatment results.
            Individual results vary based on starting condition, oral health and
            home care.
          </p>
        </div>
      </section>

      <section className="pb-12">
        <div className="container-page">
          <Reveal className="surface-sand grid gap-6 p-6 md:grid-cols-[1.3fr_0.7fr] md:items-center md:p-10">
            <div>
              <p className="eyebrow" data-anim="fade" data-anim-y="16">Financing</p>
              <h2 className="display-3 mt-2" data-anim="heading" data-highlight="a way that works">
                Treatment you need, paid in a way that works.
              </h2>
              <p className="mt-3 max-w-[58ch] text-[16px] leading-[1.65] text-ink">
                Monthly payment plans, 0% promotional periods for eligible
                treatment, HSA and FSA cards, and an in-house membership for
                patients without insurance. You will see the numbers before you
                agree to anything.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row md:justify-end">
              <Link to="/patients/payment-financing" className="btn btn-primary">
                Payment options
              </Link>
              <Link to="/patients/dental-plans" className="btn btn-outline">
                Membership plans
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section pt-4">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow" data-anim="fade" data-anim-y="16">Good questions</p>
            <h2 className="display-2 mt-3" data-anim="heading" data-highlight="before booking">Everything patients ask before booking.</h2>
            <p className="lead mt-4 max-w-[42ch]" data-anim="fade">
              Still unsure? Call us — a real person answers during opening hours.
            </p>
            <div className="mt-7 space-y-3 text-[15px]">
              <a
                href={clinic.phoneHref}
                className="flex items-center gap-3 font-medium text-teal-deep"
              >
                <PhoneIcon className="h-4 w-4" />
                {clinic.phone}
              </a>
              <p className="flex items-center gap-3 text-ink-soft">
                <ClockIcon className="h-4 w-4" />
                {clinic.hoursShort}
              </p>
              <p className="flex items-center gap-3 text-ink-soft">
                <GlobeIcon className="h-4 w-4" />
                {clinic.languages.join(" · ")}
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <FaqAccordion items={homeFaqs} idPrefix="home-faq" />
            <Link to="/contact" className="link-arrow mt-6">
              Ask us something else
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white/60">
        <div className="container-page grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-14">
          <Reveal>
            <p className="eyebrow" data-anim="fade" data-anim-y="16">Find us</p>
            <h2 className="display-2 mt-3" data-anim="heading" data-highlight="parking out back">South Congress, with parking out back.</h2>
            <p className="lead mt-4 max-w-[46ch]" data-anim="fade">
              {clinic.address.street}, {clinic.address.suite} — two blocks from
              the Congress Avenue bridge, with a free covered garage on Milton
              Street and step-free access to the lobby.
            </p>

            <dl className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[18px] border border-line bg-white p-4">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                  Hours
                </dt>
                <dd className="mt-2 space-y-1 text-[14px] text-ink">
                  {clinic.hours.map((row) => (
                    <span key={row.day} className="flex justify-between gap-3">
                      <span className="text-ink-soft">{row.day}</span>
                      <span className="text-right font-medium">{row.time}</span>
                    </span>
                  ))}
                </dd>
              </div>
              <div className="rounded-[18px] border border-line bg-white p-4">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                  Contact
                </dt>
                <dd className="mt-2 space-y-2 text-[14px]">
                  <a href={clinic.phoneHref} className="block font-medium text-teal-deep">
                    {clinic.phone}
                  </a>
                  <a href={`mailto:${clinic.email}`} className="block text-ink-soft">
                    {clinic.email}
                  </a>
                  <Link to="/locations" className="link-inline text-[14px]">
                    Directions &amp; parking
                  </Link>
                </dd>
              </div>
            </dl>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/book" className="btn btn-primary">
                <CalendarIcon className="h-4 w-4" />
                Book a visit
              </Link>
              <a
                href={clinic.mapLink}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                <PinIcon className="h-4 w-4" />
                Get directions
              </a>
            </div>
          </Reveal>

          <Reveal delay={80} className="overflow-hidden rounded-[28px] border border-line bg-white">
            <iframe
              title={`Map of ${clinic.name}, ${clinic.addressLine}`}
              src={clinic.mapEmbed}
              width="100%"
              height="440"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            />
          </Reveal>
        </div>
      </section>

      <section className="section pt-14">
        <div className="container-page">
          <Reveal className="grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: ClockIcon,
                title: "Same-week openings",
                copy: "Most new-patient requests are seen within seven days, and emergency slots are held daily.",
              },
              {
                icon: ShieldIcon,
                title: "Written estimates first",
                copy: "You see your insurance portion and your portion before any treatment starts.",
              },
              {
                icon: SparkleIcon,
                title: "Comfort, not compromise",
                copy: "Numbing that works, breaks on request, and sedation for patients who need it.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-[22px] border border-line bg-white p-6">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-mint text-teal-deep">
                  <item.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-serif text-[20px] font-bold text-teal-deep">
                  {item.title}
                </h3>
                <p className="mt-2 text-[15px] leading-[1.65] text-ink-soft">{item.copy}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
