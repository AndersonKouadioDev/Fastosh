"use client"

import { X, ArrowLeftRight } from "lucide-react"
import { cn } from "@heroui/react"

export type LocationValue = {
  code: string
  name: string
  country: string
}

type LocationSelectorProps = {
  label: string
  value: LocationValue
  showOptions: boolean
  onInputClick: () => void
  onClose: () => void
  onSelect: (option: {code: string, name: string, country: string}) => void
  type: "from" | "to"
  showSwapButton?: boolean
  rotationDegree?: number
  onSwap?: () => void
}

export default function LocationSelector({
  label,
  value,
  showOptions,
  onInputClick,
  onClose,
  // type,
  showSwapButton = false,
  rotationDegree = 0,
  onSwap,
}: LocationSelectorProps) {
  return (
    <div
      className={cn(
        "bg-white text-black p-4 rounded-md cursor-pointer relative",
        showOptions && "ring-2 ring-blue-500",
      )}
      onClick={onInputClick}
    >
      {showSwapButton && (
        <div
          className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white rounded-full p-2 border border-gray-200 z-10 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation()
            onSwap?.()
          }}
        >
          <ArrowLeftRight
            className="h-4 w-4 text-gray-500 transition-transform duration-300"
            style={{ transform: `rotate(${rotationDegree}deg)` }}
          />
        </div>
      )}
      <div className="text-sm text-gray-500">{label}</div>
      <div className="font-medium">
        {value.name} {value.code ? `(${value.code})` : ""}
      </div>
      {showOptions && (
        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 rounded-full p-1"
          onClick={(e) => {
            e.stopPropagation()
            onClose()
          }}
        >
          <X className="h-4 w-4 text-gray-500" />
        </button>
      )}
    </div>
  )
}
