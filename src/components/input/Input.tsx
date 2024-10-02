import React, { useState } from "react";
import style from "./Input.module.css";
import classNames from "classnames";
import InputLabel from "./InputLabel";

export interface IInputProps {
  type: "text" | "number" | "password";
  className?: string;
  initValue?: string | number | undefined;
  children: React.ReactNode;
  disabled?: boolean;
  readonly?: boolean;
}

interface InputComponent extends React.FC<IInputProps> {
  Label: typeof InputLabel;
}

const Input: InputComponent = ({
  type,
  className,
  initValue,
  children,
  disabled = false,
  readonly = false,
}) => {
  const [value, setValue] = useState(initValue);
  const inputStyle = classNames({ [style.active]: value }, className);

  return (
    <div className={style.root}>
      <input
        type={type}
        id="cdwdgInput"
        value={value}
        placeholder=" "
        onChange={(e) => setValue(e.target.value)}
        className={inputStyle}
        readOnly={readonly}
        disabled={disabled}
      />
      {children}
    </div>
  );
};

Input.Label = InputLabel;

export default Input;
