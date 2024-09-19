import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { IDatePickerHook, IDatePickerProps } from "./types";

export const useDatePicker = ({
  callbackFn = () => {},
}: IDatePickerProps): IDatePickerHook => {
  const [selectedDate, setSelectedDate] = useState(dayjs().subtract(1, "day"));
  const [isCalendarOpen, setCalendarOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(dayjs()); // Store the current displayed month/year
  const [isMonthDropdownOpen, setMonthDropdownOpen] = useState(false);
  const [isYearDropdownOpen, setYearDropdownOpen] = useState(false);

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Generate days of the current month
  const generateDays = (): (number | null)[] => {
    const days = [];
    const startOfMonth = currentDate.startOf("month"); // First day of the current month
    const endOfMonth = currentDate.endOf("month"); // Last day of the current month

    const firstDayOfMonth = startOfMonth.day(); // Day of the week (0-6) for the first day
    const totalDaysInMonth = endOfMonth.date(); // Total days in the current month

    // Add blank days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null);
    }

    // Add all days of the month
    for (let day = 1; day <= totalDaysInMonth; day++) {
      days.push(day);
    }

    return days;
  };

  const handleDateClick = (day: number | null) => {
    if (day) {
      const newDate = currentDate.date(day);
      setSelectedDate(newDate);
      setCalendarOpen(false);
      callbackFn(currentDate.date(day).format("YYYY-MM-DD"));
    }
  };

  const handleMonthChange = (increment: number) => {
    setCurrentDate(currentDate.add(increment, "month"));
  };

  const handleMonthSelect = (monthIndex: number) => {
    setCurrentDate(currentDate.month(monthIndex));
    setMonthDropdownOpen(false);
  };

  const handleYearSelect = (year: number) => {
    setCurrentDate(currentDate.year(year));
    setYearDropdownOpen(false);
  };

  const toggleMonthSelection = () => {
    setMonthDropdownOpen(!isMonthDropdownOpen);
    setYearDropdownOpen(false);
  };
  const toggleYearSelection = () => {
    setYearDropdownOpen(!isYearDropdownOpen);
    setMonthDropdownOpen(false);
  };

  return {
    isCalendarOpen,
    selectedDate,
    setCalendarOpen,
    toggleMonthSelection,
    isMonthDropdownOpen,
    handleMonthSelect,
    currentDate,
    toggleYearSelection,
    isYearDropdownOpen,
    handleYearSelect,
    handleMonthChange,
    daysOfWeek,
    generateDays,
    handleDateClick,
  };
};
