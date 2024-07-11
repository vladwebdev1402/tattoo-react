import { FC } from 'react';

import instImg from '@/assets/staticIcons/inst.svg';
import { IReview } from '@/types';

import st from './Review.module.scss';
import { Typography } from '@/components';

interface Props {
  review: IReview;
}

const Review: FC<Props> = ({ review }) => {
  return (
    <div className={st.container}>
      <div className={`${st.divider} horizontal-divider`}></div>
      <div className={st.faceContainer}>
        <img src={review.img} />
      </div>
      <Typography className={st.reviewTxt}>{review.text}</Typography>
      <div className={st.instContainer}>
        <div className={`icon ${st.icon}`}>
          <img src={instImg} />
        </div>
        <a href="" className={st.instLink}>
          @{review.inst}
        </a>
      </div>
      <div className={`${st.divider} horizontal-divider`}></div>
    </div>
  );
};

export { Review };
