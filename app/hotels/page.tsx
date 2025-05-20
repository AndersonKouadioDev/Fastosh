import Faqs from "@/components/hotels/Faqs";
import CtaCard from "@/components/common/CtaCard";
import bg_3 from "@/public/images/background/bg_3.jpg";
import NavigationCta from "@/components/common/NavigationCta";
import HotelSearch from "@/components/hotels/hotel-search";

export default function Hotel() {
  return (
    <main>
      <HotelSearch />
      <div className="flex min-h-screen p-6 lg:py-8 max-w-screen-xl mx-auto flex-col gap-8">
        <NavigationCta />
        <CtaCard
          image={bg_3}
          subtitle="Vous cherchez un hôtel ?"
          title={<>Découvrez toutes les destinations</>}
          // description={
          //   "Trouvez et comparez les meilleures offres de location de voitures et de camionnettes partout dans le monde, où que vous soyez, en quelques secondes."
          // }
        />
        <Faqs />
      </div>
    </main>
  );
}
