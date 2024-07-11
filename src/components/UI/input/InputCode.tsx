import { FC, InputHTMLAttributes } from 'react';

import style from './InputCode.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const InputCode: FC<Props> = ({ ...props }) => {
  return <input {...props} className={style.inputCode}></input>;
};

export { InputCode };
