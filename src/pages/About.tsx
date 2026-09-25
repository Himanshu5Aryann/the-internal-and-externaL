import { useEffect } from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import SectionLabel from "../components/SectionLabel";
import ContactSection from "../components/ContactSection";

const FOUNDER_IMAGE = "/ChatGPT Image Sep 25, 2026, 01_05_44 PM.png";

export default function About() {
  useEffect(() => {
    document.title = "About Us | The Interior & Exterior Solution";

    let description = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!description) {
      description = document.createElement("meta");
      description.setAttribute("name", "description");
      document.head.appendChild(description);
    }
    description.setAttribute(
      "content",
      "Discover the story behind The Interior & Exterior Solution — a second-generation interior design studio built on experience, craftsmanship and a vision for refined, purposeful spaces."
    );
  }, []);

  const experienceCards = [
    {
      number: "01",
      title: "Residential",
      text: "Thoughtfully designed homes shaped around the people who live in them.",
    },
    {
      number: "02",
      title: "Hospitality",
      text: "Interior environments designed to create comfort, character and memorable experiences.",
    },
    {
      number: "03",
      title: "Industrial",
      text: "Functional spaces designed with attention to workflow, durability and practical requirements.",
    },
    {
      number: "04",
      title: "Commercial",
      text: "Purpose-driven environments that balance identity, usability and refined design.",
    },
  ];

  return (
    <main className="bg-ivory">
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-lux max-w-6xl">
          <Reveal>
            <SectionLabel label="Our Story" />
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="font-serif text-forest text-[3.3rem] leading-[0.95] md:text-[5.5rem] lg:text-[6.5rem] mt-6 max-w-5xl text-balance">
              Built on Legacy. Shaped by Vision.
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-8 max-w-3xl text-forest/70 text-base md:text-lg leading-relaxed">
              From a foundation built by the previous generation to a new chapter led by the second generation, our journey is rooted in experience, craftsmanship and a belief in creating spaces that stand the test of time.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory py-8 md:py-12">
        <div className="container-lux grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="overflow-hidden bg-offwhite border border-forest/10">
              <img
                src={FOUNDER_IMAGE}
                alt="Mr. Gaurav Shekhar, founder of The Interior & Exterior Solution"
                className="h-[620px] w-full object-cover object-center"
              />
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-7">
            <SectionLabel label="Second Generation" />
            <h2 className="mt-6 font-serif text-forest text-5xl md:text-6xl lg:text-7xl leading-[0.95]">
              Mr. Gaurav Shekhar
            </h2>

            <div className="mt-8 space-y-6 text-forest/70 text-base md:text-lg leading-relaxed">
              <p>
                Every business has a beginning, and ours began with a foundation laid by the previous generation. What started as a vision built by his father has grown into a journey that continues today through the second generation.
              </p>

              <p>
                Mr. Gaurav Shekhar represents this next chapter — carrying forward the values, relationships and experience that shaped the business while bringing his own perspective to its future.
              </p>

              <p>
                Over the years, the company has been involved in projects across a diverse range of environments, from factories and industrial spaces to hotels and hospitality projects, including work across Himachal Pradesh and surrounding regions.
              </p>

              <p>
                For Gaurav, design is not simply about how a space looks. It is about understanding how people use it, how it should function, and how every element can come together with purpose.
              </p>

              <p>
                His vision is to build on the experience of the past while moving confidently toward the future — creating spaces that are refined, functional and thoughtfully crafted.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-forest text-ivory">
        <div className="container-lux py-20 md:py-28">
          <Reveal>
            <SectionLabel label="The Legacy" dark />
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-6 font-serif text-5xl md:text-7xl leading-none text-balance max-w-4xl">
              Two generations. One continuing vision.
            </h2>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-6 max-w-3xl text-base md:text-lg leading-relaxed text-ivory/75">
              The experience built over the years remains at the heart of our work. Today, that foundation is being carried forward with a contemporary approach to design, execution and the evolving needs of every client.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-offwhite py-24 md:py-32">
        <div className="container-lux">
          <Reveal>
            <SectionLabel label="Experience Across Spaces" />
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-6 font-serif text-forest text-5xl md:text-6xl leading-tight max-w-2xl">
              Experience Across Spaces
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {experienceCards.map((card) => (
              <Reveal key={card.number} delay={0.1 + Number(card.number) * 0.04}>
                <article className="group h-full border border-forest/10 bg-ivory p-7 transition-colors duration-300 hover:border-gold/60">
                  <span className="label-caps text-gold">{card.number}</span>
                  <h3 className="mt-6 font-serif text-3xl text-forest leading-none">{card.title}</h3>
                  <p className="mt-5 text-forest/65 text-sm md:text-[15px] leading-relaxed">{card.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-24 md:py-32">
        <div className="container-lux max-w-5xl">
          <Reveal>
            <SectionLabel label="Our Vision" />
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-6 font-serif text-forest text-5xl md:text-6xl leading-tight">
              Honouring where we came from. Designing what comes next.
            </h2>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-8 text-forest/70 text-base md:text-lg leading-relaxed">
              Our vision is to preserve the values that built this business while continuously evolving with the way people live, work and experience spaces. We believe the best design brings together heritage and innovation, craftsmanship and functionality, character and simplicity.
            </p>
            <p className="mt-6 text-forest/70 text-base md:text-lg leading-relaxed">
              As the second generation carries the business forward, the goal remains clear: to create spaces with intention, deliver work with integrity, and build relationships that last beyond a single project.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-forest text-ivory">
        <div className="container-lux py-20 md:py-28">
          <Reveal>
            <h2 className="font-serif text-5xl md:text-7xl leading-[0.97] max-w-3xl">
              Let’s create something with intention.
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-8 max-w-2xl text-ivory/75 text-base md:text-lg leading-relaxed">
              Whether it is a residence, hospitality space, workplace or industrial project, we would love to understand your vision and explore what we can create together.
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <Link
              to="/contact"
              className="label-caps mt-10 inline-flex items-center justify-center border border-ivory/50 bg-ivory px-8 py-4 text-forest transition-colors duration-300 hover:bg-gold hover:border-gold hover:text-forest"
            >
              Book a Consultation
            </Link>
          </Reveal>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
