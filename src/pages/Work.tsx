import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import ContactSection from "../components/ContactSection";
import { projects } from "../data/projects";

export default function Work() {
  return (
    <>
      <PageHeader
        label="Portfolio"
        title="The Collection"
        description="A survey of residential, commercial, hospitality and turnkey interiors — each shaped around its own site, client and story."
      />

      <section className="bg-ivory pb-28 md:pb-36">
        <div className="container-lux flex flex-col gap-24 md:gap-32">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={0.05}>
              <Link to={`/work/${p.slug}`} data-cursor="View Project" className="group block">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  <div
                    className={`lg:col-span-7 overflow-hidden ${
                      i % 2 === 1 ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <img
                      src={p.listImage}
                      alt={p.heroAlt}
                      loading="lazy"
                      className="w-full h-[100vw] sm:h-[55vw] lg:h-[38vw] max-h-[560px] object-cover group-hover:scale-[1.04] transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                    />
                  </div>
                  <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                    <span className="font-serif text-2xl text-gold">{p.number}</span>
                    <h2 className="font-serif text-4xl md:text-5xl text-forest mt-3 group-hover:text-gold transition-colors duration-500">
                      {p.title}
                    </h2>
                    <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 label-caps text-forest/55">
                      <span>{p.location}</span>
                      <span className="text-gold">•</span>
                      <span>{p.category}</span>
                      <span className="text-gold">•</span>
                      <span>{p.year}</span>
                    </div>
                    <p className="text-forest/60 mt-6 leading-relaxed max-w-md">{p.overview}</p>
                    <span className="label-caps text-forest mt-8 inline-block border-b border-forest/40 pb-1 group-hover:border-gold group-hover:text-gold transition-colors">
                      View Case Study →
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <ContactSection />
    </>
  );
}
