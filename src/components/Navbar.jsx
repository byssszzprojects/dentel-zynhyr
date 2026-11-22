import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { gsap, useGSAP } from "../lib/gsap.js";
import { ArrowRightIcon, ChevronDownIcon, CloseIcon, MenuIcon, PhoneIcon } from "./Icons.jsx";
import { clinic } from "../data/clinic.js";
import { coreServices, specialServices } from "../data/services/index.js";

const patientLinks = [
  { label: "Payment & financing", to: "/patients/payment-financing" },
  { label: "Insurance", to: "/patients/insurance" },
  { label: "Dental plans", to: "/patients/dental-plans" },
  { label: "Book an appointment", to: "/book" },
];

const aboutLinks = [
  { label: "About Dentel", to: "/about" },
  { label: "Meet our dentists", to: "/about/dentists" },
  { label: "Leadership", to: "/about/leadership" },
  { label: "Innovation & technology", to: "/about/technology" },
  { label: "Careers", to: "/careers" },
];

const directLinks = [
  { label: "Locations", to: "/locations" },
  { label: "Blog", to: "/blog" },
];

function Wordmark({ inverted = false }) {
  return (
    <span className="flex items-center gap-2.5">
      <span
        className={`grid h-9 w-9 place-items-center rounded-full font-serif text-[19px] font-bold leading-none ${
          inverted ? "bg-mint-300 text-teal-900" : "bg-teal-deep text-white"
        }`}
        aria-hidden="true"
      >
        d
      </span>
      <span
        className={`font-serif text-[24px] font-bold leading-none tracking-[-0.02em] ${
          inverted ? "text-white" : "text-teal-deep"
        }`}
      >
        dentel<span className={inverted ? "text-mint-300" : "text-teal"} aria-hidden="true">.</span>
      </span>
    </span>
  );
}

let navbarAnimated = false;

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  useGSAP(
    () => {
      if (navbarAnimated || !navRef.current) return undefined;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set(navRef.current, { opacity: 0, y: -14 });
        gsap.to(navRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          onComplete: () => {
            navbarAnimated = true;
            gsap.set(navRef.current, { clearProps: "opacity,transform" });
          },
        });
      });

      return () => mm.revert();
    },
    { scope: navRef }
  );

  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onPointerDown = (event) => {
      if (!event.target.closest(".nav-item")) setOpenMenu(null);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  const toggleMenu = (key) =>
    setOpenMenu((current) => (current === key ? null : key));

  return (
    <div ref={navRef} className="nav-wrap container-page">
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      <nav className="nav-shell" aria-label="Main navigation">
        <Link to="/" aria-label={`${clinic.name} home`} className="shrink-0">
          <Wordmark />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          <li className="nav-item relative" data-open={openMenu === "services"}>
            <button
              type="button"
              className="nav-link"
              aria-label="Services"
              aria-expanded={openMenu === "services"}
              aria-controls="menu-services"
              onClick={() => toggleMenu("services")}
            >
              Services
              <ChevronDownIcon className="h-4 w-4" />
            </button>
            <div id="menu-services" className="dropdown-card">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <p className="eyebrow text-[11px]">Core services</p>
                  <ul className="mt-3">
                    {coreServices.map((service) => (
                      <li key={service.slug}>
                        <Link to={`/services/${service.slug}`} className="dropdown-link">
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="eyebrow text-[11px]">Special services</p>
                  <ul className="mt-3">
                    {specialServices.map((service) => (
                      <li key={service.slug}>
                        <Link to={`/services/${service.slug}`} className="dropdown-link">
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
                <p className="text-[13px] text-ink-soft">
                  Not sure what you need? We will help you choose.
                </p>
                <Link to="/services" className="link-arrow text-[12px]">
                  All services
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </li>

          <li className="nav-item relative" data-open={openMenu === "patients"}>
            <button
              type="button"
              className="nav-link"
              aria-label="Patients"
              aria-expanded={openMenu === "patients"}
              aria-controls="menu-patients"
              onClick={() => toggleMenu("patients")}
            >
              Patients
              <ChevronDownIcon className="h-4 w-4" />
            </button>
            <div id="menu-patients" className="dropdown-card !w-[320px]">
              <p className="eyebrow text-[11px]">Patient information</p>
              <ul className="mt-3">
                {patientLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="dropdown-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          <li className="nav-item relative" data-open={openMenu === "about"}>
            <button
              type="button"
              className="nav-link"
              aria-label="About"
              aria-expanded={openMenu === "about"}
              aria-controls="menu-about"
              onClick={() => toggleMenu("about")}
            >
              About
              <ChevronDownIcon className="h-4 w-4" />
            </button>
            <div id="menu-about" className="dropdown-card !w-[320px]">
              <p className="eyebrow text-[11px]">The studio</p>
              <ul className="mt-3">
                {aboutLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="dropdown-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          {directLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                aria-label={link.label}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "bg-mint text-teal-deep" : ""}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={clinic.phoneHref}
            className="hidden items-center gap-2 rounded-full px-3 py-2 text-[14px] font-medium text-teal-deep transition-colors hover:bg-mint xl:inline-flex"
          >
            <PhoneIcon className="h-4 w-4" />
            {clinic.phone}
          </a>
          <Link
            to="/book"
            aria-label="Book Appointment"
            className="btn btn-primary btn-sm hidden sm:inline-flex"
          >
            Book Appointment
          </Link>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-line text-teal-deep transition-colors hover:bg-mint lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div
          id="mobile-nav"
          className="rise-in mt-2 max-h-[calc(100vh-140px)] overflow-y-auto rounded-[24px] border border-line bg-white p-5 shadow-[0_24px_60px_#2a413c1f] lg:hidden"
        >
          <details className="border-b border-line py-3" open>
            <summary className="flex cursor-pointer list-none items-center justify-between text-[16px] font-medium text-teal-deep">
              Services
              <ChevronDownIcon className="h-4 w-4" />
            </summary>
            <ul className="mt-3 grid gap-1">
              {[...coreServices, ...specialServices].map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="block rounded-lg px-2 py-2 text-[15px] text-ink hover:bg-cream"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="link-arrow mt-2 text-[12px]">
                  All services
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                </Link>
              </li>
            </ul>
          </details>

          <details className="border-b border-line py-3">
            <summary className="flex cursor-pointer list-none items-center justify-between text-[16px] font-medium text-teal-deep">
              Patients
              <ChevronDownIcon className="h-4 w-4" />
            </summary>
            <ul className="mt-3 grid gap-1">
              {patientLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="block rounded-lg px-2 py-2 text-[15px] text-ink hover:bg-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </details>

          <details className="border-b border-line py-3">
            <summary className="flex cursor-pointer list-none items-center justify-between text-[16px] font-medium text-teal-deep">
              About
              <ChevronDownIcon className="h-4 w-4" />
            </summary>
            <ul className="mt-3 grid gap-1">
              {aboutLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="block rounded-lg px-2 py-2 text-[15px] text-ink hover:bg-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </details>

          <div className="grid grid-cols-2 gap-2 pt-4">
            {directLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="rounded-full border border-line px-3 py-2 text-center text-[14px] font-medium text-teal-deep"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            to="/book"
            aria-label="Book Appointment"
            className="btn btn-primary mt-3 w-full"
          >
            Book Appointment
          </Link>
        </div>
      )}
    </div>
  );
}
