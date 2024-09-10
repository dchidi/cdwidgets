export interface IButtonProps {
  label: string;
  onClick: () => void;
  buttonType?: "plain" | "fill" | "outline" | "fillRounded" | "outlineRounded";
  icon?: React.ReactNode;
  className?: string;
  effect?: "ripple" | "zoomIn" | "zoomOut";
  display?: "LR" | "RL" | "TB" | "BT";
}
