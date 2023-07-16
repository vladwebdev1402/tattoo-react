import React, { FC, RefObject, useRef, useState } from "react";
import st from "./Slider.module.scss";
import { usePagination } from "../../../hooks/usePaginatioRadios";

interface Props {
  children?: React.ReactNode;
  direction?: "row" | "column";
  st__pagination?: string;
  st__pag__item?: string;
  st__pag__item__active?: string;
  st__pag__btn__next?: string;
  st__pag__btn__prev?: string;
  spaceBetween?: number;
}

function getRefValue<C>(ref: RefObject<C>) {
  return ref.current as C;
}

function useStateRef<S>(
  defaultValue: S
): [S, (value: S) => void, RefObject<S>] {
  const ref = useRef<S>(defaultValue);
  const [state, _setState] = useState<S>(defaultValue);
  const setState = (value: S) => {
    _setState(value);
    ref.current = value;
  };

  return [state, setState, ref];
}

const Slider: FC<Props> = ({
  spaceBetween = 0,
  children,
  direction = "row",
  st__pagination,
  st__pag__item,
  st__pag__item__active,
  st__pag__btn__next,
  st__pag__btn__prev,
}) => {
  const childCount: number = React.Children.count(children);

  const arrayPagination = usePagination(childCount);

  const containerRef = useRef<HTMLUListElement>(null); // ссылка на контейнер-слайдер, в котором находятся все элементы
  const [offset, setOffset, offsetRef] = useStateRef(0);
  const [currentPagIdx, setCurrentPagIdx] = useState<number>(0);
  const startOffset = useRef(0);
  const currentOffset = useRef(0);
  const maxOffset = useRef<number>(0);
  const newOffset = useRef<number>(0);

  const getScroll = () => {
    return direction === "row"
      ? containerRef.current!.scrollWidth + spaceBetween
      : containerRef.current!.scrollHeight + spaceBetween;
  };
  const getContainer = () => {
    return direction === "row"
      ? containerRef.current!.clientWidth + spaceBetween
      : containerRef.current!.clientHeight + spaceBetween;
  };
  const getCursorPos = (e: MouseEvent | React.MouseEvent<HTMLDivElement>) => {
    return direction === "row" ? e.clientX : e.clientY;
  };

  const changePagIndicator = () => {
    const idx = (-newOffset.current * childCount) / getScroll(); //
    setCurrentPagIdx(Math.round(idx));
  };
  const setNewOffset = (idx: number) => {
    newOffset.current = -idx * getContainer(); //
  };

  const checkMinMaxOffset = () => {
    if (newOffset.current < -maxOffset.current) {
      newOffset.current = -maxOffset.current;
    }
    if (newOffset.current > 0) {
      newOffset.current = 0;
    }
  };
  const onClickPagIndicator = (idx: number) => {
    setCurrentPagIdx(idx);
    setNewOffset(idx);
    setOffset(newOffset.current);
  };

  const onClickNext = () => {
    let pagInd =
      currentPagIdx + 1 == arrayPagination.length
        ? currentPagIdx
        : currentPagIdx + 1;
    setNewOffset(pagInd);
    setOffset(-pagInd * getContainer()); //
    setCurrentPagIdx(pagInd);
  };

  const onClickPrev = () => {
    let pagInd = currentPagIdx - 1 == -1 ? currentPagIdx : currentPagIdx - 1;
    setNewOffset(pagInd);
    setOffset(-pagInd * getContainer()); //
    setCurrentPagIdx(pagInd);
  };

  const onClickStart = (e: React.MouseEvent<HTMLDivElement>) => {
    startOffset.current = getCursorPos(e); //
    maxOffset.current = getScroll() - getContainer(); //

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onClickEnd);
  };
  const onMouseMove = (e: MouseEvent) => {
    currentOffset.current = getCursorPos(e); //
    const diff = currentOffset.current - startOffset.current;
    newOffset.current = diff + offset;
    checkMinMaxOffset();
    changePagIndicator();
    setOffset(newOffset.current);
  };

  const onClickEnd = () => {
    const indMulti = Math.round(
      -newOffset.current / getContainer() //
    );
    newOffset.current = indMulti * getContainer() * -1; //

    setOffset(newOffset.current);
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseup", onClickEnd);
  };

  return (
    <div className={st.slider__container} onMouseDown={onClickStart}>
      {direction === "row"}
      <ul
        ref={containerRef}
        className={st.slider__list}
        style={{
          flexDirection: direction,
          transform: `translate3d(${direction === "row" ? offset : 0}px, ${
            direction === "column" ? offset : 0
          }px, 0)`,
        }}
      >
        {children}
      </ul>

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
