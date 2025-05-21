import TripPlannerTabs from "./TripPlannerTabs";
import TripPlannerContent from "./TripPlannerContent";

export default function TripPlannerSection() {
  return (
    <section className="flex flex-col gap-4">
      <TripPlannerTabs />
      <TripPlannerContent />
    </section>
  );
}
