import React from "react";
import Steps from "@/components/common/Steps";

export default function StepsSection() {
  const steps = [
    {
      id: 1,
      title: "Étape 1 : recherchez",
      description:
        "Saisissez votre emplacement et consultez les voitures disponibles. Des SUV familiaux aux convertibles de luxe, trouvez le meilleur prix pour chaque type de location de véhicule.",
      icon: "https://content.skyscnr.com/m/264b769c3721bfa4/original/Confidence-Panels-01-centred_Confidence-Panels-01-centred.svg",
    },
    {
      id: 2,
      title: "Étape 2 : comparez",
      description:
        "Comparez des voitures de location en fonction de la politique de carburant, du kilométrage, de la note du prestataire, de la flexibilité de la réservation, de la propreté, du service client et plus encore.",
      icon: "https://content.skyscnr.com/m/427a434abcb704b7/original/Confidence-Panels-01-centred_Confidence-Panels-02-centred.svg",
    },
    {
      id: 3,
      title: "Étape 3 : réservez",
      description:
        "Nous comparons les prix de location de voiture sur des centaines de sites. Une fois que vous avez trouvé votre véhicule, vous accéderez au site du prestataire pour réserver, sans frais supplémentaires.",
      icon: "https://content.skyscnr.com/m/627af4d160010b/original/Confidence-Panels-01-centred_Confidence-Panels-03-centred.svg",
    },
  ];

  return (
    <section>
      <Steps steps={steps} title="Louez une voiture en trois étapes simples" />
    </section>
  );
}
