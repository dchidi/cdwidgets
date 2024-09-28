import { StoryObj } from "@storybook/react";
import Input, { IInputProps } from "./Input";

export default {
  title: "Widgets/Input",
  component: Input,
} as const;

export const Primary: StoryObj<IInputProps> = {
  args: {
    label: "Click Me!",
  },
};
