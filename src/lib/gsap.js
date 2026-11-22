import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { Observer } from "gsap/Observer";
import { useGSAP } from "@gsap/react";

// Register every plugin exactly once for the whole app. The site builds on
// GSAP 3.13+, where SplitText, Observer and ScrollTrigger are all part of the
// free package.
gsap.registerPlugin(ScrollTrigger, SplitText, Observer, useGSAP);

// One global default so every timeline inherits the calm brand easing.
gsap.defaults({ ease: "power3.out" });

export { gsap, ScrollTrigger, SplitText, Observer, useGSAP };
