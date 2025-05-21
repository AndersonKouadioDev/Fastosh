import { Calendar, Clock, MapPin, Leaf, Fuel, Search } from "lucide-react";
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
      title: "Réservez maintenant, annulez plus tard",
      description:
        "Il existe de nombreuses options pour louer des voitures et des camionnettes en bénéficiant de politiques de réservation flexibles et de l'annulation gratuite. Vous pouvez ainsi choisir la meilleure offre et disposer d'une flexibilité totale si vous devez modifier vos plans à la dernière minute.",
      icon: <Calendar />,
    },
    {
      id: 2,
      title: "N'attendez plus",
      description:
        "Lorsque vous effectuez une recherche avec nous, vous bénéficierez d'une prise en charge sans clé ou en libre-service. C'est-à-dire pas de clés à récupérer, pas de papiers à remplir, donc aucune file d'attente. Il suffit de vous présenter à votre agence de location de voiture préférée, de monter à bord et de prendre la route.",
      icon: <Clock />,
    },
    {
      id: 3,
      title: "Abidjan : louer une voiture pendant un mois entier",
      description:
        "Vous voulez louer un véhicule pendant près d'un mois ? Les entreprises de location de voiture évitent souvent les frais administratifs entre les prises en charge en louant des véhicules pendant des périodes plus longues. Nous vous conseillons donc de voir si la location mensuelle est moins chère que les trois semaines dont vous avez besoin en sélectionnant 30 jours.",
      icon: <MapPin />,
    },
    {
      id: 4,
      title: "Roulez plus vert",
      description:
        "Limitez votre impact environnemental lorsque vous explorez notre belle planète. Optez pour des véhicules électriques, qui seront rechargés et prêts à partir lorsque vous les récupérerez, vous épargnant ainsi les préoccupations liées au carburant.",
      icon: <Leaf />,
    },
    {
      id: 5,
      title: "Comparez les politiques de carburant",
      description:
        "Pour économiser sur le plein avant de partir, recherchez des offres avec une politique de réservoir de carburant «de plein à plein».",
      icon: <Fuel />,
    },
    {
      id: 6,
      title: "Cherchez un peu plus loin",
      description:
        "Si vous avez un budget limité, prendre les transports en commun pour vous rendre vers un lieu de prise en charge de location de voiture un peu plus loin revient souvent moins cher.",
      icon: <Search />,
    },
  ];

  return (
    <section className="flex flex-col gap-8">
      <h2 className="text-3xl md:text-4xl font-bold font-ibrand">
        Comment trouver la meilleure offre de location de voiture
      </h2>
      <p className="max-w-6xl">
        Notre site de recherche de voyage est fréquemment désigné comme le plus
        fiable qui soit. L&apos;utilisation de notre site est gratuite et nous
        travaillerons dur pour chercher parmi des centaines d&apos;entreprises
        de location de voiture afin que vous puissiez comparer les prix
        instantanément et réserver. Voici comment tirer le meilleur parti de
        votre recherche de location de véhicule.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {tips.map((tip) => (
          <div
            key={tip.id}
            className="border border-foreground/50 rounded-lg p-6 hover:shadow-md transition-shadow"
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
