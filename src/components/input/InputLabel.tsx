import React from "react";

export interface IInputLabelProps {
  placeholder?: string;
  className?: string;
}

const InputLabel: React.FC<IInputLabelProps> = ({ placeholder, className }) => {
  return (
    <label htmlFor="cdwdgInput" className={className}>
      {placeholder}
    </label>
  );
};

export default InputLabel;
