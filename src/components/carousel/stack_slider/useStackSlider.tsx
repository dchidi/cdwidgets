import { useState } from "react";
import { ISliderProps } from "./StackSlider";
export const useStackSlider = (data: ISliderProps[]) => {
  const [sliderData, setSliderData] = useState(data);
  return {};
};
