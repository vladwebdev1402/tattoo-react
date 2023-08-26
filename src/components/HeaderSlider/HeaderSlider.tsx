import React, { FC, useEffect, useRef, useState } from "react";
import { ISlide } from "../../types/swiper";
import styles from "./Swiper.module.scss";
import bgImg from "../../assets/images/bg1.png";
import Slide from "./Slide";
import Slider from "../UI/Slider/Slider";
import { useWidth } from "../../hooks/useWidth";
const HeaderSlider: FC = () => {
  const width = useWidth();

  useEffect(() => {
    const contWidth = document.getElementsByClassName(styles.sliderContainer)[0]
      .clientWidth;
    const pag = document.getElementsByClassName(
      styles.slider__pagination
    )[0] as HTMLElement;
    const next = document.getElementsByClassName(
      styles.pagination__btn__next
    )[0] as HTMLElement;
    const prev = document.getElementsByClassName(
      styles.pagination__btn__prev
    )[0] as HTMLElement;

    if (pag && next && prev) {
      const left =
        contWidth > 1216
          ? `${1216 + (contWidth - 1216) / 2 - 60}px`
          : contWidth >= 1024
          ? `${contWidth - 60}px`
          : "50%";

      pag.style.left = left;
      next.style.left = left;
      prev.style.left = left;
    }
  }, [width]);

  const slides: ISlide[] = [
    {
      id: "0",
      header: "Лучшие товары в мире татуировок",
      description:
        "Оборудование и расходники для самых ярких и качественных работ",
      img: bgImg,
    },
    {
      id: "1",
      header: "Лучшие товары в мире татуировок",
      description:
        "Оборудование и расходники для самых ярких и качественных работ",
      img: bgImg,
    },
    {
      id: "2",
      header: "Лучшие товары в мире татуировок",
      description:
        "Оборудование и расходники для самых ярких и качественных работ",
      img: bgImg,
    },
    {
      id: "3",
      header: "Лучшие товары в мире татуировок",
      description:
        "Оборудование и расходники для самых ярких и качественных работ",
      img: bgImg,
    },
    {
      id: "4",
      header: "Лучшие товары в мире татуировок",
      description:
        "Оборудование и расходники для самых ярких и качественных работ",
      img: bgImg,
    },
  ];

  return (
    <div className={`${styles.sliderContainer}`}>
      <Slider
        direction={width <= 1024 ? "row" : "column"}
        spaceBetween={0}
        st__pagination={styles.slider__pagination}
        st__pag__btn__next={styles.pagination__btn__next}
        st__pag__btn__prev={styles.pagination__btn__prev}
        st__pag__item={styles.pagination__item}
        st__pag__item__active={styles.active}
      >
        {slides.map((slide) => {
          return (
            <Slide
              key={slide.id}
              header={slide.header}
              desc={slide.description}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default HeaderSlider;
