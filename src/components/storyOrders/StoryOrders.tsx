import React from "react";
import Order from "./Order";
import st from "./StoryOrders.module.scss";
const StoryOrders = () => {
  return (
    <div className={st.container}>
      <div className={st.headTxt}>История заказов</div>
      <Order />
    </div>
  );
};

export default StoryOrders;
