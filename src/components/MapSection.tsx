import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const MAPS_LINK = "https://maps.app.goo.gl/Uuh2owWYHKzKfUAV9";
const EMBED_SRC =
  "https://www.google.com/maps?q=chownk,+Kahnuwan+Road,+Simbel,+Batala,+Punjab+143505&output=embed";

export default function MapSection() {
  return (
    <section className="bg-ivory">
      <div className="container-lux py-28 md:py-36">
        <Reveal className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <SectionLabel label="Find Us" />
            <h2 className="font-serif text-forest text-5xl md:text-6xl mt-6">Batala, Punjab</h2>
          </div>
          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noreferrer"
            className="label-caps text-forest border-b border-forest/40 pb-1 hover:border-gold hover:text-gold transition-colors"
          >
            Get Directions →
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative border border-forest/15 overflow-hidden">
            <div className="absolute top-0 left-0 z-10 bg-forest text-ivory px-6 py-4 m-5 max-w-xs">
              <p className="label-caps text-gold-light">Studio Address</p>
              <p className="text-sm mt-2 leading-relaxed text-ivory/85">
                chownk, Kahnuwan Road, Simbel, Batala, Punjab 143505
              </p>
            </div>
            <iframe
              title="The Interior & Exterior Solution studio location on Google Maps"
              src={EMBED_SRC}
              width="100%"
              height="500"
              style={{ border: 0, filter: "grayscale(0.15) contrast(1.05)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[420px] md:h-[500px] grayscale-[10%]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
