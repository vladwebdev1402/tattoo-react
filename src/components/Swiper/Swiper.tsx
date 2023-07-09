import React, { FC, useState } from "react";
import { usePaginationRadios } from "../../hooks/usePaginatioRadios";
import { ISlide } from "../../types/swiper";
import SlideContent from "./SlideContent/SlideContent";
import styles from "./Swiper.module.scss";

import SwiperPagination from "./SwiperPagination/SwiperPagination";

const Swiper: FC = () => {
  const [currentRadio, setCurrentRadio] = useState<string>("0");

  const slides: ISlide[] = [
    {
      id: "0",
      header: "Лучшие товары в мире татуировок",
      description:
        "Оборудование и расходники для самых ярких и качественных работ",
      img: "../../assets/images/bg1.png",
    },
    {
      id: "1",
      header: "Лучшие товары в мире татуировок1",
      description:
        "Оборудование и расходники для самых ярких и качественных работ",
      img: "../../assets/images/bg1.png",
    },
    {
      id: "2",
      header: "Лучшие товары в мире татуировок2",
      description:
        "Оборудование и расходники для самых ярких и качественных работ",
      img: "../../assets/images/bg1.png",
    },
    {
      id: "3",
      header: "Лучшие товары в мире татуировок3",
      description:
        "Оборудование и расходники для самых ярких и качественных работ",
      img: "../../assets/images/bg1.png",
    },
    {
      id: "4",
      header: "Лучшие товары в мире татуировок4",
      description:
        "Оборудование и расходники для самых ярких и качественных работ",
      img: "../../assets/images/bg1.png",
    },
  ];

  const radios: string[] = usePaginationRadios(slides);
  return (
    <div className={styles.swiperContainer}>
      <div className={styles.containerForImg}>
        <div className={styles.slideContainer}>
          <SlideContent
            header={slides[Number(currentRadio)].header}
            desc={slides[Number(currentRadio)].description}
          />
        </div>
      </div>
      <SwiperPagination
        currentRadio={currentRadio}
        setCurrentRadio={setCurrentRadio}
        radios={radios}
      />
    </div>
  );
};

export default Swiper;
