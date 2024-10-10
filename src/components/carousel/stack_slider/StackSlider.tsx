import style from "./StackSlider.module.css";

interface ISliderProps {
  title?: string;
  paragraph?: string;
  link?: string;
  image?: string;
}
export interface IStackSliderProps {
  data: ISliderProps[];
}
const StackSlider = ({ data }: IStackSliderProps) => {
  return (
    <div>
      <div>indicators</div>
      <div>article</div>
      <div>
        {[...new Array(3).fill(1)].map((item) => (
          <div>deck 1</div>
        ))}
      </div>
    </div>
  );
};
export default StackSlider;
