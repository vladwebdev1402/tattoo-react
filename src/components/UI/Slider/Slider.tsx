import React, {
  Children,
  FC,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { usePagination } from "../../../hooks/usePaginatioRadios";
import st from "./Slider.module.scss";

function getTouchEventData(
  e:
    | TouchEvent
    | MouseEvent
    | React.TouchEvent<HTMLElement>
    | React.MouseEvent<HTMLElement>
) {
  return "changedTouches" in e ? e.changedTouches[0] : e;
}

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
  withEffect?: boolean;
  countActive?: number;
  st__slide__active?: string;
  st__slide__notActive?: string;
  transition?: number;
}

const Slider: FC<Props> = ({
  spaceBetween = 0,
  children,
  direction = "row",
  freeMode = false,
  countPagItem = 0,
  withEffect = false,
  countActive = 0,
  transition = 300,
  st__pagination,
  st__list,
  st__pag__item,
  st__pag__item__active,
  st__pag__btn__next,
  st__pag__btn__prev,
  st__slider__container,
  st__slide__active,
  st__slide__notActive,
}) => {
  const countPag: number = countPagItem
    ? countPagItem
    : React.Children.count(children);
  const containerRef: RefObject<HTMLUListElement> = useRef(null);
  const sliderRef: RefObject<HTMLDivElement> = useRef(null);
  const [width, setWidth] = useState("100%");
  const arrayPagination = usePagination(countPag);
  const [isAnimatade, setIsAnimatade] = useState<boolean>(false);
  const [offset, setOffset] = useState<number>(0);
  const [currentPagIdx, setCurrentPagIdx] = useState<number>(0);
  const startOffset = useRef(0);
  const currentOffset = useRef(0);
  const maxOffset = useRef<number>(0);
  const newOffset = useRef<number>(0);

  useEffect(() => {
    setWidth(`${sliderRef.current?.clientWidth}px` || "100%");

    var observer = new window.ResizeObserver(() =>
      setWidth(`${sliderRef.current?.clientWidth}px` || "100%")
    );

    if (withEffect) {
      setOffset(calcPosActiveBlock()[0]);
      setTimeout(() => {
        checkActive();
      }, transition);
    }

    sliderRef.current && observer.observe(sliderRef.current);
  }, [sliderRef]);
  useEffect(() => {
    setTimeout(() => {
      checkActive();
    }, transition);
  }, [countActive]);

  const getScroll = () => {
    return direction === "row"
      ? containerRef.current!.scrollWidth +
          spaceBetween +
          calcPosActiveBlock()[0]
      : containerRef.current!.scrollHeight + spaceBetween;
  };
  const getContainer = () => {
    return direction === "row"
      ? containerRef.current!.clientWidth + spaceBetween
      : containerRef.current!.clientHeight + spaceBetween;
  };
  const getCursorPos = (
    e:
      | TouchEvent
      | MouseEvent
      | React.TouchEvent<HTMLElement>
      | React.MouseEvent<HTMLElement>
  ) => {
    return direction === "row"
      ? getTouchEventData(e).clientX
      : getTouchEventData(e).clientY;
  };

  const changePagIndicator = () => {
    const idx = (-newOffset.current * countPag) / getScroll();
    setCurrentPagIdx(Math.round(idx));
  };
  const setNewOffsetThroughIdx = (idx: number) => {
    if (freeMode)
      newOffset.current =
        idx == countPag - 1
          ? -getScroll() + getContainer()
          : (-idx * getScroll()) / countPag;
    else newOffset.current = -idx * getContainer();
    checkMinMaxOffset();
  };
  const calcMinOffset = (): number => {
    return withEffect ? calcPosActiveBlock()[0] : 0;
  };
  const checkMinMaxOffset = () => {
    maxOffset.current = getScroll() - getContainer();
    const minOffset = calcMinOffset();
    if (newOffset.current < -maxOffset.current) {
      newOffset.current = -maxOffset.current;
    }
    if (newOffset.current > minOffset) {
      newOffset.current = minOffset;
    }
  };

  const magnet = () => {
    if (withEffect) {
      const activeLeftPosition = document
        .getElementsByClassName(st__slide__active || "")[0]
        .getBoundingClientRect().left;

      newOffset.current += calcPosActiveBlock()[0] - activeLeftPosition;
    } else {
      const indMulti = Math.round(-newOffset.current / getContainer());
      newOffset.current = indMulti * getContainer() * -1;
    }
  };

  const calcWidthActiveBlock = (): number => {
    if (countActive == 0) return 0;
    return (
      containerRef.current!.children[0].clientWidth * countActive +
      spaceBetween * (countActive - 1)
    );
  };

  const calcPosActiveBlock = (): [number, number] => {
    const widthActiveBlock = calcWidthActiveBlock();
    const left = containerRef.current!.clientWidth / 2 - widthActiveBlock / 2;
    const right = left + widthActiveBlock;
    return [left, right];
  };

  const checkActive = () => {
    const [left, right] = calcPosActiveBlock();
    let count = 0;
    Array.from(containerRef.current!.children).forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (
        rect.left <= right &&
        rect.right - element.clientWidth / 2 >= left &&
        ++count <= countActive
      ) {
        element.className = st__slide__active || "";
      } else element.className = st__slide__notActive || "";
    });
  };

  const onClickPagIndicator = (idx: number) => {
    setCurrentPagIdx(idx);
    setNewOffsetThroughIdx(idx);
    setOffset(newOffset.current);
    setIsAnimatade(true);
    if (withEffect) {
      setTimeout(() => {
        checkActive();
        magnet();
        setOffset(newOffset.current);
      }, transition);
    }
  };

  const onClickNext = () => {
    if (withEffect) {
      newOffset.current =
        offset -
        calcWidthActiveBlock() / countActive -
        spaceBetween * (countActive - 1 || 1);

      checkMinMaxOffset();
      setOffset(newOffset.current);
      setTimeout(() => {
        checkActive();
      }, transition);
    } else {
      let pagInd =
        currentPagIdx + 1 == countPag ? currentPagIdx : currentPagIdx + 1;
      setNewOffsetThroughIdx(pagInd);
      setOffset(newOffset.current);
      setCurrentPagIdx(pagInd);
    }
    setIsAnimatade(true);
  };

  const onClickPrev = () => {
    if (withEffect) {
      newOffset.current =
        offset +
        calcWidthActiveBlock() / countActive +
        spaceBetween * (countActive - 1 || 1);

      checkMinMaxOffset();
      setOffset(newOffset.current);
      setTimeout(() => {
        checkActive();
      }, 300);
    } else {
      let pagInd = currentPagIdx - 1 == -1 ? currentPagIdx : currentPagIdx - 1;
      setNewOffsetThroughIdx(pagInd);
      setOffset(newOffset.current);
      setCurrentPagIdx(pagInd);
    }
    setIsAnimatade(true);
  };

  const onClickStart = (
    e: React.TouchEvent<HTMLElement> | React.MouseEvent<HTMLElement>
  ) => {
    startOffset.current = getCursorPos(e);
    setIsAnimatade(false);
    window.addEventListener("touchmove", onMouseMove);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onClickEnd);
    window.addEventListener("touchend", onClickEnd);
  };
  const onMouseMove = (e: TouchEvent | MouseEvent) => {
    currentOffset.current = getCursorPos(e);
    const diff = currentOffset.current - startOffset.current;
    newOffset.current = diff + offset;
    checkMinMaxOffset();
    changePagIndicator();
    setOffset(newOffset.current);
    if (withEffect) checkActive();
  };

  const onClickEnd = () => {
    if (!freeMode || withEffect) magnet();
    setIsAnimatade(true);
    setOffset(newOffset.current);
    window.removeEventListener("touchmove", onMouseMove);
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("touchend", onClickEnd);
    window.removeEventListener("mouseup", onClickEnd);
  };

  return (
    <div
      className={st.slider__wrapper}
      onClick={(
        e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
      ) => {
        e.stopPropagation();
      }}
      onMouseDown={(e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
      }}
      onTouchStart={(e: React.TouchEvent<HTMLDivElement>) => {
        e.stopPropagation();
      }}
    >
      <div
        className={`${st.slider__container} ${st__slider__container}`}
        onMouseDown={onClickStart}
        onTouchStart={onClickStart}
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
            transition: `${isAnimatade ? `${transition}ms` : "0ms"}`,
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
