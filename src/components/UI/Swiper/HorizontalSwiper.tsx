import React, { FC, RefObject, useRef, useState } from "react";
import st from "./HorizontalSwiper.module.scss";

interface Props {
  children?: React.ReactNode;
}

function getTouchEventData(
  e:
    | TouchEvent
    | MouseEvent
    | React.TouchEvent<HTMLElement>
    | React.MouseEvent<HTMLElement>
) {
  return "changedTouches" in e ? e.changedTouches[0] : e;
}

function getRefValue<C>(ref: RefObject<C>) {
  // полчить значение, которое лежит внутри ref
  return ref.current as C;
}

function useStateRef<S>( // создаём ref, отвечающий за положение скролла, которое не зависит от состояния
  defaultValue: S // самое состояние скролла и функцию, для изменение этого состояния, изменяющее так же состояние для ref
): [S, (value: S) => void, RefObject<S>] {
  const ref = useRef<S>(defaultValue);
  const [state, _setState] = useState<S>(defaultValue);
  const setState = (value: S) => {
    _setState(value);
    ref.current = value;
  };

  return [state, setState, ref];
}

const HorizontalSwiper: FC<Props> = ({ children }) => {
  const containerRef = useRef<HTMLUListElement>(null); // ссылка на контейнер-слайдер, в котором находятся все элементы
  const currentOffsetXRef = useRef(0);
  const minOffsetXRef = useRef(0);
  const startXRef = useRef(0);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [offsetX, setOffsetX, offsetXRef] = useStateRef(0);
  let array = [1, 2, 3, 4, 5];

  const checkMinMaxOffsetX = (newOffsetX: number) => {
    const maxOffsetX = 0;
    const minOffsetX = getRefValue(minOffsetXRef);
    if (newOffsetX > maxOffsetX) {
      newOffsetX = maxOffsetX;
    }

    if (newOffsetX < minOffsetX) {
      newOffsetX = minOffsetX;
    }
    return newOffsetX;
  };

  const onTouchMove = (e: TouchEvent | MouseEvent) => {
    const currentX = getTouchEventData(e).clientX;
    const diff = getRefValue(startXRef) - currentX;
    let newOffsetX = getRefValue(currentOffsetXRef) - diff;

    newOffsetX = checkMinMaxOffsetX(newOffsetX);
    setOffsetX(newOffsetX);

    const containerEl = getRefValue(containerRef);
    const scrollWidth = containerEl.scrollWidth;
    let curIdx = Math.abs((newOffsetX * array.length) / scrollWidth); //
    setCurrentIdx(Math.round(curIdx));

    if (newOffsetX === getRefValue(minOffsetXRef))
      setCurrentIdx(array.length - 1);
  };

  const onTouchEnd = () => {
    window.removeEventListener("touchend", onTouchEnd);
    window.removeEventListener("touchmove", onTouchMove);
    window.removeEventListener("mouseup", onTouchEnd);
    window.removeEventListener("mousemove", onTouchMove);
  };

  const onTouchStart = (
    e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
  ) => {
    currentOffsetXRef.current = getRefValue(offsetXRef);
    startXRef.current = getTouchEventData(e).clientX;

    const containerEl = getRefValue(containerRef);

    minOffsetXRef.current = containerEl.offsetWidth - containerEl.scrollWidth;

    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("touchend", onTouchEnd);
    window.addEventListener("mousemove", onTouchMove);
    window.addEventListener("mouseup", onTouchEnd);
  };

  const indicatorOnClick = (idx: number) => {
    const containerEl = getRefValue(containerRef);
    const scrollWidth = containerEl.scrollWidth;
    let newOffsetX = (scrollWidth / array.length) * idx;
    setCurrentIdx(idx);
    newOffsetX = checkMinMaxOffsetX(-newOffsetX);
    setOffsetX(newOffsetX);
  };
  return (
    <div
      className={st.swiper__container}
      onTouchStart={onTouchStart}
      onMouseDown={onTouchStart}
    >
      <ul
        ref={containerRef}
        className={st.swiper__list}
        style={{ transform: `translate3d(${offsetX}px, 0, 0)` }}
      >
        {children}
      </ul>
      <ul className={st.swiper__pagination}>
        {array.map((_item, idx) => (
          <li
            key={idx}
            className={`${st.swiper__pagination__item} ${
              currentIdx === idx ? `${st.active}` : ""
            }`}
            onClick={() => indicatorOnClick(idx)}
          />
        ))}
      </ul>
    </div>
  );
};

export default HorizontalSwiper;
