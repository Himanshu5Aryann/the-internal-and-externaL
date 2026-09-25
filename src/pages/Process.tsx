import PageHeader from "../components/PageHeader";
import ProcessTimeline from "../components/ProcessTimeline";
import WhyChooseUs from "../components/WhyChooseUs";
import FinalCTA from "../components/FinalCTA";

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        label="The Way We Work"
        title="Our Process"
        description="A structured, five-stage process that carries every project from first conversation to final handover."
      />
      <ProcessTimeline />
      <WhyChooseUs />
      <FinalCTA />
    </>
  );
}
