import { FC } from 'react';
import { Link } from 'react-router-dom';

import logoImg from '@/assets/images/logo.svg';

import style from './leftFooter.module.scss';

const LeftFooter: FC = () => {
  const clickLink = () => {
    window.scrollTo({ top: 100, behavior: 'smooth' });
  };

  return (
    <div className={style.leftFooter}>
      <div className={style.logo}>
        <Link to={'/tattoo-react'}>
          <img src={logoImg} alt="logo" />
        </Link>
        <a className={`${style.link} ${style.conf}`}>Политика конфенедциальности</a>
      </div>
      <ul className={style.menu}>
        <li className={style.menuLink} onClick={clickLink}>
          <Link to={'/tattoo-react/promo'} className={style.link}>
            Промокоды
          </Link>
        </li>
        <li className={style.menuLink} onClick={clickLink}>
          <Link to={'/tattoo-react/discount'} className={style.link}>
            Скидки
          </Link>
        </li>
        <li className={style.menuLink} onClick={clickLink}>
          <Link to={'/tattoo-react/help'} className={style.link}>
            Помощь
          </Link>
        </li>
        <li className={style.menuLink} onClick={clickLink}>
          <Link to={'/tattoo-react/about'} className={style.link}>
            О нас
          </Link>
        </li>
        <li className={style.menuLink} onClick={clickLink}>
          <Link to={'/tattoo-react/contacts'} className={style.link}>
            Контакты
          </Link>
        </li>
      </ul>
    </div>
  );
};

export { LeftFooter };
