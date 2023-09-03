import React, { FC } from "react";
import { reviews } from "../../data/reviews";
import Review from "./review/Review";
import st from "./Reviews.module.scss";
const Reviews: FC = () => {
  return (
    <div className={st.container}>
      <h1 className={st.headTxt}>Отзывы</h1>
      <div className={st.reviewBody}>
        {reviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
