import { FC } from 'react';

import { characteristicsName, ICharacteristics } from '@/types';

import st from './Characteristics.module.scss';

interface Props {
  characteristics: ICharacteristics;
}
const Сharacteristics: FC<Props> = ({ characteristics }) => {
  return (
    <>
      {Object.entries(characteristics).map(([key, value]) => (
        <div className={st.container} key={key}>
          <div className={st.characteristic}>
            <span className={st.key}>{characteristicsName[key]}</span>
            <span className={st.value}>{value}</span>
          </div>
          <div className="horizontal-divider" style={{ backgroundColor: 'var(--gray' }}></div>
        </div>
      ))}
    </>
  );
};

export { Сharacteristics };
