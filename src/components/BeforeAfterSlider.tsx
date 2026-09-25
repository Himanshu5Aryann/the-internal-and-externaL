import { useCallback, useRef, useState } from "react";

interface Props {
  before: string;
  after: string;
  beforeAlt?: string;
  afterAlt?: string;
}

export default function BeforeAfterSlider({ before, after, beforeAlt, afterAlt }: Props) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  const stopDragging = useCallback((event?: React.PointerEvent<HTMLDivElement>) => {
    if (event && event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    draggingRef.current = false;
  }, []);

  return (
    <div
      ref={containerRef}
      className="ba-slider relative w-full h-[70vw] sm:h-[46vw] max-h-[620px] min-h-[320px] select-none cursor-ew-resize"
      onPointerDown={(event) => {
        event.preventDefault();
        draggingRef.current = true;
        event.currentTarget.setPointerCapture(event.pointerId);
        updateFromClientX(event.clientX);
      }}
      onPointerMove={(event) => {
        if (!draggingRef.current) return;
        updateFromClientX(event.clientX);
      }}
      onPointerUp={stopDragging}
      onPointerLeave={() => {
        draggingRef.current = false;
      }}
      onPointerCancel={stopDragging}
      role="slider"
      aria-label="Before and after comparison slider"
      aria-valuenow={Math.round(pos)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") setPos((current) => Math.max(0, current - 5));
        if (event.key === "ArrowRight") setPos((current) => Math.min(100, current + 5));
      }}
    >
      <img
        src={before}
        alt={beforeAlt || "Before"}
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <img
        src={after}
        alt={afterAlt || "After"}
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />

      <div className="ba-handle" style={{ left: `${pos}%` }} />

      <span className="absolute top-5 left-5 label-caps bg-forest-deep/70 text-ivory px-3 py-1.5 backdrop-blur-sm">
        Before
      </span>
      <span className="absolute top-5 right-5 label-caps bg-gold/90 text-forest-deep px-3 py-1.5">
        After
      </span>
    </div>
  );
}
