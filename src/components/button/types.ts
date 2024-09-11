export interface IButtonProps {
  onClick: () => void;
  label?: string;
  buttonType?: "plain" | "fill" | "outline" | "fillRounded" | "outlineRounded";
  icon?: React.ReactNode;
  className?: string;
  effect?: "ripple" | "zoomIn" | "zoomOut";
  display?: "LR" | "RL" | "TB" | "BT";
  color?: "primary" | "secondary" | "default" | "black";
}
