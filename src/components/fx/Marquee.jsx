import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "../../lib/gsap.js";

const DEFAULT_ITEMS = [
  "Same-week appointments",
  "Most PPO plans accepted",
  "Saturday hours",
  "Calm rooms",
];

/**
 * E — scroll-velocity marquee.
 *
 * Two identical groups loop at xPercent -50. Scroll velocity drives the
 * playback speed and direction (down = left, up = right) and adds up to 4
 * degrees of skew, then eases back. Decorative, so the whole strip is hidden
 * from assistive technology; the same phrases are read in the page copy.
 */
export default function Marquee({ items = DEFAULT_ITEMS }) {
  const rootRef = useRef(null);
  const trackRef = useRef(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      const track = trackRef.current;
      if (!root || !track) return undefined;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const loop = gsap.to(track, {
          xPercent: -50,
          duration: 28,
          ease: "none",
          repeat: -1,
        });
        loop.timeScale(0.5);

        const skewTo = gsap.quickTo(track, "skewX", {
          duration: 0.45,
          ease: "power3.out",
        });

        let idleTimer = 0;
        let direction = 1;

        const trigger = ScrollTrigger.create({
          trigger: root,
          start: "top bottom",
          end: "bottom top",
          onUpdate(self) {
            const velocity = self.getVelocity();
            if (velocity !== 0) direction = Math.sign(velocity);
            const speed = gsap.utils.clamp(0, 2.4, Math.abs(velocity) / 900);

            loop.timeScale(direction * (0.5 + speed));
            skewTo(gsap.utils.clamp(-4, 4, velocity / 420));

            window.clearTimeout(idleTimer);
            idleTimer = window.setTimeout(() => {
              loop.timeScale(direction * 0.5);
              skewTo(0);
            }, 220);
          },
        });

        return () => {
          window.clearTimeout(idleTimer);
          trigger.kill();
          loop.kill();
          gsap.killTweensOf(track);
          gsap.set(track, { clearProps: "transform" });
          skewTo(0);
        };
      });

      return () => mm.revert();
    },
    { scope: rootRef }
  );

  const group = (key) => (
    <div className="marquee-group" key={key}>
      {items.map((item, index) => (
        <span className="marquee-item" key={`${key}-${index}`}>
          {item}
          <span className="marquee-dot" aria-hidden="true">
            ·
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <section ref={rootRef} className="marquee" aria-hidden="true">
      <div ref={trackRef} className="marquee-track">
        {group("a")}
        {group("b")}
      </div>
    </section>
  );
}
