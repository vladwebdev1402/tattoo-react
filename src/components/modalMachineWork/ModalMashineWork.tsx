import React, { FC, useEffect, useState } from "react";
import st from "./ModalMashineWork.module.scss";
import img1 from "../../assets/images/tattoo-works/1.png";
import img2 from "../../assets/images/tattoo-works/2.png";
import img3 from "../../assets/images/tattoo-works/3.png";
import img4 from "../../assets/images/tattoo-works/4.png";
import img5 from "../../assets/images/tattoo-works/5.png";
import img6 from "../../assets/images/tattoo-works/6.png";
import img7 from "../../assets/images/tattoo-works/7.png";
import Slider from "../UI/Slider/Slider";

interface Props {
  setModal: (modal: boolean) => void;
}
const ModalMashineWork: FC<Props> = ({ setModal }) => {
  const images = [img1, img2, img3, img4, img5, img6, img7];
  const [swipe, setSwipe] = useState(false);

  return (
    <div
      className={st.modalContainer}
      onClick={() => {
        if (!swipe) setModal(false);
      }}
    >
      <div
        className={st.swiperContainer}
        onClick={(e: React.MouseEvent) => {
          e.stopPropagation();
        }}
      >
        <Slider
          st__slider__container={st.swiper}
          st__pag__btn__next={st.btnNext}
          st__pag__btn__prev={st.btnPrev}
          spaceBetween={20}
          st__pagination={st.pagination}
          st__pag__item={st.pagItem}
          st__pag__item__active={st.itemActive}
          pagItemFromImgChildren={true}
          onSwipe={setSwipe}
        >
          {images.map((img, idx) => (
            <img
              className={st.slideImg}
              draggable={false}
              key={idx}
              src={img}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ModalMashineWork;
