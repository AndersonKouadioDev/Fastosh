"use client";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/react";

import Image from "next/image";
import FlightOption from "@/components/vols/flight-offers-section/flight-option";
import { Destination } from "@/types/vols.type";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface FlightDestinationCardProps {
  destination: Destination;
}

export default function FlightDestinationCard({
  destination,
}: FlightDestinationCardProps) {
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
        <div className="p-4">
          <h3 className="text-lg font-bold">{destination.city}</h3>
          <p className="text-sm text-foreground/70">{destination.country}</p>

          <div className="mt-4 space-y-3">
            {destination.flightOptions.map((option, index) => (
              <FlightOption key={index} flightOption={option} />
            ))}
          </div>
        </div>
      </CardBody>
      <CardFooter className="flex justify-end">
        <Link
          href="#"
          className="flex items-center text-sm font-medium text-primary hover:text-primary-800"
        >
          À partir de {destination.startingPrice}
          <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  );
}
