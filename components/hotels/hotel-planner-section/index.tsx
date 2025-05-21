import HotelPlannerTabs from "./HotelPlannerTabs";
import HotelPlannerContent from "./HotelPlannerContent";

export default function HotelPlannerSection() {
  return (
    <section className="flex flex-col gap-4">
      <HotelPlannerTabs />
      <HotelPlannerContent />
    </section>
  );
}
