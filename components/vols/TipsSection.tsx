import { Calendar, Clock } from "lucide-react";
import { JSX } from "react";

export interface Tip {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
}

export default function TipsSection() {
  const tips: Tip[] = [
    {
      id: 1,
      title: "Trouvez des offres de vols flexibles",
      description:
        "Explorez les offres de billets d'avion flexibles pour ne rien perdre si votre vol est modifié ou annulé",
      icon: <Calendar />,
    },
    {
      id: 2,
      title: "Ajoutez des hôtels et une location de voiture",
      description:
        "Planifiez votre trajet en incluant des hôtels et une location de voiture. Gardez toutes vos réservations en un seul et même endroit",
      icon: <Clock />,
    },
  ];

  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl md:text-4xl font-bold font-ibrand">
          Préparez votre trajet en toute sérénité
        </h2>
        <p className="max-w-6xl">
          Nous nous sommes donnés pour mission de vous aider à voyager en toute
          confiance et de rendre votre trajet le plus fluide possible.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-4 mg:gap-6">
        {tips.map((tip) => (
          <div
            key={tip.id}
            className="rounded-2xl p-6 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-start mb-4">
              <div className="mr-4 text-foreground">{tip.icon}</div>
              <h3 className="text-lg font-semibold">{tip.title}</h3>
            </div>
            <p className="text-foreground text-sm">{tip.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
