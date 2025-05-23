import SiteInternationaux from "@/components/common/SiteInternationaux";
import Faqs from "@/components/home/Faqs";
import CtaCard from "@/components/common/CtaCard";
import bg_3 from "@/public/images/background/bg_3.jpg";
import NavigationCta from "@/components/common/NavigationCta";
import FlightSearch from "@/components/vols/flight-search";

export default function Home() {
  return (
    <main>
      <FlightSearch />
      <div className="flex min-h-screen px-6 py-8 lg:pb-16 lg:pt-8 max-w-screen-xl mx-auto flex-col gap-16 md:gap-24">
        <NavigationCta />
        <CtaCard
          image={bg_3}
          subtitle="Vous ne savez pas où partir ?"
          title={<>Découvrez toutes les destinations</>}
          buttonText="Chercher des vols dans le monde entier"
        />
        <Faqs />
        <SiteInternationaux />
      </div>
    </main>
  );
}
