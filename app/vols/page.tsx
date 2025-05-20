import SiteInternationaux from "@/components/common/SiteInternationaux";
import Faqs from "@/components/vols/Faqs";
import NavigationCta from "@/components/common/NavigationCta";
import FlightSearch from "@/components/vols/flight-search";

export default function Home() {
  return (
    <main>
      <FlightSearch />
      <div className="flex min-h-screen p-6 lg:py-8 max-w-screen-xl mx-auto flex-col gap-8">
        <NavigationCta />
        <Faqs />
        <SiteInternationaux />
      </div>
    </main>
  );
}
