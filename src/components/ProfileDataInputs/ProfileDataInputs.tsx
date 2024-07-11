import { ChangeEvent, FC, useState } from 'react';

import { regNumber } from '@/utils';
import { IContactPerson } from '@/types';

import { Button, Input, Typography } from '../UI';
import style from './ProfileDataInputs.module.scss';

interface Props {
  isBasket?: boolean;
}
const ProfileDataInputs: FC<Props> = ({ isBasket = false }) => {
  const [profile, setProfile] = useState<IContactPerson>({
    id: 0,
    fullName: '',
    number: '',
    mail: '',
    city: '',
    streetAndHouse: '',
    flat: 0,
    entrance: 0,
    floor: 0,
    intercom: 0,
  });

  return (
    <div className={style.profileDataWrapper}>
      <div className={style.profileDataContainer}>
        <div className={style.profileDataHead}>
          <Typography variant="h3" tag="h3" className={style.headTxt}>
            Информация о получателе
          </Typography>
          {!isBasket && (
            <Button variant="text" onClick={() => {}}>
              <span className={style.editTxt}> Редактировать</span>
            </Button>
          )}
        </div>
        <div className={style.inputsContainer}>
          <Input
            label="ФИО*"
            value={profile.fullName || ''}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setProfile({ ...profile, fullName: e.target.value });
            }}
            placeholder="Иванов Иван Иванович"
          />
          <Input
            className={style.number}
            label="Телефон*"
            value={profile.number || ''}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setProfile({ ...profile, number: e.target.value });
            }}
            placeholder="8(800)555-35-35"
          />
          <Input
            label="Эл. почта*"
            value={profile.mail || ''}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setProfile({ ...profile, mail: e.target.value });
            }}
            placeholder="Ivanov2021@mail.ru"
          />
        </div>
      </div>
      <div className={style.profileDataContainer}>
        <div className={style.profileDataHead}>
          <Typography variant="h3" tag="h3" className={style.headTxt}>
            Адрес доставки
          </Typography>
          {!isBasket && (
            <Button variant="text" onClick={() => {}}>
              <span className={style.editTxt}> Редактировать</span>
            </Button>
          )}
        </div>
        <div className={style.inputsContainer}>
          <Input
            className={style.city}
            label="Город*"
            value={profile.city || ''}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setProfile({ ...profile, city: e.target.value });
            }}
            placeholder="Москва"
          />
          <Input
            className={style.street}
            label="Улица, дом*"
            value={profile.streetAndHouse || ''}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setProfile({ ...profile, streetAndHouse: e.target.value });
            }}
            placeholder="ул. Ленина д. 25"
          />
        </div>

        <div className={`${style.inputsContainer} ${style.inputsContainerFlat}`}>
          <Input
            label="Квартира*"
            value={`${profile.flat}` == '0' ? '' : `${profile.flat}`}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setProfile({
                ...profile,
                flat: Number(regNumber(`${profile.flat}`, e.target.value)),
              });
            }}
            placeholder="12"
          />
          <Input
            label="Подъезд"
            value={`${profile.entrance}` == '0' ? '' : `${profile.entrance}`}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setProfile({
                ...profile,
                entrance: Number(regNumber(`${profile.entrance}`, e.target.value)),
              });
            }}
            placeholder="3"
          />
          <Input
            label="Этаж"
            value={`${profile.floor}` == '0' ? '' : `${profile.floor}`}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setProfile({
                ...profile,
                floor: Number(regNumber(`${profile.floor}`, e.target.value)),
              });
            }}
            placeholder="2"
          />
          <Input
            label="Домофон"
            value={`${profile.intercom}` == '0' ? '' : `${profile.intercom}`}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setProfile({
                ...profile,
                intercom: Number(regNumber(`${profile.intercom}`, e.target.value)),
              });
            }}
            placeholder="242"
          />
        </div>
      </div>
    </div>
  );
};

export { ProfileDataInputs };
