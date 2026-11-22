import { gsap, SplitText, useGSAP } from "../lib/gsap.js";
import { waitForFonts } from "./useHeadingReveal.js";

/**
 * E — scroll-linked word fill.
 *
 * Words move from 20% to full opacity as the paragraph crosses the viewport,
 * scrubbed at 0.6s so it feels attached to the reader rather than to the
 * scrollbar. Reduced-motion visitors get the paragraph as normal, static text.
 */
export function useScrollText(scope) {
  useGSAP(
    () => {
      const el = scope.current;
      if (!el) return undefined;

      let cancelled = false;
      let split = null;
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        waitForFonts().then(() => {
          if (cancelled) return;

          try {
            split = SplitText.create(el, {
              type: "words",
              wordsClass: "scroll-word",
              aria: "auto",
              autoSplit: true,
              onSplit(self) {
                gsap.set(self.words, { opacity: 0.2 });

                return gsap.to(self.words, {
                  opacity: 1,
                  ease: "none",
                  stagger: 0.03,
                  scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    end: "bottom 55%",
                    scrub: 0.6,
                  },
                });
              },
            });
          } catch {
            gsap.set(el, { clearProps: "opacity" });
          }
        });
      });

      return () => {
        cancelled = true;
        if (split) {
          try {
            split.revert();
          } catch {
            /* already reverted */
          }
        }
        mm.revert();
      };
    },
    { scope }
  );
}
