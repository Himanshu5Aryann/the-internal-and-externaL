import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Work", to: "/work" },
  { label: "Gallery", to: "/#gallery" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Process", to: "/process" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const transparent = isHome && !scrolled && !menuOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          transparent
            ? "bg-transparent py-7 lg:py-9"
            : "bg-ivory/90 backdrop-blur-md py-4 shadow-[0_1px_0_rgba(17,21,17,0.08)]"
        }`}
      >
        <div className="container-lux flex items-center justify-between px-4 md:px-7 lg:px-20">
          <Link
            to="/"
            aria-label="The Interior & Exterior Solution home"
            className="flex min-w-0 items-center justify-start gap-3 py-1 pr-2 sm:pr-4"
          >
            <img
              src="/v5logo.png"
              alt="The Interior & Exterior Solution logo"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
              className="h-auto w-[60px] max-w-none shrink-0 object-contain md:h-[48px] md:w-auto lg:h-[52px]"
            />
            <span
              className={`hidden whitespace-nowrap text-[13px] font-medium leading-[1.1] tracking-[0.08em] text-forest/80 md:inline md:text-[14px] lg:text-[15px] ${transparent ? "text-ivory/90" : "text-forest/80"}`}
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              The Interior & Exterior Solution
            </span>
            <span
              className={`flex min-w-0 flex-col justify-center text-[10px] font-medium leading-[1.25] tracking-[0.08em] md:hidden ${transparent ? "text-ivory/90" : "text-forest/80"}`}
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <span className="whitespace-nowrap">The Interior &amp; Exterior</span>
              <span className="whitespace-nowrap">Solution</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`label-caps relative pb-1 transition-colors duration-300 ${
                  transparent ? "text-ivory/90 hover:text-white" : "text-forest hover:text-forest-2"
                } ${location.pathname === link.to ? "after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-full after:h-px after:bg-gold" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              className={`label-caps px-6 py-3 border transition-all duration-300 ${
                transparent
                  ? "border-ivory/50 text-ivory hover:bg-ivory hover:text-forest"
                  : "border-forest text-forest hover:bg-forest hover:text-ivory"
              }`}
            >
              Book a Consultation
            </Link>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="ml-auto flex h-11 w-11 shrink-0 flex-col items-end justify-center gap-[6px] lg:hidden"
          >
            <span
              className={`block h-px transition-all duration-300 ${menuOpen ? "w-6 translate-y-[3.5px] rotate-45" : "w-7"} ${
                transparent && !menuOpen ? "bg-ivory" : "bg-forest"
              }`}
            />
            <span
              className={`block h-px transition-all duration-300 ${menuOpen ? "w-6 -translate-y-[3.5px] -rotate-45" : "w-5"} ${
                transparent && !menuOpen ? "bg-ivory" : "bg-forest"
              }`}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-forest text-ivory flex flex-col justify-between pt-32 pb-10"
          >
            <nav className="container-lux flex flex-col gap-2">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    to={link.to}
                    className="font-serif text-5xl sm:text-6xl py-3 inline-block border-b border-ivory/10 w-full hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="container-lux flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
              <Link
                to="/contact"
                className="label-caps border border-ivory/40 px-8 py-4 inline-block w-fit hover:bg-ivory hover:text-forest transition-colors duration-300"
              >
                Book a Consultation
              </Link>
              <div className="flex flex-col gap-1 text-ivory/70">
                <a href="tel:07009248451" className="label-caps hover:text-gold">
                  07009248451
                </a>
                <div className="flex gap-5 mt-2">
                  <a
                    href="https://www.instagram.com/the_interior_exterior_solution?stkn=MTQ3aWN6Zm8xcDc4Ng=="
                    target="_blank"
                    rel="noreferrer"
                    className="label-caps hover:text-gold"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.facebook.com/61561140230965/"
                    target="_blank"
                    rel="noreferrer"
                    className="label-caps hover:text-gold"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
