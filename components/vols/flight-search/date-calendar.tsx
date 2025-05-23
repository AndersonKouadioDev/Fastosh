"use client"

import { cn } from "@heroui/react"
import { ChevronLeft, ChevronRight } from "lucide-react"

type Month = {
  year: number
  month: string
  label: string
}

type DateCalendarProps = {
  isFlexibleDates: boolean
  tripType: "round-trip" | "one-way"
  activeField: "departure" | "return"
  selectedDay: number | null
  onSelectDate: (day: number, month: number, year: number) => void
  onSelectMonth: (month: Month) => void
  onToggleDateType: (type: "specific" | "flexible") => void
  onTripTypeChange: (type: "round-trip" | "one-way") => void
  onClose: () => void
  calendarMessage: string
}

export default function DateCalendar({
  isFlexibleDates,
  tripType,
  // activeField,
  onSelectDate,
  onSelectMonth,
  onToggleDateType,
  onTripTypeChange,
  onClose,
  calendarMessage,
}: DateCalendarProps) {
  const months: Month[] = [
    { year: 2025, month: "mai", label: "mai" },
    { year: 2025, month: "juin", label: "juin" },
    { year: 2025, month: "juillet", label: "juillet" },
    { year: 2025, month: "août", label: "août" },
    { year: 2025, month: "septembre", label: "septembre" },
    { year: 2025, month: "octobre", label: "octobre" },
    { year: 2025, month: "novembre", label: "novembre" },
    { year: 2025, month: "décembre", label: "décembre" },
    { year: 2026, month: "janvier", label: "janvier" },
    { year: 2026, month: "février", label: "février" },
    { year: 2026, month: "mars", label: "mars" },
    { year: 2026, month: "avril", label: "avril" },
  ]

  return (
    <div className="absolute left-0 top-[calc(50%+38px)] md:top-[calc(50%-28px)] transform w-full bg-white text-black rounded-md shadow-lg z-20">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div>
            <select
              className="bg-white border border-gray-300 rounded-md px-3 py-1 text-sm"
              value={tripType === "round-trip" ? "Aller-retour" : "Aller simple"}
              onChange={(e) => onTripTypeChange(e.target.value === "Aller-retour" ? "round-trip" : "one-way")}
            >
              <option>Aller-retour</option>
              <option>Aller simple</option>
            </select>
          </div>
          <div className="flex">
            <button
              className={cn(
                "px-4 py-2 rounded-l-md",
                !isFlexibleDates ? "bg-[#0c1b33] text-white" : "bg-white text-[#0c1b33] border border-[#0c1b33]",
              )}
              onClick={() => onToggleDateType("specific")}
            >
              Dates spécifiques
            </button>
            <button
              className={cn(
                "px-4 py-2 rounded-r-md",
                isFlexibleDates ? "bg-[#0c1b33] text-white" : "bg-white text-[#0c1b33] border border-[#0c1b33]",
              )}
              onClick={() => onToggleDateType("flexible")}
            >
              Dates flexibles
            </button>
          </div>
        </div>

        {!isFlexibleDates ? (
          <>
            <div className="flex justify-between items-center mb-4">
              <button className="p-1">
                <ChevronLeft className="h-6 w-6" />
              </button>
              <div className="flex gap-16 md:gap-32">
                <div className="text-xl font-medium">mai</div>
                <div className="text-xl font-medium">juin</div>
              </div>
              <button className="p-1">
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Mai calendar */}
              <div>
                <div className="grid grid-cols-7 mb-2">
                  {["L", "M", "M", "J", "V", "S", "D"].map((day, i) => (
                    <div key={`may-header-${i}`} className="text-center text-sm font-medium">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-y-2">
                  {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                    <div
                      key={`may-${day}`}
                      className={cn(
                        "text-center py-1 cursor-pointer hover:bg-gray-100 rounded-full",
                        day < 20 ? "text-gray-400" : "",
                      )}
                      onClick={() => onSelectDate(day, 5, 2025)}
                    >
                      {day}
                    </div>
                  ))}
                </div>
              </div>

              {/* Juin calendar */}
              <div>
                <div className="grid grid-cols-7 mb-2">
                  {["L", "M", "M", "J", "V", "S", "D"].map((day, i) => (
                    <div key={`june-header-${i}`} className="text-center text-sm font-medium">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-y-2">
                  {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => (
                    <div
                      key={`june-${day}`}
                      className="text-center py-1 cursor-pointer hover:bg-gray-100 rounded-full"
                      onClick={() => onSelectDate(day, 6, 2025)}
                    >
                      {day}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <h3 className="font-medium mb-4">Mois</h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              {months.map((month, index) => (
                <div
                  key={`month-${index}`}
                  className="p-4 rounded-md text-center cursor-pointer bg-gray-100 hover:bg-gray-200"
                  onClick={() => onSelectMonth(month)}
                >
                  <div className="text-sm">{month.year}</div>
                  <div className="font-medium">{month.label}</div>
                </div>
              ))}
            </div>
          </>
        )}

        <div className="mt-6 flex justify-between items-center">
          <div>{calendarMessage}</div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md" onClick={onClose}>
            Appliquer
          </button>
        </div>
      </div>
    </div>
  )
}
