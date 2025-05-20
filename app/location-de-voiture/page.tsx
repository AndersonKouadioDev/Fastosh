import Faqs from "@/components/location-de-voiture/Faqs";
import CtaCard from "@/components/common/CtaCard";
import bg_4 from "@/public/images/background/bg_4.jpg";
import NavigationCta from "@/components/common/NavigationCta";
import LocationDeVoitureSearch from "@/components/hotels/hotel-search";
import ContentSection from "@/components/location-de-voiture/ContentSection";

export default function LocationDeVoiture() {
  return (
    <main>
      <LocationDeVoitureSearch />
      <div className="flex min-h-screen p-6 lg:py-8 max-w-screen-xl mx-auto flex-col gap-8">
        <ContentSection />
        <NavigationCta />
        <CtaCard
          image={bg_4}
          title={<>Réservez une location de voiture sur notre appli</>}
          description={
            "Trouvez et comparez les meilleures offres de location de voitures et de camionnettes partout dans le monde, où que vous soyez, en quelques secondes."
          }
          buttonText="Télécharger l'appli"
        />
        <Faqs />
      </div>
    </main>
  );
}
