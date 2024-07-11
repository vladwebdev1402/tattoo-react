import { FC } from 'react';

import { useWidth } from '@/hooks';

import { LeftFooter } from './leftFooter/LeftFooter';
import { RightFooter } from './RightFooter/RightFooter';

import style from './Footer.module.scss';

const Footer: FC = () => {
  const width = useWidth();
  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        <LeftFooter />
        {width <= 1024 ? (
          <div
            className="horizontal-divider"
            style={{ backgroundColor: 'var(--dark-orange)' }}
          ></div>
        ) : (
          <div className="vertical-divider" style={{ backgroundColor: 'var(--dark-orange)' }}></div>
        )}
        <RightFooter />
      </div>
    </footer>
  );
};

export { Footer };
