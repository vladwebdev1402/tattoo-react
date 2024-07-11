import { FC, useState } from 'react';

import FavoriteItem from '@/components/UI/icons/itemIcons/favoriteIcon/FavoriteItem';
import { IItemImg, IMarcers } from '@/types';
import { ImgRadio, Marcers } from '@/components';

import ImagesSlider from './Slider/ImagesSlider';
import style from './container.module.scss';

interface Props {
  images: IItemImg;
  marcers: IMarcers;
  id: number;
}
const ContainerImagesProduct: FC<Props> = ({ images, marcers, id }) => {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  return (
    <div className={style.containerImages}>
      <div className={style.desktopContainer}>
        <div className={style.radioConrainer}>
          {Object.values(images).map((img, idx) => (
            <ImgRadio
              onClick={() => setActiveIdx(idx)}
              img={img}
              active={idx === activeIdx}
              key={idx}
            />
          ))}
        </div>
        <div className={style.currentImage}>
          <Marcers marcers={marcers} />
          <FavoriteItem id={id} className={style.favorite} />
          <img className={style.image} src={Object.values(images)[activeIdx]} />
        </div>
      </div>

      <ImagesSlider marcers={marcers} images={images} id={id} />
    </div>
  );
};

export { ContainerImagesProduct };
