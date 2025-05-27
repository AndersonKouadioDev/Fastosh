"use client";

import { useState } from "react";
import { LocationValue } from "@/types/vols.type";
export type Person = {
  adults: number;
  children: number;
  childrenAges: (string | null)[];
  rooms: number;
};

export default function useControl() {
  const [locationData, setLocationData] = useState<{
    from: LocationValue;
    to: LocationValue;
  }>({
    from: {
      code: "DOH",
      name: "Hamad International",
      country: "Qatar",
      type: "airport",
    },
    to: {
      code: "ISA",
      name: "Mont Isa",
      country: "Australie",
      type: "airport",
    },
  });

  // Echanger les destinations
  const handleSwapLocations = () => {
    const temp = locationData;
    setLocationData((prev) => ({
      ...prev,
      from: temp.to,
      to: temp.from,
    }));
  };

  // Selectionner une destination
  const handleSelectLocation = (
    option: { code: string; name: string; country: string },
    type: "from" | "to"
  ) => {
    if (type === "from") {
      setLocationData((prev) => ({
        ...prev,
        from: {
          code: option.code,
          name: option.name,
          country: option.country,
          type: "airport",
        },
      }));
    } else {
      setLocationData((prev) => ({
        ...prev,
        to: {
          code: option.code,
          name: option.name,
          country: option.country,
          type: "airport",
        },
      }));
    }
  };

  return {
    locationData,
    handleSwapLocations,
    handleSelectLocation,
  };
}
