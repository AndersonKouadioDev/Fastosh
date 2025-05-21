"use client";

import DateCalendar from "./date-calendar"; // Import DateCalendar
import TravelersDropdown from "./travelers-dropdown"; // Import TravelersDropdown
import LocationDropdown from "./location-dropdown"; // Import LocationDropdown

import LocationSelector from "./location-selector";
import DateSelector from "./date-selector";
import TravelersSelector from "./travelers-selector";
import SearchOptions from "./search-options";
import useControl from "./useControl";
import Image from "next/image";
import bg_6 from "@/public/images/background/bg_6.jpg";
import { Button } from "@heroui/react";

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
    <div className="bg-primary-900 w-full h-[500px] z-[1] text-white relative">
      <Image
        src={bg_6}
        alt="Vue panoramique sur l'océan au coucher du soleil"
        fill
        className="object-cover rounded-2xl absolute top-0 left-0 w-full h-full"
        priority
      />
      <div className="absolute z-[1] top-0 left-0 w-full h-full bg-black opacity-20 rounded-2xl"></div>
      <div className="relative z-[2] h-full container content-center max-w-screen-xl px-6 mx-auto">
        <div className="relative bg-primary-900 p-6 rounded-2xl">
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
            <Button color="primary">Rechercher</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
