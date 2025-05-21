"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface Destination {
  id: number;
  city: string;
  description: string;
}

export default function TripPlannerContent() {
  const [currentPage, setCurrentPage] = useState(0);

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
    // Ajoutez d'autres destinations pour les pages supplémentaires
  ];

  const totalPages = Math.ceil(destinations.length / 9);
  const currentDestinations = destinations.slice(
    currentPage * 9,
    (currentPage + 1) * 9
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4">
        {currentDestinations.map((destination) => (
          <a
            key={destination.id}
            href={`/location/${destination.city.toLowerCase()}`}
            className="text-gray-700 hover:text-gray-900 hover:underline"
          >
            {destination.city} : {destination.description}
          </a>
        ))}
      </div>

      {/* Navigation controls */}
      <div className="flex items-center justify-center mt-8">
        <button
          onClick={prevPage}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700"
          aria-label="Page précédente"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="flex space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-2 h-2 rounded-full ${
                currentPage === index ? "bg-gray-700" : "bg-gray-300"
              }`}
              aria-label={`Page ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextPage}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700"
          aria-label="Page suivante"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
