import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

interface Props {
  label: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
}

export default function PageHeader({ label, title, description, image, imageAlt }: Props) {
  return (
    <section className="bg-ivory pt-40 md:pt-48 pb-20 md:pb-28">
      <div className="container-lux">
        <Reveal>
          <SectionLabel label={label} />
          <h1 className="font-serif text-forest text-6xl md:text-8xl mt-6 max-w-4xl leading-[1.02] text-balance">
            {title}
          </h1>
          {description && (
            <p className="text-forest/65 mt-8 max-w-xl leading-relaxed text-lg">{description}</p>
          )}
        </Reveal>
      </div>
      {image && (
        <Reveal delay={0.15} className="container-lux mt-16">
          <div className="overflow-hidden">
            <img
              src={image}
              alt={imageAlt || title}
              className="w-full h-[60vw] sm:h-[40vw] max-h-[560px] object-cover"
            />
          </div>
        </Reveal>
      )}
    </section>
  );
}
