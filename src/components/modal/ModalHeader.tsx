import React from "react";
import style from "./Modal.module.css";
import { IModalBaseProps } from "./type";
import { IoCloseOutline } from "react-icons/io5";
import { PiArrowsOutSimple, PiArrowsInSimple } from "react-icons/pi";
import { useModal } from "./hooks/useModal";
import classNames from "classnames";
import { renderButton } from "./utils";

const ModalHeader: React.FC<IModalBaseProps> = ({
  children,
  className,
  closeIcon = IoCloseOutline,
  expandIcon = PiArrowsOutSimple,
  collapseIcon = PiArrowsInSimple,
  iconSize = 18,
}) => {
  const {
    expand,
    toggleModalSize,
    onClose,
    showTitle,
    showCloseBtn,
    showExpandBtn,
  } = useModal();

  if (!showCloseBtn && !showExpandBtn) {
    return null;
  }

  const rootStyle = classNames(style.header, className);

  return (
    <div className={rootStyle}>
      {showTitle && children}
      <div className={style.actionBtn}>
        {showCloseBtn && renderButton(onClose, closeIcon, iconSize)}
        {showExpandBtn &&
          renderButton(
            toggleModalSize,
            expand ? collapseIcon : expandIcon,
            iconSize
          )}
      </div>
    </div>
  );
};
export default React.memo(ModalHeader);
