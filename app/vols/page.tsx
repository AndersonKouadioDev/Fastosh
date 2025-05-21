import Faqs from "@/components/vols/Faqs";
import FlightSearch from "@/components/vols/flight-search/FlightSearch";
import ContentSection from "@/components/vols/ContentSection";
import StepsSection from "@/components/vols/StepsSection";
import TipsSection from "@/components/vols/TipsSection";
import ServiceNavigation from "@/components/common/ServiceNavigation";
import { Car, Building2 } from "lucide-react";

export default function Home() {
  return (
    <main>
      <FlightSearch />
      <div className="flex min-h-screen px-6 py-8 lg:pb-16 lg:pt-8 max-w-screen-xl mx-auto flex-col gap-16 md:gap-24">
        <ContentSection />
        <Faqs />
        <StepsSection />
        <TipsSection />
        <ServiceNavigation
          title="Vous prévoyez de voyager ?"
          items={[
            {
              icon: <Building2 className="h-4 w-4 mr-2" />,
              label: "Hôtels",
              href: "/hotels",
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
