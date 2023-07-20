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
        <div className={styles.contacsLink}>
          <a className={styles.link} href="#">
            Viber
          </a>
          <a className={styles.link} href="#">
            Whats App
          </a>
          <a className={styles.link} href="#">
            Telegram
          </a>
        </div>
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
