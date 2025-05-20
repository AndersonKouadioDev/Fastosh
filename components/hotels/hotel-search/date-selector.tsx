"use client"

import { useState, useRef, useEffect } from "react"
import type { Dispatch, SetStateAction } from "react"
import { format } from "date-fns"
import { fr } from "date-fns/locale"
import { CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react"

type DateSelectorProps = {
  label: string
  selectedDate: Date
  setSelectedDate: Dispatch<SetStateAction<Date>>
}

export default function DateSelector({ label, selectedDate, setSelectedDate }: DateSelectorProps) {
  const [showCalendar, setShowCalendar] = useState(false)
  const [currentMonth, setCurrentMonth] = useState(new Date(selectedDate))
  const calendarRef = useRef<HTMLDivElement>(null)

  // Close calendar when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setShowCalendar(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const firstDayOfMonth = new Date(year, month, 1).getDay()

    // Adjust for Sunday being 0 in JavaScript but we want Monday as 0
    const adjustedFirstDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1

    return { daysInMonth, adjustedFirstDay }
  }

  const { daysInMonth, adjustedFirstDay } = getDaysInMonth(currentMonth)

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  const selectDate = (day: number) => {
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
    setSelectedDate(newDate)
    setShowCalendar(false)
  }

  // const isCurrentMonth = (date: Date) => {
  //   return date.getMonth() === currentMonth.getMonth() && date.getFullYear() === currentMonth.getFullYear()
  // }

  const isSelectedDate = (day: number) => {
    return (
      day === selectedDate.getDate() &&
      currentMonth.getMonth() === selectedDate.getMonth() &&
      currentMonth.getFullYear() === selectedDate.getFullYear()
    )
  }

  return (
    <div>
      <label className="block text-sm font-medium text-white mb-1">{label}</label>
      <div className="relative" ref={calendarRef}>
        <button
          type="button"
          onClick={() => setShowCalendar(!showCalendar)}
          className="w-full h-10 px-4 flex items-center justify-start rounded-lg bg-white text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <CalendarIcon className="mr-2 h-4 w-4 text-gray-500" />
          <span>{format(selectedDate, "dd/MM/yyyy")}</span>
        </button>

        {showCalendar && (
          <div className="absolute z-10 mt-1 w-64 bg-white rounded-lg shadow-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <button
                type="button"
                onClick={prevMonth}
                className="p-1 rounded-full hover:bg-gray-100 focus:outline-none"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <h3 className="font-medium">{format(currentMonth, "MMMM yyyy", { locale: fr })}</h3>
              <button
                type="button"
                onClick={nextMonth}
                className="p-1 rounded-full hover:bg-gray-100 focus:outline-none"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2">
              {["L", "M", "M", "J", "V", "S", "D"].map((day, i) => (
                <div key={i} className="font-medium text-gray-500">
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: adjustedFirstDay }).map((_, i) => (
                <div key={`empty-${i}`} className="h-8 w-8"></div>
              ))}

              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1
                return (
                  <button
                    key={`day-${day}`}
                    type="button"
                    onClick={() => selectDate(day)}
                    className={`h-8 w-8 rounded-full flex items-center justify-center focus:outline-none ${
                      isSelectedDate(day) ? "bg-blue-600 text-white hover:bg-blue-700" : "hover:bg-gray-100"
                    }`}
                  >
                    {day}
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
