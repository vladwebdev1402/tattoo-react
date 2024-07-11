import { FC, HTMLAttributes } from 'react';

import style from './CloseModal.module.scss';

interface Props extends HTMLAttributes<HTMLButtonElement> {}

const CloseModal: FC<Props> = ({ className, ...props }) => {
  return <button className={`${style.btn} ${className}`} {...props}></button>;
};

export { CloseModal };
