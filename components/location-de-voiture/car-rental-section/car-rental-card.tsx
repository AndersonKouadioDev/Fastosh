"use client";
import { Card, CardHeader, CardBody } from "@heroui/react";

import Image from "next/image";
import { CarRentalOption } from "@/types/location-voiture.type";
import { Briefcase, User } from "lucide-react";

interface CarOffersCardProps {
  carRental: CarRentalOption;
}

export default function CarRentalCard({ carRental }: CarOffersCardProps) {
  return (
    <Card className="hover:shadow-lg">
      <CardHeader className="relative h-40 w-full">
        <Image
          src={carRental.imageUrl}
          alt={carRental.type}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </CardHeader>
      <CardBody>
        <div className="p-4 flex justify-between items-start">
          <div>
            <h3 className="text-lg md:text-xl font-bold">{carRental.type}</h3>
            <p className="text-sm text-foreground/70">
              {carRental.description}
            </p>
            <div className="mt-3 flex items-center space-x-6">
              <div className="flex items-center">
                <User className="mr-1 h-4 w-4 text-foreground/50" />
                <span className="text-sm text-foreground/50">
                  {carRental.passengers}
                </span>
              </div>
              <div className="flex items-center">
                <Briefcase className="mr-1 h-4 w-4 text-foreground/50" />
                <span className="text-sm text-foreground/50">
                  {carRental.bags}
                </span>
              </div>
            </div>
          </div>

          <div className="text-right">
            <p className="text-xs text-foreground/50">À partir de</p>
            <p className="text-lg font-bold text-foreground">
              {carRental.price}
            </p>
            <p className="text-xs text-foreground/50">par jour</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
