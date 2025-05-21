import { FlightOptionType } from "@/types/vols.type";
import { Plane } from "lucide-react";

interface FlightOptionProps {
  flightOption: FlightOptionType;
}

export default function FlightOption({ flightOption }: FlightOptionProps) {
  return (
    <div className="flex items-start justify-between">
      <div className="flex items-start">
        <div className="mr-2 mt-1">
          {flightOption.airline === "Kenya Airways" ? (
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-white">
              <span className="text-xs">K</span>
            </span>
          ) : (
            <Plane className="h-5 w-5 text-foreground/70" />
          )}
        </div>
        <div>
          <p className="text-sm font-medium">
            {flightOption.dayOfWeek}. {flightOption.date}
          </p>
          <p className="text-xs text-foreground/70">
            {flightOption.departureAirport} - {flightOption.arrivalAirport} avec{" "}
            {flightOption.airline}
          </p>
        </div>
      </div>
      <div>
        <span className="text-xs font-medium text-foreground/70">Direct</span>
      </div>
    </div>
  );
}
