import React from "react";
import Modal from "./Modal";

export interface ModalExampleProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalExample: React.FC<ModalExampleProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} state={{ size: "L" }}>
      <Modal.Header>My modal</Modal.Header>
      <Modal.Main>Content here</Modal.Main>
    </Modal>
  );
};

export default ModalExample;
