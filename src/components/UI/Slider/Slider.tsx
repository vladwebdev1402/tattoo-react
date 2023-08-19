import React, {
  Children,
  FC,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
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
  freeMode?: boolean;
  countPagItem?: number;
}

const Slider: FC<Props> = ({
  spaceBetween = 0,
  children,
  direction = "row",
  freeMode = false,
  countPagItem = 0,
  st__pagination,
  st__list,
  st__pag__item,
  st__pag__item__active,
  st__pag__btn__next,
  st__pag__btn__prev,
  st__slider__container,
}) => {
  const countPag: number = countPagItem
    ? countPagItem
    : React.Children.count(children);
  const containerRef: RefObject<HTMLUListElement> = useRef(null);
  const sliderRef: RefObject<HTMLDivElement> = useRef(null);
  const [width, setWidth] = useState("100%");

  useEffect(() => {
    setWidth(`${sliderRef.current?.clientWidth}px` || "100%");
    window.addEventListener("resize", () => {
      setWidth(`${sliderRef.current?.clientWidth}px` || "100%");
    });

    return window.removeEventListener("resize", () => {});
  }, []);
  const [
    isAnimated,
    arrayPagination,
    onClickStart,
    onClickNext,
    onClickPrev,
    onClickPagIndicator,
    offset,
    currentPagIdx,
  ] = useSlider(countPag, direction, containerRef, spaceBetween, freeMode);

  return (
    <div
      className={st.slider__wrapper}
      onClick={(
        e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
      ) => {
        e.stopPropagation();
      }}
    >
      <div
        className={`${st.slider__container} ${st__slider__container}`}
        onMouseDown={onClickStart}
        ref={sliderRef}
      >
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
          {Children.toArray(children).map((child, idx) => (
            <li
              key={idx}
              className={st.list__item}
              style={{
                width: !freeMode ? width : "auto",
                marginRight: `${spaceBetween}px`,
              }}
            >
              {child}
            </li>
          ))}
        </ul>
      </div>

      {st__pag__btn__next && (
        <button
          className={`${st__pag__btn__next}`}
          onClick={onClickNext}
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
          onClick={onClickPrev}
        ></button>
      )}
    </div>
  );
};

export default Slider;
