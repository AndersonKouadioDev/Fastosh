"use client";

export interface Destination {
  id: number;
  city: string;
  description: string;
}

const destinations: Destination[] = [
  { id: 1, city: "Paris", description: "la meilleure location de voiture" },
  { id: 2, city: "Londres", description: "location de voiture pas cher" },
  { id: 3, city: "Bangkok", description: "location de voiture" },
  {
    id: 4,
    city: "New York",
    description: "la meilleure location de voiture",
  },
  { id: 5, city: "Istanbul", description: "location de voiture" },
  { id: 6, city: "Dubai", description: "location de voiture pas cher" },
  { id: 7, city: "Rome", description: "location voiture" },
  { id: 8, city: "Milan", description: "la meilleure location de voiture" },
  { id: 9, city: "Tokyo", description: "location de voiture pas cher" },
];

export default function TripPlannerContent() {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4">
        {destinations.map((destination) => (
          <a
            key={destination.id}
            href={`/location/${destination.city.toLowerCase()}`}
            className="hover:underline"
          >
            {destination.city} : {destination.description}
          </a>
        ))}
      </div>
    </div>
  );
}
