import type { Dispatch, SetStateAction } from "react";
import DestinationInput from "./destination-input";
import { Button, DatePicker } from "@heroui/react";

type SearchFormProps = {
  destination: string;
  setDestination: Dispatch<SetStateAction<string>>;
};

export default function SearchForm({
  destination,
  setDestination,
}: SearchFormProps) {
  return (
    <div className="container max-w-screen-xl px-6 mx-auto relative z-[2]">
      <div className="bg-primary rounded-xl shadow-2xl p-4 md:p-6">
        <div className="grid grid-cols-1 items-end md:grid-cols-5 gap-y-4 md:gap-4">
          <div className="md:col-span-2">
            <DestinationInput
              destination={destination}
              setDestination={setDestination}
            />
          </div>
          <div className="col-span-2 grid grid-cols-2 gap-4">
            <DatePicker
              classNames={{
                label: "text-sm font-medium text-white",
              }}
              radius="sm"
              labelPlacement="outside"
              label="Arrivée"
            />
            <DatePicker
              classNames={{
                label: "text-sm font-medium text-white",
              }}
              radius="sm"
              labelPlacement="outside"
              label="Départ"
            />
          </div>
          <Button color="secondary" className="text-white">
            Rechercher
          </Button>
        </div>
      </div>
    </div>
  );
}
