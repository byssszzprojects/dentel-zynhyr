import { Link } from "react-router-dom";
import Seo from "../components/Seo.jsx";
import { Breadcrumbs } from "../components/Cards.jsx";
import { ArrowRightIcon, PhoneIcon, PinIcon } from "../components/Icons.jsx";
import { clinic } from "../data/clinic.js";
import { coreServices } from "../data/services/index.js";

function LegalShell({ title, updated, children }) {
  return (
    <section className="pt-6 md:pt-10">
      <div className="container-page">
        <Breadcrumbs items={[{ label: title }]} />
        <div className="mt-6 max-w-[780px]">
          <h1 className="display-1 text-[clamp(32px,5vw,48px)]" data-anim="lines">{title}</h1>
          {updated && (
            <p className="mt-3 text-[13px] uppercase tracking-[0.08em] text-ink-soft">
              Last updated {updated}
            </p>
          )}
          <div className="prose mt-8">{children}</div>
          <p className="mt-10 border-t border-line pt-5 text-[14px] text-ink-soft">
            Questions about this page?{" "}
            <a href={`mailto:${clinic.email}`} className="link-inline">
              {clinic.email}
            </a>{" "}
            or call{" "}
            <a href={clinic.phoneHref} className="link-inline">
              {clinic.phone}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

export function Privacy() {
  return (
    <>
      <Seo
        title="Privacy Policy | Dentel Dental Studio"
        description="How Dentel Dental Studio handles personal information, website forms, cookies and clinical records, and how to exercise your privacy rights."
        path="/privacy"
      />
      <LegalShell title="Privacy policy" updated="1 October 2026">
        <h2 data-anim="heading">Who we are</h2>
        <p>
          {clinic.name} (“we”, “us”) is an independent dental practice at{" "}
          {clinic.addressLine}. We are responsible for the personal information
          collected through this website and through your care at the studio.
        </p>

        <h2 data-anim="heading">What this website collects</h2>
        <p>
          Our public forms ask for your name, phone number, email address, the
          service you are interested in, and your preferred appointment time. We
          do not ask for medical history, medication lists, insurance member IDs,
          Social Security numbers or payment card details through this website.
        </p>
        <ul>
          <li>Contact details you type into the booking or contact form.</li>
          <li>Basic technical data such as browser type, if analytics is enabled.</li>
          <li>A cookie preference stored in your browser when you use the banner.</li>
        </ul>

        <h2 data-anim="heading">How we use it</h2>
        <p>
          We use your contact details to respond to your request, arrange
          appointments, confirm times and send reminders. We do not sell personal
          information, and we do not use health information for advertising.
        </p>

        <h2 data-anim="heading">Clinical records</h2>
        <p>
          Clinical records are created and stored separately from this website,
          in our practice management system. They are handled under professional
          record-keeping obligations and Texas law, not this website’s forms. You
          can request a copy of your records in writing.
        </p>

        <h2 data-anim="heading">Cookies</h2>
        <p>
          Essential cookies keep the site working. Optional analytics cookies help
          us understand which pages are useful. You can accept or decline these in
          the cookie banner; declining does not affect your ability to use the
          site. You can clear the choice at any time in your browser settings.
        </p>

        <h2 data-anim="heading">Who we share with</h2>
        <p>
          We share only what is necessary with dental laboratories, sterilization
          and software suppliers, and your dental insurer when processing a claim.
          Where a supplier handles data on our behalf, they are bound by a
          confidentiality agreement. We may disclose information where required
          by law or to protect someone’s safety.
        </p>

        <h2 data-anim="heading">How long we keep it</h2>
        <p>
          Website enquiries are kept for up to 24 months, then deleted. Clinical
          records are retained for the period required by Texas law and
          professional guidance, and job applications for 12 months.
        </p>

        <h2 data-anim="heading">Your choices</h2>
        <ul>
          <li>Ask what personal information we hold about you.</li>
          <li>Ask us to correct information that is inaccurate.</li>
          <li>Ask us to stop sending appointment reminders or marketing.</li>
          <li>
            Ask for deletion of website enquiry data, where no clinical or legal
            obligation requires us to keep it.
          </li>
        </ul>
        <p>
          Email{" "}
          <a href={`mailto:${clinic.email}`} className="link-inline">
            {clinic.email}
          </a>{" "}
          and we will respond within 30 days.
        </p>

        <h2 data-anim="heading">Security</h2>
        <p>
          We use encrypted connections for this website and access controls for
          our practice systems. No method of transmission is completely secure, so
          please avoid sending sensitive information by email or web form.
        </p>

        <h2 data-anim="heading">Children</h2>
        <p>
          Appointments for children are booked by a parent or guardian. This
          website is not directed at children under 13, and we do not knowingly
          collect their information online.
        </p>
      </LegalShell>
    </>
  );
}

export function Accessibility() {
  return (
    <>
      <Seo
        title="Accessibility Statement | Dentel Dental Studio"
        description="Our accessibility commitment: WCAG 2.2 AA targets, keyboard navigation, reduced motion support, and how to request an accommodation at Dentel in Austin."
        path="/accessibility"
      />
      <LegalShell title="Accessibility" updated="1 October 2026">
        <h2 data-anim="heading">Our commitment</h2>
        <p>
          We want this website and our studio to be usable by everyone, including
          people who use screen readers, keyboard navigation, magnification or
          reduced motion. We aim to meet WCAG 2.2 level AA and we test the site as
          we change it — imperfectly, but deliberately.
        </p>

        <h2 data-anim="heading">What we have done on this site</h2>
        <ul>
          <li>Semantic headings and landmarks, with a skip-to-content link.</li>
          <li>Visible focus styles on every interactive element.</li>
          <li>Colour contrast checked for body text, buttons and form labels.</li>
          <li>Text that can be enlarged to 200% without loss of content.</li>
          <li>Motion that respects the “reduce motion” system setting.</li>
          <li>Images with alternative text, and decorative images hidden from screen readers.</li>
          <li>Forms with persistent labels, not placeholder-only fields.</li>
        </ul>

        <h2 data-anim="heading">Known limitations</h2>
        <ul>
          <li>
            The embedded Google Map is provided by a third party and we cannot
            fully control its accessibility. Full address and directions are
            always written in text nearby.
          </li>
          <li>
            Some older documents may be supplied as PDFs. We can provide the same
            information in another format on request.
          </li>
        </ul>

        <h2 data-anim="heading">At the studio</h2>
        <p>
          The entrance from the garage, elevator, treatment rooms and restrooms
          are step-free. Accessible parking is available in the garage. If you
          need extra time, a quieter room, a support person or an interpreter,
          tell us when booking and we will arrange it.
        </p>

        <h2 data-anim="heading">Tell us about a barrier</h2>
        <p>
          If something on this site or in the studio does not work for you, we
          want to know. Email{" "}
          <a href={`mailto:${clinic.email}`} className="link-inline">
            {clinic.email}
          </a>{" "}
          or call{" "}
          <a href={clinic.phoneHref} className="link-inline">
            {clinic.phone}
          </a>
          . We aim to acknowledge accessibility reports within two working days
          and to offer a practical alternative while we fix the issue.
        </p>
      </LegalShell>
    </>
  );
}

export function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found | Dentel Dental Studio"
        description="The page you were looking for does not exist. Find dental services, opening hours and booking at Dentel in South Austin."
        path="/404"
      />
      <section className="pt-16 md:pt-24">
        <div className="container-page">
          <div className="max-w-[620px]">
            <p className="eyebrow" data-anim="fade" data-anim-y="16">Error 404</p>
            <h1 className="display-1 mt-3" data-anim="lines">That page has moved on.</h1>
            <p className="lead mt-5" data-anim="fade">
              The link may be old or mistyped. Here are the places patients usually
              need — or call us and we will find it for you.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/" className="btn btn-primary">
                Back to home
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link to="/book" className="btn btn-outline">
                Book an appointment
              </Link>
              <a href={clinic.phoneHref} className="btn btn-outline">
                <PhoneIcon className="h-4 w-4" />
                {clinic.phone}
              </a>
            </div>
          </div>

          <div className="mt-12 grid gap-6 border-t border-line pt-8 sm:grid-cols-3">
            <div>
              <p className="eyebrow text-[11px]" data-anim="fade" data-anim-y="16">Popular services</p>
              <ul className="mt-3 space-y-2">
                {coreServices.slice(0, 5).map((service) => (
                  <li key={service.slug}>
                    <Link
                      to={`/services/${service.slug}`}
                      className="text-[15px] text-ink hover:text-teal-deep hover:underline"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow text-[11px]" data-anim="fade" data-anim-y="16">Patients</p>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link
                    to="/patients/insurance"
                    className="text-[15px] text-ink hover:text-teal-deep hover:underline"
                  >
                    Insurance
                  </Link>
                </li>
                <li>
                  <Link
                    to="/patients/payment-financing"
                    className="text-[15px] text-ink hover:text-teal-deep hover:underline"
                  >
                    Payment &amp; financing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/patients/dental-plans"
                    className="text-[15px] text-ink hover:text-teal-deep hover:underline"
                  >
                    Dental plans
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-[15px] text-ink hover:text-teal-deep hover:underline"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="eyebrow text-[11px]" data-anim="fade" data-anim-y="16">Find us</p>
              <a
                href={clinic.mapLink}
                target="_blank"
                rel="noreferrer"
                className="mt-3 flex gap-2 text-[15px] leading-[1.7] text-ink hover:text-teal-deep"
              >
                <PinIcon className="mt-1 h-4 w-4 flex-none text-teal" />
                {clinic.address.street}, {clinic.address.suite}
                <br />
                {clinic.address.city}, {clinic.address.state} {clinic.address.zip}
              </a>
              <p className="mt-3 text-[14px] text-ink-soft">{clinic.hoursShort}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
