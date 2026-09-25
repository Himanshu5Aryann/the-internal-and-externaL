import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="bg-offwhite">
      <div className="container-lux py-28 md:py-36 grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <SectionLabel label="Contact" />
          <h2 className="font-serif text-forest text-5xl md:text-6xl mt-6 leading-tight text-balance">
            Let's create something timeless.
          </h2>
          <p className="text-forest/65 mt-6 leading-relaxed max-w-sm">
            Share a few details about your space and our studio will reach out to schedule a
            consultation.
          </p>

          <div className="mt-12 flex flex-col gap-6">
            <div>
              <span className="label-caps text-forest/45">Phone</span>
              <a href="tel:07009248451" className="block font-serif text-2xl text-forest mt-1 hover:text-gold transition-colors">
                07009248451
              </a>
            </div>
            <div>
              <span className="label-caps text-forest/45">Address</span>
              <p className="text-forest/70 mt-1 leading-relaxed max-w-xs">
                chownk, Kahnuwan Road, Simbel, Batala, Punjab 143505
              </p>
            </div>
            <div>
              <span className="label-caps text-forest/45">Service Area</span>
              <p className="text-forest/70 mt-1">Batala</p>
            </div>
            <div className="flex gap-6 mt-2">
              <a
                href="https://www.instagram.com/the_interior_exterior_solution?stkn=MTQ3aWN6Zm8xcDc4Ng=="
                target="_blank"
                rel="noreferrer"
                className="label-caps text-forest border-b border-forest/30 pb-1 hover:border-gold hover:text-gold transition-colors w-fit"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/61561140230965/"
                target="_blank"
                rel="noreferrer"
                className="label-caps text-forest border-b border-forest/30 pb-1 hover:border-gold hover:text-gold transition-colors w-fit"
              >
                Facebook
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-7">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
