import { FC, useState } from 'react';
import { IItemImg, IMarcers } from '../../../../types/shopItem';
import Marcers from '../../../../components/ShopItem/Marcers/Marcers';
import FavoriteItem from '../../../../components/UI/icons/itemIcons/favoriteIcon/FavoriteItem';
import ImgRadio from '../../../../components/UI/radio/imgRadio/ImgRadio';
import st from './container.module.scss';
import ImagesSlider from './Slider/ImagesSlider';
interface Props {
  images: IItemImg;
  marcers: IMarcers;
  id: number;
}
const ContainerImagesProduct: FC<Props> = ({ images, marcers, id }) => {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  return (
    <div className={st.containerImages}>
      <div className={st.desktopContainer}>
        <div className={st.radioConrainer}>
          {Object.values(images).map((img, idx) => (
            <ImgRadio
              onClick={() => setActiveIdx(idx)}
              img={img}
              active={idx === activeIdx}
              key={idx}
            />
          ))}
        </div>
        <div className={st.currentImage}>
          <Marcers marcers={marcers} />
          <FavoriteItem id={id} className={st.favorite} />
          <img className={st.image} src={Object.values(images)[activeIdx]} />
        </div>
      </div>

      <ImagesSlider marcers={marcers} images={images} id={id} />
    </div>
  );
};

export { ContainerImagesProduct };
