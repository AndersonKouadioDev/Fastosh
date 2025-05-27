import Faqs from "@/components/location-de-voiture/Faqs";
import CtaCard from "@/components/common/CtaCard";
import bg_4 from "@/public/images/background/bg_4.jpg";
import LocationDeVoitureSearch from "@/components/location-de-voiture/location-de-voiture-search";
import ContentSection from "@/components/location-de-voiture/ContentSection";
import EntrepriseCar from "@/components/location-de-voiture/EntrepriseCar";
import QuickInfoSection from "@/components/location-de-voiture/QuickInfoSection";
import StepsSection from "@/components/location-de-voiture/StepsSection";
import TipsSection from "@/components/location-de-voiture/TipsSection";
import ServiceNavigation from "@/components/common/ServiceNavigation";
import { Building2, Plane } from "lucide-react";
import TripPlannerSection from "@/components/location-de-voiture/trip-planner-section";
import DestinationLocationSection from "@/components/location-de-voiture/destination-location-section";
import CarRentalSection from "@/components/location-de-voiture/car-rental-section";
import StickyNavigation from "@/components/location-de-voiture/StickyNavigation";

export default function LocationDeVoiture() {
  return (
    <>
      <LocationDeVoitureSearch />
      <div className="flex min-h-screen px-6 py-8 lg:pb-16 lg:pt-8 max-w-screen-xl mx-auto flex-col gap-16 md:gap-24">
        <ContentSection />
        <StickyNavigation />
        <DestinationLocationSection />
        <CarRentalSection />
        <EntrepriseCar />
        <QuickInfoSection />
        <StepsSection />
        <TipsSection />
        <CtaCard
          image={bg_4}
          title={<>Réservez une location de voiture sur notre appli</>}
          description={
            "Trouvez et comparez les meilleures offres de location de voitures et de camionnettes partout dans le monde, où que vous soyez, en quelques secondes."
          }
          buttonText="Télécharger l'appli"
        />
        <Faqs />
        <TripPlannerSection />
        <ServiceNavigation
          title="Vous prévoyez de voyager ?"
          items={[
            {
              icon: <Plane className="h-4 w-4 mr-2" />,
              label: "Vols",
              href: "/vols",
            },
            {
              icon: <Building2 className="h-4 w-4 mr-2" />,
              label: "Hôtels",
              href: "/hotels",
            },
          ]}
        />
      </div>
    </>
  );
}
