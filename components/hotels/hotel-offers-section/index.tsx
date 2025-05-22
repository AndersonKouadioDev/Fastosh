"use client";
import HotelDestinationCard from "@/components/hotels/hotel-offers-section/hotel-destination-card";
import { destinations } from "@/lib/data";

export default function HotelOffersSection() {
  return (
    <section>
      <div className="mb-6">
        <h2 className="lg:text-4xl text-2xl font-bold font-ibrand text-secondary">
          Des hôtels pour des séjours en ville exceptionnels
        </h2>
        <p className="text-sm text-foreground">
          Le secret d&apos;une escapade en ville réussie ? L&apos;emplacement.
          Découvrez les meilleurs hôtels situés en centre-ville.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {destinations.slice(0, 3).map((destination) => (
          <HotelDestinationCard
            key={destination.id}
            destination={destination}
          />
        ))}
      </div>
    </section>
  );
}
