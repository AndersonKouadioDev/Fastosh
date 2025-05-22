"use client";
import { Card, CardHeader, CardBody } from "@heroui/react";

import Image from "next/image";
import { Destination } from "@/types/hotels.type";

interface DestinationLocationCardProps {
  destination: Destination;
}

export default function DestinationLocationCard({
  destination,
}: DestinationLocationCardProps) {
  return (
    <Card className="hover:shadow-lg">
      <CardHeader className="relative h-40 w-full">
        <Image
          src={destination.imageUrl}
          alt={destination.city}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </CardHeader>
      <CardBody>
        <div className="p-4 flex justify-between items-center">
          <div>
            <h3 className="text-lg md:text-xl font-bold">{destination.city}</h3>
            <p className="text-sm text-foreground/70">{destination.country}</p>
          </div>
          <div className="flex flex-col items-end -gap-1">
            <p className="text-xs font-medium">à partir de</p>
            <p className="font-bold text-lg md:text-xl">
              {destination.startingPrice}
            </p>
            <p className="text-xs font-medium">par nuit</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
