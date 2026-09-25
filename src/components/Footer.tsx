import { Link } from "react-router-dom";

const NAV_LINKS = [
  { label: "Work", to: "/work" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Process", to: "/process" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-forest text-ivory">
      <div className="container-lux pt-24 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-8 pb-16 border-b border-ivory/15">
          <div className="lg:col-span-5">
            <span className="font-serif text-4xl tracking-[0.1em]">THE INTERIOR & EXTERIOR SOLUTION</span>
            <p className="font-serif italic text-2xl text-ivory/70 mt-6 max-w-sm">
              Interiors crafted with intention.
            </p>
            <p className="text-sm text-ivory/50 mt-8 max-w-sm leading-relaxed">
              A design studio creating refined residential, commercial, hospitality and turnkey
              interiors across Batala, Gurdaspur and Pathankot.
            </p>
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <span className="label-caps text-gold">Navigate</span>
            <nav className="flex flex-col gap-3 mt-6">
              {NAV_LINKS.map((l) => (
                <Link key={l.to} to={l.to} className="text-ivory/75 hover:text-ivory transition-colors w-fit">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-4">
            <span className="label-caps text-gold">Contact</span>
            <div className="flex flex-col gap-3 mt-6 text-ivory/75">
              <a href="tel:07009248451" className="hover:text-ivory transition-colors w-fit">
                07009248451
              </a>
              <p className="leading-relaxed max-w-xs">
                chownk, Kahnuwan Road, Simbel, Batala, Punjab 143505
              </p>
              <p className="text-ivory/50 label-caps text-[10px] mt-1">Service Reach — Batala, Gurdaspur &amp; Pathankot</p>
              <div className="flex gap-6 mt-4">
                <a
                  href="https://www.instagram.com/the_interior_exterior_solution?stkn=MTQ3aWN6Zm8xcDc4Ng=="
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/61561140230965/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-ivory/45">
          <p>© 2026 The Interior & Exterior Solution. All rights reserved.</p>
          <p>Built and designed by Himanshu Aaryaan</p>
        </div>
      </div>
    </footer>
  );
}
