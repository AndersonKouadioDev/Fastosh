"use client";

import { cn } from "@heroui/react";

type TravelersSelectorProps = {
  label: string;
  value: string;
  showOptions: boolean;
  onInputClick: () => void;
  onClose: () => void;
  expandColumn?: boolean;
};

export default function TravelersSelector({
  label,
  value,
  showOptions,
  onInputClick,
  expandColumn = false,
}: TravelersSelectorProps) {
  return (
    <div
      className={cn(
        "bg-white text-black p-4 rounded-md cursor-pointer relative",
        showOptions && "ring-2 ring-blue-500",
        expandColumn && "md:col-span-2"
      )}
      onClick={onInputClick}
    >
      <div className="text-sm text-gray-500">{label}</div>
      <div className="font-medium">{value}</div>
    </div>
  );
}
