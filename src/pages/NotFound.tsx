import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="bg-ivory min-h-[70vh] flex flex-col items-center justify-center text-center pt-32 pb-20 px-6">
      <span className="label-caps text-gold">404</span>
      <h1 className="font-serif text-forest text-6xl md:text-8xl mt-6">Page Not Found</h1>
      <p className="text-forest/60 mt-6 max-w-md leading-relaxed">
        The page you are looking for may have been moved or no longer exists.
      </p>
      <Link
        to="/"
        className="label-caps mt-10 px-8 py-4 bg-forest text-ivory hover:bg-gold hover:text-forest-deep transition-colors duration-500"
      >
        Return Home
      </Link>
    </section>
  );
}
