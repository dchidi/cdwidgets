import React from "react";
import style from "./Modal.module.css";

interface IModalMain {
  children: React.ReactNode;
  className?: string;
}

const ModalMain: React.FC<IModalMain> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};
export default ModalMain;
