import { useState } from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo.jsx";
import { Breadcrumbs } from "../components/Cards.jsx";
import { CheckIcon } from "../components/ExtraIcons.jsx";
import { PhoneIcon, PinIcon } from "../components/Icons.jsx";
import { clinic } from "../data/clinic.js";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (!data.get("name") || !data.get("email") || !data.get("message")) {
      setError("Please add your name, email and a message.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <>
      <Seo
        title="Contact Dentel Dental Studio | South Congress, Austin"
        description="Call, email or visit Dentel Dental Studio at 1508 South Congress Avenue, Suite 200, Austin, TX 78704. Opening hours and a contact form."
        path="/contact"
      />

      <section className="pt-6 md:pt-10">
        <div className="container-page">
          <Breadcrumbs items={[{ label: "Contact" }]} />

          <div className="mt-6 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div>
              <p className="eyebrow" data-anim="fade" data-anim-y="16">Contact</p>
              <h1 className="display-1 mt-3" data-anim="lines">Talk to a person.</h1>
              <p className="lead mt-5 max-w-[44ch]" data-anim="fade">
                The phone is answered by our front desk during opening hours — no
                call centre, no menu tree. Email is answered the same working day.
              </p>

              <div className="mt-8 grid gap-4">
                <a
                  href={clinic.phoneHref}
                  className="flex items-start gap-4 rounded-[20px] border border-line bg-white p-5 transition-colors hover:border-mint-300"
                >
                  <span className="grid h-10 w-10 flex-none place-items-center rounded-full bg-mint text-teal-deep">
                    <PhoneIcon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-soft">
                      Call
                    </p>
                    <p className="mt-1 text-[17px] font-medium text-teal-deep">
                      {clinic.phone}
                    </p>
                    <p className="mt-0.5 text-[13px] text-ink-soft">
                      {clinic.hoursShort}
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${clinic.email}`}
                  className="flex items-start gap-4 rounded-[20px] border border-line bg-white p-5 transition-colors hover:border-mint-300"
                >
                  <span className="grid h-10 w-10 flex-none place-items-center rounded-full bg-mint text-teal-deep">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-soft">
                      Email
                    </p>
                    <p className="mt-1 text-[17px] font-medium text-teal-deep">
                      {clinic.email}
                    </p>
                    <p className="mt-0.5 text-[13px] text-ink-soft">
                      Please do not send medical details by email.
                    </p>
                  </div>
                </a>

                <a
                  href={clinic.mapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-4 rounded-[20px] border border-line bg-white p-5 transition-colors hover:border-mint-300"
                >
                  <span className="grid h-10 w-10 flex-none place-items-center rounded-full bg-mint text-teal-deep">
                    <PinIcon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-soft">
                      Visit
                    </p>
                    <p className="mt-1 text-[17px] font-medium text-teal-deep">
                      {clinic.address.street}, {clinic.address.suite}
                    </p>
                    <p className="mt-0.5 text-[13px] text-ink-soft">
                      {clinic.address.city}, {clinic.address.state}{" "}
                      {clinic.address.zip} · free garage parking
                    </p>
                  </div>
                </a>
              </div>

              <div className="mt-6 overflow-hidden rounded-[24px] border border-line bg-white">
                <iframe
                  title={`Map of ${clinic.name}`}
                  src={clinic.mapEmbed}
                  width="100%"
                  height="260"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 0 }}
                />
              </div>
            </div>

            <div>
              <div className="surface p-6 md:p-8">
                <p className="eyebrow" data-anim="fade" data-anim-y="16">Send a message</p>
                <h2 className="display-3 mt-2" data-anim="heading" data-highlight="anything">Ask us anything.</h2>
                <p className="mt-2 text-[15px] leading-[1.65] text-ink-soft">
                  For appointments, the booking form is faster. For everything
                  else — treatment questions, records, invoices — use this form.
                </p>

                {submitted ? (
                  <div className="fade-in mt-6 rounded-[18px] border border-mint-200 bg-mint p-5">
                    <p className="flex items-center gap-2 font-medium text-teal-deep">
                      <CheckIcon className="h-4 w-4" />
                      Message noted
                    </p>
                    <p className="mt-2 text-[14px] leading-[1.7] text-ink">
                      This demo form is not connected to a mailbox yet, so your
                      message has not been delivered. Please call{" "}
                      <a href={clinic.phoneHref} className="link-inline">
                        {clinic.phone}
                      </a>{" "}
                      or email{" "}
                      <a href={`mailto:${clinic.email}`} className="link-inline">
                        {clinic.email}
                      </a>
                      .
                    </p>
                    <button
                      type="button"
                      className="btn btn-outline btn-sm mt-4"
                      onClick={() => setSubmitted(false)}
                    >
                      Write another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="mt-5">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="contact-name" className="field-label">
                          Name
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          className="field"
                          autoComplete="name"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="field-label">
                          Email
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          className="field"
                          autoComplete="email"
                          required
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="contact-topic" className="field-label">
                          What is it about?
                        </label>
                        <select id="contact-topic" name="topic" className="field">
                          <option>General question</option>
                          <option>Treatment and costs</option>
                          <option>Insurance or billing</option>
                          <option>Records request</option>
                          <option>Feedback or complaint</option>
                          <option>Careers</option>
                        </select>
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="contact-message" className="field-label">
                          Message
                        </label>
                        <textarea
                          id="contact-message"
                          name="message"
                          rows="5"
                          className="field"
                          required
                        />
                      </div>
                    </div>

                    {error && (
                      <p className="mt-3 text-[14px] text-[#b4482f]" role="alert">
                        {error}
                      </p>
                    )}

                    <button type="submit" className="btn btn-primary mt-5 w-full">
                      Send message
                    </button>
                    <p className="field-hint">
                      Please do not include medical history or sensitive health
                      information. See our{" "}
                      <Link to="/privacy" className="link-inline">
                        privacy policy
                      </Link>
                      .
                    </p>
                  </form>
                )}
              </div>

              <div className="mt-5 rounded-[20px] border border-line bg-white p-5">
                <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-ink-soft">
                  Feedback or a complaint
                </p>
                <p className="mt-2 text-[14px] leading-[1.7] text-ink">
                  Ask for the practice director, Elena Voss. Formal complaints are
                  acknowledged in writing within two working days and answered
                  within five.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-4">
        <div className="container-page grid gap-4 sm:grid-cols-3">
          {[
            {
              title: "Opening hours",
              copy: `${clinic.hours[0].day}: ${clinic.hours[0].time}. Saturday mornings available. Closed Sunday, with emergency triage by phone.`,
            },
            {
              title: "Accessibility",
              copy: "Step-free entrance from the garage, accessible restroom, and extra time available on request. See our accessibility page.",
            },
            {
              title: "Languages",
              copy: `We speak ${clinic.languages.join(", ")}. Ask for an interpreter if another language would be easier.`,
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
