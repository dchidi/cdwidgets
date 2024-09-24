import React from "react";
import style from "./Modal.module.css";

interface IModalHeader {
  children: React.ReactNode;
}
const ModalHeader: React.FC<IModalHeader> = ({ children }) => {
  return <div className={style.header}>{children}</div>;
};
export default ModalHeader;
