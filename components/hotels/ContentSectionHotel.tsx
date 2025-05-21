"use client";

import { BedDouble, Search, Sticker } from "lucide-react";
import ContentPart from "@/components/common/ContentPart";

const items = [
  {
    content:
      "Trouvez l'hôtel au meilleur prix pour les dates de votre choix, effectuez une recherche par prix ou par préférence",
    icon: <Search className="h-6 w-6 text-primary" />,
  },
  {
    content:
      "Comparez au même endroit les offres d'hôtel de centaines de prestataires",
    icon: <Sticker className="h-6 w-6 text-primary" />,
  },
  {
    content:
      "Recherchez des hôtels proposant l'annulation gratuite ou disposant d'excellentes évaluationss",
    icon: <BedDouble className="h-6 w-6 text-primary" />,
  },
];

export default function ContentSectionHotel() {
  return (
    <section className="flex flex-col gap-8 md:gap-16">
      <ContentPart
        items={items}
        itemsBreadcrumb={[
          { href: "/", label: "Accueil" },
          { href: "/hotels", label: "Hôtels" },
        ]}
      />
    </section>
  );
}
