import React from "react";
import Steps from "@/components/common/Steps";

export default function StepsSection() {
  const steps = [
    {
      id: 1,
      title: "Offres d'hôtel avantageuses",
      description:
        "Nous recherchons les offres des principaux hôtels du monde entier et mettons les résultats à votre disposition.",
      icon: "https://content.skyscnr.com/m/35d2dfcc0cf14520/original/Hotels-Deals.svg",
    },
    {
      id: 2,
      title: "Prix actualisés",
      description:
        "Nous vous montrons toujours les prix les plus récents que nous pouvons trouver, afin que vous sachiez exactement à quoi vous attendre.",
      icon: "https://content.skyscnr.com/m/657ded434cfa22e6/original/Illustration_hotel_bell.svg",
    },
    {
      id: 3,
      title: "Recherche précise",
      description:
        "Trouvez des hôtels avec piscine, annulation gratuite et réservation flexible. Ou ce qui compte le plus pour vous.",
      icon: "https://content.skyscnr.com/m/10eb5a37b8ce7d8b/original/Illustration_hotel_compare_scales.svg",
    },
  ];

  return (
    <section>
      <Steps steps={steps} title="Louez une voiture en trois étapes simples" />
    </section>
  );
}
