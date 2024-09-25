import Button from "../button/Button";
import { TIcon } from "./type";

export const renderButton = (
  onClose: () => void,
  Icon: TIcon,
  iconSize: number
) => {
  return (
    <Button
      onClick={onClose}
      buttonType="plain"
      color="default"
      effect="zoomIn"
      icon={<Icon size={iconSize} />}
    />
  );
};
