import Reveal from "./Reveal";
import { PrimaryButton, SecondaryButton } from "./Buttons";

export default function FinalCTA() {
  return (
    <section className="relative bg-forest-deep text-ivory overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/6538939/pexels-photo-6538939.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=2200"
          alt="Refined interior with modern kitchen and cabinetry"
          loading="lazy"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/80 via-forest-deep/85 to-forest-deep/95" />
      </div>

      <div className="relative container-lux py-32 md:py-44 flex flex-col items-center text-center">
        <Reveal>
          <span className="label-caps text-gold-light">Let's Begin</span>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl mt-6 leading-[1.02] text-balance">
            Ready to transform
            <br />
            your space?
          </h2>
          <p className="text-ivory/70 mt-8 max-w-md mx-auto text-lg">
            Let's create a space that feels unmistakably yours.
          </p>
        </Reveal>
        <Reveal delay={0.15} className="mt-12 flex flex-col sm:flex-row gap-5">
          <PrimaryButton to="/contact" className="bg-ivory text-forest-deep hover:bg-gold hover:text-forest-deep">
            Book a Consultation
          </PrimaryButton>
          <SecondaryButton to="/work" className="border-ivory/50 text-ivory hover:bg-ivory/10">
            Start Your Project
          </SecondaryButton>
        </Reveal>
      </div>
    </section>
  );
}
