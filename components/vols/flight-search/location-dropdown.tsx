"use client"

import { Globe } from "lucide-react"

type LocationOption = {
  code: string
  name: string
  country: string
  type: "airport" | "country"
}

type LocationDropdownProps = {
  onSelect: (option: LocationOption) => void
  onClose: () => void
  position: string
  showExploreWorld?: boolean
}

export default function LocationDropdown({
  onSelect,
  onClose,
  position,
  showExploreWorld = false,
}: LocationDropdownProps) {
  const locationOptions: LocationOption[] = [
    { code: "ABJ", name: "Abidjan", country: "Côte d'Ivoire", type: "airport" },
    { code: "NCE", name: "Nice", country: "France", type: "airport" },
    { code: "MRS", name: "Marseille", country: "France", type: "airport" },
    { code: "KR", name: "Corée du Sud", country: "Corée du Sud", type: "country" },
    { code: "CI", name: "Côte d'Ivoire", country: "Côte d'Ivoire", type: "country" },
    { code: "MJC", name: "Man", country: "Côte d'Ivoire", type: "airport" },
    { code: "DAD", name: "Đà Nẵng", country: "Vietnam", type: "airport" },
    { code: "TLN", name: "Toulon-Hyères", country: "France", type: "airport" },
    { code: "CXR", name: "Cam Ranh (Nha Trang)", country: "Vietnam", type: "airport" },
    { code: "HUI", name: "Huế", country: "Vietnam", type: "airport" },
    { code: "DOH", name: "Hamad International", country: "Qatar", type: "airport" },
    { code: "ISA", name: "Mont Isa", country: "Australie", type: "airport" },
  ]

  const positionClasses =
    {
      left: "left-0",
      "left-20": "left-[20%]",
      right: "right-0",
    }[position] || "left-0"

  return (
    <div
      className={`absolute ${positionClasses} top-[calc(100%+4px)] w-full md:w-[400px] bg-white text-black rounded-md shadow-lg z-20 max-h-[400px] overflow-y-auto`}
    >
      {locationOptions.map((option) => (
        <div
          key={`${option.type}-${option.code}`}
          className="flex items-center p-4 hover:bg-gray-100 cursor-pointer border-b border-gray-100"
          onClick={() => onSelect(option)}
        >
          {option.type === "airport" ? (
            <div className="mr-3">
              <div className="text-gray-500">
                <span className="inline-block w-5 h-5">✈️</span>
              </div>
            </div>
          ) : (
            <div className="mr-3">
              <div className="text-gray-500">
                <span className="inline-block w-5 h-5">🏳️</span>
              </div>
            </div>
          )}
          <div>
            <div className="font-medium">
              {option.name} ({option.code})
            </div>
            <div className="text-sm text-gray-500">{option.country}</div>
          </div>
        </div>
      ))}

      {showExploreWorld && (
        <div className="border-t border-gray-200 pt-2">
          <div
            className="flex items-center p-4 hover:bg-gray-100 cursor-pointer"
            onClick={() => onSelect({ code: "", name: "Monde entier", country: "", type: "country" })}
          >
            <div className="mr-3">
              <Globe className="h-5 w-5 text-blue-500" />
            </div>
            <div className="font-medium text-blue-500">Explorer le monde entier</div>
          </div>
          <div className="flex items-center p-4 hover:bg-gray-100 cursor-pointer" onClick={onClose}>
            <div className="mr-3">
              <span className="inline-block w-5 h-5">✈️</span>
            </div>
            <div className="font-medium text-blue-500">Recherche multi-destinations</div>
          </div>
        </div>
      )}
    </div>
  )
}
