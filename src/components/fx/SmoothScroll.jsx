import { useEffect } from "react";
import { createSmoothScroll } from "../../lib/smoothScroll.js";

const SMOOTH_QUERY =
  "(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)";

/**
 * Smooth scrolling for mouse-driven desktops only. Touch devices keep their
 * native momentum scroll and reduced-motion visitors get an instant page.
 */
export default function SmoothScroll() {
  useEffect(() => {
    const mq = window.matchMedia(SMOOTH_QUERY);
    let destroy = null;

    const sync = () => {
      if (mq.matches && !destroy) {
        destroy = createSmoothScroll();
      } else if (!mq.matches && destroy) {
        destroy();
        destroy = null;
      }
    };

    sync();
    mq.addEventListener("change", sync);

    return () => {
      mq.removeEventListener("change", sync);
      if (destroy) destroy();
      destroy = null;
    };
  }, []);

  return null;
}
