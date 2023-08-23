import React, { FC } from "react";
import st from "./StoryOrders.module.scss";
const OrderInfo: FC = () => {
  return (
    <div className={st.containerInfo}>
      <div
        className="horizontal-divider"
        style={{ backgroundColor: "var(--gray)" }}
      ></div>
      <div className={st.infoBody}>
        <div className={st.info}>
          <div className={st.headInfoTxt}>Информация о заказе</div>
          <div className={st.dataInfoWrapper}>
            <div className={st.dataInfoContainer}>
              <div className={st.dataContainerHead}>Номер заказа:</div>
              <div className={st.dataContainerValue}>58145</div>
            </div>
            <div className={st.dataInfoContainer}>
              <div className={st.dataContainerHead}>Адрес:</div>
              <div className={st.dataContainerValue}>
                г. Москва, ул. Ленина, д. 50, кв. 50
              </div>
            </div>
            <div className={st.dataInfoContainer}>
              <div className={st.dataContainerHead}>Сумма заказа:</div>
              <div className={st.dataContainerValue}>37 820 ₽</div>
            </div>
          </div>
        </div>
        <div className={st.person}>
          <div className={st.headInfoTxt}>Контактное лицо</div>
          <div className={st.dataInfoWrapper}>
            <div className={st.dataInfoContainer}>
              <div className={st.dataContainerHead}>ФИО</div>
              <div className={st.dataContainerValue}>Иванов Иван Иванович</div>
            </div>
            <div className={st.dataInfoContainer}>
              <div className={st.dataContainerHead}>Телефон</div>
              <div className={st.dataContainerValue}>8 800 555-35-35</div>
            </div>
            <div className={st.dataInfoContainer}>
              <div className={st.dataContainerHead}>Эл. почта</div>
              <div className={st.dataContainerValue}>Ivanov2021@mail.ru</div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="horizontal-divider"
        style={{ backgroundColor: "var(--gray)" }}
      ></div>
    </div>
  );
};

export default OrderInfo;
