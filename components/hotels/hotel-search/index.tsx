"use client";

import { useState } from "react";

import HeroSection from "./hero-section";
import SearchForm from "./search-form";

export type Person = {
  adults: number;
  children: number;
  childrenAges: (string | null)[];
  rooms: number;
};

export default function HotelSearch() {
  const [destination, setDestination] = useState("");
  const [arrivalDate, setArrivalDate] = useState<Date>(new Date("2025-05-25"));
  const [departureDate, setDepartureDate] = useState<Date>(
    new Date("2025-06-01")
  );
  const [persons, setPersons] = useState<Person>({
    adults: 1,
    children: 0,
    childrenAges: [],
    rooms: 1,
  });

  const handleChildrenChange = (value: number) => {
    if (value < 0) return;

    const newChildrenAges = [...persons.childrenAges];

    if (value > persons.children) {
      // Add new children
      for (let i = persons.children; i < value; i++) {
        newChildrenAges.push(null);
      }
    } else if (value < persons.children) {
      // Remove children
      newChildrenAges.splice(value);
    }

    setPersons({
      ...persons,
      children: value,
      childrenAges: newChildrenAges,
    });
  };

  const handleChildAgeChange = (index: number, age: string) => {
    const newChildrenAges = [...persons.childrenAges];
    newChildrenAges[index] = age;
    setPersons({
      ...persons,
      childrenAges: newChildrenAges,
    });
  };

  const formatPersonsText = () => {
    const adultsText = `${persons.adults} adulte${
      persons.adults > 1 ? "s" : ""
    }`;
    const roomsText = `${persons.rooms} chambre${persons.rooms > 1 ? "s" : ""}`;
    return `${adultsText}, ${roomsText}`;
  };

  return (
    <div className="relative w-full">
      <HeroSection />
      <SearchForm
        destination={destination}
        setDestination={setDestination}
        arrivalDate={arrivalDate}
        setArrivalDate={setArrivalDate}
        departureDate={departureDate}
        setDepartureDate={setDepartureDate}
        persons={persons}
        setPersons={setPersons}
        handleChildrenChange={handleChildrenChange}
        handleChildAgeChange={handleChildAgeChange}
        formatPersonsText={formatPersonsText}
      />
    </div>
  );
}
