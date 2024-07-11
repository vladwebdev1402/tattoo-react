import { Header } from '../Header/Header';
import { Navbar } from '../Navbar/Navbar';

import style from './HeadAndNav.module.scss';

const HeadAndNav = () => {
  return (
    <header className={style.headContainer}>
      <div className={style.head}>
        <Header />
        <div className={`${style.divider} horizontal-divider`}></div>
        <Navbar />
      </div>
    </header>
  );
};

export { HeadAndNav };
