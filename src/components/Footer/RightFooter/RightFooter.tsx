import React, { FC } from "react";
import styles from "./RightFooter.module.scss";
import callImg from "../../../assets/staticIcons/call.svg";
import mailImg from "../../../assets/staticIcons/mail.svg";
import viberImg from "../../../assets/staticIcons/viber.svg";
import telegramImg from "../../../assets/staticIcons/telegram.svg";
import whatsappImg from "../../../assets/staticIcons/whatsapp.svg";
import { useWidth } from "../../../hooks/useWidth";
const RightFooter: FC = () => {
  const width = useWidth();

  return (
    <div className={styles.rightFooter}>
      {width <= 1024 ? (
        <div className="horizontal-divider"></div>
      ) : (
        <div className="vertical-divider"></div>
      )}

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
  );
};

export default RightFooter;
