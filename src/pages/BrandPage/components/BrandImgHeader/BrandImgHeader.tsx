import { FC } from 'react';

import { Typography } from '@/components';

import st from './BrandImgHeader.module.scss';

interface Props {
  img: string;
  name: string;
}
const BrandImgHeader: FC<Props> = ({ img, name }) => {
  return (
    <div className={st.container}>
      <img className={st.image} src={img} />
      <Typography variant="h1" tag="h1" className={st.headerTxt}>
        {name}
      </Typography>
    </div>
  );
};

export { BrandImgHeader };
