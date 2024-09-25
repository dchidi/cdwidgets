import { useEffect, useRef, useCallback, useState } from "react";
import { ICtxState, IEXPAND, ISIZE } from "../type";

export const useModalSetup = (
  onClose: () => void,
  initialState: ICtxState
): {
  modalRoot: HTMLElement | null;
  propagationHandler: (e: React.MouseEvent<HTMLElement>) => void;
  modalState: ICtxState;
  updateCtxState: (state: ISIZE | IEXPAND) => void;
} => {
  const modalRootRef = useRef<HTMLElement | null>(null);
  const [modalState, setModalState] = useState<ICtxState>(initialState);

  const propagationHandler = useCallback((e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  }, []);

  useEffect(() => {
    if (!modalRootRef.current) {
      const existingRoot = document.getElementById("cdwidget-modal-root");
      if (existingRoot) {
        modalRootRef.current = existingRoot;
      } else {
        modalRootRef.current = document.createElement("div");
        modalRootRef.current.setAttribute("id", "cdwidget-modal-root");
        document.body.appendChild(modalRootRef.current);
      }
    }

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
    };
  }, [onClose]);

  const updateCtxState = (state: ISIZE | IEXPAND) => {
    setModalState((prev) => ({ ...prev, [state.type]: state.value }));
  };

  return {
    modalRoot: modalRootRef.current,
    propagationHandler,
    modalState,
    updateCtxState,
  };
};
