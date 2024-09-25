import classNames from "classnames";
import { IModalWrapperProps } from "./type";
import styles from "./Modal.module.css";
import { useModal } from "./hooks/useModal";

export const ModalWrapper: React.FC<IModalWrapperProps> = ({
  propagationHandler,
  children,
}) => {
  const { onClose, size, expand } = useModal();

  const modalContent = classNames(styles.modalContent, {
    [styles["FULL"]]: expand,
    [styles[size]]: !expand,
  });

  return (
    <div className={styles.modalOverlay} role="presentation" onClick={onClose}>
      <div
        className={modalContent}
        role="dialog"
        aria-modal="true"
        onClick={propagationHandler}
      >
        {children}
      </div>
    </div>
  );
};
