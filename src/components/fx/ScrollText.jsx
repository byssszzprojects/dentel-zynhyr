import { useRef } from "react";
import { useScrollText } from "../../hooks/useScrollText.js";

/**
 * A paragraph whose words fill in as it scrolls. Renders a real element with
 * the original text, so the copy is readable before (and without) animation.
 */
export default function ScrollText({
  as: Tag = "p",
  className = "",
  children,
  ...rest
}) {
  const ref = useRef(null);
  useScrollText(ref);

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  );
}
