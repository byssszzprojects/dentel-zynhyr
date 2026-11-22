import { gsap, ScrollTrigger, SplitText, useGSAP } from "../lib/gsap.js";

const NO_PREFERENCE = "(prefers-reduced-motion: no-preference)";
const REDUCED = "(prefers-reduced-motion: reduce)";
const EASE = "power3.out";
// Never let the hero headline wait more than this for webfonts. LCP stays
// well inside one second even on a cold cache.
const FONT_TIMEOUT = 650;
const UNDERLINE_DELAY = 0.4;

let underlineSeq = 0;

export function waitForFonts() {
  if (!document.fonts?.ready) return Promise.resolve();
  return Promise.race([
    document.fonts.ready.catch(() => {}),
    new Promise((resolve) => window.setTimeout(resolve, FONT_TIMEOUT)),
  ]);
}

/** Strip punctuation and case so "family." still matches "family". */
function normalizeWord(value) {
  return (value || "")
    .replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function pathD(seed) {
  return seed % 2 === 0
    ? "M4 6.4 C 20 4.6, 36 7.2, 54 5.6 S 80 7, 96 5.2"
    : "M4 5.6 C 20 7.2, 38 4.8, 56 6.2 S 82 5, 96 6.4";
}

function makeUnderlineSvg(seed) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", "fx-hl__svg");
  svg.setAttribute("viewBox", "0 0 100 10");
  svg.setAttribute("preserveAspectRatio", "none");
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("focusable", "false");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", pathD(seed));
  path.setAttribute("pathLength", "1");
  path.style.strokeDasharray = "1";
  path.style.strokeDashoffset = "1";
  svg.appendChild(path);
  return { svg, path };
}

/**
 * Finds the phrase inside the already-split words and gives every word in it a
 * small hand-drawn SVG underline. Because each path lives inside its own word,
 * the underline follows the phrase when it wraps – including at 320px – and
 * can never widen the heading.
 */
function addWordUnderlines(heading, phrase, words, timeline, played) {
  const parts = phrase.trim().split(/\s+/).map(normalizeWord).filter(Boolean);
  if (!parts.length || !words.length) return [];

  let start = -1;
  for (let i = 0; i <= words.length - parts.length; i += 1) {
    let matches = true;
    for (let j = 0; j < parts.length; j += 1) {
      if (normalizeWord(words[i + j].textContent) !== parts[j]) {
        matches = false;
        break;
      }
    }
    if (matches) {
      start = i;
      break;
    }
  }
  if (start < 0) return [];

  const nodes = [];
  const paths = [];

  for (let j = 0; j < parts.length; j += 1) {
    const word = words[start + j];
    word.classList.add("fx-hl-word");
    const { svg, path } = makeUnderlineSvg(underlineSeq + j);
    word.appendChild(svg);
    nodes.push(svg);
    paths.push(path);
  }
  underlineSeq += parts.length;

  if (timeline) {
    timeline.to(
      paths,
      {
        strokeDashoffset: 0,
        duration: 0.9,
        ease: "power2.out",
        stagger: 0.02,
      },
      UNDERLINE_DELAY
    );
  } else if (played) {
    paths.forEach((path) => {
      path.style.strokeDashoffset = "0";
    });
  }

  return nodes;
}

/** All text nodes inside the heading, ignoring any SVG we already added. */
function textNodes(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue || !node.nodeValue.trim()) {
        return NodeFilter.FILTER_REJECT;
      }
      if (node.parentElement?.closest("svg")) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  const nodes = [];
  let text = "";
  let current = walker.nextNode();
  while (current) {
    nodes.push({ node: current, start: text.length });
    text += current.nodeValue;
    current = walker.nextNode();
  }
  return { nodes, text };
}

function phraseRange(root, phrase) {
  const { nodes, text } = textNodes(root);
  if (!nodes.length) return null;

  const index = text.toLowerCase().indexOf(phrase.toLowerCase());
  if (index < 0) return null;

  const locate = (position) => {
    for (let i = nodes.length - 1; i >= 0; i -= 1) {
      const entry = nodes[i];
      if (position >= entry.start) {
        return { node: entry.node, offset: position - entry.start };
      }
    }
    return null;
  };

  const from = locate(index);
  const to = locate(index + phrase.length);
  if (!from || !to) return null;

  const range = document.createRange();
  range.setStart(from.node, from.offset);
  range.setEnd(to.node, to.offset);
  return range;
}

/**
 * Reduced-motion version: the heading is never split, so the underline is
 * positioned from the real text rects instead. It is static and already drawn.
 */
function addStaticUnderline(heading, phrase) {
  const range = phraseRange(heading, phrase);
  if (!range) return null;

  const host = heading.getBoundingClientRect();
  const rects = Array.from(range.getClientRects()).filter(
    (rect) => rect.width > 6 && rect.height > 0
  );
  if (!rects.length) return null;

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", "fx-hl__svg fx-hl__svg--static");
  svg.setAttribute("width", "100%");
  svg.setAttribute("height", "100%");
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("focusable", "false");

  rects.forEach((rect, index) => {
    const x1 = rect.left - host.left + 2;
    const x2 = rect.right - host.left - 2;
    const width = Math.max(8, x2 - x1);
    const y = rect.bottom - host.top - 3 + (index % 2 === 0 ? 0 : 0.6);
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      `M${x1} ${y} C ${x1 + width * 0.18} ${y - 1.2}, ${
        x1 + width * 0.36
      } ${y + 1.4}, ${x1 + width * 0.54} ${y + 0.2} S ${
        x1 + width * 0.82
      } ${y - 0.8}, ${x2} ${y - 0.6}`
    );
    svg.appendChild(path);
  });

  heading.classList.add("fx-hl-host");
  heading.appendChild(svg);
  return svg;
}

