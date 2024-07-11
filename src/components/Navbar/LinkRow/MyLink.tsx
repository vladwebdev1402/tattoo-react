import { FC } from 'react';
import { useMatch, Link } from 'react-router-dom';

import styles from './LinkRow.module.scss';

interface LinkProps {
  name: string;
  to: string;
}

const MyLink: FC<LinkProps> = ({ name, to }) => {
  const match = useMatch(to);
  return (
    <Link to={to}>
      <span className={`${match && styles.active} ${styles.link}`}>{name}</span>
    </Link>
  );
};

export { MyLink };
