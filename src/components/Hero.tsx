import { motion } from "framer-motion";

const HERO_VIDEO =
  "https://www.youtube.com/embed/2lfSRj_7KkU?autoplay=1&mute=1&loop=1&playlist=2lfSRj_7KkU&controls=0&rel=0&modestbranding=1";

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[560px] w-full overflow-hidden bg-forest-deep">
      <motion.div
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <iframe
          className="h-full w-full scale-125 object-cover"
          src={HERO_VIDEO}
          title="Interior design hero video"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          style={{ border: 0 }}
        />
      </motion.div>

      {/* cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/70 via-forest-deep/25 to-forest-deep/80" />
      <div className="absolute inset-0 bg-forest-deep/10" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="label-caps text-gold-light mb-6"
        >
          The Interior & Exterior Solution &nbsp;—&nbsp; Interior Design Studio
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-ivory text-[13vw] leading-[1.02] sm:text-[9vw] md:text-[7vw] lg:text-[6vw] max-w-6xl text-balance"
        >
          Spaces, crafted
          <br />
          with <span className="italic text-gold-light">intention.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-lg text-ivory/80 text-base md:text-lg font-light"
        >
          A luxury interior design studio shaping refined residences, workplaces and
          hospitality spaces across Batala, Gurdaspur and Pathankot.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.9, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-col sm:flex-row items-center gap-5"
        >
          <a
            href="#featured-work"
            className="label-caps px-8 py-4 min-h-[48px] bg-ivory text-forest hover:bg-gold transition-colors duration-500 inline-flex items-center"
          >
            Explore Our Work
          </a>
          <a
            href="/contact"
            className="label-caps px-8 py-4 min-h-[48px] border border-ivory/50 text-ivory hover:bg-ivory/10 transition-colors duration-500 inline-flex items-center"
          >
            Book a Consultation
          </a>
        </motion.div>
      </div>

    </section>
  );
}
