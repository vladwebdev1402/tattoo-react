import { useMemo } from "react";
import { ISlide } from "../types/swiper";

export const usePaginationRadios = (slides: ISlide[]) => {
  const addRadios = useMemo(() => {
    let radios: string[] = [];
    for (let i = 0; i < slides.length; i++) {
      radios.push(i.toString());
    }

    return radios;
  }, [slides]);

  return addRadios;
};
