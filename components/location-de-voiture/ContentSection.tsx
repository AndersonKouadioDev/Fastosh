"use client";

import { Calendar, Car, Sticker } from "lucide-react";
import ContentPart from "@/components/common/ContentPart";

const items = [
  {
    content:
      "Recherchez des locations de voiture pas cher en quelques secondes, partout dans le monde",
    icon: <Car className="h-6 w-6 text-primary" />,
  },
  {
    content:
      "Comparez les offres des prestataires de location de voiture de confiance en un seul endroit",
    icon: <Calendar className="h-6 w-6 text-primary" />,
  },
  {
    content:
      "Louez une voiture avec une politique de réservation flexible ou d'annulation gratuite",
    icon: <Sticker className="h-6 w-6 text-primary" />,
  },
];

export default function ContentSection() {
  return (
    <section className="flex flex-col gap-8 md:gap-16">
      <ContentPart
        items={items}
        itemsBreadcrumb={[
          { href: "/", label: "Accueil" },
          { href: "/location-de-voiture", label: "Location de voiture" },
        ]}
      />
    </section>
  );
}
