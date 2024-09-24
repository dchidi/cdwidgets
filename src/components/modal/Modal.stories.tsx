import { StoryObj } from "@storybook/react";
import ModalExample from "./ModalExample";

export default {
  title: "Widgets/Modal",
  component: ModalExample,
} as const;

export const Primary: StoryObj<typeof ModalExample> = {
  args: {
    isOpen: true, // Set to true to render the modal
    onClose: () => {},
  },
};
