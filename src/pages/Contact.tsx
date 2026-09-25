import PageHeader from "../components/PageHeader";
import ContactSection from "../components/ContactSection";
import MapSection from "../components/MapSection";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Contact"
        title="Book A Consultation"
        description="Tell us about your space. Our studio will reach out to schedule a conversation and, where useful, a site visit."
      />
      <ContactSection />
      <MapSection />
    </>
  );
}
