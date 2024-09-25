import { useModalCtx } from "./useModalCtx";

export const useModal = () => {
  const {
    state: { size, expand },
    onClose,
    updateCtxState = () => {},
    settings,
  } = useModalCtx();

  const toggleModalSize = () => {
    updateCtxState({ type: "expand", value: !expand });
  };

  const { hasCloseBtn, hasExpandBtn } = settings || {};

  const showTitle = !["FIT", "XS", "X"].includes(size);
  const showCloseBtn = hasCloseBtn && showTitle;
  const showExpandBtn = hasExpandBtn && showTitle;

  return {
    toggleModalSize,
    size,
    expand,
    onClose,
    settings,
    showTitle,
    showCloseBtn,
    showExpandBtn,
  };
};
