import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div style={{ border: "1px solid black", padding: "20px" }}>
      <div>{children}</div>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Modal;
