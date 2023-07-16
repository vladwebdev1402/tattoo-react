import React, { FC, RefObject, useRef, useState } from "react";
import { usePagination } from "../../../../hooks/usePaginatioRadios";
import st from "./HorizontalSlider.module.scss";

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
  children: React.ReactNode;
}
const HorizontalSlider: FC<Props> = ({ children }) => {
  const containerRef = useRef<HTMLUListElement>(null); // ссылка на контейнер-слайдер, в котором находятся все элементы
  const [offsetX, setOffsetX, offsetXRef] = useStateRef(0);
  const [currentPagIdx, setCurrentPagIdx] = useState<number>(0);
  const childCount: number = React.Children.count(children);
  const startOffsetX = useRef(0);
  const currentOffsetX = useRef(0);
  const maxOffsetX = useRef<number>(0);
  const newOffsetX = useRef<number>(0);
  const arrayPagination = usePagination(childCount);

  const changePagIndicator = () => {
    const idx =
      (-newOffsetX.current * childCount) / containerRef.current!.scrollWidth;
    setCurrentPagIdx(Math.round(idx));
  };
  const setNewOffsetX = (idx: number) => {
    newOffsetX.current = -idx * containerRef.current!.clientWidth;
  };

  const checkMinMaxOffsetX = () => {
    if (newOffsetX.current < -maxOffsetX.current) {
      newOffsetX.current = -maxOffsetX.current;
    }
    if (newOffsetX.current > 0) {
      newOffsetX.current = 0;
    }
  };
  const onClickPagIndicator = (idx: number) => {
    setCurrentPagIdx(idx);
    setNewOffsetX(idx);
    setOffsetX(newOffsetX.current);
  };

  const onClickStart = (e: React.MouseEvent<HTMLDivElement>) => {
    startOffsetX.current = e.clientX;
    maxOffsetX.current =
      containerRef.current!.scrollWidth - containerRef.current!.clientWidth;

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onClickEnd);
  };
  const onMouseMove = (e: MouseEvent) => {
    currentOffsetX.current = e.clientX;
    const diff = currentOffsetX.current - startOffsetX.current;
    newOffsetX.current = diff + offsetX;
    checkMinMaxOffsetX();
    changePagIndicator();
    setOffsetX(newOffsetX.current);
  };

  const onClickEnd = () => {
    const indMulti = Math.round(
      -newOffsetX.current / containerRef.current!.clientWidth
    );
    newOffsetX.current = indMulti * containerRef.current!.clientWidth * -1;

    setOffsetX(newOffsetX.current);
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseup", onClickEnd);
  };
  return (
    <div className={st.slider__container} onMouseDown={onClickStart}>
      <ul
        ref={containerRef}
        className={st.slider__list}
        style={{ transform: `translate3d(${offsetX}px, 0, 0)` }}
      >
        {children}
      </ul>
      <div className={st.slider__pagination}>
        {arrayPagination.map((item) => (
          <div
            onClick={() => onClickPagIndicator(item)}
            key={item}
            className={`${st.pagination__item} ${
              currentPagIdx === item ? st.active : ""
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalSlider;
