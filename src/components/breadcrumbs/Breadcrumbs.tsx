import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { pathnames } from '@/data';

import style from './Breadcrumbs.module.scss';

interface Props {
  params?: boolean;
  nameParams?: string;
  className?: string;
}
const Breadcrumbs: FC<Props> = ({ params = false, nameParams = '', className = '' }) => {
  const location = useLocation().pathname.split('/').slice(2);

  let allPath = '/tattoo-react';

  return (
    <div className={`${style.breadcrumbsContainer} ${className}`}>
      <ul className={style.breadcrumbsList}>
        <li className={`${style.link}`}>
          <Link to="/tattoo-react">
            <span className={style.linkTxt}>Главная</span>
          </Link>
        </li>

        {location.map((path, idx) => {
          allPath += `/${path}`;
          return (
            <li
              key={idx}
              className={`${style.link} ${idx === location.length - 1 && style.active}`}
            >
              <span className={style.slash}>/</span>
              <Link to={allPath}>
                <span className={style.linkTxt}>{pathnames[path]}</span>
              </Link>
            </li>
          );
        })}
        {params && (
          <li className={`${style.link} ${style.active}`}>
            <Link to={allPath}>
              <span className={style.linkTxt}>{nameParams}</span>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export { Breadcrumbs };
