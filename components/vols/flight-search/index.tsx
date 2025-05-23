"use client";

import { ArrowLeftRight } from "lucide-react";
import DateCalendar from "./date-calendar"; // Import DateCalendar
import TravelersDropdown from "./travelers-dropdown"; // Import TravelersDropdown

import LocationSelector from "./location-selector";
import DateSelector from "./date-selector";
import TravelersSelector from "./travelers-selector";
import SearchOptions from "./search-options";
import useControl from "./useControl";
import { Button } from "@heroui/react";

export type Person = {
  adults: number;
  children: number;
  childrenAges: (string | null)[];
  rooms: number;
};

export default function FlightSearch() {
  const {
    showCalendar,
    showTravelers,
    adults,
    children,
    childrenAges,
    // selectedDeparture,
    // selectedReturn,
    isFlexibleDates,
    // selectedDepartureMonth,
    // selectedReturnMonth,
    tripType,
    activeField,
    returnFieldVisible,
    locationData,
    setAdults,
    setChildren,
    setShowCalendar,
    setShowTravelers,
    handleSwapLocations,
    handleSelectLocation,
    handleSelectDate,
    handleSelectMonth,
    handleChangeChildAge,
    toggleDateType,
    handleTripTypeChange,
    getDepartureDisplay,
    getReturnDisplay,
    getCalendarMessage,
    getTotalTravelers,
  } = useControl();

  return (
    <div className="bg-primary-900 text-white">
      <div className="container max-w-screen-xl px-6 mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold mb-8">
          Des millions de vols pas chers. Une simple recherche.
        </h1>

        <div className="mb-6 flex items-center gap-2">
          <ArrowLeftRight className="h-5 w-5" />
          <span className="font-medium">
            Créer un itinéraire multi-destinations
          </span>
        </div>

        <div className="relative h-full p-6 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 mb-4">
            {/* From Location */}
            <LocationSelector
              label="De"
              value={locationData.from}
              onSelect={(option) => handleSelectLocation(option, "from")}
              type="from"
            />

            {/* To Location */}
            <LocationSelector
              label="Vers"
              value={locationData.to}
              onSelect={(option) => handleSelectLocation(option, "to")}
              type="to"
              showSwapButton
              onSwap={handleSwapLocations}
            />

            {/* Departure Date */}
            <DateSelector
              label="Départ"
              value={getDepartureDisplay()}
              showCalendar={showCalendar && activeField === "departure"}
              onClose={() => setShowCalendar(false)}
              onInputClick={() => setShowCalendar(true)}
            />

            {/* Return Date - Note the flex-shrink-0 to prevent layout shift */}
            <DateSelector
                label="Retour"
                value={getReturnDisplay()}
                showCalendar={showCalendar && activeField === "return"}
                onClose={() => setShowCalendar(false)}
                onInputClick={() => setShowCalendar(true)}
                isVisible={returnFieldVisible}
              />

            {/* Travelers */}
            <TravelersSelector
              label="Voyageurs et classe"
              value={`${getTotalTravelers()} voyageurs, Économie`}
              showOptions={showTravelers}
              onClose={() => setShowTravelers(false)}
              expandColumn={!returnFieldVisible}
            />
          </div>

          {/* Calendar Dropdown */}
          {showCalendar && (
            <DateCalendar
              isFlexibleDates={isFlexibleDates}
              tripType={tripType}
              activeField={activeField}
              selectedDay={null} // Removed default selection
              onSelectDate={handleSelectDate}
              onSelectMonth={handleSelectMonth}
              onToggleDateType={toggleDateType}
              onTripTypeChange={handleTripTypeChange}
              onClose={() => setShowCalendar(false)}
              calendarMessage={getCalendarMessage()}
            />
          )}

          {/* Travelers Dropdown */}
          {showTravelers && (
            <TravelersDropdown
              adults={adults}
              childs={children}
              childrenAges={childrenAges}
              onAdultsChange={setAdults}
              onChildrenChange={setChildren}
              onChildAgeChange={handleChangeChildAge}
              onClose={() => setShowTravelers(false)}
            />
          )}
          
          <SearchOptions />

          <div className="flex justify-end">
            <Button color="primary">Rechercher</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
