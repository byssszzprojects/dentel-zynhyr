import { gsap, useGSAP } from "../lib/gsap.js";

const NO_PREFERENCE = "(prefers-reduced-motion: no-preference)";

/**
 * The calm eyebrow reveal: the label settles out of a wide 0.35em tracking
 * into its designed tracking while fading in and rising 12px. The eyebrow is
 * an inline-flex label on its own line, so the tracking change cannot move any
 * other content; the final letter-spacing is read from CSS (0.18em today)
 * rather than hard-coded, so the brand tracking is preserved.
 */
export function useEyebrowReveal(scope, dependencies = []) {
  useGSAP(
    () => {
      const root = scope.current;
      if (!root) return undefined;

      // The home hero's address label carries an icon and a long line; leaving
      // it out keeps the tracking change from ever wrapping it on a phone.
      const items = Array.from(root.querySelectorAll(".eyebrow")).filter(
        (el) => !el.querySelector("svg")
      );
      if (!items.length) return undefined;

      const mm = gsap.matchMedia();

      mm.add(NO_PREFERENCE, () => {
        const tweens = [];

        items.forEach((el) => {
          const end = window.getComputedStyle(el).letterSpacing;
          const final = !end || end === "normal" ? "0em" : end;

          gsap.set(el, {
            opacity: 0,
            y: 12,
            letterSpacing: "0.35em",
          });

          const tween = gsap.to(el, {
            opacity: 1,
            y: 0,
            letterSpacing: final,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              once: true,
            },
            onComplete: () => {
              gsap.set(el, {
                clearProps: "opacity,transform,letterSpacing",
              });
            },
          });

          tweens.push(tween);
        });

        return () => {
          tweens.forEach((tween) => {
            tween.scrollTrigger?.kill();
            tween.kill();
          });
          items.forEach((el) => {
            gsap.set(el, {
              clearProps: "opacity,transform,letterSpacing",
            });
          });
        };
      });

      return () => mm.revert();
    },
    { scope, dependencies, revertOnUpdate: true }
  );
}
