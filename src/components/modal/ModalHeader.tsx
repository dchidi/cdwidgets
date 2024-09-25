import React, { useState } from "react";
import style from "./Modal.module.css";
import Button from "../button/Button";
import { useModalCtx } from "./useModalCtx";
import { IModalBaseProps } from "./type";
import { IoCloseOutline } from "react-icons/io5";
import { PiArrowsOutSimple, PiArrowsInSimple } from "react-icons/pi";
import classNames from "classnames";
import { useModal } from "./useModal";

const ModalHeader: React.FC<IModalBaseProps> = ({ children, className }) => {
  const { onClose } = useModalCtx();
  const [isExpanded, setIsExpanded] = useState(false);
  const { toggleModalSize } = useModal();

  return (
    <div className={style.header}>
      {children}
      <div className={style.actionBtn}>
        <Button
          onClick={onClose}
          buttonType="plain"
          color="default"
          effect="zoomIn"
          icon={<IoCloseOutline size={18} />}
        />
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          buttonType="plain"
          color="default"
          effect="zoomIn"
          icon={
            isExpanded ? (
              <PiArrowsInSimple size={18} />
            ) : (
              <PiArrowsOutSimple size={18} />
            )
          }
        />
      </div>
    </div>
  );
};
export default ModalHeader;
