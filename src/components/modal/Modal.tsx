import { createContext } from "react";
import ReactDOM from "react-dom";
import ModalHeader from "./ModalHeader";
import ModalMain from "./ModalMain";
import { useModalSetup } from "./hooks/useModalSetup";
import { IModalComponent, IModalProps } from "./type";
import { ModalWrapper } from "./ModalWrapper";

export const ModalCtx = createContext<IModalProps | null>(null);

const Modal: IModalComponent = ({
  isOpen = false,
  onClose,
  children,
  state = { size: "M", expand: false },
  settings = { hasCloseBtn: true, hasExpandBtn: true },
}) => {
  const { modalRoot, propagationHandler, modalState, updateCtxState } =
    useModalSetup(onClose, state);

  const initialCtxValue = {
    onClose,
    state: modalState,
    updateCtxState,
    settings,
  };

  if (!isOpen || !modalRoot) return null;

  return ReactDOM.createPortal(
    <ModalCtx.Provider value={initialCtxValue}>
      <ModalWrapper propagationHandler={propagationHandler}>
        {children}
      </ModalWrapper>
    </ModalCtx.Provider>,
    modalRoot
  );
};

Modal.Header = ModalHeader;
Modal.Main = ModalMain;

export default Modal;
