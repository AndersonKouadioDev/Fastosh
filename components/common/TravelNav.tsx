"use client";

import type React from "react";

import { Plane, Building2, Car } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavOption = {
  id: string;
  label: string;
  icon: React.ReactNode;
  link: string;
};

export default function TravelNav() {
  const pathname = usePathname();
  const isActive = (option: string) => pathname === option;
  const navOptions: NavOption[] = [
    {
      id: "vols",
      label: "Vols",
      icon: <Plane className="h-4 w-4 mr-2" />,
      link: "/vols",
    },
    {
      id: "hotels",
      label: "Hôtels",
      icon: <Building2 className="h-4 w-4 mr-2" />,
      link: "/hotels",
    },
    {
      id: "voitures",
      label: "Location de voiture",
      icon: <Car className="h-4 w-4 mr-2" />,
      link: "/location-de-voiture",
    },
  ];

  return (
    <div className="container max-w-screen-xl px-6 mx-auto">
      <div className="flex gap-2 overflow-x-auto py-2">
        {navOptions.map((option) => (
          <Link
            key={option.id}
            href={option.link}
            className={`
              flex shrink-0 items-center justify-center px-2 sm:px-4 py-2 sm:py-2 rounded-full text-sm font-medium transition-colors
              ${
                isActive(option.link) ||
                (pathname == "/" && option.id == "vols")
                  ? "bg-secondary text-white"
                  : "text-white border border-secondary hover:bg-secondary-600"
              }
            `}
          >
            {option.icon}
            {option.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
