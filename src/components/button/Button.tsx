import React from "react";
import style from "./Button.module.css";
import classNames from "classnames";
import { IButtonProps } from "./types";
import { IoAddOutline } from "react-icons/io5";
const Button: React.FC<IButtonProps> = ({
  label,
  onClick,
  buttonType = "plain",
  icon = <IoAddOutline />,
  className,
  effect = "zoomIn",
  display = "LR",
  color = "default",
}) => {
  const buttonStyle = classNames(
    style.btn,
    style[buttonType],
    style[effect],
    style[display],
    style[color],
    className
  );

  return (
    <button className={buttonStyle} onClick={onClick} aria-label={label}>
      {label && <span className={style.label}>{label}</span>}
      {icon && <span className={style.icon}>{icon}</span>}
    </button>
  );
};

export default Button;
