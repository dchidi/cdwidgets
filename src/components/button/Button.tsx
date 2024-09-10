import React from "react";
import style from "./Button.module.css";
import classNames from "classnames";
import { IButtonProps } from "./types";

const Button: React.FC<IButtonProps> = ({
  label,
  onClick,
  buttonType = "plain",
  icon,
  className,
  effect = "zoomIn",
  display = "LR",
}) => {
  const buttonStyle = classNames(
    style.btn,
    style[buttonType],
    style[effect],
    style[display],
    className
  );
  return (
    <button className={buttonStyle} onClick={onClick} aria-label={label}>
      {label}
      {icon}
    </button>
  );
};

export default Button;
