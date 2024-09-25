import React from "react";
import style from "./Modal.module.css";

interface IModalSection {
  children: React.ReactNode;
}
const ModalSection: React.FC<IModalSection> = ({ children }) => {
  return <div className={style.section}>{children}</div>;
};
export default ModalSection;
