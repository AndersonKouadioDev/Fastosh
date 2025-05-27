"use client";

import { ArrowLeftRight, Plane } from "lucide-react";
import { Checkbox, cn, Select, SelectItem } from "@heroui/react";
import { LocationValue } from "@/types/vols.type";
import { locationOptions } from "@/lib/data";

type LocationSelectorProps = {
  label: string;
  value: LocationValue;
  onSelect: (option: LocationValue) => void;
  type: "from" | "to";
  showSwapButton?: boolean;
  showCheckbox?: boolean;
  onSwap?: () => void;
};

export default function LocationSelector({
  label,
  value,
  onSelect,
  showSwapButton = false,
  onSwap,
  showCheckbox = false,
}: LocationSelectorProps) {
  return (
    <div className="relative">
      <Select
        classNames={{
          trigger: "h-16",
          listbox: "bg-secondary-50/50 dark:bg-secondary-900/10",
        }}
        radius="sm"
        selectedKeys={[value.code]}
        onChange={(e) => {
          const option = locationOptions.find(
            (option) => option.code === e.target.value
          );
          if (option) {
            onSelect(option);
          }
        }}
        items={locationOptions}
        renderValue={(items) => {
          return items.map((locationOption) => (
            <div key={locationOption.key} className={cn("flex flex-col gap-1")}>
              <div className="text-sm font-medium">{label}</div>
              <p key={locationOption.key} className="text-sm font-medium">
                {locationOption.data?.name} ({locationOption.data?.code})
              </p>
            </div>
          ));
        }}
      >
        {(locationOption) => (
          <SelectItem key={locationOption.code}>
            <div className={cn("flex gap-2 items-start")}>
              <Plane className="h-6 w-6 text-primary" />
              <div>
                <p className="text-sm text-foreground/50">
                  {locationOption.name} ({locationOption.code})
                </p>
                <p className="text-sm font-medium">{locationOption.country}</p>
              </div>
            </div>
          </SelectItem>
        )}
      </Select>
      {showCheckbox && <Checkbox classNames={{
        label: "text-white"
      }}>Ajouter des aéroports à proximité</Checkbox>}
      {showSwapButton && (
        <div
          className="absolute left-[calc(100%-24px)] -top-6 md:top-1/2 md:-left-1 transform md:-translate-x-1/2 md:-translate-y-1/2 bg-secondary-100 rounded-full p-1 border border-secondary-200  z-10 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            onSwap?.();
          }}
        >
          <ArrowLeftRight
            className="h-5 w-5 text-secondary transition-transform duration-300"
            style={{ transform: `rotate(180 deg)` }}
          />
        </div>
      )}
    </div>
  );
}
