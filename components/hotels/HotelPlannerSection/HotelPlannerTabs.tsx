"use client";

import { cn } from "@heroui/react";
import { useState } from "react";

const items = [
  {
    label: "Quartiers populaires",
    value: "destinations",
  },
  {
    label: "Hôtels par nombre d'étoiles",
    value: "airport",
  },
  {
    label: "Villes populaires",
    value: "providers",
  },
];
export default function HotelPlannerTabs() {
  const [activeTab, setActiveTab] = useState("destinations");

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl md:text-3xl font-bold font-ibrand">
        Plus d’options de voyages

      </h2>
      <div className="flex gap-3 overflow-x-auto py-4">
        {items.map((item) => (
          <button
            key={item.value}
            className={cn(
              "px-4 py-1 w-54 sm:w-fit cursor-pointer rounded-md text-sm font-medium shrink-0",
              {
                "bg-blue-900 text-white": activeTab === item.value,
                "bg-transparent border border-blue-900 dark:border-gray-500 hover:bg-foreground/10":
                  activeTab !== item.value,
              }
            )}
            onClick={() => setActiveTab(item.value)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
