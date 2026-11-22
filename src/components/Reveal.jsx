import { useRef } from "react";
import { gsap, useGSAP } from "../lib/gsap.js";

/**
 * Lightweight scroll reveal used across the site.
 *
 * The visual state is applied from useGSAP (useLayoutEffect) rather than CSS,
 * so there is no flash before hydration and content stays visible when
 * animation is unavailable. Grid wrappers stagger their direct children;
 * card wrappers get the slightly larger card motion; everything else fades up
 * a little. Wrappers inside a global stagger grid step aside so the two
 * animations never fight over the same element.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
  id,
  fx,
}) {
  const ref = useRef(null);

  useGSAP(
    () => {
      const node = ref.current;
      if (!node) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      if (node.parentElement?.closest('[data-anim="stagger"]')) return;

      const isGrid = /\bgrid\b/.test(className);
      const isCard = node.firstElementChild?.tagName === "A";
      const targets = isGrid ? Array.from(node.children) : [node];
      if (!targets.length) return;

      const cardMotion = isGrid || isCard;
      gsap.set(targets, {
        opacity: 0,
        y: cardMotion ? 40 : 24,
        ...(cardMotion ? { scale: 0.98 } : {}),
      });

      gsap.to(targets, {
        opacity: 1,
        y: 0,
        ...(cardMotion ? { scale: 1 } : {}),
        duration: 0.8,
        ease: "power3.out",
        stagger: isGrid ? 0.12 : 0,
        delay: delay / 1000,
        onComplete: () => gsap.set(targets, { clearProps: "opacity,transform" }),
        scrollTrigger: {
          trigger: node,
          start: "top 88%",
          once: true,
        },
      });
    },
    { scope: ref }
  );

  return (
    <Tag
      ref={ref}
      id={id}
      className={`reveal ${className}`}
      {...(fx ? { "data-fx": fx } : {})}
    >
      {children}
    </Tag>
  );
}
