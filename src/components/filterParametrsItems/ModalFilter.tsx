import { FC, ReactNode, useState } from 'react';

import style from './ModalFilter.module.scss';

interface Props {
  name: string;
  children?: ReactNode;
  inStock?: boolean;
}

const ModalFilter: FC<Props> = ({ name, children, inStock = false }) => {
  const [open, setOpen] = useState<boolean>(true);
  if (inStock) {
    return (
      <div className={`${style.modalFilterContainer}  ${open && style.active}`}>
        <div className={style.modalFilterHeader}>
          <span className={style.filterName}>{name}</span>
          {children}
        </div>
        <div className="horizontal-divider" style={{ marginTop: '30px' }}></div>
      </div>
    );
  }
  return (
    <div className={`${style.modalFilterContainer}  ${open && style.active}`}>
      <div
        className={style.modalFilterHeader}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <span className={style.filterName}>{name}</span>
        <div className={style.arrowFilter}></div>
      </div>
      <div className={style.filterBody}>
        <div className={style.filterChildren}>{children}</div>

        <div className="horizontal-divider" style={{ marginTop: '30px' }}></div>
      </div>
    </div>
  );
};

export { ModalFilter };
