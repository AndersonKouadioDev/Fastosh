"use client";

import type { Dispatch, SetStateAction } from "react";
import { Search } from "lucide-react";

type DestinationInputProps = {
  destination: string;
  setDestination: Dispatch<SetStateAction<string>>;
};

export default function DestinationInput({
  destination,
  setDestination,
}: DestinationInputProps) {
  
  return (
    <>
      <label
        htmlFor="destination"
        className="block text-sm font-bold text-white mb-1"
      >
        Où souhaitez-vous séjourner ?
      </label>
      <div className="relative">
        <input
          id="destination"
          type="text"
          placeholder="Saisir une destination ou un hôtel"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="w-full h-10 px-4 pl-10 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
      </div>
    </>
  );
}
