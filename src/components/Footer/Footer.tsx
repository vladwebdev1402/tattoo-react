import React, { FC } from "react";
import styles from "./Footer.module.scss";
import logoImg from "../../assets/images/logo.svg";
import callImg from "../../assets/staticIcons/call.svg";
import mailImg from "../../assets/staticIcons/mail.svg";
import viberImg from "../../assets/staticIcons/viber.svg";
import telegramImg from "../../assets/staticIcons/telegram.svg";
import whatsappImg from "../../assets/staticIcons/whatsapp.svg";
const Footer: FC = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.leftFooter}>
        <div className={styles.leftLinks}>
          <div className={styles.logo}>
            <a>
              <img src={logoImg} alt="logo" />
            </a>
            <a className={`${styles.link} ${styles.conf}`}>
              Политика конфенедциальности
            </a>
          </div>
          <div className={styles.menu}>
            <a className={styles.link}>Промокоды</a>
            <a className={styles.link}>Скидки</a>
            <a className={styles.link}>Помощь</a>
            <a className={styles.link}>О нас</a>
            <a className={styles.link}>Контакты</a>
          </div>
        </div>
      </div>
      <div className={styles.rightFooter}>
        <div className="vertical-divider"></div>
        <div className={styles.rightData}>
          <div className={styles.upRight}>
            <div className={styles.contacts}>
              <div className={styles.phone}>
                <div className="icon">
                  <img src={callImg} />
                </div>
                <span className={styles.txt}>8 800 600-61-91</span>
              </div>
              <div className={styles.iconContacts}>
                <a className={styles.linkIcon} href="#">
                  <img src={telegramImg} />
                </a>
                <a className={styles.linkIcon} href="#">
                  <img src={viberImg} />
                </a>
                <a className={styles.linkIcon} href="#">
                  <img src={whatsappImg} />
                </a>
              </div>
            </div>
            <span className={styles.time}>
              Время работы: с 9:00 до 20:00 по мск
            </span>
          </div>
          <div className={styles.mail}>
            <div className="icon">
              <img src={mailImg} />
            </div>
            <span className={styles.txt}>Mr.Driskell@mail.ru</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
