import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTER_PATHS } from '@/constants';

import styles from './BrandItem.module.scss';

interface Props {
  img: string;
  id: number;
}
const BrandItem: FC<Props> = ({ img, id }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.brandItem}>
      <img
        className={styles.brandImg}
        src={img}
        alt=""
        onClick={() => {
          navigate(ROUTER_PATHS.brand + `/${id}`);
        }}
      />
    </div>
  );
};

export { BrandItem };
