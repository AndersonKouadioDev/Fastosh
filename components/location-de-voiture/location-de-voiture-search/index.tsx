"use client";

import { useState } from "react";

import SearchForm from "./search-form";
import Image from "next/image";

export type Person = {
  adults: number;
  children: number;
  childrenAges: (string | null)[];
  rooms: number;
};

export default function LocationDeVoitureSearch() {
  const [destination, setDestination] = useState("");

  return (
    <div className="relative w-full">
      <div className="relative w-full h-[500px] z-[1]">
        <Image
          src="/images/background/bg_5.jpg"
          alt="Location de voiture"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20" />
        <div className="absolute inset-0 flex flex-col gap-4 md:gap-8 items-center justify-center">
          <h1 className="text-3xl md:text-6xl font-bold text-white text-center px-4 drop-shadow-md">
            Trouvez les meilleures offres pour louer une voiture
          </h1>
          <SearchForm
            destination={destination}
            setDestination={setDestination}
          />
        </div>
      </div>
    </div>
  );
}
