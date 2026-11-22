import { useState } from "react";
import Seo from "../components/Seo.jsx";
import Reveal from "../components/Reveal.jsx";
import { CtaBand, PageHero } from "../components/Cards.jsx";
import { CheckIcon } from "../components/ExtraIcons.jsx";
import { ArrowRightIcon, PhoneIcon } from "../components/Icons.jsx";
import { careers, clinic } from "../data/clinic.js";
import { careersHero } from "../data/media.js";

const benefits = [
  "Four-day clinical weeks for most roles, with a predictable finishing time",
  "60-minute hygiene appointments and no double-booking",
  "Paid continuing education and licensure renewal",
  "Medical, dental and vision coverage, plus a 401(k) match",
  "Six weeks paid parental leave",
  "A clinical budget for each dentist, no production quotas",
];

export default function Careers() {
  const [role, setRole] = useState(careers[0].title);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (!data.get("name") || !data.get("email")) {
      setError("Please add your name and email so we can reply.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <>
      <Seo
        title="Dental Careers in Austin, TX | Work at Dentel"
        description="Join an independent, clinician-led dental studio in South Austin. Open roles for hygienists, assistants, coordinators and associate dentists."
        path="/careers"
      />

      <PageHero
        eyebrow="Careers"
        title="A practice that protects your time."
        lead="No production targets, longer appointments and a team that leaves on time. If that sounds like the dentistry you trained for, we would like to meet you."
        image={careersHero.image}
        imageSrcSet={careersHero.srcSet}
        imageAlt={careersHero.alt}
        imageFocus={careersHero.focus}
        imageWidth={careersHero.width}
        imageHeight={careersHero.height}
        chips={["Independent studio", "4-day weeks", "Paid CE"]}
        breadcrumbs={[{ label: "Careers" }]}
      >
        <a href="#open-roles" className="btn btn-primary">
          See open roles
          <ArrowRightIcon className="h-4 w-4" />
        </a>
      </PageHero>

      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow" data-anim="fade" data-anim-y="16">Why here</p>
            <h2 className="display-2 mt-3" data-anim="heading" data-highlight="people stay for">The parts people stay for.</h2>
            <p className="lead mt-4" data-anim="fade">
              Our hygienists average five years at the studio. That is not an
              accident — it is the schedule.
            </p>
            <ul className="mt-6 space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3 text-[15px] leading-[1.7] text-ink">
                  <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-teal" />
                  {benefit}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={80} className="overflow-hidden rounded-[28px] bg-cream-200">
            <img
              src="/images/cta-bg.jpg"
              alt="Warm stone and greenery inside the Dentel studio"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      <section id="open-roles" className="section bg-white/60 scroll-mt-28">
        <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow" data-anim="fade" data-anim-y="16">Open roles</p>
            <h2 className="display-2 mt-3" data-anim="heading" data-highlight="Currently hiring">Currently hiring.</h2>
            <p className="lead mt-4 max-w-[38ch]" data-anim="fade">
              We read every application ourselves — no automated screening. If a
              role is not listed, you can still introduce yourself.
            </p>
            <p className="mt-5 flex items-center gap-2 text-[14px] text-ink-soft">
              <PhoneIcon className="h-4 w-4" />
              Questions? Call {clinic.phone}
            </p>
          </Reveal>

          <Reveal delay={80} className="space-y-3">
            {careers.map((item) => (
              <div
                key={item.title}
                className="rounded-[20px] border border-line bg-white p-5"
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h3 className="font-serif text-[21px] font-bold text-teal-deep">
                    {item.title}
                  </h3>
                  <span className="chip !py-1 !text-[10px]">{item.type}</span>
                </div>
                <p className="mt-2 text-[15px] leading-[1.65] text-ink-soft">
                  {item.summary}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setRole(item.title);
                    setSubmitted(false);
                    document
                      .getElementById("apply")
                      ?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="link-arrow mt-3 text-[12px]"
                >
                  Apply for this role
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="apply" className="section scroll-mt-28">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow" data-anim="fade" data-anim-y="16">Introduce yourself</p>
            <h2 className="display-2 mt-3" data-anim="heading" data-highlight="Application form">Application form.</h2>
            <p className="lead mt-4" data-anim="fade">
              A short note and a CV link is enough. We reply to every applicant,
              even when it is a no.
            </p>
            <div className="mt-6 rounded-[18px] bg-mint p-4 text-[14px] leading-[1.6] text-ink">
              Please do not send medical records, patient information or sensitive
              personal data. We do not ask for date of birth, health information or
              immigration documents at this stage.
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="surface p-6 md:p-8">
              {submitted ? (
                <div className="fade-in">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-mint text-teal-deep">
                    <CheckIcon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-serif text-[26px] font-bold text-teal-deep">
                    Thanks — your details are noted.
                  </h3>
                  <p className="mt-2 text-[15px] leading-[1.7] text-ink">
                    Our practice director reviews applications weekly. This demo
                    form does not send email yet, so please also call{" "}
                    <a href={clinic.phoneHref} className="link-inline">
                      {clinic.phone}
                    </a>{" "}
                    or email{" "}
                    <a href={`mailto:${clinic.email}`} className="link-inline">
                      {clinic.email}
                    </a>{" "}
                    to make sure your application arrives.
                  </p>
                  <button
                    type="button"
                    className="btn btn-outline btn-sm mt-5"
                    onClick={() => setSubmitted(false)}
                  >
                    Edit application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="career-name" className="field-label">
                        Full name
                      </label>
                      <input
                        id="career-name"
                        name="name"
                        className="field"
                        autoComplete="name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="career-email" className="field-label">
                        Email
                      </label>
                      <input
                        id="career-email"
                        name="email"
                        type="email"
                        className="field"
                        autoComplete="email"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="career-phone" className="field-label">
                        Phone (optional)
                      </label>
                      <input
                        id="career-phone"
                        name="phone"
                        type="tel"
                        className="field"
                        autoComplete="tel"
                      />
                    </div>
                    <div>
                      <label htmlFor="career-role" className="field-label">
                        Role
                      </label>
                      <select
                        id="career-role"
                        name="role"
                        className="field"
                        value={role}
                        onChange={(event) => setRole(event.target.value)}
                      >
                        {careers.map((item) => (
                          <option key={item.title} value={item.title}>
                            {item.title}
                          </option>
                        ))}
                        <option value="General introduction">
                          General introduction
                        </option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="career-link" className="field-label">
                        CV or portfolio link
                      </label>
                      <input
                        id="career-link"
                        name="link"
                        type="url"
                        className="field"
                        placeholder="https://"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="career-note" className="field-label">
                        A short note
                      </label>
                      <textarea
                        id="career-note"
                        name="note"
                        rows="4"
                        className="field"
                        placeholder="What kind of dentistry do you want to practise?"
                      />
                    </div>
                  </div>

                  {error && (
                    <p className="mt-3 text-[14px] text-[#b4482f]" role="alert">
                      {error}
                    </p>
                  )}

                  <button type="submit" className="btn btn-primary mt-5 w-full sm:w-auto">
                    Send application
                  </button>
                  <p className="field-hint">
                    By applying you agree to our{" "}
                    <a href="/privacy" className="link-inline">
                      privacy policy
                    </a>
                    . We keep applications for 12 months.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Not a dentist, but love this kind of place?"
        copy="We hire coordinators and assistants for temperament as much as experience. Introduce yourself — we keep good people on file."
        primaryLabel="Book a visit instead"
      />
    </>
  );
}
