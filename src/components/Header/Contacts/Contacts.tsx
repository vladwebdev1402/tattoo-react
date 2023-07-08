import React from "react";
import Call from "../../UI/icons/Call";
import Mail from "../../UI/icons/Mail";
import styles from "./Contacts.module.scss";
const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.phone}>
        <div className={styles.number}>
          <div className="icon">
            <Call />
          </div>
          <span className={styles.contactText}>+7 952 552-52-52</span>
        </div>
        <div className={styles.contacsLink}>
          <a className={styles.link} href="https://www.wildberries.ru/">
            Viber
          </a>
          <a className={styles.link} href="https://www.wildberries.ru/">
            Whats App
          </a>
          <a className={styles.link} href="https://www.wildberries.ru/">
            Telegram
          </a>
        </div>
      </div>
      <div className={styles.mail}>
        <div className="icon">
          <Mail />
        </div>
        <span className={styles.contactText}>Mr.Driskell@mail.ru</span>
      </div>
    </div>
  );
};

export default Contacts;
