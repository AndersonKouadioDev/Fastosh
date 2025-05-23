"use client";

import { X } from "lucide-react";
import { cn } from "@heroui/react";

type DateSelectorProps = {
  label: string;
  value: string;
  showCalendar: boolean;
  onInputClick: () => void;
  onClose: () => void;
  isVisible?: boolean;
};

export default function DateSelector({
  label,
  value,
  showCalendar,
  onInputClick,
  onClose,
  isVisible = true,
}: DateSelectorProps) {
  if (!isVisible) {
    return <></>;
  }

  return (
    <div
      className={cn(
        "bg-white text-black p-4 rounded-xl cursor-pointer relative",
        showCalendar && "ring-2 ring-blue-500"
      )}
      onClick={onInputClick}
    >
      <div className="text-sm text-gray-500">{label}</div>
      <div className="font-medium">{value}</div>
      {showCalendar && (
        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 rounded-full p-1"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          <X className="h-4 w-4 text-gray-500" />
        </button>
      )}
    </div>
  );
}
