import Lenis from "lenis";
import { gsap, ScrollTrigger } from "./gsap.js";

/**
 * One Lenis instance for the whole app, kept in module scope so the router can
 * jump to the top of a new route without re-creating it.
 *
 * Lenis only scrolls the window natively, so keyboard scrolling, anchors and
 * the browser's own scroll restoration keep working.
 */
let lenis = null;

export function getLenis() {
  return lenis;
}

export function createSmoothScroll() {
  if (lenis) return () => {};

  const instance = new Lenis({
    duration: 1.1,
    smoothWheel: true,
    anchors: true,
    wheelMultiplier: 1,
    touchMultiplier: 1,
    infinite: false,
  });

  const raf = (time) => instance.raf(time * 1000);

  instance.on("scroll", ScrollTrigger.update);
  gsap.ticker.add(raf);
  // Lenis already smooths the delta; let GSAP follow it exactly.
  gsap.ticker.lagSmoothing(0);

  lenis = instance;

  return () => {
    gsap.ticker.remove(raf);
    instance.off("scroll", ScrollTrigger.update);
    instance.destroy();
    gsap.ticker.lagSmoothing(500, 33);
    if (lenis === instance) lenis = null;
  };
}

export function resizeSmoothScroll() {
  lenis?.resize();
}

export function scrollToTop() {
  if (lenis) {
    lenis.scrollTo(0, { immediate: true, force: true });
  } else {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }
}

export function scrollToNode(node, offset = -96) {
  if (!node) return;
  if (lenis) {
    lenis.scrollTo(node, { offset, duration: 1.1 });
  } else {
    node.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
