import React from "react";
import callImg from "../../../assets/staticIcons/call.svg";
import mailImg from "../../../assets/staticIcons/mail.svg";
import styles from "./Contacts.module.scss";
const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.phone}>
        <div className={styles.number}>
          <div className="icon">
            <img src={callImg} />
          </div>
          <span className={styles.contactText}>+7 952 552-52-52</span>
        </div>
        <ul className={styles.contacsLink}>
          <li className={styles.link}>
            <a className={styles.linkTxt} href="#">
              Viber
            </a>
          </li>
          <li className={styles.link}>
            <a className={styles.linkTxt} href="#">
              Whats App
            </a>
          </li>
          <li className={styles.link}>
            <a className={styles.linkTxt} href="#">
              Telegram
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.mail}>
        <div className="icon">
          <img src={mailImg} />
        </div>
        <span className={styles.contactText}>Mr.Driskell@mail.ru</span>
      </div>
    </div>
  );
};

export default Contacts;
