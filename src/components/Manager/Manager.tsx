import { FC } from 'react';
import { IManager } from '../../types/manager';
import ManagerContacts from '../managerContacts/ManagerContacts';
import styles from './Manager.module.scss';
import Status from './Status';
interface Props {
  manager: IManager;
}
const Manager: FC<Props> = ({ manager }) => {
  return (
    <div className={styles.managerContainer}>
      <div className={styles.leftManagerContainer}>
        <div className={`${styles.imgContainer} ${styles.managerImgContainer}`}>
          <img src={manager.img} className={styles.managerImg} />
          <Status online={manager.online} className={styles.mobileStatus} />
        </div>

        <div className={styles.managerName}>{manager.name}</div>
      </div>
      <Status online={manager.online} />
      <div className={styles.rightManagerContainer}>
        <ManagerContacts contacts={manager.contacts} />
      </div>
    </div>
  );
};

export { Manager };
