import { gsap, useGSAP } from "../lib/gsap.js";

const DESKTOP =
  "(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)";
const MAX_TILT = 4;

/**
 * G — card tilt.
 *
 * The wrapper (`data-fx="tilt"`) supplies perspective; the first element child
 * is the card. Rotation is capped at 4 degrees and the card image eases to 1.04
 * over 0.6s. Desktop fine-pointer only; reduced motion gets the static card.
 * There is deliberately no highlight or overlay layer on the card.
 */
export function useTiltCards(dependencies = []) {
  useGSAP(
    () => {
      const wrappers = Array.from(
        document.querySelectorAll('[data-fx="tilt"]')
      ).filter((el) => el.firstElementChild);
      if (!wrappers.length) return undefined;

      const mm = gsap.matchMedia();

      mm.add(DESKTOP, () => {
        const cleanups = wrappers.map((wrapper) => {
          const card = wrapper.firstElementChild;
          const image = card.querySelector("img");

          const rotateX = gsap.quickTo(card, "rotationX", {
            duration: 0.55,
            ease: "power3.out",
          });
          const rotateY = gsap.quickTo(card, "rotationY", {
            duration: 0.55,
            ease: "power3.out",
          });

          const onEnter = () => {
            card.classList.add("tilt-active");
            if (image) {
              gsap.to(image, {
                scale: 1.04,
                duration: 0.6,
                ease: "power3.out",
                overwrite: true,
              });
            }
          };

          const onMove = (event) => {
            const rect = wrapper.getBoundingClientRect();
            if (!rect.width || !rect.height) return;

            const px = (event.clientX - rect.left) / rect.width - 0.5;
            const py = (event.clientY - rect.top) / rect.height - 0.5;

            rotateX(-py * MAX_TILT * 2);
            rotateY(px * MAX_TILT * 2);
          };

          const onLeave = () => {
            card.classList.remove("tilt-active");
            rotateX(0);
            rotateY(0);
            if (image) {
              gsap.to(image, {
                scale: 1,
                duration: 0.6,
                ease: "power3.out",
                overwrite: true,
              });
            }
            gsap.to(card, {
              rotationX: 0,
              rotationY: 0,
              duration: 0.6,
              ease: "power3.out",
              overwrite: "auto",
              onComplete: () => gsap.set(card, { clearProps: "transform" }),
            });
          };

          wrapper.addEventListener("pointerenter", onEnter);
          wrapper.addEventListener("pointermove", onMove);
          wrapper.addEventListener("pointerleave", onLeave);

          return () => {
            wrapper.removeEventListener("pointerenter", onEnter);
            wrapper.removeEventListener("pointermove", onMove);
            wrapper.removeEventListener("pointerleave", onLeave);
            card.classList.remove("tilt-active");
            gsap.killTweensOf(card);
            if (image) gsap.killTweensOf(image);
            gsap.set(card, { clearProps: "transform" });
            if (image) gsap.set(image, { clearProps: "transform" });
          };
        });

        return () => cleanups.forEach((cleanup) => cleanup());
      });

      return () => mm.revert();
    },
    { dependencies, revertOnUpdate: true }
  );
}
