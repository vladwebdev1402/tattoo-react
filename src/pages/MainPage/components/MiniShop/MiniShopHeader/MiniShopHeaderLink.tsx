import { FC, ReactNode } from 'react';

import styles from './MiniShopHeader.module.scss';

interface CatalogHeaderLinkProps {
  children: ReactNode;
  active: boolean;
  onClick: () => void;
}

const MiniShopHeaderLink: FC<CatalogHeaderLinkProps> = ({ active, children, onClick }) => {
  return (
    <button className={`${styles.link} ${active ? styles.active : ''}`} onClick={onClick}>
      <span className={styles.linkTxt}>{children}</span>
    </button>
  );
};

export { MiniShopHeaderLink };
