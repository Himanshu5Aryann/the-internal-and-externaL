import { cn } from "../utils/cn";

interface SectionLabelProps {
  index?: string;
  label: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

export default function SectionLabel({ index, label, align = "left", dark = false, className }: SectionLabelProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-4",
        align === "center" && "justify-center",
        className
      )}
    >
      <span className="gold-rule" />
      <span
        className={cn(
          "label-caps",
          dark ? "text-ivory/80" : "text-forest/70"
        )}
      >
        {index ? `${index} — ` : ""}
        {label}
      </span>
    </div>
  );
}
