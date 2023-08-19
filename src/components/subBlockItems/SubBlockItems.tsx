import React, { FC } from "react";
import Slider from "../UI/Slider/Slider";
import st from "./SubBlockItems.module.scss";
interface Props {
  watchAll: () => void;
  children: React.ReactNode;
  title: string;
}
const SubBlockItems: FC<Props> = ({ watchAll, children, title }) => {
  return (
    <div className={st.container}>
      <div className={st.header}>
        <h1>{title}</h1>
        <span
          className={st.watchAll}
          onClick={() => {
            watchAll();
          }}
        >
          Смотреть все
        </span>
      </div>
      <div className={st.body}>
        <Slider
          freeMode={true}
          spaceBetween={20}
          st__slider__container={st.sliderContainer}
          st__pag__btn__next={st.btnNext}
          st__pag__btn__prev={st.btnPrev}
          st__pagination={st.pagination}
          st__pag__item={st.pagItem}
          st__pag__item__active={st.pagItemActive}
          countPagItem={5}
        >
          {children}
          {children}
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default SubBlockItems;
