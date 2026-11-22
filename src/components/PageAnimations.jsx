import { gsap, ScrollTrigger, useGSAP } from "../lib/gsap.js";
import { useHeadingReveal } from "../hooks/useHeadingReveal.js";
import { useEyebrowReveal } from "../hooks/useEyebrowReveal.js";

const EASE = "power3.out";

/**
 * One global animation controller for the current page.
 *
 * It reads the declarative `data-anim` attributes rendered by the pages and
 * animates them inside a single GSAP context scoped to <main>. Route changes
 * re-run the controller with a fresh context, so triggers never stack up.
 */
export default function PageAnimations({ scope, pathname }) {
  useHeadingReveal(scope, [pathname]);
  useEyebrowReveal(scope, [pathname]);

  useGSAP(
    () => {
      const root = scope.current;
      if (!root) return undefined;

      let cancelled = false;
      const refresh = () => {
        if (!cancelled) ScrollTrigger.refresh();
      };
      const imageListeners = [];
      const mm = gsap.matchMedia();

      // Simple, calm motion only when the visitor has not asked for reduced
      // motion. In the reduced branch nothing is hidden or moved at all.
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          root,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.3,
            ease: "power2.out",
            clearProps: "opacity",
          }
        );

        // Eyebrows without an icon are handled by their own tracking reveal.
        root.querySelectorAll('[data-anim="fade"]').forEach((el) => {
          if (el.classList.contains("eyebrow") && !el.querySelector("svg")) {
            return;
          }
          const hero = el.dataset.animMode === "hero";
          const y = Number(el.dataset.animY || 24);
          const delay = Number(el.dataset.animDelay || 0);
          // Eyebrows are short labels and use a slightly quicker fade (0.6s);
          // longer copy settles over 0.8s.
          const duration = Number(
            el.dataset.animDuration || (y <= 16 ? 0.6 : 0.8)
          );

          gsap.set(el, { opacity: 0, y });
          gsap.to(el, {
            opacity: 1,
            y: 0,
            duration,
            ease: EASE,
            delay: hero ? delay : 0.05,
            onComplete: () => gsap.set(el, { clearProps: "opacity,transform" }),
            ...(hero
              ? {}
              : {
                  scrollTrigger: {
                    trigger: el,
                    start: "top 88%",
                    once: true,
                  },
                }),
          });
        });

        // Card grids: one gentle stagger per grid as it enters the viewport.
        root.querySelectorAll('[data-anim="stagger"]').forEach((container) => {
          const items = Array.from(container.children).filter(
            (child) => child.nodeType === 1
          );
          if (!items.length) return;

          gsap.set(items, { opacity: 0, y: 40, scale: 0.98 });
          gsap.to(items, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: EASE,
            stagger: 0.12,
            onComplete: () =>
              gsap.set(items, { clearProps: "opacity,transform" }),
            scrollTrigger: {
              trigger: container,
              start: "top 85%",
              once: true,
            },
          });
        });

        // Slow image reveals (hero and page-hero images).
        root.querySelectorAll('[data-anim="image"]').forEach((el) => {
          const hero = el.dataset.animMode === "hero";
          gsap.set(el, { scale: 1.06 });
          gsap.to(el, {
            scale: 1,
            duration: 1.4,
            ease: "power2.out",
            delay: hero ? 0.15 : 0,
            onComplete: () => gsap.set(el, { clearProps: "scale" }),
            ...(hero
              ? {}
              : {
                  scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    once: true,
                  },
                }),
          });
        });

        // Numbers and stats.
        root.querySelectorAll('[data-anim="counter"]').forEach((el) => {
          const raw = el.dataset.counter;
          const target = Number(
            raw ?? el.textContent.replace(/[^\d.]/g, "")
          );
          if (!Number.isFinite(target)) return;

          const decimals = Number(el.dataset.counterDecimals || 0);
          const suffix = el.dataset.counterSuffix || "";
          const counter = { value: 0 };

          gsap.to(counter, {
            value: target,
            duration: 1.4,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              once: true,
            },
            onUpdate: () => {
              el.textContent = `${counter.value.toFixed(decimals)}${suffix}`;
            },
            onComplete: () => {
              el.textContent = `${target.toFixed(decimals)}${suffix}`;
            },
          });
        });
      });

      // Light parallax is desktop-only and never part of the reduced mode.
      mm.add(
        "(prefers-reduced-motion: no-preference) and (min-width: 768px) and (hover: hover) and (pointer: fine)",
        () => {
          root.querySelectorAll("[data-parallax]").forEach((el) => {
            gsap.fromTo(
              el,
              { yPercent: -6 },
              {
                yPercent: 6,
                ease: "none",
                scrollTrigger: {
                  trigger: el.parentElement || el,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: true,
                },
              }
            );
          });
        }
      );

      // Recalculate triggers once the new route has painted and whenever a
      // late image finishes loading.
      requestAnimationFrame(refresh);
      root.querySelectorAll("img").forEach((img) => {
        if (img.complete) return;
        const onLoad = () => refresh();
        img.addEventListener("load", onLoad, { once: true });
        imageListeners.push([img, onLoad]);
      });
      if (document.fonts?.ready) {
        document.fonts.ready.then(refresh).catch(() => {});
      }

      return () => {
        cancelled = true;
        imageListeners.forEach(([img, onLoad]) =>
          img.removeEventListener("load", onLoad)
        );
        mm.revert();
      };
    },
    { scope, dependencies: [pathname], revertOnUpdate: true }
  );

  return null;
}
