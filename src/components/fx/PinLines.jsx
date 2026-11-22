import { useRef } from "react";
import { gsap, useGSAP } from "../../lib/gsap.js";

const LINES = [
  "Calm rooms.",
  "Unhurried appointments.",
  "Plain-language dentistry.",
];

/**
 * E — pinned line swap (Home only).
 *
 * Desktop fine-pointer visitors get one screen of scroll where the three lines
 * mask-reveal in sequence inside a pinned stage. Mobile, touch, reduced motion
 * and no-JS simply show the three lines stacked in normal flow.
 */
export default function PinLines() {
  const rootRef = useRef(null);
  const stageRef = useRef(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      const stage = stageRef.current;
      if (!root || !stage) return undefined;

      const lines = Array.from(stage.querySelectorAll(".pin-line__text"));
      if (!lines.length) return undefined;

      const mm = gsap.matchMedia();

      mm.add(
        "(prefers-reduced-motion: no-preference) and (min-width: 1024px) and (hover: hover) and (pointer: fine)",
        () => {
          stage.classList.add("is-pinned");
          gsap.set(lines, { yPercent: 110, opacity: 0 });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: root,
              start: "top top",
              end: "+=100%",
              pin: stage,
              scrub: 0.6,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          lines.forEach((line, index) => {
            tl.to(
              line,
              {
                yPercent: 0,
                opacity: 1,
                duration: 0.5,
                ease: "power3.out",
              },
              index
            );
            if (index < lines.length - 1) {
              tl.to(
                line,
                {
                  yPercent: -110,
                  opacity: 0,
                  duration: 0.4,
                  ease: "power2.out",
                },
                index + 0.62
              );
            }
          });

          // A short hold on the final line before the section unpins.
          tl.to({}, { duration: 0.4 });

          return () => {
            stage.classList.remove("is-pinned");
            gsap.set(lines, { clearProps: "transform,opacity" });
          };
        }
      );

      return () => mm.revert();
    },
    { scope: rootRef }
  );

  return (
    <section
      ref={rootRef}
      className="pin-section"
      aria-label="Why patients stay"
    >
      <div ref={stageRef} className="pin-stage">
        <div className="container-page">
          <div className="pin-lines">
            {LINES.map((line, index) => (
              <p className="pin-line" key={line}>
                <span className="pin-line__index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="pin-line__mask">
                  <span className="pin-line__text">{line}</span>
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
