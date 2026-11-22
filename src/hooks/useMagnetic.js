import { gsap, useGSAP } from "../lib/gsap.js";

const DESKTOP =
  "(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)";
const MAX_PULL = 10;
const HALO = 80;

/**
 * D — magnetic primary buttons and the Book Appointment pill.
 *
 * Only runs for a fine pointer on desktop. The pull is capped at 10px and the
 * 80px halo around each button fades the attraction out, so nothing ever feels
 * twitchy. Everything returns with power3.out and no overshoot.
 */
export function useMagnetic(dependencies = []) {
  useGSAP(
    () => {
      const nodes = Array.from(
        document.querySelectorAll(
          "a.btn-primary, button.btn-primary, .btn-lime, [data-magnetic]"
        )
      );
      const buttons = Array.from(new Set(nodes)).filter(
        (el) => !el.closest("[disabled]")
      );
      if (!buttons.length) return undefined;

      const mm = gsap.matchMedia();

      mm.add(DESKTOP, () => {
        const states = buttons.map((el) => ({
          el,
          x: gsap.quickTo(el, "x", { duration: 0.45, ease: "power3.out" }),
          y: gsap.quickTo(el, "y", { duration: 0.45, ease: "power3.out" }),
        }));

        let frame = 0;
        let pointerX = 0;
        let pointerY = 0;

        const render = () => {
          frame = 0;

          states.forEach((state) => {
            const rect = state.el.getBoundingClientRect();
            if (!rect.width || !rect.height) {
              state.x(0);
              state.y(0);
              return;
            }

            const dx = pointerX - (rect.left + rect.width / 2);
            const dy = pointerY - (rect.top + rect.height / 2);

            // Distance from the button's edge (0 while inside it).
            const outside = Math.hypot(
              Math.max(rect.left - pointerX, 0, pointerX - rect.right),
              Math.max(rect.top - pointerY, 0, pointerY - rect.bottom)
            );
            if (outside > HALO) {
              state.x(0);
              state.y(0);
              return;
            }

            const distance = Math.hypot(dx, dy) || 1;
            const radius = Math.max(rect.width, rect.height) / 2 || 1;
            const pull = Math.min(1, distance / radius);
            const halo = 1 - outside / HALO;
            const magnitude = MAX_PULL * pull * halo;

            state.x((dx / distance) * magnitude);
            state.y((dy / distance) * magnitude);
          });
        };

        const onPointerMove = (event) => {
          pointerX = event.clientX;
          pointerY = event.clientY;
          if (!frame) frame = window.requestAnimationFrame(render);
        };

        const reset = () => {
          states.forEach((state) => {
            state.x(0);
            state.y(0);
          });
        };

        window.addEventListener("pointermove", onPointerMove, { passive: true });
        window.addEventListener("blur", reset);

        return () => {
          if (frame) window.cancelAnimationFrame(frame);
          frame = 0;
          window.removeEventListener("pointermove", onPointerMove);
          window.removeEventListener("blur", reset);
          states.forEach((state) =>
            gsap.set(state.el, { clearProps: "transform" })
          );
          gsap.killTweensOf(buttons);
        };
      });

      return () => mm.revert();
    },
    { dependencies, revertOnUpdate: true }
  );
}
