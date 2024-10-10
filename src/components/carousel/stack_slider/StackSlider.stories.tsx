import { Meta, StoryObj } from "@storybook/react";
import StackSlider, { IStackSliderProps } from "./StackSlider"; // Ensure correct import paths
// import "./Input.stories.css";

// Meta configuration for Storybook
export default {
  title: "Widgets/Carousel",
  component: StackSlider,
  args: {
    // Default args to apply to all stories unless overridden
    type: "text",
  },
} as Meta<IStackSliderProps>;

// Story for the input with a floating label
export const TextInput: StoryObj<IStackSliderProps> = {
  render: () => <StackSlider data={[]} />,
};
