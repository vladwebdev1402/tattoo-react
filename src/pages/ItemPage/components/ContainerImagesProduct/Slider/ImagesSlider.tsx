import { FC, useEffect, useRef, useState } from 'react';

import { useWidth } from '@/hooks';
import { IItemImg, IMarcers } from '@/types';
import FavoriteItem from '@/components/UI/icons/itemIcons/favoriteIcon/FavoriteItem';
import { Slider } from '@/components/UI';
import { Marcers } from '@/components';

import st from './ImagesSlider.module.scss';
interface Props {
  images: IItemImg;
  marcers: IMarcers;
  id: number;
}
const ImagesSlider: FC<Props> = ({ images, marcers, id }) => {
  const [sliderItemWidth, setSliderItemWidth] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);
  const width = useWidth();
  useEffect(() => {
    if (ref.current) {
      setSliderItemWidth(ref.current.clientWidth);
    }
  }, [ref, width]);
  return (
    <div className={st.containerSwiper} ref={ref}>
      <Slider
        st__pag__item__active={st.active}
        st__pagination={st.pagination}
        st__pag__item={st.pagItem}
      >
        {Object.values(images).map((img, idx) => (
          <img className={st.img} key={idx} src={img} draggable={false} />
        ))}
      </Slider>
      <Marcers marcers={marcers} className={st.marcers} />
      <FavoriteItem id={id} className={st.favorite} />
    </div>
  );
};

export default ImagesSlider;
