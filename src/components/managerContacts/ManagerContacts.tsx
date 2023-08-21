import React, { FC } from "react";
import styles from "./ManagerContacts.module.scss";
import callImg from "../../assets/staticIcons/darkCall.svg";
import mailImg from "../../assets/staticIcons/darkMail.svg";
import { IManagerContacts } from "../../types/manager";

interface Props {
  contacts: IManagerContacts;
}
const ManagerContacts: FC<Props> = ({ contacts }) => {
  return (
    <div className={styles.contacts}>
      <div className={styles.numberAndUrlContacts}>
        <div className={styles.contactContainer}>
          <div className="icon">
            <img src={callImg} />
          </div>
          <span className={styles.txtNumber}>{contacts.number}</span>
        </div>
        <ul className={styles.urlContacts}>
          <li className={styles.link}>
            <a href={contacts.viber} className={styles.linkTxt}>
              Viber
            </a>
          </li>
          <li className={styles.link}>
            <a href={contacts.whatsapp} className={styles.linkTxt}>
              Whats App
            </a>
          </li>
          <li className={styles.link}>
            <a href={contacts.telegram} className={styles.linkTxt}>
              Telegram
            </a>
          </li>
        </ul>
      </div>
      <div className={`${styles.contactContainer} ${styles.mail}`}>
        <div className="icon">
          <img src={mailImg} />
        </div>
        <span className={styles.mailTxt}>{contacts.mail}</span>
      </div>
    </div>
  );
};

export default ManagerContacts;