function splitHeading(el, { hero }, cleanups) {
  let timeline = null;
  let underlineNodes = [];
  let safetyTimer = 0;

  const clearUnderlines = () => {
    underlineNodes.forEach((node) => node.remove());
    underlineNodes = [];
    el.querySelectorAll(".fx-hl-word").forEach((word) => {
      word.classList.remove("fx-hl-word");
    });
  };

  const stopTimeline = () => {
    window.clearTimeout(safetyTimer);
    if (timeline) {
      timeline.scrollTrigger?.kill();
      timeline.kill();
      timeline = null;
    }
  };

  cleanups.push(() => {
    stopTimeline();
    clearUnderlines();
  });

  return SplitText.create(el, {
    type: "lines,words",
    linesClass: "split-line",
    wordsClass: "split-word",
    aria: "auto",
    autoSplit: true,
    onSplit(self) {
      clearUnderlines();
      stopTimeline();
      gsap.set(el, { autoAlpha: 1 });

      const lines = self.lines || [];
      const phrase = el.dataset.highlight;
      const played = el.dataset.animPlayed === "true";

      if (played) {
        gsap.set(lines, { opacity: 1, y: 0, filter: "none" });
        if (phrase) {
          underlineNodes = addWordUnderlines(
            el,
            phrase,
            self.words || [],
            null,
            true
          );
        }
        return undefined;
      }

      gsap.set(lines, {
        opacity: 0,
        y: 24,
        filter: hero ? "blur(6px)" : "blur(10px)",
      });

      const tl = gsap.timeline({
        paused: !hero,
        onComplete: () => {
          el.dataset.animPlayed = "true";
          gsap.set(lines, { clearProps: "opacity,transform,filter" });
          window.clearTimeout(safetyTimer);
        },
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

      tl.to(
        lines,
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: EASE,
          stagger: 0.1,
          delay: hero ? 0.2 : 0,
        },
        0
      );

      if (phrase) {
        underlineNodes = addWordUnderlines(
          el,
          phrase,
          self.words || [],
          tl,
          false
        );
      }

      timeline = tl;

      // If a trigger somehow never fires (very fast scrubbing, a throttled
      // background tab, a late layout change), settle anything at or above the
      // viewport instead of ever leaving it blurred or transparent.
      safetyTimer = window.setTimeout(() => {
        if (el.dataset.animPlayed === "true" || !timeline) return;
        if (el.getBoundingClientRect().top >= window.innerHeight) return;
        timeline.progress(1);
      }, 3000);

      return tl;
    },
  });
}

/**
 * Splits and reveals every `[data-anim="lines"]` (hero H1) and
 * `[data-anim="heading"]` (section H2/H3) inside the given scope.
 *
 * Lines fade up from y:24 and a 10px blur (6px for the hero) with a 0.1s
 * stagger. The blur is cleared from the line elements when the tween finishes,
 * so no filter is ever left on the text. Headings are split only after the
 * webfonts are ready, and SplitText reverts on route changes.
 */
export function useHeadingReveal(scope, dependencies = []) {
  useGSAP(
    () => {
      const root = scope.current;
      if (!root) return undefined;

      const headings = Array.from(
        root.querySelectorAll('[data-anim="lines"], [data-anim="heading"]')
      );
      if (!headings.length) return undefined;

      let cancelled = false;
      const mm = gsap.matchMedia();

      mm.add(NO_PREFERENCE, () => {
        // Hide before splitting to avoid a flash of unsplit text. The fallback
        // timer guarantees this is never more than ~650ms.
        gsap.set(headings, { autoAlpha: 0 });

        const splits = [];
        const cleanups = [];

        const start = () => {
          if (cancelled) return;
          headings.forEach((el) => {
            try {
              splits.push(
                splitHeading(
                  el,
                  { hero: el.dataset.anim === "lines" },
                  cleanups
                )
              );
            } catch {
              // If SplitText cannot run, make sure the text is readable.
              gsap.set(el, { autoAlpha: 1 });
            }
          });
          requestAnimationFrame(() => ScrollTrigger.refresh());
        };

        waitForFonts().then(start).catch(start);

        return () => {
          cancelled = true;
          cleanups.forEach((cleanup) => cleanup());
          splits.forEach((split) => {
            try {
              split?.revert();
            } catch {
              /* already reverted */
            }
          });
          gsap.set(headings, { clearProps: "opacity,visibility" });
        };
      });

      mm.add(REDUCED, () => {
        const cleanups = [];
        const start = () => {
          if (cancelled) return;
          headings.forEach((el) => {
            const phrase = el.dataset.highlight;
            if (!phrase) return;

            let svg = addStaticUnderline(el, phrase);
            let frame = 0;
            const draw = () => {
              window.cancelAnimationFrame(frame);
              frame = window.requestAnimationFrame(() => {
                svg?.remove();
                svg = addStaticUnderline(el, phrase);
              });
            };

            const observer =
              typeof ResizeObserver !== "undefined"
                ? new ResizeObserver(draw)
                : null;
            observer?.observe(el);

            cleanups.push(() => {
              window.cancelAnimationFrame(frame);
              observer?.disconnect();
              svg?.remove();
              el.classList.remove("fx-hl-host");
            });
          });
        };

        waitForFonts().then(start).catch(start);

        return () => {
          cancelled = true;
          cleanups.forEach((cleanup) => cleanup());
        };
      });

      return () => {
        cancelled = true;
        mm.revert();
      };
    },
    { scope, dependencies, revertOnUpdate: true }
  );
}

export { REDUCED };
