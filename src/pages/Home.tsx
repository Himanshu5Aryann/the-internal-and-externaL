import Hero from "../components/Hero";
import CredibilityBar from "../components/CredibilityBar";
import BrandStatement from "../components/BrandStatement";
import FeaturedProjects from "../components/FeaturedProjects";
import Gallery from "../components/Gallery";
import ProjectSpotlight from "../components/ProjectSpotlight";
import Transformation from "../components/Transformation";
import Testimonials from "../components/Testimonials";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import ProcessTimeline from "../components/ProcessTimeline";
import AboutStudio from "../components/AboutStudio";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";
import ContactSection from "../components/ContactSection";
import MapSection from "../components/MapSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutStudio />
      <CredibilityBar />
      <BrandStatement />
      <FeaturedProjects />
      <Gallery />
      <ProjectSpotlight />
      <Transformation />
      <Testimonials />
      <Services />
      <WhyChooseUs />
      <ProcessTimeline />
      <FAQ />
      <FinalCTA />
      <ContactSection />
      <MapSection />
    </>
  );
}
