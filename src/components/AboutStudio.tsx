import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const FOUNDER_PHOTO = "/ChatGPT Image Sep 25, 2026, 01_05_44 PM.png";

export default function AboutStudio() {
  return (
    <section className="bg-offwhite overflow-hidden">
      <div className="container-lux py-24 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <Reveal className="lg:col-span-5 order-2 lg:order-1">
          <div className="relative overflow-hidden border border-forest/10 bg-ivory">
            <div className="absolute left-6 top-6 z-10 flex items-center gap-3 border border-forest/15 bg-ivory/80 px-3 py-1.5 backdrop-blur-[1px]">
              <span className="h-px w-6 bg-gold" />
              <span className="label-caps text-[9px] tracking-[0.24em] text-forest/70">Founder</span>
            </div>
            <img
              src={FOUNDER_PHOTO}
              alt="Mr. Gaurav Sekhawat, founder of The Interior & Exterior Solution"
              loading="lazy"
              className="w-full h-[82vw] sm:h-[58vw] lg:h-[42vw] max-h-[620px] object-cover object-center"
            />
          </div>
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-7 order-1 lg:order-2">
          <SectionLabel label="Meet the Founder" />
          <h2 className="font-serif text-forest text-5xl md:text-6xl lg:text-[5rem] mt-6 leading-[0.94] tracking-[-0.02em]">
            Mr. Gaurav Sekhawat
          </h2>

          <p className="text-forest/65 mt-7 leading-relaxed max-w-xl text-base md:text-lg">
            Building on a foundation shaped by experience, craftsmanship and strong relationships, Mr. Gaurav Sekhawat continues to lead the business with a clear vision for thoughtful, purposeful design.
          </p>

          <div className="mt-8 max-w-xl space-y-5 text-forest/70 text-[15px] md:text-base leading-relaxed">
            <p>
              His journey is rooted in a family business established by his father, whose work and values laid the foundation for what the company is today. As the business continues to evolve, Gaurav brings a contemporary perspective while staying connected to the principles that have shaped its journey.
            </p>
            <p>
              With experience across residential, hospitality, commercial and industrial environments — including projects in Himachal Pradesh and surrounding regions — his approach is centered on creating spaces that balance aesthetics, functionality and lasting value.
            </p>
          </div>

          <div className="mt-10 border-t border-forest/10 pt-5">
            <span className="label-caps text-gold">Founder &amp; Design Lead</span>
          </div>

          <Link
            to="/founder"
            className="sr-only"
            aria-label="View founder profile"
          >
            Founder profile
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
