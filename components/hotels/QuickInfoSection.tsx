import React from "react";
import QuickInfo from "@/components/common/QuickInfo";
import { BedDouble, Building2, MapPin } from "lucide-react";

export default function QuickInfoSection() {
  return (
    <QuickInfo
      title="Infos rapides"
      description="Dormez tranquille, vous maîtrisez tout ce qu'il faut savoir avant de partir."
      items={[
        {
          icon: <Building2 className="w-6 h-6" />,
          title: "Plusieurs enseignes hôtelières au choix",
          description: "38,485F",
        },
        {
          icon: <MapPin className="w-6 h-6" />,
          title: "Des hôtels à découvrir",
          description: "Jumbo Car",
        },
        {
          icon: <BedDouble className="w-6 h-6" />,
          title: "Des hôtels dans le monde entier",
          description: "Avis",
        },
      ]}
    />
  );
}
