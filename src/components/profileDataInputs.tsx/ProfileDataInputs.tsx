import React from "react";
import LineButton from "../UI/button/lineButton/LineButton";
import MyInput from "../UI/input/MyInput";
import st from "./ProfileDataInputs.module.scss";
const ProfileDataInputs = () => {
  return (
    <div className={st.profileDataWrapper}>
      <div className={st.profileDataContainer}>
        <div className={st.profileDataHead}>
          <div className={st.headTxt}>Информация о получателе</div>
          <LineButton onClick={() => {}}>
            <span className={st.editTxt}> Редактировать</span>
          </LineButton>
        </div>
        <div className={st.inputsContainer}>
          <MyInput
            title="ФИО*"
            value=""
            onChange={() => {}}
            placeholder="Иванов Иван Иванович"
          />
          <MyInput
            className={st.number}
            title="Телефон*"
            value=""
            onChange={() => {}}
            placeholder="8(800)555-35-35"
          />
          <MyInput
            title="Эл. почта*"
            value=""
            onChange={() => {}}
            placeholder="Ivanov2021@mail.ru"
          />
        </div>
      </div>
      <div className={st.profileDataContainer}>
        <div className={st.profileDataHead}>
          <div className={st.headTxt}>Адрес доставки</div>
          <LineButton onClick={() => {}}>
            <span className={st.editTxt}> Редактировать</span>
          </LineButton>
        </div>
        <div className={st.inputsContainer}>
          <MyInput
            className={st.city}
            title="Город*"
            value=""
            onChange={() => {}}
            placeholder="Москва"
          />
          <MyInput
            className={st.street}
            title="Улица, дом*"
            value=""
            onChange={() => {}}
            placeholder="ул. Ленина д. 25"
          />
        </div>

        <div className={`${st.inputsContainer} ${st.inputsContainerFlat}`}>
          <MyInput
            title="Квартира*"
            value=""
            onChange={() => {}}
            placeholder="12"
          />
          <MyInput
            title="Подъезд"
            value=""
            onChange={() => {}}
            placeholder="3"
          />{" "}
          <MyInput title="Этаж" value="" onChange={() => {}} placeholder="2" />
          <MyInput
            title="Домофон"
            value=""
            onChange={() => {}}
            placeholder="242"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileDataInputs;
