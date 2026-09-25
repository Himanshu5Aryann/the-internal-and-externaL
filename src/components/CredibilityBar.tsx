import Reveal from "./Reveal";

const METRICS = [
  { value: "500+", label: "Projects Delivered" },
  { value: "25+", label: "Years of Expertise" },
  { value: "4", label: "Project Verticals" },
  { value: "3 Cities", label: "Batala · Gurdaspur · Pathankot" },
];

export default function CredibilityBar() {
  return (
    <section className="bg-ivory">
      <div className="container-lux py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-forest/10">
          {METRICS.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.12} className="px-0 md:px-8 py-8 md:py-0 first:pl-0">
              <div className="flex flex-col items-start gap-3">
                <span className="font-serif text-5xl md:text-6xl text-forest">{m.value}</span>
                <span className="gold-rule" />
                <span className="label-caps text-forest/60">{m.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
