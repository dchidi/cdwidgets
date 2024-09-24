import React from "react";
import style from "./Modal.module.css";

interface IModalAside {
  children: React.ReactNode;
}
const ModalAside: React.FC<IModalAside> = ({ children }) => {
  return <div className={style.aside}>aside</div>;
};
export default ModalAside;
