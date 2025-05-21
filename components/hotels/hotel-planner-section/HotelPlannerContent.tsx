"use client";

import Link from "next/link";

export interface Destination {
  id: number;
  city: string;
  description: string;
}

const destinations: Destination[] = [
  { id: 1, city: "Al Harâm", description: "hôtels pas chers" },
  {
    id: 2,
    city: "Amsterdam-Noord",
    description: "offres d'hôtels dans ce quartier",
  },
  { id: 3, city: "Copacabana", description: "hôtels pas chers" },
  {
    id: 4,
    city: "Cappadoce",
    description: "offres d'hôtels pas chers dans ce quartier",
  },
  { id: 5, city: "Soho", description: "réservesz des hôtels dans ce quartier" },
  { id: 6, city: "Bercy", description: "hôtels pas chers" },
  {
    id: 7,
    city: "Shibuya",
    description: "offres d'hôtels pas chers dans ce quartier",
  },
  { id: 8, city: "Lima", description: "hôtels pas chers" },
  {
    id: 9,
    city: "Deira",
    description: "réservesz des hôtels dans ce quartier",
  },
];

export default function HotelPlannerContent() {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4">
        {destinations.map((destination) => (
          <Link
            key={destination.id}
            href={`/hotels/${destination.city.toLowerCase()}`}
            className="hover:underline"
          >
            {destination.city} : {destination.description}
          </Link>
        ))}
      </div>
    </div>
  );
}
