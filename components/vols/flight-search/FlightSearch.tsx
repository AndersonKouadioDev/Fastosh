"use client";

import LocationSelector from "./location-selector";
import DateSelector from "./date-selector";
import useControl from "./useControl";
import Image from "next/image";
import bg_6 from "@/public/images/background/bg_6.jpg";
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
    <div className="bg-primary-900 w-full py-4 min-h-[500px] md:h-[500px] z-[1] text-white relative">
      <Image
        src={bg_6}
        alt="Vue panoramique sur l'océan au coucher du soleil"
        fill
        className="object-cover rounded-2xl absolute top-0 left-0 w-full h-full"
        priority
      />
      <div className="absolute z-[1] top-0 left-0 w-full h-full bg-black opacity-20 rounded-2xl"></div>
      <div className="relative z-[2] h-full container content-center max-w-screen-xl px-6 mx-auto">
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
      </div>
    </div>
  );
}
