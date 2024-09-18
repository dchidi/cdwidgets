import React, { useState } from "react";
import dayjs from "dayjs";
import styles from "./DatePicker.module.css";
import { useDatePicker } from "./useDatePicker";
import { IDatePicker } from "./types";

const months = Array.from({ length: 12 }, (_, i) =>
  dayjs().month(i).format("MMMM")
);
const years = Array.from({ length: 30 }, (_, i) =>
  dayjs()
    .year(dayjs().year() - 15 + i)
    .year()
);

const DatePicker: React.FC<IDatePicker> = ({ callbackFn }) => {
  const {
    isCalendarOpen,
    selectedDate,
    toggleMonthSelection,
    setCalendarOpen,
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
  } = useDatePicker(callbackFn);

  return (
    <div className={styles.datePicker}>
      <div
        className={styles.datePickerInput}
        onClick={() => setCalendarOpen(!isCalendarOpen)}
      >
        {selectedDate
          ? `Report at ${selectedDate.format("DD MMM YYYY")}`
          : "Select a date"}
      </div>

      {isCalendarOpen && (
        <div className={styles.datePickerCalendar}>
          <div className={styles.datePickerHeader}>
            <div className={styles.datePickerSelector}>
              {/* Month Dropdown */}
              <span
                className={styles.datePickerHeaderItem}
                onClick={toggleMonthSelection}
              >
                {currentDate.format("MMMM")}
              </span>
              {isMonthDropdownOpen && (
                <div className={styles.monthDropdown}>
                  {months.map((month, index) => (
                    <div
                      key={month}
                      className={styles.dropdownItem}
                      onClick={() => handleMonthSelect(index)}
                    >
                      {month}
                    </div>
                  ))}
                </div>
              )}

              {/* Year Dropdown */}
              <span
                className={styles.datePickerHeaderItem}
                onClick={toggleYearSelection}
              >
                {currentDate.format("YYYY")}
              </span>
              {isYearDropdownOpen && (
                <div className={styles.yearDropdown}>
                  {years.map((year) => (
                    <div
                      key={year}
                      className={styles.dropdownItem}
                      onClick={() => handleYearSelect(year)}
                    >
                      {year}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className={styles.nav}>
              <button
                className={styles.navButton}
                onClick={() => handleMonthChange(-1)}
              >
                &#8249;
              </button>
              <button
                className={styles.navButton}
                onClick={() => handleMonthChange(1)}
              >
                &#8250;
              </button>
            </div>
          </div>

          <div className={styles.datePickerDays}>
            {daysOfWeek.map((day) => (
              <div key={day} className={styles.dayOfWeek}>
                {day}
              </div>
            ))}
            {generateDays().map((day, index) => (
              <div
                key={index}
                className={`${styles.datePickerDay} ${
                  day === selectedDate?.date() &&
                  currentDate.month() === selectedDate?.month() &&
                  currentDate.year() === selectedDate?.year()
                    ? styles.selected
                    : ""
                }`}
                onClick={() => handleDateClick(day)}
              >
                {day}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePicker;
