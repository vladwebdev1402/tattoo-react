import { useWidth } from '@/hooks';
import { Slider, Typography } from '@/components';
import { reviews } from '@/data';

import st from './Reviews.module.scss';
import { Review } from './Review';

const Reviews = () => {
  const width = useWidth();
  return (
    <div className={st.container}>
      <Typography className={st.headTxt} variant="h1">
        Отзывы
      </Typography>
      <div className={st.reviewBody}>
        <Slider
          st__slider__container={st.sliderContainer}
          st__list={st.list}
          st__pagination={st.pagination}
          st__pag__item={st.pagItem}
          st__pag__item__active={st.pagItemActive}
          st__pag__btn__next={st.btnNext}
          st__pag__btn__prev={st.btnPrev}
          st__slide__active={st.slideActive}
          st__slide__notActive={st.notActive}
          spaceBetween={width <= 768 ? 1 : 20}
          freeMode={true}
          countPagItem={5}
          withEffect={true}
          countActive={width <= 1368 ? 1 : 2}
        >
          {reviews.map((review) => (
            <Review key={review.id} review={review} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export { Reviews };
