import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function BrandStatement() {
  return (
    <section className="bg-ivory">
      <div className="container-lux py-28 md:py-40">
        <Reveal>
          <SectionLabel label="Our Philosophy" />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <Reveal delay={0.1} className="lg:col-span-9">
            <h2 className="font-serif text-forest text-[11vw] leading-[0.98] sm:text-[8vw] lg:text-[5.2vw] text-balance">
              We believe luxury
              <br />
              is not what you <span className="italic text-gold">add.</span>
              <br />
              It is what you choose
              <br />
              to leave out.
            </h2>
          </Reveal>

          <Reveal delay={0.3} className="lg:col-span-3 lg:justify-self-end">
            <p className="text-forest/70 text-base md:text-lg leading-relaxed max-w-xs">
              The Interior & Exterior Solution creates refined interiors where architecture, material, light and
              emotion work together — nothing added without purpose.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
