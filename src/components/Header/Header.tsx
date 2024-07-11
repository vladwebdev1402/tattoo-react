import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '@/assets/images/logo.svg';

import { Contacts } from './Contacts/Contacts';
import { Account } from './Account/Account';
import style from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <div className={style.up}>
      <Contacts />
      <Link className={style.logo} to="/tattoo-react">
        <img src={logoImg} alt="logo" />
      </Link>
      <Account />
    </div>
  );
};

export { Header };
