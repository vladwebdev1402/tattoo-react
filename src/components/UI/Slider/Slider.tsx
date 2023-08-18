import React, { FC, RefObject, useEffect, useRef, useState } from "react";
import st from "./Slider.module.scss";
import { useSlider } from "../../../hooks/useSlider";
interface Props {
  children?: React.ReactNode;
  direction?: "row" | "column";
  st__pagination?: string;
  st__list?: string;
  st__pag__item?: string;
  st__pag__item__active?: string;
  st__pag__btn__next?: string;
  st__pag__btn__prev?: string;
  st__slider__container?: string;
  spaceBetween?: number;
}

const Slider: FC<Props> = ({
  spaceBetween = 0,
  children,
  direction = "row",
  st__pagination,
  st__list,
  st__pag__item,
  st__pag__item__active,
  st__pag__btn__next,
  st__pag__btn__prev,
  st__slider__container,
}) => {
  const childCount: number = React.Children.count(children);
  const containerRef: RefObject<HTMLUListElement> = useRef(null);

  const [
    isAnimated,
    arrayPagination,
    onClickStart,
    onClickNext,
    onClickPrev,
    onClickPagIndicator,
    offset,
    currentPagIdx,
  ] = useSlider(childCount, direction, containerRef, spaceBetween);

  return (
    <div
      className={st.slider__wrapper}
      onClick={(e: React.MouseEvent) => {
        e.stopPropagation();
      }}
    >
      <div
        className={`${st.slider__container} ${st__slider__container}`}
        onMouseDown={onClickStart}
      >
        {direction === "row"}

        <ul
          ref={containerRef}
          className={`${st.slider__list} ${st__list}`}
          style={{
            flexDirection: direction,
            transform: `translate3d(${direction === "row" ? offset : 0}px, ${
              direction === "column" ? offset : 0
            }px, 0)`,
            transition: `${isAnimated ? "300ms" : "0ms"}`,
          }}
        >
          {children}
        </ul>
      </div>
      {st__pag__btn__next && (
        <button
          className={`${st__pag__btn__next}`}
          onClick={onClickPrev}
        ></button>
      )}

      {st__pagination && (
        <div className={st__pagination}>
          {arrayPagination.map((item) => (
            <div
              onClick={() => onClickPagIndicator(item)}
              key={item}
              className={`${st__pag__item} ${
                currentPagIdx === item ? st__pag__item__active : ""
              }`}
            ></div>
          ))}
        </div>
      )}

      {st__pag__btn__prev && (
        <button
          className={`${st__pag__btn__prev}`}
          onClick={onClickNext}
        ></button>
      )}
    </div>
  );
};

export default Slider;
