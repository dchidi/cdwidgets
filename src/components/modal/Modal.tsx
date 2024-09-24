import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
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
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let existingRoot = document.getElementById(
      "cdwidget-modal-root"
    ) as HTMLElement | null;
    let createdRoot = false; // Track if we created the modal root

    if (!existingRoot) {
      existingRoot = document.createElement("div");
      existingRoot.setAttribute("id", "cdwidget-modal-root");
      document.body.appendChild(existingRoot);
      createdRoot = true; // We created the modal root
    }

    setModalRoot(existingRoot);

    // Handler for Escape key to close the modal
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    // Add event listener
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup function
    return () => {
      // Remove event listener
      document.removeEventListener("keydown", handleKeyDown);

      // Remove the modal root if we created it
      if (createdRoot && existingRoot.parentNode) {
        existingRoot.parentNode.removeChild(existingRoot);
      }
    };
    // Adding `onClose` as a dependency to avoid stale closures
  }, [onClose]);

  if (!isOpen || !modalRoot) return null;

  return ReactDOM.createPortal(
    <div className={styles.modalOverlay} role="presentation" onClick={onClose}>
      <div
        className={styles.modalContent}
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.modalClose} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

Modal.Header = ModalHeader;
Modal.Aside = ModalAside;
Modal.Main = ModalMain;

export default Modal;
