import { Link } from "react-router-dom";
import Seo from "../components/Seo.jsx";
import Reveal from "../components/Reveal.jsx";
import FaqAccordion from "../components/FaqAccordion.jsx";
import { CtaBand, PageHero } from "../components/Cards.jsx";
import { ArrowRightIcon, PhoneIcon } from "../components/Icons.jsx";
import { CheckIcon, DocumentIcon, ShieldIcon } from "../components/ExtraIcons.jsx";
import { patientPageMedia } from "../data/media.js";
import {
  clinic,
  financingOptions,
  insurers,
  membershipPlans,
} from "../data/clinic.js";

const insuranceFaqs = [
  {
    question: "How do I find out what my plan covers?",
    answer:
      "Send us a photo of the front and back of your insurance card when you book. We run a benefits check with your insurer and come back with your annual maximum, deductible, coverage percentages and any waiting periods — before your appointment.",
  },
  {
    question: "What if you are out-of-network with my plan?",
    answer:
      "We can still see you and file the claim on your behalf, but your insurer may reimburse at a lower rate. We will estimate your out-of-pocket cost in writing so you can compare it with an in-network option.",
  },
  {
    question: "Do you accept Medicaid or Medicare?",
    answer:
      "We do not participate in Medicaid or Medicare dental programmes at this studio. We can refer you to community clinics that do, and our membership plan is open to anyone.",
  },
  {
    question: "Why was my claim denied?",
    answer:
      "Common reasons are missing pre-authorisation, a waiting period, an annual maximum already reached, or a service classed as cosmetic. We will send you the explanation and help you appeal if the denial looks wrong.",
  },
  {
    question: "Can I use my HSA or FSA card?",
    answer:
      "Yes, for treatment and for membership fees. We provide itemised receipts if your plan administrator asks for documentation.",
  },
];

const financingFaqs = [
  {
    question: "Does applying affect my credit score?",
    answer:
      "A soft check for pre-qualification usually does not. A full application can leave a mark. Our financing partner shows the terms before you submit anything.",
  },
  {
    question: "Is approval guaranteed?",
    answer:
      "No. Approval, limits and interest rates are decided by the lender based on your application. We cannot guarantee approval or a specific monthly payment.",
  },
  {
    question: "Can I pay treatment off early?",
    answer:
      "Yes. There is no penalty for paying early, and doing so can reduce the interest you pay on longer-term plans.",
  },
  {
    question: "What if I cannot afford treatment right now?",
    answer:
      "Tell us. We can often phase treatment so the urgent part happens first, or suggest the membership plan to spread routine care across the year.",
  },
];

const planFaqs = [
  {
    question: "Is the membership insurance?",
    answer:
      "No. It is an in-house plan offered by the practice, not an insurance product. It covers routine care and discounts other treatment, with no claim forms and no annual maximum.",
  },
  {
    question: "Can I join if I have insurance?",
    answer:
      "Yes, though it usually makes more sense to use your insurance benefits first. We will compare both for you honestly.",
  },
  {
    question: "Is there a waiting period?",
    answer:
      "No waiting periods and no deductibles. Benefits start from your join date, and the first cleaning can be booked straight away.",
  },
  {
    question: "What happens if I need a crown or implant?",
    answer:
      "Restorative and surgical treatment is discounted rather than included. You receive a written estimate with the membership discount applied before treatment starts.",
  },
];

const coverageRows = [
  ["Cleanings, exams, routine X-rays", "Usually 100%", "2 per year on most plans"],
  ["Fillings", "Usually 80%", "After deductible"],
  ["Crowns, bridges, root canals", "Usually 50%", "May need pre-authorisation"],
  ["Extractions and oral surgery", "Usually 50%", "Surgical cases may vary"],
  ["Implants", "Sometimes 0–50%", "Frequently excluded; check your plan"],
  ["Orthodontics", "Lifetime benefit", "Often $1,000–$2,000, children and adults"],
  ["Whitening and veneers", "Not covered", "Cosmetic treatment"],
];

