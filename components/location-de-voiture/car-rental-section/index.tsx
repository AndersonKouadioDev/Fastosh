"use client";
import { carRentalOptions } from "@/lib/data";
import { Button } from "@heroui/react";
import { ArrowRight } from "lucide-react";
import CarRentalCard from "./car-rental-card";
import Link from "next/link";

export default function CarRentalSection() {
  return (
    <section>
      <div className="mb-6">
        <h2 className="lg:text-4xl text-2xl font-bold font-ibrand text-secondary">
          Trouvez les meilleures offres de location de voiture à : Abidjan
        </h2>
        <p className="text-sm text-foreground">
          Voici les types de voitures de location les plus populaires que vous
          pourrez trouver à proximité dans les 30 prochains jours.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {carRentalOptions.map((carRental) => (
          <CarRentalCard key={carRental.id} carRental={carRental} />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Button
          as={Link}
          href="#"
          endContent={<ArrowRight className="h-4 w-4" />}
          variant="light"
          color="primary"
        >
          Afficher toutes les offres
        </Button>
      </div>
    </section>
  );
}
