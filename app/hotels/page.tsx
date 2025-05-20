import Faqs from "@/components/hotels/Faqs";
import HotelSearch from "@/components/hotels/hotel-search";
import ContentSection from "@/components/hotels/ContentSection";

export default function Hotel() {
  return (
    <main>
      <HotelSearch />
      <div className="flex min-h-screen p-6 lg:py-8 max-w-screen-xl mx-auto flex-col mt-8 gap-8 md:gap-16">
        <ContentSection />
        <Faqs />
      </div>
    </main>
  );
}
