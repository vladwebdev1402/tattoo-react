import { FC } from 'react';

import { Slider } from '@/components/UI';
import { IItemImg } from '@/types';

import style from './ShopItemSwiper.module.scss';

interface Props {
  images: IItemImg;
  className?: string;
}

const ShopItemSwiper: FC<Props> = ({ images, className = '' }) => {
  return (
    <>
      <div className={`${style.containerSlider}`}>
        <Slider
          st__pagination={style.slider__pagination}
          st__pag__item={style.pagination__item}
          st__pag__item__active={style.active}
        >
          {Object.values(images).map((img, idx) => (
            <img key={idx} src={img} draggable="false" className={style.itemImage} />
          ))}
        </Slider>
      </div>
      <div className={`${style.mobileContainerImg}  ${className}`}>
        <img src={images.img0} />
      </div>
    </>
  );
};

export { ShopItemSwiper };
