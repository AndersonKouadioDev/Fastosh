import type { Dispatch, SetStateAction } from "react";
import type { Person } from "./index";
import DestinationInput from "./destination-input";
import DateSelector from "./date-selector";
import PersonsSelector from "./persons-selector";
import FilterOptions from "./filter-options";
import SearchButton from "./search-button";

type SearchFormProps = {
  destination: string;
  setDestination: Dispatch<SetStateAction<string>>;
  arrivalDate: Date;
  setArrivalDate: Dispatch<SetStateAction<Date>>;
  departureDate: Date;
  setDepartureDate: Dispatch<SetStateAction<Date>>;
  persons: Person;
  setPersons: Dispatch<SetStateAction<Person>>;
  handleChildrenChange: (value: number) => void;
  handleChildAgeChange: (index: number, age: string) => void;
  formatPersonsText: () => string;
};

export default function SearchForm({
  destination,
  setDestination,
  arrivalDate,
  setArrivalDate,
  departureDate,
  setDepartureDate,
  persons,
  setPersons,
  handleChildrenChange,
  handleChildAgeChange,
  formatPersonsText,
}: SearchFormProps) {
  return (
    <div className="container max-w-screen-xl px-6 mx-auto -mt-16 relative z-10">
      <div className="bg-primary-900 rounded-xl shadow-2xl p-4 md:p-6">
        <div className="space-y-4">
          {/* Destination & Dates */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <DestinationInput
                destination={destination}
                setDestination={setDestination}
              />
            </div>

            <DateSelector
              label="Arrivée"
              selectedDate={arrivalDate}
              setSelectedDate={setArrivalDate}
            />

            <DateSelector
              label="Départ"
              selectedDate={departureDate}
              setSelectedDate={setDepartureDate}
            />
          </div>

          {/* Persons & Rooms */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="md:col-span-2">
              <PersonsSelector
                persons={persons}
                setPersons={setPersons}
                handleChildrenChange={handleChildrenChange}
                handleChildAgeChange={handleChildAgeChange}
                formatPersonsText={formatPersonsText}
              />
            </div>

            <div className="md:col-span-2 flex items-end">
              <FilterOptions />
            </div>

            <div className="md:col-span-1 flex items-end">
              <SearchButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
