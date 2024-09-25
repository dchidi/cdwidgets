import React, { createContext } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import ModalHeader from "./ModalHeader";
import ModalAside from "./ModalAside";
import ModalMain from "./ModalMain";
import ModalSection from "./ModalSection";
import { useModal } from "./useModal";
import { IModalComponent, IModalProps } from "./type";

export const ModalCtx = createContext<IModalProps | null>(null);

const Modal: IModalComponent = ({
  isOpen = false,
  onClose,
  children,
  modalSize = "M",
}) => {
  const { modalRoot, propagationHandler } = useModal();

  if (!isOpen || !modalRoot) return null;

  return ReactDOM.createPortal(
    <ModalCtx.Provider value={{ onClose, modalSize, isExpanded: false }}>
      <div
        className={styles.modalOverlay}
        role="presentation"
        onClick={onClose}
      >
        <div
          className={styles.modalContent}
          role="dialog"
          aria-modal="true"
          onClick={propagationHandler}
        >
          {children}
        </div>
      </div>
    </ModalCtx.Provider>,
    modalRoot
  );
};

Modal.Header = ModalHeader;
Modal.Aside = ModalAside;
Modal.Main = ModalMain;
Modal.Section = ModalSection;

export default Modal;
