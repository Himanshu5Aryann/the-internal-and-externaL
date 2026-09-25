import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Reveal from "../components/Reveal";
import SectionLabel from "../components/SectionLabel";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import ContactSection from "../components/ContactSection";
import { getProjectBySlug, projects } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug || "");

  useEffect(() => {
    if (project) document.title = `${project.title} | The Interior & Exterior Solution`;
  }, [project]);

  if (!project) return <Navigate to="/work" replace />;

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[480px] w-full overflow-hidden bg-forest-deep mt-0">
        <img
          src={project.heroImage}
          alt={project.heroAlt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-forest-deep/20 to-forest-deep/50" />
        <div className="relative z-10 h-full flex flex-col justify-end container-lux pb-14">
          <span className="font-serif text-2xl text-gold-light">{project.number}</span>
          <h1 className="font-serif text-ivory text-5xl md:text-7xl lg:text-8xl mt-2 max-w-4xl">
            {project.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 label-caps text-ivory/75">
            <span>{project.location}</span>
            <span className="text-gold">•</span>
            <span>{project.category}</span>
            <span className="text-gold">•</span>
            <span>{project.year}</span>
            {project.size && (
              <>
                <span className="text-gold">•</span>
                <span>{project.size}</span>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-ivory">
        <div className="container-lux py-24 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-4">
            <SectionLabel label="Project Overview" />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-8">
            <p className="font-serif text-2xl md:text-4xl text-forest leading-snug text-balance">
              {project.overview}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Challenge / Approach */}
      <section className="bg-offwhite">
        <div className="container-lux py-24 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-16">
          <Reveal>
            <span className="label-caps text-gold">The Challenge</span>
            <p className="font-serif text-2xl text-forest mt-5 leading-relaxed">{project.challenge}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <span className="label-caps text-gold">The Approach</span>
            <p className="font-serif text-2xl text-forest mt-5 leading-relaxed">{project.approach}</p>
          </Reveal>
        </div>
      </section>

      {/* Gallery image 1 full width */}
      {project.gallery[0] && (
        <Reveal className="bg-ivory">
          <figure>
            <img
              src={project.gallery[0].src}
              alt={project.gallery[0].alt}
              loading="lazy"
              className="w-full h-[110vw] sm:h-[60vw] max-h-[720px] object-cover"
            />
            <figcaption className="container-lux py-5 label-caps text-forest/50">
              {project.gallery[0].caption}
            </figcaption>
          </figure>
        </Reveal>
      )}

      {/* Material palette / lighting / spatial */}
      <section className="bg-ivory">
        <div className="container-lux pb-24 md:pb-32 grid grid-cols-1 md:grid-cols-3 gap-14">
          <Reveal>
            <span className="label-caps text-gold">Material Palette</span>
            <ul className="mt-5 flex flex-col gap-2">
              {project.materials.map((m) => (
                <li key={m} className="text-forest/70 font-serif text-xl">
                  {m}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="label-caps text-gold">Lighting Strategy</span>
            <p className="text-forest/65 mt-5 leading-relaxed">{project.lighting}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <span className="label-caps text-gold">Spatial Strategy</span>
            <p className="text-forest/65 mt-5 leading-relaxed">{project.spatial}</p>
          </Reveal>
        </div>
      </section>

      {/* Remaining gallery, two-column */}
      {project.gallery.length > 1 && (
        <section className="bg-offwhite">
          <div className="container-lux py-24 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.gallery.slice(1).map((g, i) => (
              <Reveal key={g.src} delay={i * 0.1}>
                <figure className="overflow-hidden">
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    className="w-full h-[100vw] sm:h-[36vw] max-h-[480px] object-cover"
                  />
                  <figcaption className="pt-4 label-caps text-forest/50">{g.caption}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* Before / After */}
      {project.beforeAfter && (
        <section className="bg-forest text-ivory">
          <div className="container-lux py-24 md:py-32">
            <Reveal>
              <SectionLabel label="Before &amp; After" dark />
              <h2 className="font-serif text-4xl md:text-6xl mt-6 max-w-2xl">
                The same space, transformed.
              </h2>
            </Reveal>
            <Reveal delay={0.15} className="mt-12">
              <BeforeAfterSlider
                before={project.beforeAfter.before}
                after={project.beforeAfter.after}
                beforeAlt={`${project.title} before`}
                afterAlt={`${project.title} after`}
              />
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-ivory/55 text-sm mt-6 max-w-lg leading-relaxed">
                {project.beforeAfter.note}
              </p>
            </Reveal>
          </div>
        </section>
      )}

      {/* Testimonial */}
      {project.testimonial && (
        <section className="bg-ivory">
          <div className="container-lux py-24 md:py-32 max-w-3xl">
            <Reveal>
              <span className="font-serif text-7xl text-gold leading-none">“</span>
              <p className="font-serif text-3xl md:text-4xl text-forest leading-snug mt-2">
                {project.testimonial.quote}
              </p>
              <div className="gold-rule mt-8 mb-4" />
              <p className="label-caps text-forest/60">{project.testimonial.author}</p>
              <p className="text-sm text-forest/45 mt-1">{project.testimonial.meta}</p>
            </Reveal>
          </div>
        </section>
      )}

      {/* Outcome */}
      <section className="bg-offwhite">
        <div className="container-lux py-24 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-4">
            <SectionLabel label="Outcome" />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-8">
            <p className="font-serif text-2xl md:text-3xl text-forest leading-snug">{project.outcome}</p>
          </Reveal>
        </div>
      </section>

      {/* Next project */}
      <Reveal className="bg-forest text-ivory">
        <Link to={`/work/${nextProject.slug}`} data-cursor="Next Project" className="group block relative">
          <img
            src={nextProject.listImage}
            alt={nextProject.heroAlt}
            loading="lazy"
            className="w-full h-[70vw] sm:h-[40vw] max-h-[520px] object-cover opacity-40 group-hover:opacity-55 group-hover:scale-[1.03] transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <span className="label-caps text-gold-light">Next Project</span>
            <h3 className="font-serif text-4xl md:text-6xl mt-4">{nextProject.title}</h3>
            <span className="label-caps text-ivory/70 mt-4">{nextProject.location} — {nextProject.category}</span>
          </div>
        </Link>
      </Reveal>

      <ContactSection />
    </>
  );
}
