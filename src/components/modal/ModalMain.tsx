import React from "react";
import style from "./Modal.module.css";

interface IModalMain {
  children: React.ReactNode;
}

const ModalMain: React.FC<IModalMain> = ({ children }) => {
  return <div className={style.main}>{children}</div>;
};
export default ModalMain;
