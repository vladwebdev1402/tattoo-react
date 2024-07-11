import { FC, MouseEvent, useState } from 'react';
import img1 from '@/assets/images/tattoo-works/1.webp';
import img2 from '@/assets/images/tattoo-works/2.webp';
import img3 from '@/assets/images/tattoo-works/3.webp';
import img4 from '@/assets/images/tattoo-works/4.webp';
import img5 from '@/assets/images/tattoo-works/5.webp';
import img6 from '@/assets/images/tattoo-works/6.webp';
import img7 from '@/assets/images/tattoo-works/7.webp';
import { Modal, Slider } from '@/components';

import st from './ModalMashineWork.module.scss';

interface Props {
  setModal: (modal: boolean) => void;
}
const ModalMashineWork: FC<Props> = ({ setModal }) => {
  const images = [img1, img2, img3, img4, img5, img6, img7];
  const [swipe, setSwipe] = useState(false);

  return (
    <Modal
      onClick={() => {
        if (!swipe) setModal(false);
      }}
      className={st.modalContainer}
    >
      <div
        className={st.swiperContainer}
        onClick={(e: MouseEvent) => {
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
            <img className={st.slideImg} draggable={false} key={idx} src={img} />
          ))}
        </Slider>
      </div>
    </Modal>
  );
};

export { ModalMashineWork };
