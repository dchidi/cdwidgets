import { StoryObj } from "@storybook/react";
import Button from "./Button";
import { IButtonProps } from "./types";

export default {
  title: "Example/Button",
  component: Button,
} as const;

export const Primary: StoryObj<IButtonProps> = {
  args: {
    label: "Click Me!",
    onClick: () => {},
    className: "primary-button",
  },
};
