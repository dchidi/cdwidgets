import { StoryObj } from "@storybook/react";
import DatePicker from "./DatePicker";
import { IDatePickerProps } from "./types";

export default {
  title: "Widgets/Input",
  component: DatePicker,
} as const;

export const DatePickerButton: StoryObj<IDatePickerProps> = {
  args: {
    defaultValue: "Current date",
    callbackFn: (selected_date) => console.log(selected_date),
  },
};
