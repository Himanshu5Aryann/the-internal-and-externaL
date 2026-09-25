import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [label, setLabel] = useState("VIEW");
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const touch = window.matchMedia("(pointer: coarse)").matches;
    setIsTouch(touch);
    if (touch) return;

    const move = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };
    window.addEventListener("mousemove", move);

    const onEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      const el = target.closest("[data-cursor]") as HTMLElement | null;
      if (el) {
        setActive(true);
        setLabel(el.getAttribute("data-cursor") || "VIEW");
      }
    };
    const onLeave = (e: Event) => {
      const target = e.target as HTMLElement;
      const el = target.closest("[data-cursor]");
      if (el) setActive(false);
    };

    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
    };
  }, []);

  if (isTouch) return null;

  return (
    <div ref={ref} className={`lux-cursor ${active ? "active" : ""}`} aria-hidden="true">
      {label}
    </div>
  );
}
