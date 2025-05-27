"use client";

import { ArrowLeftRight } from "lucide-react";

import LocationSelector from "./location-selector";
import DateSelector from "./date-selector";
import useControl from "./useControl";
import { Button, Checkbox } from "@heroui/react";

export type Person = {
  adults: number;
  children: number;
  childrenAges: (string | null)[];
  rooms: number;
};

export default function FlightSearch() {
  const { locationData, handleSwapLocations, handleSelectLocation } =
    useControl();

  return (
    <div className="bg-primary-500 text-white">
      <div className="container max-w-screen-xl px-6 py-4 md:py-8 mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold md:mb-8 mb-4">
          Des millions de vols pas chers. Une simple recherche.
        </h1>

        <div className="mb-6 flex items-center gap-2">
          <ArrowLeftRight className="h-5 w-5" />
          <span className="font-medium">
            Créer un itinéraire multi-destinations
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2 rounded-2xl">
          {/* From Location */}
          <LocationSelector
            label="De"
            value={locationData.from}
            onSelect={(option) => handleSelectLocation(option, "from")}
            type="from"
          />

          {/* To Location */}
          <LocationSelector
            label="Vers"
            value={locationData.to}
            onSelect={(option) => handleSelectLocation(option, "to")}
            type="to"
            showSwapButton
            onSwap={handleSwapLocations}
          />
          <div className="grid grid-cols-2 md:col-span-2 gap-2">
            <DateSelector label="Départ" />

            <DateSelector label="Retour" />
          </div>
          <Checkbox
            classNames={{
              base: "my-2 md:hidden",
              label: "text-white",
            }}
          >
            Vols directs
          </Checkbox>
          <Button color="secondary" className="min-h-14 h-full text-white">
            Rechercher
          </Button>
        </div>
        <Checkbox
          classNames={{
            base: "mt-2 hidden md:block",
            label: "text-white",
          }}
        >
          Vols directs
        </Checkbox>
      </div>
    </div>
  );
}
