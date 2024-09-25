import { useContext } from "react";
import { ModalCtx } from "./Modal";
import { IModalProps } from "./type";

export const useModalCtx = (): IModalProps => {
  const ctx = useContext(ModalCtx);
  if (!ctx) {
    throw new Error("useModalCtx must be used within ModalCtx.Provider");
  }
  return ctx;
};
