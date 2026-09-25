import { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { services } from "../data/content";

export default function Services() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="bg-offwhite">
      <div className="container-lux py-28 md:py-36">
        <Reveal className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <SectionLabel label="What We Do" />
            <h2 className="font-serif text-forest text-6xl md:text-7xl mt-6">Services</h2>
          </div>
          <Link
            to="/services"
            className="label-caps text-forest border-b border-forest/40 pb-1 hover:border-gold hover:text-gold transition-colors"
          >
            All Services →
          </Link>
        </Reveal>

        <div className="mt-16 border-t border-forest/15">
          {services.map((s, i) => (
            <Reveal key={s.number} delay={i * 0.08}>
              <div
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className="group border-b border-forest/15 py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center transition-colors duration-500"
              >
                <span className="md:col-span-2 font-serif text-2xl text-gold">{s.number}</span>
                <h3 className="md:col-span-4 font-serif text-3xl md:text-4xl text-forest transition-transform duration-500 group-hover:translate-x-2">
                  {s.title}
                </h3>
                <p
                  className={`md:col-span-5 text-forest/60 leading-relaxed transition-opacity duration-500 ${
                    active === i ? "opacity-100" : "opacity-70"
                  }`}
                >
                  {s.description}
                </p>
                <span
                  className={`md:col-span-1 justify-self-end font-serif text-2xl text-forest transition-all duration-500 ${
                    active === i ? "translate-x-0 opacity-100" : "translate-x-[-8px] opacity-0"
                  }`}
                >
                  →
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
