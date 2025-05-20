"use client";

import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";
import { BedDouble, Search, Sticker } from "lucide-react";
import Image from "next/image";

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

const conccurents = [
  "https://www.skyscanner.fr/images/websites/h_bc.png",
  "https://www.skyscanner.fr/images/websites/d_ct.png",
  "https://www.skyscanner.fr/images/websites/h_hc.png",
  "https://www.skyscanner.fr/images/websites/220x80/h_hy.png",
  "https://www.skyscanner.fr/images/websites/h_xp.png",
  "https://www.skyscanner.fr/images/websites/h_ic.png",
];
export default function ContentSection() {
  return (
    <div className="flex flex-col gap-20 md:gap-28">
      <div className="flex flex-col gap-12">
        <Breadcrumbs size="lg">
          <BreadcrumbItem href="/">Accueil</BreadcrumbItem>
          <BreadcrumbItem href="/hotels" className="text-primary-900">
            Hôtels
          </BreadcrumbItem>
        </Breadcrumbs>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="bg-blue-100 p-2 rounded-full">{item.icon}</div>
              <div>
                <h3 className="font-bold">{item.content}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col">
        <h2 className="lg:text-4xl text-2xl font-bold font-ibrand text-secondary">
          Comparez les hôtels de vos enseignes préférées{" "}
        </h2>
        <div className="grid grid-cols-4 md:grid-cols-6 items-center gap-4">
          {conccurents.map((item, index) => (
            <Image
              key={index}
              src={item}
              alt=""
              width={220}
              height={80}
              className="w-full h-auto"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
