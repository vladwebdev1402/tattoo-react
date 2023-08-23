import React, { FC, useState } from "react";
import ContentBasket from "../contentBasket/ContentBasket";
import OrderHead from "./OrderHead";
import OrderInfo from "./OrderInfo";
import st from "./StoryOrders.module.scss";
const Order: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={st.containerOrder}>
      <OrderHead isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && <OrderInfo />}

      {isOpen && (
        <div className={st.contentBasketContainer}>
          <div className={st.headerTxtBasket}>Содержимое заказа</div>
          <ContentBasket />
        </div>
      )}
    </div>
  );
};

export default Order;
