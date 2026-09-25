import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { pillars } from "../data/content";

export default function WhyChooseUs() {
  return (
    <section className="bg-forest text-ivory">
      <div className="container-lux py-28 md:py-36">
        <Reveal>
          <SectionLabel label="Why The Interior & Exterior Solution" dark />
          <h2 className="font-serif text-5xl md:text-7xl mt-6 max-w-2xl text-balance">
            We don't decorate spaces. <span className="italic text-gold-light">We transform them.</span>
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {pillars.map((p, i) => (
            <Reveal key={p.number} delay={i * 0.1}>
              <div className="flex gap-6">
                <span className="font-serif text-2xl text-gold-light">{p.number}</span>
                <div>
                  <h3 className="font-serif text-3xl">{p.title}</h3>
                  <p className="text-ivory/60 mt-3 leading-relaxed max-w-sm">{p.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
