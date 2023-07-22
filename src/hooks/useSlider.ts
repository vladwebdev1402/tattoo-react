import React, { useState, useRef, RefObject } from "react";
import { usePagination } from "./usePaginatioRadios";
export const useSlider = (
  countChildren: number,
  direction: string,
  containerRef: RefObject<HTMLUListElement>,
  spaceBetween: number
): [
  boolean,
  number[],
  (e: React.MouseEvent<HTMLDivElement>) => void,
  (e: React.MouseEvent<HTMLButtonElement>) => void,
  (e: React.MouseEvent<HTMLButtonElement>) => void,
  (idx: number) => void,
  number,
  number
] => {
  const arrayPagination = usePagination(countChildren);
  const [isAnimatade, setIsAnimatade] = useState<boolean>(false);
  const [offset, setOffset] = useState<number>(0);
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
    const idx = (-newOffset.current * countChildren) / getScroll();
    setCurrentPagIdx(Math.round(idx));
  };
  const setNewOffset = (idx: number) => {
    newOffset.current = -idx * getContainer();
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
    setIsAnimatade(true);
  };

  const onClickNext = () => {
    let pagInd =
      currentPagIdx + 1 == arrayPagination.length
        ? currentPagIdx
        : currentPagIdx + 1;
    setNewOffset(pagInd);
    setOffset(-pagInd * getContainer());
    setCurrentPagIdx(pagInd);
    setIsAnimatade(true);
  };

  const onClickPrev = () => {
    let pagInd = currentPagIdx - 1 == -1 ? currentPagIdx : currentPagIdx - 1;
    setNewOffset(pagInd);
    setOffset(-pagInd * getContainer());
    setCurrentPagIdx(pagInd);
    setIsAnimatade(true);
  };

  const onClickStart = (e: React.MouseEvent<HTMLDivElement>) => {
    startOffset.current = getCursorPos(e);
    maxOffset.current = getScroll() - getContainer()
    setIsAnimatade(false);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onClickEnd);
  };
  const onMouseMove = (e: MouseEvent) => {
    currentOffset.current = getCursorPos(e);
    const diff = currentOffset.current - startOffset.current;
    newOffset.current = diff + offset;
    checkMinMaxOffset();
    changePagIndicator();
    setOffset(newOffset.current);

  };

  const onClickEnd = () => {
    const indMulti = Math.round(-newOffset.current / getContainer());
    newOffset.current = indMulti * getContainer() * -1;
    setIsAnimatade(true);
    setOffset(newOffset.current);
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseup", onClickEnd);
  };

  return [
    isAnimatade,
    arrayPagination,
    onClickStart,
    onClickNext,
    onClickPrev,
    onClickPagIndicator,
    offset,
    currentPagIdx,
  ];
};
