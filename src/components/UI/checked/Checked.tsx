import { FC } from 'react';

import style from './Checked.module.scss';

interface CheckedProps {
  title?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  className?: string;
  children?: React.ReactNode;
}

const Checked: FC<CheckedProps> = ({ title = '', onChange, checked, className = '', children }) => {
  return (
    <label className={`${style.inputBox} ${className}`}>
      <input
        type="checkbox"
        className={`${style.input} ${checked ? style.checked : ''}`}
        checked={checked ? true : false}
        onChange={onChange}
      />

      <div className={style.title}>
        {title}
        {children}
      </div>
    </label>
  );
};

export { Checked };
