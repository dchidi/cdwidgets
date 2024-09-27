// Input.stories.tsx
import { Meta, StoryObj } from "@storybook/react";
import Input, { IInputProps } from "./Input"; // Ensure correct import paths
import "./Input.stories.css";

// Meta configuration for Storybook
export default {
  title: "Widgets/Input",
  component: Input,
  args: {
    // Default args to apply to all stories unless overridden
    type: "text",
  },
} as Meta<IInputProps>;

// Story for the input with a floating label
export const TextInput: StoryObj<IInputProps> = {
  render: () => (
    <div className="row">
      <Input
        type="text"
        className="text"
        disabled={false}
        readonly={false}
        initValue={2}
      >
        <Input.Label placeholder="Name" className="label" />
      </Input>
      <Input type="password" className="password">
        <Input.Label placeholder="User Password" />
      </Input>
      <Input type="number" className="number">
        <Input.Label placeholder="Age" />
      </Input>
    </div>
  ),
};
