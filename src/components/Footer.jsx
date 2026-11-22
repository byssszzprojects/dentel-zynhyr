import { Link } from "react-router-dom";
import { ArrowRightIcon, PhoneIcon, PinIcon } from "./Icons.jsx";
import { FacebookIcon, InstagramIcon } from "./ExtraIcons.jsx";
import { clinic } from "../data/clinic.js";
import { coreServices, specialServices } from "../data/services/index.js";

export default function Footer() {
  return (
    <footer className="mt-16 bg-teal-dark text-white">
      <div className="container-page py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <span className="flex items-center gap-2.5">
              <span
                className="grid h-9 w-9 place-items-center rounded-full bg-mint-300 font-serif text-[19px] font-bold leading-none text-teal-900"
                aria-hidden="true"
              >
                d
              </span>
              <span className="font-serif text-[24px] font-bold leading-none tracking-[-0.02em] text-white">
                dentel<span className="text-mint-300" aria-hidden="true">.</span>
              </span>
            </span>

            <p className="mt-5 max-w-[38ch] font-serif text-[26px] leading-[1.25] text-white md:text-[30px]">
              Calm, careful dentistry in the heart of South Austin.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <p className="eyebrow text-[11px] text-mint-300">Visit</p>
                <a
                  href={clinic.mapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 flex gap-2 text-[15px] leading-[1.6] text-white/80 transition-colors hover:text-white"
                >
                  <PinIcon className="mt-0.5 h-4 w-4 flex-none text-mint-300" />
                  <span>
                    {clinic.address.street}
                    <br />
                    {clinic.address.suite}, {clinic.address.city},{" "}
                    {clinic.address.state} {clinic.address.zip}
                  </span>
                </a>
              </div>
              <div>
                <p className="eyebrow text-[11px] text-mint-300">Talk to us</p>
                <a
                  href={clinic.phoneHref}
                  className="mt-2 flex items-center gap-2 text-[16px] font-medium text-white transition-colors hover:text-mint-300"
                >
                  <PhoneIcon className="h-4 w-4 text-mint-300" />
                  {clinic.phone}
                </a>
                <a
                  href={`mailto:${clinic.email}`}
                  className="mt-2 block text-[15px] text-white/80 transition-colors hover:text-white"
                >
                  {clinic.email}
                </a>
                <div className="mt-3 flex gap-2">
                  <a
                    href={clinic.social.instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Dentel on Instagram"
                    className="grid h-9 w-9 place-items-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-mint-300 hover:text-mint-300"
                  >
                    <InstagramIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={clinic.social.facebook}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Dentel on Facebook"
                    className="grid h-9 w-9 place-items-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-mint-300 hover:text-mint-300"
                  >
                    <FacebookIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-[20px] border border-white/15">
              <iframe
                title={`Map showing ${clinic.name} at ${clinic.addressLine}`}
                src={clinic.mapEmbed}
                width="100%"
                height="200"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <p className="eyebrow text-[11px] text-mint-300">Hours</p>
              <ul className="mt-3 space-y-2 text-[14px] text-white/80">
                {clinic.hours.map((row) => (
                  <li key={row.day}>
                    <span className="block text-white">{row.day}</span>
                    <span className="text-white/70">{row.time}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[13px] leading-[1.6] text-mint-300">
                Same-day emergency slots held daily.
              </p>
            </div>

            <div>
              <p className="eyebrow text-[11px] text-mint-300">Care</p>
              <ul className="mt-3 space-y-1.5">
                {coreServices.slice(0, 6).map((service) => (
                  <li key={service.slug}>
                    <Link
                      to={`/services/${service.slug}`}
                      className="text-[14px] text-white/80 transition-colors hover:text-mint-300"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/services" className="text-[14px] text-mint-300 hover:underline">
                    All services
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="eyebrow text-[11px] text-mint-300">Studio</p>
              <ul className="mt-3 space-y-1.5">
                <li>
                  <Link to="/about" className="text-[14px] text-white/80 hover:text-mint-300">
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about/dentists"
                    className="text-[14px] text-white/80 hover:text-mint-300"
                  >
                    Our dentists
                  </Link>
                </li>
                <li>
                  <Link
                    to="/patients/insurance"
                    className="text-[14px] text-white/80 hover:text-mint-300"
                  >
                    Insurance
                  </Link>
                </li>
                <li>
                  <Link
                    to="/patients/dental-plans"
                    className="text-[14px] text-white/80 hover:text-mint-300"
                  >
                    Dental plans
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-[14px] text-white/80 hover:text-mint-300">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-[14px] text-white/80 hover:text-mint-300">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-[14px] text-white/80 hover:text-mint-300"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <p className="mt-5 eyebrow text-[11px] text-mint-300">Special care</p>
              <ul className="mt-3 space-y-1.5">
                {specialServices.slice(0, 4).map((service) => (
                  <li key={service.slug}>
                    <Link
                      to={`/services/${service.slug}`}
                      className="text-[14px] text-white/80 transition-colors hover:text-mint-300"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-3 rounded-[20px] border border-white/15 bg-white/5 p-4">
          <p className="flex-1 text-[14px] leading-[1.6] text-white/80">
            {clinic.emergencyNote}
          </p>
          <Link to="/services/emergency-dentistry" className="btn btn-lime btn-sm">
            Emergency care
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/15 pt-6 text-[13px] text-white/60 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {clinic.name}. Serving {clinic.city} since{" "}
            {clinic.established}.
          </p>
          <nav aria-label="Legal" className="flex flex-wrap gap-x-5 gap-y-2">
            <Link to="/privacy" className="transition-colors hover:text-white">
              Privacy policy
            </Link>
            <Link to="/accessibility" className="transition-colors hover:text-white">
              Accessibility
            </Link>
            <Link to="/contact" className="transition-colors hover:text-white">
              Contact
            </Link>
          </nav>
        </div>
        <p className="mt-4 max-w-[90ch] text-[12px] leading-[1.6] text-white/40">
          Individual treatment results vary. Information on this site is general
          and does not replace an examination or personalised advice from a
          licensed dentist. If you have a medical emergency, call 911.
        </p>
      </div>
    </footer>
  );
}
