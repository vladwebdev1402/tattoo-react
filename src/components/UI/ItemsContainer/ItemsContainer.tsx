import { FC, HTMLAttributes } from 'react';

import st from './ItemsContainer.module.scss';

interface Props extends HTMLAttributes<HTMLDivElement> {}
const ItemsContainer: FC<Props> = ({ children, className = '', ...props }) => {
  return (
    <div className={`${st.container} ${className}`} {...props}>
      {children}
    </div>
  );
};

export { ItemsContainer };
