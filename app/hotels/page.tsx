import Faqs from "@/components/hotels/Faqs";
import HotelSearch from "@/components/hotels/hotel-search";
import ContentSection from "@/components/hotels/ContentSectionHotel";
import Concurrents from "@/components/hotels/Concurrents";
import QuickInfoSection from "@/components/hotels/QuickInfoSection";
import StepsSection from "@/components/hotels/StepsSection";

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
      </div>
    </main>
  );
}
