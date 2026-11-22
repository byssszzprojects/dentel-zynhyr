import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AlertIcon, CalendarIcon } from "./ExtraIcons.jsx";
import { ChatIcon, CloseIcon, PhoneIcon } from "./Icons.jsx";
import { clinic } from "../data/clinic.js";
import { scrollToNode, scrollToTop } from "../lib/smoothScroll.js";

const COOKIE_KEY = "dentel-cookie-choice";

export function EmergencyBanner({ onClose }) {
  return (
    <div className="bg-teal-deep text-white">
      <div className="container-page flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-2.5 text-[13px]">
        <p className="flex items-center gap-2">
          <AlertIcon className="h-4 w-4 flex-none text-mint-300" />
          <span>
            <strong className="font-medium">Dental emergency?</strong> Same-day
            visits seven days a week.
          </span>
        </p>
        <div className="flex items-center gap-4">
          <a
            href={clinic.phoneHref}
            className="font-medium underline decoration-mint-300 decoration-2 underline-offset-4 hover:text-mint-300"
          >
            Call {clinic.phone}
          </a>
          <button
            type="button"
            onClick={onClose}
            aria-label="Dismiss emergency banner"
            className="grid h-7 w-7 place-items-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
          >
            <CloseIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function MobileActionBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[70] border-t border-line bg-white/95 px-3 pb-[max(10px,env(safe-area-inset-bottom))] pt-2.5 backdrop-blur md:hidden"
      role="region"
      aria-label="Quick actions"
    >
      <div className="grid grid-cols-2 gap-2">
        <a href={clinic.phoneHref} className="btn btn-outline btn-sm gap-2">
          <PhoneIcon className="h-4 w-4" />
          Call now
        </a>
        <Link to="/book" className="btn btn-primary btn-sm gap-2">
          <CalendarIcon className="h-4 w-4" />
          Book
        </Link>
      </div>
    </div>
  );
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.localStorage.getItem(COOKIE_KEY)) {
      const timer = window.setTimeout(() => setVisible(true), 800);
      return () => window.clearTimeout(timer);
    }
    return undefined;
  }, []);

  const choose = (choice) => {
    window.localStorage.setItem(COOKIE_KEY, choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      className="rise-in fixed inset-x-4 bottom-[96px] z-[80] rounded-[22px] border border-line bg-white p-5 shadow-[0_24px_60px_#2a413c2e] md:bottom-6 md:left-6 md:right-auto md:max-w-[420px]"
    >
      <div className="flex items-start gap-3">
        <span className="mt-0.5 grid h-9 w-9 flex-none place-items-center rounded-full bg-mint text-teal-deep">
          <ChatIcon className="h-4 w-4" />
        </span>
        <div>
          <p className="text-[15px] font-medium text-teal-deep">
            Cookies on this site
          </p>
          <p className="mt-1 text-[13px] leading-[1.6] text-ink-soft">
            We use essential cookies to keep the site working and optional
            analytics to understand which pages help patients. You can change
            this at any time in our{" "}
            <Link to="/privacy" className="link-inline">
              privacy policy
            </Link>
            .
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={() => choose("all")}
            >
              Accept all
            </button>
            <button
              type="button"
              className="btn btn-outline btn-sm"
              onClick={() => choose("essential")}
            >
              Essential only
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const node = document.querySelector(hash);
      if (node) {
        scrollToNode(node, -120);
        return;
      }
    }
    scrollToTop();
  }, [pathname, hash]);

  return null;
}
