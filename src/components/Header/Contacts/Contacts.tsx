import callImg from '@/assets/staticIcons/call.svg';
import mailImg from '@/assets/staticIcons/mail.svg';

import style from './Contacts.module.scss';

const Contacts = () => {
  return (
    <div className={style.contacts}>
      <div className={style.phone}>
        <div className={style.number}>
          <div className="icon">
            <img src={callImg} />
          </div>
          <a className={style.contactText}>+7 952 552-52-52</a>
        </div>
        <ul className={style.contacsLink}>
          <li className={style.link}>
            <a className={style.linkTxt} href="#">
              Viber
            </a>
          </li>
          <li className={style.link}>
            <a className={style.linkTxt} href="#">
              Whats App
            </a>
          </li>
          <li className={style.link}>
            <a className={style.linkTxt} href="#">
              Telegram
            </a>
          </li>
        </ul>
      </div>
      <div className={style.mail}>
        <div className="icon">
          <img src={mailImg} />
        </div>
        <a className={style.contactText}>Mr.Driskell@mail.ru</a>
      </div>
    </div>
  );
};

export { Contacts };
