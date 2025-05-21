"use client";

import { cn } from "@heroui/react";
import { useState } from "react";

const items = [
  {
    label: "Location de voiture dans les destinations populaires",
    value: "destinations",
  },
  {
    label: "Location de voiture à l&apos;aéroport",
    value: "airport",
  },
  {
    label: "Prestataires de location de voiture populaires",
    value: "providers",
  },
];
export default function TripPlannerTabs() {
  const [activeTab, setActiveTab] = useState("destinations");

  return (
    <div className="flex flex-col gap-4 py-4">
      <h2 className="text-2xl md:text-3xl font-bold font-ibrand">
        Commencez à planifier votre road trip
      </h2>
      <div className="flex gap-3 overflow-x-auto">
        {items.map((item) => (
          <button
            key={item.value}
            className={cn("px-4 py-3 rounded-md text-sm font-medium shrink-0", {
              "bg-gray-900 text-white": activeTab === item.value,
              "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50":
                activeTab !== item.value,
            })}
            onClick={() => setActiveTab(item.value)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
