import React from "react";
import Modal from "./Modal";

export interface ModalExampleProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalExample: React.FC<ModalExampleProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Header>Header Content</Modal.Header>
      <Modal.Section>
        <Modal.Aside>Aside Content</Modal.Aside>
        <Modal.Main>Main Content</Modal.Main>
      </Modal.Section>
    </Modal>
  );
};

export default ModalExample;
