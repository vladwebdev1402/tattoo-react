import React, { FC, useEffect } from "react";
import st from "./ModalMashineWork.module.scss";
import Swiper from "swiper";
import { SwiperOptions } from "swiper/types/swiper-options";
import img1 from "../../assets/images/tattoo-works/1.png";
import img2 from "../../assets/images/tattoo-works/2.png";
import img3 from "../../assets/images/tattoo-works/3.png";
import img4 from "../../assets/images/tattoo-works/4.png";
import img5 from "../../assets/images/tattoo-works/5.png";
import img6 from "../../assets/images/tattoo-works/6.png";
import img7 from "../../assets/images/tattoo-works/7.png";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/scss/pagination";
import "swiper/scss";

interface Props {
  setModal: (modal: boolean) => void;
}
const ModalMashineWork: FC<Props> = ({ setModal }) => {
  const images = [img1, img2, img3, img4, img5, img6, img7];
  const options: SwiperOptions = {
    spaceBetween: 100,
    modules: [Navigation, Pagination],
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
      renderBullet: function (index: number, className: string) {
        return `<div class='${className} ${st.bullet}'><img src=${images[index]} /></div>`;
      },
    },
  };
  useEffect(() => {
    const swiper = new Swiper(`.${st.swiper}`, options);
  });

  return (
    <div
      className={st.modalContainer}
      onClick={() => {
        setModal(false);
      }}
    >
      <div
        className={st.swiperContainer}
        onClick={(e: React.MouseEvent) => {
          e.stopPropagation();
        }}
      >
        <div className={`${st.swiper}`}>
          <div className={`swiper-wrapper ${st.swiperWrapper}`}>
            {images.map((img, idx) => (
              <div key={idx} className={`swiper-slide`}>
                <img src={img} />
              </div>
            ))}
            t
          </div>
          <div className={`swiper-button-prev ${st.btn} ${st.btnPrev}`}></div>
          <div className={`swiper-button-next ${st.btn} ${st.btnNext}`}></div>
        </div>

        <div className={`swiper-pagination ${st.pagination}`}></div>
      </div>
    </div>
  );
};

export default ModalMashineWork;
