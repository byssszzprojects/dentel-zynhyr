import { useEffect, useRef, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon, StarIcon } from "./Icons.jsx";
import { QuoteIcon } from "./ExtraIcons.jsx";

export default function ReviewsSlider({ reviews }) {
  const trackRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = () => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft < 8);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 8);
  };

  useEffect(() => {
    update();
    const el = trackRef.current;
    if (!el) return undefined;
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scroll = (direction) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("[data-review-card]");
    const distance = card ? card.offsetWidth + 20 : 340;
    el.scrollBy({ left: direction * distance, behavior: "smooth" });
  };

  return (
    <div>
      <div
        ref={trackRef}
        className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        role="group"
        aria-label="Patient reviews, scrollable"
        tabIndex={0}
      >
        {reviews.map((review) => (
          <figure
            key={review.name}
            data-review-card
            className="w-[86%] flex-none snap-start rounded-[24px] border border-line bg-white p-6 shadow-[0_10px_30px_#2a413c0d] sm:w-[47%] lg:w-[32%] md:p-7"
          >
            <div className="flex items-center justify-between">
              <div className="flex gap-0.5 text-star" aria-label={`${review.rating} out of 5 stars`}>
                {Array.from({ length: review.rating }).map((_, index) => (
                  <StarIcon key={index} className="h-4 w-4" />
                ))}
              </div>
              <QuoteIcon className="h-7 w-7 text-mint-300" />
            </div>
            <blockquote className="mt-4 text-[16px] leading-[1.7] text-ink">
              “{review.quote}”
            </blockquote>
            <figcaption className="mt-5 border-t border-line pt-4">
              <p className="text-[15px] font-medium text-teal-deep">{review.name}</p>
              <p className="text-[13px] text-ink-soft">{review.detail}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-2 flex items-center justify-between gap-4">
        <p className="text-[13px] text-ink-soft">
          Reviews are collected from verified patients. Individual experiences vary.
        </p>
        <div className="flex flex-none gap-2">
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-teal-deep transition-colors hover:bg-mint disabled:opacity-40"
            onClick={() => scroll(-1)}
            disabled={atStart}
            aria-label="Previous reviews"
          >
            <ArrowLeftIcon />
          </button>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-teal-deep transition-colors hover:bg-mint disabled:opacity-40"
            onClick={() => scroll(1)}
            disabled={atEnd}
            aria-label="Next reviews"
          >
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
