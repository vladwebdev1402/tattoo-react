import React, { FC, RefObject, useRef, useState } from "react";
import { usePagination } from "../../../../hooks/usePaginatioRadios";
import st from "./VerticalSlider.module.scss";

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

interface Props {
  children?: React.ReactNode;
}

const VerticalSlider: FC<Props> = ({ children }) => {
  const containerRef = useRef<HTMLUListElement>(null); // ссылка на контейнер-слайдер, в котором находятся все элементы
  const [offsetY, setOffsetY, offsetYRef] = useStateRef(0);
  const [currentPagIdx, setCurrentPagIdx] = useState<number>(0);
  const childCount: number = React.Children.count(children);
  const startOffsetY = useRef(0);
  const currentOffsetY = useRef(0);
  const maxOffsetY = useRef<number>(0);
  const newOffsetY = useRef<number>(0);
  const arrayPagination = usePagination(childCount);

  const changePagIndicator = () => {
    const idx =
      (-newOffsetY.current * childCount) / containerRef.current!.scrollHeight;
    setCurrentPagIdx(Math.round(idx));
  };
  const setNewOffsetY = (idx: number) => {
    newOffsetY.current = -idx * containerRef.current!.clientHeight;
  };

  const checkMinMaxOffsetY = () => {
    if (newOffsetY.current < -maxOffsetY.current) {
      newOffsetY.current = -maxOffsetY.current;
    }
    if (newOffsetY.current > 0) {
      newOffsetY.current = 0;
    }
  };
  const onClickPagIndicator = (idx: number) => {
    setCurrentPagIdx(idx);
    setNewOffsetY(idx);
    setOffsetY(newOffsetY.current);
  };

  const onClickNext = () => {
    let pagInd =
      currentPagIdx + 1 == arrayPagination.length
        ? currentPagIdx
        : currentPagIdx + 1;
    setNewOffsetY(pagInd);
    setOffsetY(-pagInd * containerRef.current!.clientHeight);
    setCurrentPagIdx(pagInd);
  };

  const onClickPrev = () => {
    let pagInd = currentPagIdx - 1 == -1 ? currentPagIdx : currentPagIdx - 1;
    setNewOffsetY(pagInd);
    setOffsetY(-pagInd * containerRef.current!.clientHeight);
    setCurrentPagIdx(pagInd);
  };

  const onClickStart = (e: React.MouseEvent<HTMLDivElement>) => {
    startOffsetY.current = e.clientY;
    maxOffsetY.current =
      containerRef.current!.scrollHeight - containerRef.current!.clientHeight;

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onClickEnd);
  };
  const onMouseMove = (e: MouseEvent) => {
    currentOffsetY.current = e.clientY;
    const diff = currentOffsetY.current - startOffsetY.current;
    newOffsetY.current = diff + offsetY;
    checkMinMaxOffsetY();
    changePagIndicator();
    setOffsetY(newOffsetY.current);
  };

  const onClickEnd = () => {
    const indMulti = Math.round(
      -newOffsetY.current / containerRef.current!.clientHeight
    );
    newOffsetY.current = indMulti * containerRef.current!.clientHeight * -1;

    setOffsetY(newOffsetY.current);
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseup", onClickEnd);
  };
  return (
    <div className={st.slider__container} onMouseDown={onClickStart}>
      <ul
        ref={containerRef}
        className={st.slider__list}
        style={{ transform: `translate3d(0, ${offsetY}px, 0)` }}
      >
        {children}
      </ul>
      <div className={st.slider__pagination}>
        <button
          className={`${st.pagination__btn__block}`}
          onClick={onClickPrev}
        >
          <div
            className={`${st.pagination__btn__next} ${st.pagination__btn__box}`}
          ></div>
        </button>
        {arrayPagination.map((item) => (
          <div
            onClick={() => onClickPagIndicator(item)}
            key={item}
            className={`${st.pagination__item} ${
              currentPagIdx === item ? st.active : ""
            }`}
          ></div>
        ))}
        <button
          className={`${st.pagination__btn__block}`}
          onClick={onClickNext}
        >
          <div
            className={`${st.pagination__btn__prev} ${st.pagination__btn__box}`}
          ></div>
        </button>
      </div>
    </div>
  );
};

export default VerticalSlider;
