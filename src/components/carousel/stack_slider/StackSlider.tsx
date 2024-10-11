import { StackArticle, StackIndicator, StackImage } from "./StackComponents";
import style from "./StackSlider.module.css";

export interface ISliderProps {
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
    <div className={style.root}>
      <StackIndicator
        onClick={() => {
          console.log("clicked");
        }}
      />
      <div className={style.container}>
        <StackArticle
          title="some text"
          paragraph="details stuff goes here mate."
        />
        <div className={style.cardDeck}>
          {[...new Array(5).fill(1)].map((item) => (
            <StackImage imagePath="https://cdn.dribbble.com/userupload/17032053/file/original-e564d946f0308a167793c890b8ad1678.jpg?resize=450x338&vertical=center" />
          ))}
        </div>
      </div>
    </div>
  );
};
export default StackSlider;
