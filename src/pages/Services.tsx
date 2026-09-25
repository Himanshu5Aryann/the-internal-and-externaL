import PageHeader from "../components/PageHeader";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import ProcessTimeline from "../components/ProcessTimeline";
import FinalCTA from "../components/FinalCTA";

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="What We Do"
        title="Services"
        description="From individual rooms to fully coordinated turnkey execution — every engagement begins with the same standard of care."
      />
      <Services />
      <WhyChooseUs />
      <ProcessTimeline />
      <FinalCTA />
    </>
  );
}
