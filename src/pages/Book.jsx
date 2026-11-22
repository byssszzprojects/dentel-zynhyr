import { useState } from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo.jsx";
import { Breadcrumbs } from "../components/Cards.jsx";
import { CheckIcon } from "../components/ExtraIcons.jsx";
import { PhoneIcon } from "../components/Icons.jsx";
import { clinic } from "../data/clinic.js";
import { allServices } from "../data/services/index.js";

export default function Book() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (!data.get("name") || !data.get("phone") || !data.get("service")) {
      setError("Please add your name, a phone number and the service you need.");
      return;
    }
    setError("");
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Seo
        title="Book a Dental Appointment in Austin | Dentel Dental Studio"
        description="Request a dental appointment at Dentel in South Austin. Choose your service and preferred time; we confirm by phone. Same-day emergency slots available."
        path="/book"
      />

      <section className="pt-6 md:pt-10">
        <div className="container-page">
          <Breadcrumbs items={[{ label: "Book an appointment" }]} />

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <p className="eyebrow" data-anim="fade" data-anim-y="16">Appointments</p>
              <h1 className="display-1 mt-3" data-anim="lines">Book a visit.</h1>
              <p className="lead mt-5 max-w-[46ch]" data-anim="fade">
                Tell us what you need and when suits you. A coordinator confirms
                the exact time by phone — usually within one working day, and
                faster for emergencies.
              </p>

              <div className="mt-6 rounded-[18px] border border-mint-200 bg-mint p-4 text-[14px] leading-[1.65] text-ink">
                Please do not include medical history, medication lists or
                insurance member IDs in this form. We collect those privately
                before your appointment.
              </div>

              {submitted ? (
                <div className="fade-in mt-6 rounded-[24px] border border-line bg-white p-6 md:p-8">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-mint text-teal-deep">
                    <CheckIcon className="h-6 w-6" />
                  </span>
                  <h2 className="mt-4 font-serif text-[28px] font-bold text-teal-deep">
                    Request noted.
                  </h2>
                  <p className="mt-2 text-[15px] leading-[1.7] text-ink">
                    Thank you. This demo form does not send messages to the studio
                    yet, so nothing has been transmitted. To confirm an
                    appointment, please call{" "}
                    <a href={clinic.phoneHref} className="link-inline">
                      {clinic.phone}
                    </a>{" "}
                    or email{" "}
                    <a href={`mailto:${clinic.email}`} className="link-inline">
                      {clinic.email}
                    </a>
                    .
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <a href={clinic.phoneHref} className="btn btn-primary">
                      <PhoneIcon className="h-4 w-4" />
                      Call the studio
                    </a>
                    <button
                      type="button"
                      className="btn btn-outline"
                      onClick={() => setSubmitted(false)}
                    >
                      Edit request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="surface mt-6 p-6 md:p-8">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="book-name" className="field-label">
                        Full name <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="book-name"
                        name="name"
                        className="field"
                        autoComplete="name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="book-phone" className="field-label">
                        Phone <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="book-phone"
                        name="phone"
                        type="tel"
                        className="field"
                        autoComplete="tel"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="book-email" className="field-label">
                        Email (optional)
                      </label>
                      <input
                        id="book-email"
                        name="email"
                        type="email"
                        className="field"
                        autoComplete="email"
                      />
                    </div>
                    <div>
                      <label htmlFor="book-patient" className="field-label">
                        Are you a new patient?
                      </label>
                      <select id="book-patient" name="patient" className="field">
                        <option>New patient</option>
                        <option>Existing patient</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="book-service" className="field-label">
                        What do you need? <span aria-hidden="true">*</span>
                      </label>
                      <select id="book-service" name="service" className="field" required>
                        <option value="">Choose a service</option>
                        <option value="Not sure / general enquiry">
                          Not sure — help me choose
                        </option>
                        {allServices.map((service) => (
                          <option key={service.slug} value={service.name}>
                            {service.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="book-date" className="field-label">
                        Preferred date
                      </label>
                      <input id="book-date" name="date" type="date" className="field" />
                    </div>
                    <div>
                      <label htmlFor="book-time" className="field-label">
                        Preferred time
                      </label>
                      <select id="book-time" name="time" className="field">
                        <option>Morning (8am – 12pm)</option>
                        <option>Afternoon (12pm – 4pm)</option>
                        <option>Late afternoon (4pm – 6pm)</option>
                        <option>Saturday</option>
                        <option>Any time — call me</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="book-note" className="field-label">
                        Anything else? (optional)
                      </label>
                      <textarea
                        id="book-note"
                        name="note"
                        rows="3"
                        className="field"
                        placeholder="For example: I need a Saturday appointment, or I am nervous about treatment."
                      />
                      <p className="field-hint">
                        Please keep this brief and avoid medical details. We will
                        ask what we need in private.
                      </p>
                    </div>
                  </div>

                  {error && (
                    <p className="mt-3 text-[14px] text-[#b4482f]" role="alert">
                      {error}
                    </p>
                  )}

                  <button type="submit" className="btn btn-primary mt-5 w-full">
                    Request appointment
                  </button>
                  <p className="field-hint">
                    Submitting a request does not confirm a time. We will call you
                    to agree the appointment.
                  </p>
                </form>
              )}
            </div>

            <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-[24px] bg-teal-deep p-6 text-white">
                <p className="eyebrow text-mint-300" data-anim="fade" data-anim-y="16">Same day</p>
                <h2 className="mt-2 font-serif text-[26px] font-bold leading-tight text-white">
                  In pain? Call instead of booking online.
                </h2>
                <p className="mt-2 text-[14px] leading-[1.65] text-white/80">
                  We hold emergency slots every day we are open and can triage by
                  phone.
                </p>
                <a href={clinic.phoneHref} className="btn btn-lime mt-4 w-full">
                  <PhoneIcon className="h-4 w-4" />
                  {clinic.phone}
                </a>
              </div>

              <div className="surface p-5">
                <p className="eyebrow text-[11px]" data-anim="fade" data-anim-y="16">What happens next</p>
                <ol className="mt-3 space-y-3">
                  {[
                    "A coordinator calls to confirm the time and clinician.",
                    "We check your insurance benefits, if you have them.",
                    "You get a text reminder the day before.",
                  ].map((step, index) => (
                    <li key={step} className="flex gap-3 text-[14px] leading-[1.6] text-ink">
                      <span className="grid h-6 w-6 flex-none place-items-center rounded-full bg-mint text-[12px] font-semibold text-teal-deep">
                        {index + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="surface p-5">
                <p className="eyebrow text-[11px]" data-anim="fade" data-anim-y="16">The studio</p>
                <address className="mt-2 not-italic text-[14px] leading-[1.7] text-ink">
                  {clinic.address.street}
                  <br />
                  {clinic.address.suite}, {clinic.address.city},{" "}
                  {clinic.address.state} {clinic.address.zip}
                </address>
                <dl className="mt-3 space-y-1.5 border-t border-line pt-3 text-[13px]">
                  {clinic.hours.map((row) => (
                    <div key={row.day} className="flex justify-between gap-3">
                      <dt className="text-ink-soft">{row.day}</dt>
                      <dd className="font-medium text-teal-deep">{row.time}</dd>
                    </div>
                  ))}
                </dl>
                <Link to="/locations" className="link-inline mt-3 block text-[13px]">
                  Directions &amp; parking
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-4 sm:grid-cols-3">
          {[
            {
              title: "Bring your insurance card",
              copy: "Or send a photo before the visit and we will check your benefits ahead of time.",
            },
            {
              title: "Arrive 10 minutes early",
              copy: "New patients complete a short health form in the studio — we do not ask for medical history online.",
            },
            {
              title: "Tell us what worries you",
              copy: "Noise, needles, gag reflex, cost, time. We adjust the appointment, not your expectations.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-[20px] border border-line bg-white p-5">
              <h2 className="font-serif text-[19px] font-bold text-teal-deep">
                {item.title}
              </h2>
              <p className="mt-2 text-[14px] leading-[1.65] text-ink-soft">
                {item.copy}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
