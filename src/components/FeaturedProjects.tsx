import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { projects } from "../data/projects";

function Meta({ p }: { p: (typeof projects)[number] }) {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 label-caps text-forest/55">
      <span>{p.location}</span>
      <span className="hidden sm:inline text-gold">•</span>
      <span>{p.category}</span>
      <span className="hidden sm:inline text-gold">•</span>
      <span>{p.year}</span>
    </div>
  );
}

export default function FeaturedProjects() {
  const featured = projects.slice(0, 4);

  return (
    <section id="featured-work" className="bg-ivory">
      <div className="container-lux pt-28 md:pt-36 pb-10">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <Reveal>
            <SectionLabel label="Selected Work" />
            <h2 className="font-serif text-forest text-6xl md:text-7xl lg:text-8xl mt-6">
              The Collection
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <Link to="/work" className="label-caps text-forest border-b border-forest/40 pb-1 hover:border-gold hover:text-gold transition-colors">
              View Full Portfolio →
            </Link>
          </Reveal>
        </div>
      </div>

      {/* Project 01 — full width */}
      <Reveal className="mt-20 md:mt-28">
        <Link to={`/work/${featured[0].slug}`} data-cursor="View Project" className="group block relative">
          <div className="container-lux mb-6 flex items-end justify-between">
            <div>
              <span className="font-serif text-2xl text-gold mr-4">{featured[0].number}</span>
              <span className="font-serif text-3xl md:text-5xl text-forest group-hover:text-gold transition-colors duration-500">
                {featured[0].title}
              </span>
            </div>
            <span className="hidden md:block label-caps text-forest/50 group-hover:translate-x-2 transition-transform duration-500">
              View Project →
            </span>
          </div>
          <div className="mx-auto aspect-square w-full max-w-[620px] overflow-hidden">
            <img
              src={featured[0].listImage}
              alt={featured[0].heroAlt}
              loading="lazy"
              className="h-full w-full object-cover group-hover:scale-[1.04] transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
            />
          </div>
          <div className="container-lux mt-5">
            <Meta p={featured[0]} />
          </div>
        </Link>
      </Reveal>

      {/* Project 02 — asymmetric two column */}
      <div className="container-lux mt-28 md:mt-36 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
        <Reveal className="lg:col-span-7 order-2 lg:order-1">
          <Link to={`/work/${featured[1].slug}`} data-cursor="View Project" className="group block">
            <div className="overflow-hidden">
              <img
                src={featured[1].listImage}
                alt={featured[1].heroAlt}
                loading="lazy"
                className="w-full h-[70vw] sm:h-[45vw] lg:h-[36vw] max-h-[560px] object-cover group-hover:scale-[1.04] transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
              />
            </div>
          </Link>
        </Reveal>
        <Reveal delay={0.15} className="lg:col-span-5 order-1 lg:order-2 lg:pl-8">
          <span className="font-serif text-2xl text-gold">{featured[1].number}</span>
          <h3 className="font-serif text-4xl md:text-5xl text-forest mt-3 leading-tight">
            {featured[1].title}
          </h3>
          <div className="mt-5">
            <Meta p={featured[1]} />
          </div>
          <p className="text-forest/65 mt-6 leading-relaxed max-w-sm">{featured[1].overview}</p>
          <Link
            to={`/work/${featured[1].slug}`}
            className="label-caps text-forest mt-8 inline-block border-b border-forest/40 pb-1 hover:border-gold hover:text-gold transition-colors"
          >
            View Case Study →
          </Link>
        </Reveal>
      </div>

      {/* Project 03 — portrait + text */}
      <div className="container-lux mt-28 md:mt-36 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        <Reveal className="lg:col-span-5">
          <span className="font-serif text-2xl text-gold">{featured[2].number}</span>
          <h3 className="font-serif text-4xl md:text-5xl text-forest mt-3 leading-tight">
            {featured[2].title}
          </h3>
          <div className="mt-5">
            <Meta p={featured[2]} />
          </div>
          <p className="text-forest/65 mt-6 leading-relaxed max-w-sm">{featured[2].overview}</p>
          <Link
            to={`/work/${featured[2].slug}`}
            className="label-caps text-forest mt-8 inline-block border-b border-forest/40 pb-1 hover:border-gold hover:text-gold transition-colors"
          >
            View Case Study →
          </Link>
        </Reveal>
        <Reveal delay={0.15} className="lg:col-span-7">
          <Link to={`/work/${featured[2].slug}`} data-cursor="View Project" className="group block">
            <div className="overflow-hidden">
              <img
                src={featured[2].listImage}
                alt={featured[2].heroAlt}
                loading="lazy"
                className="w-full h-[90vw] sm:h-[55vw] lg:h-[42vw] max-h-[640px] object-cover group-hover:scale-[1.04] transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
              />
            </div>
          </Link>
        </Reveal>
      </div>

      {/* Project 04 — full width cinematic */}
      <Reveal className="mt-28 md:mt-36 pb-28 md:pb-40">
        <Link to={`/work/${featured[3].slug}`} data-cursor="View Project" className="group block relative">
          <div className="overflow-hidden relative">
            <img
              src={featured[3].listImage}
              alt={featured[3].heroAlt}
              loading="lazy"
              className="w-full h-[110vw] sm:h-[60vw] lg:h-[46vw] max-h-[680px] object-cover group-hover:scale-[1.04] transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-forest-deep/0 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
              <span className="font-serif text-xl text-gold-light">{featured[3].number}</span>
              <h3 className="font-serif text-4xl md:text-6xl text-ivory mt-2">{featured[3].title}</h3>
              <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 label-caps text-ivory/70">
                <span>{featured[3].location}</span>
                <span className="text-gold">•</span>
                <span>{featured[3].category}</span>
                <span className="text-gold">•</span>
                <span>{featured[3].year}</span>
              </div>
            </div>
          </div>
        </Link>
      </Reveal>
    </section>
  );
}
