import { FC } from 'react';

import style from './Switch.module.scss';

interface Props {
  active: boolean;
  setState: () => void;
}

const Switch: FC<Props> = ({ active, setState }) => {
  return (
    <div className={`${style.switch} ${active && style.switchActive}`} onClick={setState}></div>
  );
};

export { Switch };
