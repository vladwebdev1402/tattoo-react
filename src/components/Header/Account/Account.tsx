import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ModalAuth } from '@/components';
import Favorites from '@/components/UI/icons/headerAndNavIcons/Favorites';
import Profile from '@/components/UI/icons/headerAndNavIcons/Profile';
import Basket from '@/components/UI/icons/headerAndNavIcons/Basket';

import style from './Account.module.scss';

interface Props {
  className?: string;
}
const Account: React.FC<Props> = ({ className }) => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  return (
    <div className={`${className} ${style.account}`}>
      {modal && <ModalAuth setModal={setModal} />}
      <div className={style.balance}>
        <span className={style.balanceText}>{0} ₽</span>
        <button
          className={`icon ${style.iconBtn} ${style.basket}`}
          onClick={() => {
            navigate('catalog/basket');
          }}
        >
          <Basket />
          {<div className={`${true && style.active} ${style.countItemsInBasket}`}>{0}</div>}
        </button>
      </div>
      <button className={`icon ${style.iconBtn} ${style.favorite}`}>
        <Favorites />
      </button>
      <button
        className={`icon ${style.iconBtn} ${style.profile}`}
        onClick={() => navigate('profile')}
        // onClick={() => setModal(true)}
      >
        <Profile />
      </button>
    </div>
  );
};

export { Account };
