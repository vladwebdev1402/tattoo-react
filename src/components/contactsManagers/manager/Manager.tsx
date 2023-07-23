import React, { FC } from "react";
import { IManager } from "../../../types/manager";
import ManagerContacts from "../../managerContacts/ManagerContacts";
import styles from "./Manager.module.scss";
interface Props {
  manager: IManager;
}
const Manager: FC<Props> = ({ manager }) => {
  return (
    <div className={styles.managerContainer}>
      <div className={styles.leftManagerContainer}>
        <img src={manager.img} className={`${styles.managerImg}`} />
        <div className={styles.managerName}>{manager.name}</div>
        <div
          className={`${styles.statusContainer}  ${
            manager.online && styles.online
          }`}
        >
          <div className={styles.statusIcon}></div>
          <span className={styles.statusTxt}>
            {manager.online ? "В сети" : "Не в сети"}
          </span>
        </div>
      </div>
      <div className={styles.rightManagerContainer}>
        <ManagerContacts contacts={manager.contacts} />
      </div>
    </div>
  );
};

export default Manager;
