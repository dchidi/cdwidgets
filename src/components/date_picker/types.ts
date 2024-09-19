import { Dayjs } from "dayjs";

export interface IDatePickerProps {
  callbackFn: (selected_date: string) => void;
  defaultValue?: string;
}

export interface IDatePickerHook {
  isCalendarOpen: boolean;
  selectedDate: Dayjs;
  setCalendarOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
  toggleMonthSelection: () => void;
  isMonthDropdownOpen: boolean;
  handleMonthSelect: (monthIndex: number) => void;
  currentDate: Dayjs;
  toggleYearSelection: () => void;
  isYearDropdownOpen: boolean;
  handleYearSelect: (year: number) => void;
  handleMonthChange: (increment: number) => void;
  daysOfWeek: string[];
  generateDays: () => (number | null)[];
  handleDateClick: (day: number | null) => void;
}
