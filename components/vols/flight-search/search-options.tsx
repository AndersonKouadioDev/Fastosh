"use client"

import { Checkbox } from "@heroui/react"

export default function SearchOptions() {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="nearby1"
            className="border-white data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
          />
          <label
            htmlFor="nearby1"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Ajouter des aéroports à proximité
          </label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="nearby2"
            className="border-white data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
          />
          <label
            htmlFor="nearby2"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Ajouter des aéroports à proximité
          </label>
        </div>
      </div>

      <div className="flex items-center space-x-2 mb-6">
        <Checkbox
          id="direct"
          className="border-white data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
        />
        <label
          htmlFor="direct"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Vols directs
        </label>
      </div>
    </>
  )
}
