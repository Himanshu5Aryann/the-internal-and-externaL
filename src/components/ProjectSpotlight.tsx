import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { projects } from "../data/projects";

export default function ProjectSpotlight() {
  const project = projects[0];

  return (
    <section className="bg-forest text-ivory overflow-hidden">
      <div className="container-lux py-28 md:py-36">
        <Reveal>
          <SectionLabel label="Case Study" dark />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <Reveal delay={0.1} className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-serif text-2xl text-gold-light">{project.number}</span>
              <h2 className="font-serif text-5xl md:text-6xl mt-3 leading-tight">{project.title}</h2>
              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 label-caps text-ivory/60">
                <span>{project.location}</span>
                <span className="text-gold-light">•</span>
                <span>{project.category}</span>
                <span className="text-gold-light">•</span>
                <span>{project.year}</span>
              </div>

              <div className="mt-10 flex flex-col gap-8">
                <div>
                  <span className="label-caps text-gold-light">The Challenge</span>
                  <p className="text-ivory/70 mt-3 leading-relaxed">{project.challenge}</p>
                </div>
                <div>
                  <span className="label-caps text-gold-light">The Approach</span>
                  <p className="text-ivory/70 mt-3 leading-relaxed">{project.approach}</p>
                </div>
              </div>
            </div>

            <Link
              to={`/work/${project.slug}`}
              className="label-caps mt-12 inline-flex w-fit items-center gap-3 border-b border-ivory/40 pb-1 hover:border-gold-light hover:text-gold-light transition-colors"
            >
              Read Full Case Study →
            </Link>
          </Reveal>

          <Reveal delay={0.2} className="lg:col-span-7">
            <Link to={`/work/${project.slug}`} data-cursor="View Project" className="group block overflow-hidden">
              <img
                src={project.heroImage}
                alt={project.heroAlt}
                loading="lazy"
                className="w-full h-[110vw] sm:h-[60vw] lg:h-[44vw] max-h-[680px] object-cover group-hover:scale-[1.04] transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
              />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
