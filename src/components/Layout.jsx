import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import PageAnimations from "./PageAnimations.jsx";
import SmoothScroll from "./fx/SmoothScroll.jsx";
import FxLayer from "./fx/FxLayer.jsx";
import { gsap } from "../lib/gsap.js";
import {
  CookieBanner,
  EmergencyBanner,
  MobileActionBar,
  ScrollToTop,
} from "./SiteChrome.jsx";

export default function Layout() {
  const [bannerOpen, setBannerOpen] = useState(true);
  const mainRef = useRef(null);
  const fadingRef = useRef(false);
  const navTimerRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const routeKey = `${location.pathname}${location.search}`;

  useEffect(() => {
    fadingRef.current = false;
  }, [routeKey]);

  // Fade the page content out before internal navigation, then let the page
  // controller fade the next route in. Reduced-motion users navigate normally.
  useEffect(() => {
    const onClick = (event) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a[href]");
      if (!anchor) return;
      if (anchor.target && anchor.target !== "_self") return;
      if (anchor.hasAttribute("download")) return;
      if (anchor.dataset.noTransition !== undefined) return;

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#") || /^(mailto:|tel:|sms:)/i.test(href)) {
        return;
      }

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      let url;
      try {
        url = new URL(anchor.href, window.location.href);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin) return;
      if (
        url.pathname === window.location.pathname &&
        url.search === window.location.search
      ) {
        return;
      }

      const main = mainRef.current;
      if (!main) return;
      if (fadingRef.current) {
        event.preventDefault();
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      fadingRef.current = true;

      const next = `${url.pathname}${url.search}${url.hash}`;
      let navigated = false;
      const go = () => {
        if (navigated) return;
        navigated = true;
        window.clearTimeout(navTimerRef.current);
        navigate(next);
      };

      // Navigate even if the fade-out tween never completes (throttled frames
      // in a background tab, for example) so links never feel dead.
      navTimerRef.current = window.setTimeout(go, 450);

      gsap.to(main, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto",
        onComplete: go,
      });
    };

    document.addEventListener("click", onClick, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.clearTimeout(navTimerRef.current);
    };
  }, [navigate]);

  return (
    <div className="flex min-h-screen flex-col">
      <SmoothScroll />
      <ScrollToTop />
      {bannerOpen && <EmergencyBanner onClose={() => setBannerOpen(false)} />}
      <Navbar />
      <main id="main" ref={mainRef} className="flex-1">
        <PageAnimations scope={mainRef} pathname={routeKey} />
        <Outlet />
      </main>
      <Footer />
      <MobileActionBar />
      <CookieBanner />
      <FxLayer pathname={routeKey} />
    </div>
  );
}
