import { useState } from "react";
import { ChevronDownIcon } from "./Icons.jsx";

export default function FaqAccordion({ items, idPrefix = "faq", defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = index === open;
        const panelId = `${idPrefix}-panel-${index}`;
        const buttonId = `${idPrefix}-button-${index}`;
        return (
          <div key={item.question} className="faq-item" data-open={isOpen}>
            <h3 className="m-0">
              <button
                type="button"
                id={buttonId}
                className="faq-trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : index)}
              >
                <span className="font-sans">{item.question}</span>
                <ChevronDownIcon
                  className={`h-5 w-5 flex-none text-teal transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </h3>
            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="faq-answer fade-in"
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
