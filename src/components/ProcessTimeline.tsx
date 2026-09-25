import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { processSteps } from "../data/content";

export default function ProcessTimeline() {
  return (
    <section className="bg-ivory">
      <div className="container-lux py-28 md:py-36">
        <Reveal>
          <SectionLabel label="The Way We Work" />
          <h2 className="font-serif text-forest text-6xl md:text-7xl mt-6">Our Process</h2>
        </Reveal>

        {/* Desktop horizontal timeline */}
        <div className="hidden lg:grid grid-cols-5 gap-6 mt-20 relative">
          <div className="absolute top-[14px] left-0 right-0 h-px bg-forest/15" />
          {processSteps.map((s, i) => (
            <Reveal key={s.number} delay={i * 0.1} className="relative pt-0">
              <div className="w-[9px] h-[9px] rounded-full bg-gold relative z-10 mb-8" />
              <span className="font-serif text-xl text-gold">{s.number}</span>
              <h3 className="font-serif text-2xl text-forest mt-2">{s.title}</h3>
              <p className="text-forest/60 mt-3 leading-relaxed text-sm">{s.description}</p>
            </Reveal>
          ))}
        </div>

        {/* Mobile vertical timeline */}
        <div className="lg:hidden mt-14 relative pl-8">
          <div className="absolute top-1 left-[3px] bottom-1 w-px bg-forest/15" />
          <div className="flex flex-col gap-12">
            {processSteps.map((s, i) => (
              <Reveal key={s.number} delay={i * 0.08} className="relative">
                <div className="w-[7px] h-[7px] rounded-full bg-gold absolute -left-[33px] top-2" />
                <span className="font-serif text-xl text-gold">{s.number}</span>
                <h3 className="font-serif text-2xl text-forest mt-1">{s.title}</h3>
                <p className="text-forest/60 mt-2 leading-relaxed text-sm max-w-sm">{s.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
