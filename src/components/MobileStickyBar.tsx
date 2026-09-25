import { Link } from "react-router-dom";

export default function MobileStickyBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-forest text-ivory flex divide-x divide-ivory/15 border-t border-ivory/10">
      <a href="tel:07009248451" className="flex-1 text-center py-4 label-caps min-h-[48px] hover:bg-forest-2 transition-colors">
        Call
      </a>
      <Link to="/contact" className="flex-1 text-center py-4 label-caps min-h-[48px] bg-gold text-forest-deep hover:bg-gold-light transition-colors">
        Consultation
      </Link>
    </div>
  );
}
