import { useMagnetic } from "../../hooks/useMagnetic.js";
import { useTiltCards } from "../../hooks/useTiltCards.js";

/**
 * Pointer-driven effects that are not tied to one React component: magnetic
 * buttons (all pages) and card tilt (only elements marked `data-fx="tilt"`).
 * Re-runs on every route so newly mounted buttons are picked up.
 */
export default function FxLayer({ pathname }) {
  useMagnetic([pathname]);
  useTiltCards([pathname]);
  return null;
}
