import React, { FC, useEffect } from "react";
import Swiper from "swiper";
import styles from "./TestSwiper.module.scss";
import { SwiperOptions } from "swiper/types/swiper-options";
import "swiper/css";
const TestSwiper: FC = () => {
  const params: SwiperOptions = {
    spaceBetween: 30,
    centeredSlides: true,
    slidesPerView: 4,
    slideActiveClass: `${styles.activeSlide}`,
    slideNextClass: `${styles.nextSlide}`,
    speed: 400,
    slideClass: `${styles.slide}`,
  };
  useEffect(() => {
    const swiper = new Swiper(`.${styles.swiperContainer}`, params);
  }, []);
  return (
    <div className={styles.swiperContainer}>
      <div className="swiper-wrapper">
        <div className={`swiper-slide ${styles.slide}`}>Slide 1</div>
        <div className={`swiper-slide ${styles.slide}`}>Slide 2</div>
        <div className={`swiper-slide ${styles.slide}`}>Slide 3</div>
        <div className={`swiper-slide ${styles.slide}`}>Slide 4</div>
        <div className={`swiper-slide ${styles.slide}`}>Slide 5</div>
        <div className={`swiper-slide ${styles.slide}`}>Slide 6</div>
      </div>
      <div className="swiper-pagination"></div>

      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
};

export default TestSwiper;