export function Insurance() {
  return (
    <>
      <Seo
        title="Dental Insurance in Austin, TX | Plans We Accept"
        description="Dentel is in-network with most major PPO dental plans in Austin, including Delta Dental, Cigna, Aetna and MetLife. We verify benefits before treatment."
        path="/patients/insurance"
      />

      <PageHero
        eyebrow="Patients · Insurance"
        title="Insurance, without the runaround."
        lead="We check your benefits before you sit down, explain what your plan pays and what you will, and file the claim for you."
        image={patientPageMedia.insurance.image}
        imageAlt={patientPageMedia.insurance.alt}
        imageFocus={patientPageMedia.insurance.focus}
        imageWidth={patientPageMedia.insurance.width}
        imageHeight={patientPageMedia.insurance.height}
        imageRatio={patientPageMedia.insurance.ratio}
        chips={["Most PPO plans", "Benefits checked first", "Claims filed for you"]}
        breadcrumbs={[
          { label: "Patients", to: "/patients/insurance" },
          { label: "Insurance" },
        ]}
      >
        <Link to="/book" className="btn btn-primary">
          Book with your card
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
        <a href={clinic.phoneHref} className="btn btn-outline">
          <PhoneIcon className="h-4 w-4" />
          Ask about coverage
        </a>
      </PageHero>

      <section className="section">
        <div className="container-page">
          <Reveal className="max-w-[640px]">
            <p className="eyebrow" data-anim="fade" data-anim-y="16">In-network</p>
            <h2 className="display-2 mt-3" data-anim="heading" data-highlight="work with">Plans we work with.</h2>
            <p className="lead mt-4" data-anim="fade">
              We are in-network with most major PPO plans and file out-of-network
              claims for the rest. This list changes — always confirm with us when
              you book.
            </p>
          </Reveal>

          <Reveal className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {insurers.map((insurer) => (
              <div
                key={insurer}
                className="flex items-center gap-3 rounded-[16px] border border-line bg-white px-4 py-4"
              >
                <ShieldIcon className="h-5 w-5 flex-none text-teal" />
                <span className="font-serif text-[17px] font-bold text-teal-deep">
                  {insurer}
                </span>
              </div>
            ))}
          </Reveal>
          <p className="mt-4 text-[13px] text-ink-soft">
            Do not see your plan? Call us with the member ID and we will check
            whether we can still file for you.
          </p>
        </div>
      </section>

      <section className="section bg-white/60">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow" data-anim="fade" data-anim-y="16">Before your visit</p>
            <h2 className="display-2 mt-3" data-anim="heading" data-highlight="no surprises">Three steps, no surprises.</h2>
            <ol className="mt-7 space-y-5">
              {[
                {
                  title: "Send us your card",
                  copy: "Front and back, by photo or email, when you book. Include the subscriber's date of birth if it differs from yours.",
                },
                {
                  title: "We verify your benefits",
                  copy: "We confirm your annual maximum, deductible, waiting periods and coverage percentages with your insurer.",
                },
                {
                  title: "You get a written estimate",
                  copy: "Before treatment, you see the plan's portion and your portion separately. Nothing starts without your agreement.",
                },
              ].map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="grid h-10 w-10 flex-none place-items-center rounded-full bg-teal-deep font-serif text-[17px] font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-sans text-[17px] font-semibold text-teal-deep">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-[15px] leading-[1.65] text-ink-soft">
                      {step.copy}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={80} className="min-w-0">
            <div className="overflow-hidden rounded-[22px] border border-line bg-white">
              <div className="border-b border-line px-5 py-4">
                <h3 className="font-serif text-[21px] font-bold text-teal-deep">
                  What plans typically cover
                </h3>
                <p className="mt-1 text-[13px] text-ink-soft">
                  Typical PPO percentages — your plan may differ.
                </p>
              </div>
              <div className="table-wrap !border-0 !rounded-none">
                <table className="compare-table">
                  <thead>
                    <tr>
                      <th scope="col">Treatment</th>
                      <th scope="col">Typical coverage</th>
                      <th scope="col">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {coverageRows.map((row) => (
                      <tr key={row[0]}>
                        <td className="font-medium text-teal-deep">{row[0]}</td>
                        <td>{row[1]}</td>
                        <td className="text-ink-soft">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="mt-4 text-[12px] leading-[1.6] text-ink-soft">
              Coverage summaries are general guidance, not a guarantee of payment.
              Your insurer makes the final decision on every claim.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow" data-anim="fade" data-anim-y="16">Good to know</p>
            <h2 className="display-2 mt-3" data-anim="heading" data-highlight="answered">Insurance questions, answered.</h2>
            <p className="lead mt-4 max-w-[40ch]" data-anim="fade">
              If your plan is unusual — a union plan, a discount card or an
              out-of-state HMO — call us and we will work it out.
            </p>
            <a href={clinic.phoneHref} className="btn btn-outline mt-6">
              <PhoneIcon className="h-4 w-4" />
              {clinic.phone}
            </a>
          </Reveal>
          <Reveal delay={80}>
            <FaqAccordion items={insuranceFaqs} idPrefix="insurance-faq" />
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Want your benefits checked before booking?"
        copy="Call with your member ID, or book online and send a photo of your card. We will come back with the numbers in writing."
        primaryLabel="Book an appointment"
      />
    </>
  );
}

export function PaymentFinancing() {
  return (
    <>
      <Seo
        title="Payment Plans & Dental Financing in Austin | Dentel"
        description="Monthly payment plans, 0% promotional periods, HSA and FSA acceptance, and transparent estimates for dental treatment in South Austin."
        path="/patients/payment-financing"
      />

      <PageHero
        eyebrow="Patients · Payment & financing"
        title="Care now, paid in a way that fits."
        lead="Dental treatment is easier to agree to when the numbers are clear. Here is how payment works, including monthly plans for larger treatment."
        image={patientPageMedia.financing.image}
        imageAlt={patientPageMedia.financing.alt}
        imageFocus={patientPageMedia.financing.focus}
        imageWidth={patientPageMedia.financing.width}
        imageHeight={patientPageMedia.financing.height}
        imageRatio={patientPageMedia.financing.ratio}
        chips={["Written estimates", "Monthly plans", "HSA & FSA accepted"]}
        breadcrumbs={[
          { label: "Patients", to: "/patients/payment-financing" },
          { label: "Payment & financing" },
        ]}
      >
        <Link to="/book" className="btn btn-primary">
          Book a consultation
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
        <a href={clinic.phoneHref} className="btn btn-outline">
          <PhoneIcon className="h-4 w-4" />
          Ask about costs
        </a>
      </PageHero>

      <section className="section">
        <div className="container-page">
          <Reveal className="max-w-[640px]">
            <p className="eyebrow" data-anim="fade" data-anim-y="16">Ways to pay</p>
            <h2 className="display-2 mt-3" data-anim="heading" data-highlight="explained">Four options, explained.</h2>
            <p className="lead mt-4" data-anim="fade">
              We will always tell you the total cost, what insurance covers and
              what is left before treatment begins.
            </p>
          </Reveal>

          <div className="mt-9 grid gap-5 sm:grid-cols-2" data-anim="stagger">
            {financingOptions.map((option, index) => (
              <Reveal key={option.title} delay={(index % 2) * 60}>
                <div className="h-full rounded-[22px] border border-line bg-white p-6">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-mint text-teal-deep">
                    <DocumentIcon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-serif text-[21px] font-bold text-teal-deep">
                    {option.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-[1.7] text-ink-soft">
                    {option.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white/60">
        <div className="container-page grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          <Reveal className="min-w-0">
            <p className="eyebrow" data-anim="fade" data-anim-y="16">Example costs</p>
            <h2 className="display-2 mt-3" data-anim="heading" data-highlight="typically costs">What treatment typically costs here.</h2>
            <p className="lead mt-4" data-anim="fade">
              Ranges below are self-pay estimates before insurance. Your written
              estimate after examination is the number that counts.
            </p>
            <div className="mt-6 table-wrap bg-white">
              <table className="compare-table">
                <thead>
                  <tr>
                    <th scope="col">Treatment</th>
                    <th scope="col">Typical range</th>
                    <th scope="col">Monthly example*</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Exam, X-rays &amp; cleaning</td>
                    <td>$180 – $290</td>
                    <td>—</td>
                  </tr>
                  <tr>
                    <td>Tooth-coloured filling</td>
                    <td>$190 – $320</td>
                    <td>—</td>
                  </tr>
                  <tr>
                    <td>Crown</td>
                    <td>$1,150 – $1,650</td>
                    <td>from $96/mo</td>
                  </tr>
                  <tr>
                    <td>Root canal &amp; crown</td>
                    <td>$1,900 – $2,800</td>
                    <td>from $158/mo</td>
                  </tr>
                  <tr>
                    <td>Single implant &amp; crown</td>
                    <td>$3,600 – $5,200</td>
                    <td>from $300/mo</td>
                  </tr>
                  <tr>
                    <td>Invisalign</td>
                    <td>$3,900 – $5,600</td>
                    <td>from $325/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-[12px] leading-[1.6] text-ink-soft">
              *Illustrative monthly figures over 12 months at 0% for eligible
              applicants. Actual terms, approval and interest depend on the
              lender. Ranges vary with complexity and materials.
            </p>
          </Reveal>

          <Reveal delay={80} className="surface p-6 md:p-8">
            <p className="eyebrow" data-anim="fade" data-anim-y="16">How to apply</p>
            <h3 className="display-3 mt-2" data-anim="heading" data-highlight="front desk">Three minutes at the front desk.</h3>
            <ol className="mt-5 space-y-4">
              {[
                "We prepare your treatment plan and total cost.",
                "You choose a plan length that suits you.",
                "We submit the application together and show you the decision.",
                "You approve the terms and treatment is scheduled.",
              ].map((step, index) => (
                <li key={step} className="flex gap-3 text-[15px] leading-[1.65] text-ink">
                  <span className="grid h-7 w-7 flex-none place-items-center rounded-full bg-mint text-[13px] font-semibold text-teal-deep">
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
            <div className="mt-6 rounded-[16px] border border-mint-200 bg-mint/60 p-4 text-[14px] leading-[1.6] text-ink">
              <p className="flex items-start gap-2">
                <ShieldIcon className="mt-0.5 h-4 w-4 flex-none text-teal-deep" />
                We never run a credit application without your consent, and we
                never pressure you to finance treatment you do not need.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow" data-anim="fade" data-anim-y="16">Financing FAQs</p>
            <h2 className="display-2 mt-3" data-anim="heading" data-highlight="you apply">Before you apply.</h2>
            <p className="lead mt-4 max-w-[40ch]" data-anim="fade">
              Questions about approval, credit checks or paying early? Ask us — we
              will give you a straight answer.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <FaqAccordion items={financingFaqs} idPrefix="financing-faq" />
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Get a written estimate first"
        copy="Book an exam and we will prepare a plan with costs, insurance estimates and payment options — before you decide anything."
        primaryLabel="Book an exam"
      />
    </>
  );
}

export function DentalPlans() {
  return (
    <>
      <Seo
        title="Dental Membership Plans in Austin, TX | Dentel"
        description="No insurance? Dentel's in-house dental membership plans cover cleanings, exams, X-rays and discounts on treatment, with no deductibles or waiting periods."
        path="/patients/dental-plans"
      />

      <PageHero
        eyebrow="Patients · Dental plans"
        title="A membership for people without insurance."
        lead="Predictable routine care, no claim forms and no annual maximum. One annual fee, spread monthly, with clear discounts on anything else."
        image={patientPageMedia.plans.image}
        imageAlt={patientPageMedia.plans.alt}
        imageFocus={patientPageMedia.plans.focus}
        imageWidth={patientPageMedia.plans.width}
        imageHeight={patientPageMedia.plans.height}
        imageRatio={patientPageMedia.plans.ratio}
        chips={["No deductibles", "No waiting periods", "Cancel anytime"]}
        breadcrumbs={[
          { label: "Patients", to: "/patients/dental-plans" },
          { label: "Dental plans" },
        ]}
      >
        <Link to="/book" className="btn btn-primary">
          Join or ask a question
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
        <a href={clinic.phoneHref} className="btn btn-outline">
          <PhoneIcon className="h-4 w-4" />
          {clinic.phone}
        </a>
      </PageHero>

      <section className="section">
        <div className="container-page">
          <Reveal className="max-w-[640px]">
            <p className="eyebrow" data-anim="fade" data-anim-y="16">Membership</p>
            <h2 className="display-2 mt-3" data-anim="heading" data-highlight="no fine print">Three plans, no fine print.</h2>
            <p className="lead mt-4" data-anim="fade">
              Every plan includes two exams and cleanings a year and annual
              X-rays. Choose based on how much treatment you expect.
            </p>
          </Reveal>

          <div className="mt-9 grid gap-5 lg:grid-cols-3" data-anim="stagger">
            {membershipPlans.map((plan, index) => (
              <Reveal key={plan.name} delay={index * 60}>
                <div
                  className={`flex h-full flex-col rounded-[26px] border p-6 md:p-7 ${
                    index === 1
                      ? "border-teal-deep bg-teal-deep text-white shadow-[0_24px_54px_#36514c2e]"
                      : "border-line bg-white"
                  }`}
                >
                  {index === 1 && (
                    <span className="mb-3 inline-flex w-fit rounded-full bg-mint-300 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-teal-900">
                      Most chosen
                    </span>
                  )}
                  <h3
                    className={`font-serif text-[24px] font-bold ${
                      index === 1 ? "text-white" : "text-teal-deep"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`mt-1 text-[13px] ${
                      index === 1 ? "text-white/70" : "text-ink-soft"
                    }`}
                  >
                    {plan.audience}
                  </p>
                  <p className="mt-4 flex items-baseline gap-1">
                    <span
                      className={`font-serif text-[40px] font-bold leading-none ${
                        index === 1 ? "text-white" : "text-teal-deep"
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span
                      className={`text-[14px] ${
                        index === 1 ? "text-white/70" : "text-ink-soft"
                      }`}
                    >
                      {plan.period}
                    </span>
                  </p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {plan.includes.map((item) => (
                      <li
                        key={item}
                        className={`flex gap-2.5 text-[15px] leading-[1.6] ${
                          index === 1 ? "text-white/90" : "text-ink"
                        }`}
                      >
                        <CheckIcon
                          className={`mt-0.5 h-4 w-4 flex-none ${
                            index === 1 ? "text-mint-300" : "text-teal"
                          }`}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/book"
                    className={`btn mt-7 w-full ${
                      index === 1 ? "btn-lime" : "btn-primary"
                    }`}
                  >
                    Join {plan.name}
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-5 text-[12px] leading-[1.6] text-ink-soft">
            Membership is an in-house plan, not dental insurance. It does not
            cover specialist referral fees, laboratory work or treatment excluded
            in the plan agreement. Ask for the full terms before joining.
          </p>
        </div>
      </section>

      <section className="section bg-white/60">
        <div className="container-page grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          <Reveal className="surface p-6 md:p-8">
            <p className="eyebrow" data-anim="fade" data-anim-y="16">What it is not</p>
            <h2 className="display-3 mt-2" data-anim="heading" data-highlight="the limits">Straight about the limits.</h2>
            <ul className="mt-5 space-y-4">
              {[
                "It is not insurance and does not satisfy insurance mandates.",
                "It does not cover laboratory fees, sedation or specialist referral costs.",
                "Discounts apply to our standard fees and cannot be combined with insurance benefits for the same service.",
                "Payment is monthly by card; you can cancel with 30 days' notice.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-[15px] leading-[1.7] text-ink">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-teal-400" />
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/patients/insurance" className="link-arrow mt-6">
              Compare with insurance
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </Reveal>

          <Reveal delay={80} className="min-w-0">
            <div className="overflow-hidden rounded-[22px] border border-line bg-white">
              <div className="border-b border-line px-5 py-4">
                <h3 className="font-serif text-[21px] font-bold text-teal-deep">
                  Membership vs. insurance
                </h3>
              </div>
              <div className="table-wrap !rounded-none !border-0">
                <table className="compare-table">
                  <thead>
                    <tr>
                      <th scope="col">&nbsp;</th>
                      <th scope="col">Membership</th>
                      <th scope="col">PPO insurance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Waiting periods</td>
                      <td>None</td>
                      <td>Often 6–12 months for major care</td>
                    </tr>
                    <tr>
                      <td>Annual maximum</td>
                      <td>None</td>
                      <td>Usually $1,000–$2,000</td>
                    </tr>
                    <tr>
                      <td>Claims paperwork</td>
                      <td>None</td>
                      <td>Filed by us, decided by insurer</td>
                    </tr>
                    <tr>
                      <td>Covered by employer</td>
                      <td>No</td>
                      <td>Sometimes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow" data-anim="fade" data-anim-y="16">Plan FAQs</p>
            <h2 className="display-2 mt-3" data-anim="heading" data-highlight="practical questions">The practical questions.</h2>
            <p className="lead mt-4 max-w-[40ch]" data-anim="fade">
              If you are weighing up membership versus insurance, we will compare
              both using your actual treatment needs.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <FaqAccordion items={planFaqs} idPrefix="plan-faq" />
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Ready to join a plan?"
        copy="Ask at your next visit or call the studio. Joining takes a few minutes and your first cleaning can usually be booked the same week."
        primaryLabel="Book an appointment"
      />
    </>
  );
}
