import Faqs from "@/components/hotels/Faqs";
import HotelSearch from "@/components/hotels/hotel-search";
import ContentSection from "@/components/hotels/ContentSectionHotel";
import Concurrents from "@/components/hotels/Concurrents";
import QuickInfoSection from "@/components/hotels/QuickInfoSection";
import StepsSection from "@/components/hotels/StepsSection";
import ServiceNavigation from "@/components/common/ServiceNavigation";
import HotelPlannerSection from "@/components/hotels/HotelPlannerSection";
import { Car, Plane } from "lucide-react";

export default function Hotel() {
  return (
    <main>
      <HotelSearch />
      <div className="flex min-h-screen p-6 lg:py-8 max-w-screen-xl mx-auto flex-col mt-4 gap-16 md:gap-24">
        <ContentSection />
        <Concurrents />
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
    </main>
  );
}
