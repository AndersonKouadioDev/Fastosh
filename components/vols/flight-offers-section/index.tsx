"use client";
import FlightDestinationCard from "@/components/vols/flight-offers-section/flight-destination-card";
import { destinations } from "@/lib/data";
import { Button } from "@heroui/react";
import { ChevronUp } from "lucide-react";

export default function FlightOffersSection() {
  return (
    <section>
      <div className="mb-6">
        <h2 className="lg:text-4xl text-2xl font-bold font-ibrand text-secondary">
          Offres de vols au départ de : Côte d&apos;Ivoire
        </h2>
        <p className="text-sm text-foreground">
          Voici les offres de vols aux prix les plus bas. Réservez vite ! Ils
          décollent tous dans les trois prochains mois.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {destinations.map((destination) => (
          <FlightDestinationCard
            key={destination.id}
            destination={destination}
          />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Button
          variant="light"
          color="primary"
          endContent={<ChevronUp className="ml-1 h-4 w-4" />}
        >
          Voir moins d&apos;offres
        </Button>
      </div>
    </section>
  );
}
