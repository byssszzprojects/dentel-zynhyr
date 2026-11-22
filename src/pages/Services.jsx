import { Link } from "react-router-dom";
import Seo from "../components/Seo.jsx";
import Reveal from "../components/Reveal.jsx";
import { CtaBand, PageHero, ServiceCard } from "../components/Cards.jsx";
import { ArrowRightIcon, PhoneIcon } from "../components/Icons.jsx";
import { AlertIcon } from "../components/ExtraIcons.jsx";
import { clinic } from "../data/clinic.js";
import { serviceGroups, servicesHero } from "../data/services/index.js";

export default function Services() {
  return (
    <>
      <Seo
        title="Dental Services in Austin, TX | Dentel Dental Studio"
        description="Explore general, cosmetic and specialist dentistry at Dentel in South Austin: exams, hygiene, emergency care, Invisalign, implants, root canals and more."
        path="/services"
      />

      <PageHero
        eyebrow="Our services"
        title="Every kind of dental care, in one calm studio."
        lead="From a routine cleaning to a full implant, most treatment happens here — with the same team, the same record and one clear plan."
        image={servicesHero.image}
        imageSrcSet={servicesHero.imageSrcSet}
        imageAlt={servicesHero.imageAlt}
        imageFocus={servicesHero.focus}
        imageWidth={servicesHero.imageWidth}
        imageHeight={servicesHero.imageHeight}
        chips={["17 treatments", "3 dentists", "Same-week appointments"]}
        breadcrumbs={[{ label: "Services" }]}
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

      {serviceGroups.map((group, groupIndex) => (
        <section
          key={group.key}
          className={`section ${groupIndex === 1 ? "bg-white/60" : ""}`}
        >
          <div className="container-page">
            <Reveal className="max-w-[640px]">
              <p className="eyebrow" data-anim="fade" data-anim-y="16">
                {group.key === "core" ? "Everyday care" : "Specialist care"}
              </p>
              <h2 className="display-2 mt-3" data-anim="heading">{group.title}</h2>
              <p className="lead mt-4" data-anim="fade">{group.intro}</p>
            </Reveal>

            <div
            className="mt-9 grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3"
            data-anim="stagger"
          >
              {group.services.map((service, index) => (
                <Reveal key={service.slug} delay={(index % 3) * 50}>
                  <ServiceCard service={service} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="pb-16">
        <div className="container-page">
          <Reveal className="grid gap-6 rounded-[28px] border border-mint-300 bg-mint p-6 md:grid-cols-[auto_1fr_auto] md:items-center md:p-8">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-white text-teal-deep">
              <AlertIcon className="h-6 w-6" />
            </span>
            <div>
              <h2 className="display-3" data-anim="heading" data-highlight="right now">In pain right now?</h2>
              <p className="mt-2 max-w-[62ch] text-[16px] leading-[1.65] text-ink">
                We hold same-day appointments every day we are open. Call and
                describe what happened — we will tell you what to do while you
                wait, and what to do if it cannot wait.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={clinic.phoneHref} className="btn btn-primary">
                <PhoneIcon className="h-4 w-4" />
                Call now
              </a>
              <Link to="/services/emergency-dentistry" className="btn btn-outline">
                Emergency care
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Not sure which appointment to book?"
        copy="Tell us what is bothering you and we will book the right length of visit with the right clinician — or point you somewhere better if that is the honest answer."
      />
    </>
  );
}
