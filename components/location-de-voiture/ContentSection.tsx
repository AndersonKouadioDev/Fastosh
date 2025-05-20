"use client";

import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";
import { BedDouble, Search, Sticker } from "lucide-react";

const items = [
  {
    content:
      "Recherchez des locations de voiture pas cher en quelques secondes, partout dans le monde",
    icon: <Search className="h-6 w-6 text-primary" />,
  },
  {
    content:
      "Comparez les offres des prestataires de location de voiture de confiance en un seul endroit",
    icon: <Sticker className="h-6 w-6 text-primary" />,
  },
  {
    content:
      "Louez une voiture avec une politique de réservation flexible ou d'annulation gratuite",
    icon: <BedDouble className="h-6 w-6 text-primary" />,
  },
];

export default function ContentSection() {
  return (
    <div className="flex flex-col gap-20 md:gap-28">
      <div className="flex flex-col gap-12">
        <Breadcrumbs size="lg">
          <BreadcrumbItem href="/">Accueil</BreadcrumbItem>
          <BreadcrumbItem href="/location-de-voiture" className="text-primary-900">
            Location de voiture
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
    </div>
  );
}
