import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

type GalleryImage = {
  src: string;
  alt: string;
};

type GalleryGroup = {
  label: string;
  images: GalleryImage[];
};

const galleryGroups: GalleryGroup[] = [
  {
    label: "01 — INTERIORS",
    images: Array.from({ length: 10 }, (_, index) => ({
      src: `/interior_${String(index + 1).padStart(2, "0")}.png`,
      alt: "Interior design project",
    })),
  },
  {
    label: "02 — SIGNATURE SPACES",
    images: Array.from({ length: 10 }, (_, index) => ({
      src: `/interior_2_${String(index + 1).padStart(2, "0")}.png`,
      alt: "Luxury interior space",
    })),
  },
  {
    label: "03 — PROJECT DETAILS",
    images: Array.from({ length: 10 }, (_, index) => ({
      src: `/interior_3_${String(index + 1).padStart(2, "0")}.png`,
      alt: "Contemporary interior design",
    })),
  },
];

const galleryImages = galleryGroups.flatMap((group) => group.images);

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const closeLightbox = () => setActiveIndex(null);
  const showPrevious = () => {
    setActiveIndex((current) =>
      current === null ? null : (current - 1 + galleryImages.length) % galleryImages.length,
    );
  };
  const showNext = () => {
    setActiveIndex((current) => (current === null ? null : (current + 1) % galleryImages.length));
  };

  useEffect(() => {
    if (activeIndex === null) return undefined;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex]);

  return (
    <section id="gallery" className="bg-ivory py-28 md:py-36">
      <div className="container-lux">
        <Reveal>
          <SectionLabel label="Our Work" />
          <div className="mt-6 grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.55fr)] lg:items-end">
            <h2 className="max-w-4xl font-serif text-6xl leading-[0.95] text-forest md:text-7xl lg:text-8xl">
              Spaces worth experiencing.
            </h2>
            <p className="max-w-md text-base leading-relaxed text-forest/65 lg:pb-2">
              A glimpse into our approach to interiors — where material, proportion, light and
              detail come together with intention.
            </p>
          </div>
        </Reveal>

        <div className="mt-20 space-y-20 md:mt-28 md:space-y-28">
          {galleryGroups.map((group, groupIndex) => (
            <div key={group.label}>
              <Reveal>
                <div className="mb-7 flex items-center gap-5">
                  <span className="label-caps text-gold">{group.label}</span>
                  <span className="h-px flex-1 bg-forest/15" />
                </div>
              </Reveal>

              <div className="columns-2 gap-3 md:gap-5 lg:columns-4">
                {group.images.map((image, imageIndex) => {
                  const index = groupIndex * 10 + imageIndex;
                  const isFeatured = imageIndex === 0 || imageIndex === 5;

                  return (
                    <Reveal
                      key={image.src}
                      delay={(imageIndex % 4) * 0.04}
                      className="mb-3 break-inside-avoid md:mb-5"
                    >
                      <button
                        type="button"
                        aria-label={`View image ${index + 1} of ${galleryImages.length}`}
                        onClick={() => setActiveIndex(index)}
                        className={`group relative block w-full overflow-hidden text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 ${
                          isFeatured ? "lg:mb-2" : ""
                        }`}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          loading={index < 4 ? "eager" : "lazy"}
                          decoding="async"
                          className="block h-auto w-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
                        />
                        <span className="pointer-events-none absolute inset-0 bg-forest/0 transition-colors duration-500 group-hover:bg-forest/10" />
                        <span className="pointer-events-none absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.2em] text-ivory opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                          View
                        </span>
                      </button>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
          className="fixed inset-0 z-[70] flex items-center justify-center bg-forest-deep/95 p-4 md:p-10"
          onClick={closeLightbox}
          onTouchStart={(event) => {
            touchStartX.current = event.touches[0]?.clientX ?? null;
          }}
          onTouchEnd={(event) => {
            if (touchStartX.current === null) return;
            const distance = event.changedTouches[0]?.clientX - touchStartX.current;
            if (distance > 50) showPrevious();
            if (distance < -50) showNext();
            touchStartX.current = null;
          }}
        >
          <button
            type="button"
            aria-label="Close gallery"
            onClick={closeLightbox}
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center text-2xl font-light text-ivory/80 transition-colors hover:text-gold md:right-8 md:top-8"
          >
            ×
          </button>
          <button
            type="button"
            aria-label="Previous image"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-3xl font-light text-ivory/75 transition-colors hover:text-gold md:left-8"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-3xl font-light text-ivory/75 transition-colors hover:text-gold md:right-8"
          >
            ›
          </button>

          <figure className="flex max-h-full max-w-full flex-col items-center" onClick={(event) => event.stopPropagation()}>
            <img
              src={galleryImages[activeIndex].src}
              alt={galleryImages[activeIndex].alt}
              decoding="async"
              className="max-h-[calc(100vh-7rem)] max-w-[calc(100vw-3rem)] object-contain md:max-h-[calc(100vh-6rem)] md:max-w-[calc(100vw-12rem)]"
            />
            <figcaption className="mt-4 label-caps text-ivory/65">
              {String(activeIndex + 1).padStart(2, "0")} / {String(galleryImages.length).padStart(2, "0")}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}