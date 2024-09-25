import { useEffect, useState } from "react";
import { useModalCtx } from "./useModalCtx";

export const useModal = () => {
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);
  const { modalSize, onClose } = useModalCtx();

  const propagationHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };

  const toggleModalSize = () => {};

  useEffect(() => {
    let existingRoot = document.getElementById(
      "cdwidget-modal-root"
    ) as HTMLElement | null;
    let createdRoot = false; // Track if we created the modal root

    if (!existingRoot) {
      existingRoot = document.createElement("div");
      existingRoot.setAttribute("id", "cdwidget-modal-root");
      document.body.appendChild(existingRoot);
      createdRoot = true; // We created the modal root
    }

    setModalRoot(existingRoot);

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

      // Remove the modal root if we created it
      if (createdRoot && existingRoot.parentNode) {
        existingRoot.parentNode.removeChild(existingRoot);
      }
    };
    // Adding `onClose` as a dependency to avoid stale closures
  }, [onClose]);

  return { modalRoot, propagationHandler, toggleModalSize };
};
