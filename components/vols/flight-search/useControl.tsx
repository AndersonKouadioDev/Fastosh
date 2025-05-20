"use client";

import { useState, useEffect } from "react";
export type Person = {
  adults: number;
  children: number;
  childrenAges: (string | null)[];
  rooms: number;
};

export default function useControl() {
  const [showFromOptions, setShowFromOptions] = useState(false);
  const [showToOptions, setShowToOptions] = useState(false);
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
  const [rotationDegree, setRotationDegree] = useState(0);
  const [returnFieldVisible, setReturnFieldVisible] = useState(true);

  const [fromValue, setFromValue] = useState({
    code: "DOH",
    name: "Hamad International",
    country: "Qatar",
  });
  const [toValue, setToValue] = useState({
    code: "ISA",
    name: "Mont Isa",
    country: "Australie",
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
  }, [children]);

  const handleInputClick = (field: string) => {
    if (field === "from") {
      setShowFromOptions(true);
      setShowToOptions(false);
      setShowCalendar(false);
      setShowTravelers(false);
    } else if (field === "to") {
      setShowToOptions(true);
      setShowFromOptions(false);
      setShowCalendar(false);
      setShowTravelers(false);
    } else if (field === "departure") {
      setShowCalendar(true);
      setShowFromOptions(false);
      setShowToOptions(false);
      setShowTravelers(false);
      setActiveField("departure");
    } else if (field === "return") {
      if (tripType === "one-way") {
        setTripType("round-trip");
        setReturnFieldVisible(true);
      }
      setShowCalendar(true);
      setShowFromOptions(false);
      setShowToOptions(false);
      setShowTravelers(false);
      setActiveField("return");
    } else if (field === "travelers") {
      setShowTravelers(true);
      setShowFromOptions(false);
      setShowToOptions(false);
      setShowCalendar(false);
    }
  };

  const closeAllDropdowns = () => {
    setShowFromOptions(false);
    setShowToOptions(false);
    setShowCalendar(false);
    setShowTravelers(false);
  };

  const handleSwapLocations = () => {
    // Increment rotation by 180 degrees
    setRotationDegree((prev) => prev + 180);

    // Swap the values
    const tempFrom = { ...fromValue };
    setFromValue({ ...toValue });
    setToValue({ ...tempFrom });
  };

  const handleSelectLocation = (
    option: { code: string; name: string; country: string },
    type: "from" | "to"
  ) => {
    if (type === "from") {
      setFromValue({
        code: option.code,
        name: option.name,
        country: option.country,
      });
      setShowFromOptions(false);
    } else {
      setToValue({
        code: option.code,
        name: option.name,
        country: option.country,
      });
      setShowToOptions(false);
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
    showFromOptions,
    showToOptions,
    showCalendar,
    showTravelers,
    adults,
    children,
    childrenAges,
    selectedDeparture,
    selectedReturn,
    isFlexibleDates,
    selectedDepartureMonth,
    selectedReturnMonth,
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
  };
}
