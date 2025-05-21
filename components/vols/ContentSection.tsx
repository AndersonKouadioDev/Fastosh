"use client";

import { Calendar, Plane, Sticker } from "lucide-react";
import ContentPart from "@/components/common/ContentPart";

const items = [
  {
    content:
      "Explorez les meilleures offres de vols sur tous les itinéraires, puis réservez sans frais",
    icon: <Plane className="h-6 w-6 text-primary" />,
  },
  {
    content:
      "Comparez les offres de vols de plus de 1 000 prestataires et choisissez les billets les moins chers, ou les trajets les plus rapides ou émettant moins de CO₂",
    icon: <Calendar className="h-6 w-6 text-primary" />,
  },
  {
    content:
      "Identifiez le mois ou même le jour le moins cher pour vous envoler, puis créez des alertes de prix pour réserver quand le prix est le plus intéressant",
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
