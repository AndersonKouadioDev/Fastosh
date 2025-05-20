"use client";

import { ArrowLeftRight } from "lucide-react";
import DateCalendar from "./date-calendar"; // Import DateCalendar
import TravelersDropdown from "./travelers-dropdown"; // Import TravelersDropdown
import LocationDropdown from "./location-dropdown"; // Import LocationDropdown

import LocationSelector from "./location-selector";
import DateSelector from "./date-selector";
import TravelersSelector from "./travelers-selector";
import SearchOptions from "./search-options";
import useControl from "./useControl";

export type Person = {
  adults: number;
  children: number;
  childrenAges: (string | null)[];
  rooms: number;
};

export default function FlightSearch() {
  const {
    showFromOptions,
    showToOptions,
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
    rotationDegree,
    returnFieldVisible,
    fromValue,
    toValue,
    setAdults,
    setChildren,
    setShowFromOptions,
    setShowToOptions,
    setShowCalendar,
    setShowTravelers,
    handleInputClick,
    closeAllDropdowns,
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

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 mb-4">
            {/* From Location */}
            <LocationSelector
              label="De"
              value={fromValue}
              showOptions={showFromOptions}
              onInputClick={() => handleInputClick("from")}
              onClose={() => setShowFromOptions(false)}
              onSelect={(option) => handleSelectLocation(option, "from")}
              type="from"
            />

            {/* To Location */}
            <LocationSelector
              label="Vers"
              value={toValue}
              showOptions={showToOptions}
              onInputClick={() => handleInputClick("to")}
              onClose={() => setShowToOptions(false)}
              onSelect={(option) => handleSelectLocation(option, "to")}
              type="to"
              showSwapButton
              rotationDegree={rotationDegree}
              onSwap={handleSwapLocations}
            />

            {/* Departure Date */}
            <DateSelector
              label="Départ"
              value={getDepartureDisplay()}
              showCalendar={showCalendar && activeField === "departure"}
              onInputClick={() => handleInputClick("departure")}
              onClose={() => setShowCalendar(false)}
            />

            {/* Return Date - Note the flex-shrink-0 to prevent layout shift */}
            <div className="md:flex-shrink-0">
              <DateSelector
                label="Retour"
                value={getReturnDisplay()}
                showCalendar={showCalendar && activeField === "return"}
                onInputClick={() => handleInputClick("return")}
                onClose={() => setShowCalendar(false)}
                isVisible={returnFieldVisible}
              />
            </div>

            {/* Travelers */}
            <TravelersSelector
              label="Voyageurs et classe"
              value={`${getTotalTravelers()} voyageurs, Économie`}
              showOptions={showTravelers}
              onInputClick={() => handleInputClick("travelers")}
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

          {/* From Location Dropdown */}
          {showFromOptions && (
            <LocationDropdown
              onSelect={(option) => handleSelectLocation(option, "from")}
              onClose={closeAllDropdowns}
              position="left"
            />
          )}

          {/* To Location Dropdown */}
          {showToOptions && (
            <LocationDropdown
              onSelect={(option) => handleSelectLocation(option, "to")}
              onClose={closeAllDropdowns}
              position="left-20"
              showExploreWorld
            />
          )}

          <SearchOptions />

          <div className="flex justify-end">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-4 px-8 rounded-md flex items-center justify-center transition-colors">
              Rechercher
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
