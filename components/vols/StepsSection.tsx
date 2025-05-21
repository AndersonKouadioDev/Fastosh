import React from "react";
import Steps from "@/components/common/Steps";

export default function StepsSection() {
  const steps = [
    {
      id: 1,
      title: "Cherchez dans le monde entier pour explorer",
      description:
        "Indiquez votre aéroport de départ et vos dates de voyage, puis cliquez sur « monde entier ». Vous trouverez des billets d'avion vers des destinations partout dans le monde. Les moins chers apparaîtront en premier.",
      icon: "https://content.skyscnr.com/m/3e55723dcc8a2d0f/original/image1.svg",
    },
    {
      id: 2,
      title: "Payez moins cher, allez plus loin avec des prix transparents",
      description:
        "Les offres de vols les moins chères. Aucun frais caché. Aucune entourloupe. Avec nous, vous payez le prix qui est affiché quand vous effectuez vos recherches.",
      icon: "https://content.skyscnr.com/m/7b7b3eaf2ab4081c/original/image2.svg",
    },
    {
      id: 3,
      title: "Réservez au meilleur moment grâce aux alertes de prix",
      description:
        "Vous avez trouvé un vol mais vous ne souhaitez pas réserver tout de suite ? Créez des alertes de prix et nous vous informerons quand le prix des billets d’avion change.",
      icon: "https://content.skyscnr.com/m/4ab58b7e3ae3790c/original/image3.svg",
    },
  ];

  return (
    <section>
      <Steps
        steps={steps}
        title="Vous cherchez les meilleures offres de vols dans le monde entier ?"
        description="Avec nous, c'est facile. 100 millions de voyageurs nous utilisent comme outil de prédilection pour comparer les offres de vols et les promotions de plus de 1 200 compagnies aériennes et prestataires de voyages. En ayant autant de choix au même endroit, vous pouvez faire des économies et dire adieu au stress. Voici comment."
      />
    </section>
  );
}
