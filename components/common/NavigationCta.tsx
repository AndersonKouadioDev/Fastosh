"use client";

import React from "react";
import { Bed, Car, Search } from "lucide-react";

const items = [
  {
    icon: Bed,
    title: "Hôtels",
    path: "/hotels",
  },
  {
    icon: Car,
    title: "Location de voiture",
    path: "/location-de-voiture",
  },
  {
    icon: Search,
    title: "Explorez le monde entier",
    path: "/explorer",
  },
];
export default function NavigationCta() {
  return (
    <div className="grid grid-flow-col sm:grid-cols-3 gap-x-4 overflow-x-auto py-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-col lg:flex-row lg:items-center justify-start gap-8 lg:gap-2 bg-primary-700 text-white hover:bg-primary min-h-16 min-w-40 px-4 py-2 rounded-xl text-lg transition-colors duration-200"
        >
          <item.icon className="h-6 w-6" />
          <span>{item.title}</span>
        </div>
      ))}
    </div>
  );
}
