import { useState } from "react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { faqs } from "../data/content";

export default function FAQ() {
  const [open, setOpen] = useState<number[]>([0]);

  const toggle = (i: number) => {
    setOpen((prev) => {
      if (prev.includes(i)) return prev.filter((x) => x !== i);
      const next = [...prev, i];
      return next.length > 2 ? next.slice(1) : next;
    });
  };

  return (
    <section className="bg-ivory">
      <div className="container-lux py-28 md:py-36 max-w-4xl mx-auto">
        <Reveal>
          <SectionLabel label="FAQ" align="center" />
          <h2 className="font-serif text-forest text-5xl md:text-6xl mt-6 text-center text-balance">
            Questions, answered.
          </h2>
        </Reveal>

        <div className="mt-16 border-t border-forest/15">
          {faqs.map((f, i) => {
            const isOpen = open.includes(i);
            return (
              <Reveal key={f.q} delay={Math.min(i * 0.05, 0.3)}>
                <div className="border-b border-forest/15">
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between gap-6 py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-xl md:text-2xl text-forest">{f.q}</span>
                    <span
                      className={`font-serif text-2xl text-gold shrink-0 transition-transform duration-500 ${
                        isOpen ? "rotate-45" : "rotate-0"
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className="grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="text-forest/60 leading-relaxed pb-6 max-w-2xl">{f.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
