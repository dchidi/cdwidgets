import React from "react";
import ModalHeader from "./ModalHeader";
import ModalAside from "./ModalAside";
import ModalMain from "./ModalMain";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

interface ModalComponent extends React.FC<ModalProps> {
  Header: typeof ModalHeader;
  Aside: typeof ModalAside;
  Main: typeof ModalMain;
}

const Modal: ModalComponent = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div>
      <button onClick={onClose}>Close</button>
      <div>{children}</div>
    </div>
  );
};

Modal.Header = ModalHeader;
Modal.Aside = ModalAside;
Modal.Main = ModalMain;

export default Modal;
