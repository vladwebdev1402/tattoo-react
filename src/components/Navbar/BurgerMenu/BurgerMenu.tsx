import { useState } from 'react';
import { Link } from 'react-router-dom';

import BurgerIcon from '@/components/UI/icons/headerAndNavIcons/BurgerIcon';
import { RightFooter } from '@/components/Footer/RightFooter/RightFooter';
import { category } from '@/data';
import { useStopScroll } from '@/hooks';

import { MyLink } from '../LinkRow/MyLink';
import { Search } from '../Seacrh/Search';
import style from './BurgerMenu.module.scss';

const BurgerMenu = () => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const [isActiveCatalog, setIsActiveCatalog] = useState(false);
  const clickMenu = () => {
    setIsActiveMenu(!isActiveMenu);
  };

  useStopScroll(isActiveMenu);
  return (
    <>
      <div className={style.burgerMenu}>
        <span className={style.catalogTxt} onClick={clickMenu}>
          Меню
        </span>
        <BurgerIcon isActive={isActiveMenu} />
      </div>
      <div className={`${style.menuBody} ${isActiveMenu && style.active}`}>
        <div className={style.dividerWrapper}>
          <div className={`horizontal-divider`}></div>
        </div>

        <div className={style.burgerMenuNav}>
          <div
            className={`${style.catalogContainer} ${isActiveCatalog && style.activeCatalog}`}
            onClick={() => {
              setIsActiveCatalog(!isActiveCatalog);
            }}
          >
            <span className={`${style.headCategory} ${style.catalog}`}>Каталог</span>
            <div className={style.categorys}>
              <div className={style.verticalDividerWrapper}>
                <div className="vertical-divider"></div>
              </div>

              <div className={style.categorysBody}>
                {category.map((category) => (
                  <Link
                    key={category.id}
                    to={`/tattoo-react/catalog/${category.link}`}
                    className={style.linkCategory}
                    onClick={() => {
                      setIsActiveMenu(!isActiveMenu);
                    }}
                  >
                    <span className={style.linkTxt}>{category.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <nav
            onClick={() => {
              setIsActiveMenu(!isActiveMenu);
            }}
          >
            <ul className={style.linkColumn}>
              <li className={style.linkLi}>
                <MyLink name={'Промокоды'} to="/tattoo-react/promo" />
              </li>
              <li className={style.linkLi}>
                <MyLink name={'Скидки'} to="/tattoo-react/discount" />
              </li>
              <li className={style.linkLi}>
                <MyLink name={'Помощь'} to="/tattoo-react/help" />
              </li>
              <li className={style.linkLi}>
                <MyLink name={'О нас'} to="/tattoo-react/about" />
              </li>
              <li className={style.linkLi}>
                <MyLink name={'Контакты'} to="/tattoo-react/contacts" />
              </li>
              <li className={style.linkLi}>
                <MyLink name={'Избранное'} to="/tattoo-react/favorite" />
              </li>
              <li className={style.linkLi}>
                <MyLink name={'Личный кабинет'} to="/tattoo-react/profile" />
              </li>
            </ul>
          </nav>
          <div className={style.inputContainer}>
            <Search />
          </div>
        </div>

        <div className={style.dividerWrapper}>
          <div className={`horizontal-divider`}></div>
        </div>
        <div className={style.footerContainer}>
          <RightFooter />
        </div>
      </div>
    </>
  );
};

export { BurgerMenu };
