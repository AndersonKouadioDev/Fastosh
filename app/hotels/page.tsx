import Faqs from "@/components/hotels/Faqs";
import HotelSearch from "@/components/hotels/hotel-search";
import ContentSection from "@/components/hotels/ContentSectionHotel";
import Concurrents from "@/components/hotels/Concurrents";
import QuickInfoSection from "@/components/hotels/QuickInfoSection";
import StepsSection from "@/components/hotels/StepsSection";
import ServiceNavigation from "@/components/common/ServiceNavigation";
import HotelPlannerSection from "@/components/hotels/hotel-planner-section";
import { Car, Plane } from "lucide-react";
import HotelOffersSection from "@/components/hotels/hotel-offers-section";

export default function Hotel() {
  return (
    <>
      <HotelSearch />
      <div className="flex min-h-screen px-6 py-8 lg:pb-16 lg:pt-8 max-w-screen-xl mx-auto flex-col gap-16 md:gap-24">
        <ContentSection />
        <Concurrents />
        <HotelOffersSection />
        <QuickInfoSection />
        <StepsSection />
        <Faqs />
        <HotelPlannerSection />
        <ServiceNavigation
          title="Vous prévoyez de voyager ?"
          items={[
            {
              icon: <Plane className="h-4 w-4 mr-2" />,
              label: "Vols",
              href: "/vols",
            },
            {
              icon: <Car className="h-4 w-4 mr-2" />,
              label: "Location de voiture",
              href: "/location-de-voiture",
            },
          ]}
        />
      </div>
    </>
  );
}
