import { Link } from "react-router-dom";
import { ArrowRightIcon, PhoneIcon } from "./Icons.jsx";
import { clinic } from "../data/clinic.js";

export function ServiceCard({ service, compact = false }) {
  return (
    <Link
      to={`/services/${service.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:border-mint-300 hover:shadow-[0_20px_44px_#2a413c14]"
    >
      {!compact && (
        <div className="overflow-hidden bg-cream-200">
          <img
            src={service.image}
            srcSet={service.imageSrcSet}
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            alt={service.imageAlt || ""}
            width={service.imageWidth}
            height={service.imageHeight}
            loading="lazy"
            style={service.focus ? { objectPosition: service.focus } : undefined}
            className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3 className="line-clamp-2 min-h-[52px] font-serif text-[21px] font-bold leading-tight text-teal-deep">
          {service.name}
        </h3>
        <p className="mt-2 line-clamp-3 flex-1 text-[15px] leading-[1.6] text-ink-soft">
          {service.benefit}
        </p>
        <span className="mt-4 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-teal-deep">
          Learn more
          <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-[13px] text-ink-soft">
        <li>
          <Link to="/" className="hover:text-teal-deep hover:underline">
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-2">
            <span aria-hidden="true" className="text-line">/</span>
            {index === items.length - 1 || !item.to ? (
              <span aria-current="page" className="text-teal-deep">
                {item.label}
              </span>
            ) : (
              <Link to={item.to} className="hover:text-teal-deep hover:underline">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

const IMAGE_RATIOS = {
  landscape: "aspect-[4/3.4]",
  portrait: "aspect-[4/5]",
  square: "aspect-square",
};

export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  imageAlt,
  imageFocus,
  imageWidth,
  imageHeight,
  imageSrcSet,
  imageRatio = "landscape",
  chips = [],
  children,
  breadcrumbs,
}) {
  return (
    <section className="pt-6 md:pt-10">
      <div className="container-page">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
        <div
          className={`mt-5 grid items-center gap-8 ${
            image ? "lg:grid-cols-[1.08fr_0.92fr] lg:gap-14" : "max-w-[760px]"
          }`}
        >
          <div>
            {eyebrow && (
              <p
                className="eyebrow"
                data-anim="fade"
                data-anim-mode="hero"
                data-anim-y="16"
                data-anim-delay="0.05"
              >
                {eyebrow}
              </p>
            )}
            <h1 className="display-1 mt-3 max-w-[16ch]" data-anim="lines">
              {title}
            </h1>
            {lead && (
              <p
                className="lead mt-5 max-w-[52ch]"
                data-anim="fade"
                data-anim-mode="hero"
                data-anim-delay="0.1"
              >
                {lead}
              </p>
            )}
            {chips.length > 0 && (
              <ul
                className="mt-6 flex flex-wrap gap-2"
                data-anim="fade"
                data-anim-mode="hero"
                data-anim-y="16"
                data-anim-delay="0.15"
              >
                {chips.map((chip) => (
                  <li key={chip}>
                    <span className="chip chip-mint">{chip}</span>
                  </li>
                ))}
              </ul>
            )}
            <div
              className="mt-8 flex flex-wrap items-center gap-3"
              data-anim="fade"
              data-anim-mode="hero"
              data-anim-y="16"
              data-anim-delay="0.2"
            >
              {children}
            </div>
          </div>
          {image && (
            <div className="relative">
              <div
                className={`relative overflow-hidden rounded-[36px] rounded-tr-[120px] bg-cream-200 ${
                  IMAGE_RATIOS[imageRatio] || IMAGE_RATIOS.landscape
                }`}
              >
                <img
                  src={image}
                  srcSet={imageSrcSet}
                  sizes={imageSrcSet ? "(min-width: 1024px) 46vw, 100vw" : undefined}
                  alt={imageAlt || ""}
                  width={imageWidth}
                  height={imageHeight}
                  style={imageFocus ? { objectPosition: imageFocus } : undefined}
                  className="parallax-media h-full w-full object-cover"
                  loading="eager"
                  data-anim="image"
                  data-anim-mode="hero"
                  data-parallax
                />
              </div>
              <div className="absolute -bottom-4 left-4 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[13px] shadow-[0_10px_30px_#2a413c1f]">
                <span className="h-2 w-2 rounded-full bg-[#4f8a5b]" />
                <span className="font-medium text-teal-deep">
                  Same-week appointments
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function CtaBand({
  title = "Ready for a calmer dental visit?",
  copy = "Book online in under a minute, or call and we will find a time that works — including Saturday mornings.",
  primaryLabel = "Book Appointment",
  primaryTo = "/book",
}) {
  return (
    <section className="container-page pb-16 pt-4 md:pb-24">
      <div className="relative overflow-hidden rounded-[32px] bg-teal-deep px-6 py-12 text-white md:px-14 md:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-20 h-[320px] w-[320px] rounded-full bg-white/10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 right-24 h-[220px] w-[220px] rounded-full bg-mint-300/10"
        />
        <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p
              className="eyebrow text-mint-300"
              data-anim="fade"
              data-anim-y="16"
            >
              Your next visit
            </p>
            <h2
              className="display-2 mt-3 max-w-[22ch] text-white"
              data-anim="heading"
            >
              {title}
            </h2>
            <p
              className="mt-4 max-w-[52ch] text-[17px] leading-[1.65] text-white/80"
              data-anim="fade"
            >
              {copy}
            </p>
          </div>
          <div
            className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end"
            data-anim="fade"
            data-anim-y="16"
            data-anim-delay="0.1"
          >

            <Link
              to={primaryTo}
              aria-label={primaryLabel}
              className="btn btn-lime w-full sm:w-auto"
            >
              {primaryLabel}
            </Link>
            <a
              href={clinic.phoneHref}
              className="btn border-2 border-white/30 text-white hover:border-white hover:bg-white/10 w-full sm:w-auto"
            >
              <PhoneIcon className="h-4 w-4" />
              {clinic.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
