import React, { FC } from "react";
import ManagerContacts from "../../managerContacts/ManagerContacts";
import { IManager, IManagerContacts } from "../../../types/manager";
import styles from "./Manager.module.scss";
interface Props {
  manager: IManager;
}
const TechnicalSupport: FC<Props> = ({ manager }) => {
  return (
    <div className={styles.supportContainer}>
      <div className={styles.supportProfile}>
        <img
          src="https://ae04.alicdn.com/kf/Sb72374b6d55c444ba44f64f47e9adb17w.jpg"
          className={styles.managerImg}
        />
        <div className={styles.supportData}>
          <div className={styles.supportJobTitle}>Тех. поддержка</div>
          <div className={styles.managerName}>{manager.name}</div>
          <div
            className={`${styles.statusContainer} ${styles.supportStatus} ${
              manager.online && styles.online
            }`}
          >
            <div className={styles.statusIcon}></div>
            <span className={styles.statusTxt}>
              {manager.online ? "В сети" : "Не в сети"}
            </span>
          </div>
        </div>
      </div>
      <ManagerContacts contacts={manager.contacts} />
      <p className={styles.txt}>
        Обратитесь в нашу поддержку, если у Вас возникли какие-либо вопросы
        по Вашему заказу, либо Вы не можете собрать и настроить Ваше
        тату-оборудование. Мы поможем.
      </p>
    </div>
  );
};

export default TechnicalSupport;
