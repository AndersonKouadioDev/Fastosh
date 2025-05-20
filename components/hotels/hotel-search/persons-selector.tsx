"use client"

import { useState, useRef, useEffect } from "react"
import type { Dispatch, SetStateAction } from "react"
import { ChevronDown, Minus, Plus, User } from "lucide-react"
import type { Person } from "./index"

type PersonsSelectorProps = {
  persons: Person
  setPersons: Dispatch<SetStateAction<Person>>
  handleChildrenChange: (value: number) => void
  handleChildAgeChange: (index: number, age: string) => void
  formatPersonsText: () => string
}

export default function PersonsSelector({
  persons,
  setPersons,
  handleChildrenChange,
  handleChildAgeChange,
  formatPersonsText,
}: PersonsSelectorProps) {
  const [showDropdown, setShowDropdown] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div>
      <label className="block text-sm font-medium text-white mb-1">Nb de personnes et chambres</label>
      <div className="relative" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setShowDropdown(!showDropdown)}
          className="w-full h-10 px-4 flex items-center justify-between rounded-lg bg-white text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <span>{formatPersonsText()}</span>
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </button>

        {showDropdown && (
          <div className="absolute z-10 mt-1 w-80 bg-white rounded-lg shadow-lg p-4">
            <div className="space-y-4">
              {/* Adults */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-gray-500" />
                  <span>Adultes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    className="h-8 w-8 rounded-full flex items-center justify-center border border-gray-300 hover:bg-gray-100 focus:outline-none"
                    onClick={() => setPersons({ ...persons, adults: Math.max(1, persons.adults - 1) })}
                  >
                    <Minus className="h-4 w-4 text-gray-500" />
                  </button>
                  <span className="w-8 text-center">{persons.adults}</span>
                  <button
                    type="button"
                    className="h-8 w-8 rounded-full flex items-center justify-center border border-gray-300 hover:bg-gray-100 focus:outline-none"
                    onClick={() => setPersons({ ...persons, adults: persons.adults + 1 })}
                  >
                    <Plus className="h-4 w-4 text-gray-500" />
                  </button>
                </div>
              </div>

              {/* Children */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-gray-500" />
                  <span>Enfants</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    className="h-8 w-8 rounded-full flex items-center justify-center border border-gray-300 hover:bg-gray-100 focus:outline-none"
                    onClick={() => handleChildrenChange(Math.max(0, persons.children - 1))}
                  >
                    <Minus className="h-4 w-4 text-gray-500" />
                  </button>
                  <span className="w-8 text-center">{persons.children}</span>
                  <button
                    type="button"
                    className="h-8 w-8 rounded-full flex items-center justify-center border border-gray-300 hover:bg-gray-100 focus:outline-none"
                    onClick={() => handleChildrenChange(persons.children + 1)}
                  >
                    <Plus className="h-4 w-4 text-gray-500" />
                  </button>
                </div>
              </div>

              {/* Children Ages */}
              {persons.children > 0 && (
                <div className="space-y-2">
                  <h3 className="font-medium">Âge des enfants ?</h3>
                  <div className="space-y-2">
                    {persons.childrenAges.map((age, index) => (
                      <div key={index} className="relative">
                        <select
                          value={age || "0"}
                          onChange={(e) => handleChildAgeChange(index, e.target.value)}
                          className="w-full h-10 px-4 pr-10 rounded-lg border border-gray-300 bg-white text-gray-800 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="0">Moins d&apos;un an</option>
                          {Array.from({ length: 16 }, (_, i) => i + 1).map((year) => (
                            <option key={year} value={year.toString()}>
                              {year} {year === 1 ? "an" : "ans"}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Rooms */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-gray-500" />
                  <span>Chambres</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    className="h-8 w-8 rounded-full flex items-center justify-center border border-gray-300 hover:bg-gray-100 focus:outline-none"
                    onClick={() => setPersons({ ...persons, rooms: Math.max(1, persons.rooms - 1) })}
                  >
                    <Minus className="h-4 w-4 text-gray-500" />
                  </button>
                  <span className="w-8 text-center">{persons.rooms}</span>
                  <button
                    type="button"
                    className="h-8 w-8 rounded-full flex items-center justify-center border border-gray-300 hover:bg-gray-100 focus:outline-none"
                    onClick={() => setPersons({ ...persons, rooms: persons.rooms + 1 })}
                  >
                    <Plus className="h-4 w-4 text-gray-500" />
                  </button>
                </div>
              </div>

              <button
                type="button"
                className="w-full h-10 mt-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={() => setShowDropdown(false)}
              >
                Terminé
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
