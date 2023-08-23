import React, { FC } from "react";
import st from "./StoryOrders.module.scss";

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const OrderHead: FC<Props> = ({ isOpen, setIsOpen }) => {
  return (
    <div className={st.containerOrderHead} onClick={() => setIsOpen(!isOpen)}>
      <div className={st.dataContainer}>
        <div className={st.dataContainerHead}>Дата:</div>
        <div className={st.dataContainerValue}>10.05.2021</div>
      </div>
      <div className={st.dataContainer}>
        <div className={st.dataContainerHead}>Номер заказа:</div>
        <div className={st.dataContainerValue}>58145</div>
      </div>
      <div className={st.dataContainer}>
        <div className={st.dataContainerHead}>Кол-во товаров:</div>
        <div className={st.dataContainerValue}>25</div>
      </div>
      <div className={st.dataContainer}>
        <div className={st.dataContainerHead}>На сумму:</div>
        <div className={st.dataContainerValue}>58 180 ₽</div>
      </div>
      <div className={st.dataContainer}>
        <div className={st.dataContainerHead}>Статус:</div>
        <div className={st.dataContainerValue}>Доставка</div>
      </div>
      <div className={`${st.openIcon} ${isOpen && st.activeIcon}`}></div>
    </div>
  );
};

export default OrderHead;
