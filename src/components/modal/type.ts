import ModalHeader from "./ModalHeader";
import ModalMain from "./ModalMain";

export type ModalSize = "FIT" | "XS" | "S" | "SM" | "M" | "LM" | "L" | "FULL";
export type TIcon = React.ComponentType<{ size: number }>;

export interface ICtxState {
  size: ModalSize;
  expand?: boolean;
}
export interface ISettings {
  hasCloseBtn: boolean;
  hasExpandBtn: boolean;
}

export interface IModalBaseProps {
  children?: React.ReactNode;
  className?: string;
  closeIcon?: TIcon;
  expandIcon?: TIcon;
  collapseIcon?: TIcon;
  iconSize?: number;
}
export interface IModalProps extends IModalBaseProps {
  isOpen?: boolean;
  onClose: () => void;
  state: ICtxState;
  updateCtxState?: (action: ISIZE | IEXPAND) => void;
  settings?: ISettings;
}

export interface IModalComponent extends React.FC<IModalProps> {
  Header: typeof ModalHeader;
  Main: typeof ModalMain;
}

export interface IModalWrapperProps {
  children?: React.ReactNode;
  propagationHandler: (e: React.MouseEvent<HTMLElement>) => void;
}

export interface ISIZE {
  type: "size";
  value: ModalSize;
}

export interface IEXPAND {
  type: "expand";
  value: boolean;
}
