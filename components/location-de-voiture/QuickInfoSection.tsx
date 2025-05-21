import React from "react";
import QuickInfo from "@/components/common/QuickInfo";
import { Car, Heart, Tag } from "lucide-react";

export default function QuickInfoSection() {
  return (
    <QuickInfo
      title="Infos rapides sur la location de voiture"
      description="Tout ce que vous devez savoir pour prendre la route avec le sourire."
      items={[
        {
          icon: <Tag className="w-6 h-6" />,
          title: "Meilleure offre trouvée",
          description: "38,485F",
        },
        {
          icon: <Car className="w-6 h-6" />,
          title: "Prestataire le moins cher",
          description: "Jumbo Car",
        },
        {
          icon: <Heart className="w-6 h-6" />,
          title: "Prestataire le mieux noté",
          description: "Avis",
        },
      ]}
    />
  );
}
