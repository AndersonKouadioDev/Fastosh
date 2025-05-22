"use client";
import DestinationLocationCardProps from "@/components/location-de-voiture/destination-location-section/destination-location-card";
import { destinations } from "@/lib/data";
import { Alert, Button } from "@heroui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function DestinationLocationSection() {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h2 className="lg:text-4xl text-2xl font-bold font-ibrand text-secondary">
          Destinations et locations de voiture populaires
        </h2>
        <div className="flex gap-2">
          <Button isIconOnly>
            <ChevronLeft />
          </Button>
          <Button isIconOnly>
            <ChevronRight />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {destinations.slice(0, 3).map((destination) => (
          <DestinationLocationCardProps
            key={destination.id}
            destination={destination}
          />
        ))}
      </div>
      <div>
        <Alert
          title=""
          description="Il s'agit d'une estimation de prix destinée à vous aider à choisir parmi de nombreuses options. Elle correspond à une moyenne basée sur les prix de location de voiture les plus bas trouvés pour chaque destination au cours des 15 derniers jours."
        />
      </div>
    </section>
  );
}
