import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  return (
    <section className="bg-ivory">
      <div className="container-lux py-28 md:py-36">
        <Reveal>
          <SectionLabel label="What Our Clients Say" align="center" />
        </Reveal>

        {testimonials.length > 0 ? (
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <span className="font-serif text-7xl text-gold leading-none">“</span>
                <p className="font-serif text-2xl md:text-3xl text-forest leading-snug mt-2">
                  {t.quote}
                </p>
                <div className="gold-rule mt-8 mb-4" />
                <p className="label-caps text-forest/60">{t.author}</p>
                <p className="text-sm text-forest/45 mt-1">{t.meta}</p>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal delay={0.15} className="mt-16 flex flex-col items-center text-center">
            <span className="font-serif text-7xl text-gold/50 leading-none">“</span>
            <p className="font-serif italic text-2xl md:text-3xl text-forest/60 leading-snug mt-2 max-w-xl">
              Client stories will be featured here as current projects reach completion.
            </p>
            <p className="label-caps text-forest/40 mt-6">Testimonials — Coming Soon</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
