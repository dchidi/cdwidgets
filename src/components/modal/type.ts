import ModalAside from "./ModalAside";
import ModalHeader from "./ModalHeader";
import ModalMain from "./ModalMain";
import ModalSection from "./ModalSection";

export interface IModalBaseProps {
  children?: React.ReactNode;
  className?: string;
}
export interface IModalProps extends IModalBaseProps {
  isOpen?: boolean;
  onClose: () => void;
  modalSize?: "XS" | "X" | "S" | "SM" | "M" | "LM" | "L" | "XL";
  isExpanded?: boolean;
}

export interface IModalComponent extends React.FC<IModalProps> {
  Header: typeof ModalHeader;
  Aside: typeof ModalAside;
  Main: typeof ModalMain;
  Section: typeof ModalSection;
}
