import { useState, type FormEvent } from "react";

const inputCls =
  "w-full bg-transparent border-b border-forest/25 focus:border-gold outline-none py-3 text-forest placeholder:text-forest/40 transition-colors duration-300";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-forest/15 bg-ivory px-8 py-16 flex flex-col items-center text-center">
        <span className="font-serif text-5xl text-gold mb-4">✓</span>
        <h3 className="font-serif text-3xl text-forest">Thank you.</h3>
        <p className="text-forest/60 mt-4 max-w-sm leading-relaxed">
          Your consultation request has been received. Our studio will be in touch within
          1–2 business days to schedule a conversation about your space.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7">
      <div className="sm:col-span-1">
        <label className="label-caps text-forest/50">Name *</label>
        <input required type="text" name="name" placeholder="Your full name" className={inputCls} />
      </div>
      <div className="sm:col-span-1">
        <label className="label-caps text-forest/50">Phone *</label>
        <input required type="tel" name="phone" placeholder="Your phone number" className={inputCls} />
      </div>
      <div className="sm:col-span-1">
        <label className="label-caps text-forest/50">Email</label>
        <input type="email" name="email" placeholder="you@email.com" className={inputCls} />
      </div>
      <div className="sm:col-span-1">
        <label className="label-caps text-forest/50">City</label>
        <input type="text" name="city" placeholder="Your city" className={inputCls} />
      </div>
      <div className="sm:col-span-1">
        <label className="label-caps text-forest/50">Project Type</label>
        <select name="projectType" defaultValue="" className={inputCls}>
          <option value="" disabled>
            Select project type
          </option>
          <option>Residential</option>
          <option>Commercial</option>
          <option>Hospitality</option>
          <option>Turnkey</option>
          <option>Other</option>
        </select>
      </div>
      <div className="sm:col-span-1">
        <label className="label-caps text-forest/50">Property Type</label>
        <input type="text" name="propertyType" placeholder="Apartment, villa, office..." className={inputCls} />
      </div>
      <div className="sm:col-span-2">
        <label className="label-caps text-forest/50">Approximate Project Scope</label>
        <input type="text" name="scope" placeholder="Approx. area / number of rooms" className={inputCls} />
      </div>
      <div className="sm:col-span-2">
        <label className="label-caps text-forest/50">Message</label>
        <textarea
          name="message"
          rows={4}
          placeholder="Tell us about your space and vision..."
          className={inputCls + " resize-none"}
        />
      </div>
      <div className="sm:col-span-2 mt-4">
        <button
          type="submit"
          className="label-caps px-10 py-4 min-h-[48px] bg-forest text-ivory hover:bg-gold hover:text-forest-deep transition-colors duration-500"
        >
          Request A Consultation
        </button>
      </div>
    </form>
  );
}
