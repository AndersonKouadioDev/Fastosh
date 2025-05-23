"use client";

import { useState, useEffect } from "react";
import { LocationValue } from "@/types/vols.type";

export type Person = {
  adults: number;
  children: number;
  childrenAges: (string | null)[];
  rooms: number;
};

export default function useControl() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [showTravelers, setShowTravelers] = useState(false);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [childrenAges, setChildrenAges] = useState<number[]>([]);
  const [selectedDeparture, setSelectedDeparture] = useState("");
  const [selectedReturn, setSelectedReturn] = useState("");
  const [isFlexibleDates, setIsFlexibleDates] = useState(false);
  const [selectedDepartureMonth, setSelectedDepartureMonth] = useState("");
  const [selectedReturnMonth, setSelectedReturnMonth] = useState("");
  const [tripType, setTripType] = useState<"round-trip" | "one-way">(
    "round-trip"
  );
  const [activeField, setActiveField] = useState<"departure" | "return">(
    "departure"
  );
  const [returnFieldVisible, setReturnFieldVisible] = useState(true);

  const [locationData, setLocationData] = useState<{
    from: LocationValue;
    to: LocationValue;
  }>({
    from: {
      code: "DOH",
      name: "Hamad International",
      country: "Qatar",
      type: "airport",
    },
    to: {
      code: "ISA",
      name: "Mont Isa",
      country: "Australie",
      type: "airport",
    },
  });

  // Update return field visibility based on trip type
  useEffect(() => {
    if (tripType === "one-way") {
      setReturnFieldVisible(false);
    } else {
      setReturnFieldVisible(true);
    }
  }, [tripType]);

  // Update children ages array when children count changes
  useEffect(() => {
    if (children > childrenAges.length) {
      // Add new children with default age 5
      setChildrenAges([
        ...childrenAges,
        ...Array(children - childrenAges.length).fill(5),
      ]);
    } else if (children < childrenAges.length) {
      // Remove extra children
      setChildrenAges(childrenAges.slice(0, children));
    }
  }, [children, childrenAges]);

  // Echanger les destinations
  const handleSwapLocations = () => {
    const temp = locationData;
    setLocationData((prev) => ({
      ...prev,
      from: temp.to,
      to: temp.from,
    }));
  };

  // Selectionner une destination
  const handleSelectLocation = (
    option: { code: string; name: string; country: string },
    type: "from" | "to"
  ) => {
    if (type === "from") {
      setLocationData((prev) => ({
        ...prev,
        from: {
          code: option.code,
          name: option.name,
          country: option.country,
          type: "airport",
        },
      }));
    } else {
      setLocationData((prev) => ({
        ...prev,
        to: {
          code: option.code,
          name: option.name,
          country: option.country,
          type: "airport",
        },
      }));
    }
  };

  const handleSelectDate = (day: number, month: number, year: number) => {
    const formattedDate = `${day.toString().padStart(2, "0")}/${month
      .toString()
      .padStart(2, "0")}/${year}`;

    if (activeField === "departure") {
      setSelectedDeparture(formattedDate);
      if (tripType === "round-trip") {
        setActiveField("return");
      }
    } else {
      setSelectedReturn(formattedDate);
    }
  };

  const handleSelectMonth = (month: { month: string; year: number }) => {
    if (activeField === "departure") {
      setSelectedDepartureMonth(`${month.month} ${month.year}`);
      if (tripType === "round-trip") {
        setActiveField("return");
      }
    } else {
      setSelectedReturnMonth(`${month.month} ${month.year}`);
    }
  };

  const handleChangeChildAge = (index: number, age: number) => {
    const newAges = [...childrenAges];
    newAges[index] = age;
    setChildrenAges(newAges);
  };

  const toggleDateType = (type: "specific" | "flexible") => {
    setIsFlexibleDates(type === "flexible");
  };

  const handleTripTypeChange = (type: "round-trip" | "one-way") => {
    setTripType(type);
    if (type === "one-way") {
      setSelectedReturn("");
      setSelectedReturnMonth("");
    }
  };

  const getDepartureDisplay = () => {
    if (selectedDeparture) {
      if (isFlexibleDates) {
        return selectedDepartureMonth || "août 2025";
      }
      return selectedDeparture;
    }
    return "août 2025";
  };

  const getReturnDisplay = () => {
    if (tripType === "one-way") {
      return "";
    }
    if (selectedReturn) {
      if (isFlexibleDates) {
        return selectedReturnMonth || "septembre 2025";
      }
      return selectedReturn;
    }
    return "Ajouter une date";
  };

  const getCalendarMessage = () => {
    if (activeField === "departure") {
      return "Sélectionnez une date de départ";
    } else {
      return "Sélectionnez une date de retour";
    }
  };

  const getTotalTravelers = () => {
    return adults + children;
  };

  return {
    showCalendar,
    showTravelers,
    adults,
    children,
    childrenAges,
    selectedDeparture,
    selectedReturn,
    isFlexibleDates,
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
  };
}
