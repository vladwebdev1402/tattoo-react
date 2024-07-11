import { Account } from '../Header';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import { LinkCatalog } from './CatalogLink/LinkCatalog';
import { LinkRow } from './LinkRow/LinkRow';
import { Search } from './Seacrh/Search';

import style from './Navbar.module.scss';

const Navbar: React.FC = () => {
  return (
    <div className={style.down}>
      <LinkCatalog />
      <BurgerMenu />
      <Search className={style.inputContainer} />
      <LinkRow />
      <Account className={style.account} />
    </div>
  );
};

export { Navbar };
