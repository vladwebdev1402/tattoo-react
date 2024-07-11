import { FC } from 'react';

import st from './Modal.module.scss';

import { useStopScroll } from '@/hooks';

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const Modal: FC<Props> = ({ className = '', children, ...props }) => {
  useStopScroll();

  return (
    <div className={`${st.modal} ${className}`} {...props}>
      {children}
    </div>
  );
};

export { Modal };
