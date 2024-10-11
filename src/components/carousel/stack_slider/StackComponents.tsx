import style from "./StackSlider.module.css";
import { GoDotFill } from "react-icons/go";
import { FaDotCircle } from "react-icons/fa";

interface IStackIndicatorProps {
  onClick: () => void;
}
export const StackIndicator = ({ onClick }: IStackIndicatorProps) => {
  return <GoDotFill onClick={onClick} size={20} />;
};

export const StackArticle = ({
  title,
  paragraph,
}: {
  title?: string;
  paragraph?: string;
}) => {
  return (
    <div className={style.article}>
      <h2>{title}</h2>
      <p>{paragraph}</p>
    </div>
  );
};

export const StackImage = ({ imagePath }: { imagePath?: string }) => {
  return <img src={imagePath} alt="slider image" className={style.imageItem} />;
};
