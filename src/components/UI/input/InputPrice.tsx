import { ChangeEvent, FC } from 'react';

import style from './InputPrice.module.scss';

interface Props {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputPrice: FC<Props> = ({ value, onChange }) => {
  return (
    <input
      className={style.inputPrice}
      value={Number(value).toLocaleString('ru-RU')}
      onChange={onChange}
    />
  );
};

export { InputPrice };
