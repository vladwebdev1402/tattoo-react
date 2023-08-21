import React, { FC } from "react";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import ProfileDataInputs from "../../components/profileDataInputs.tsx/ProfileDataInputs";
import st from "./ProfilePage.module.scss";
const ProfilePage: FC = () => {
  return (
    <div className={st.container}>
      <div className={st.leftContainer}>
        <Breadcrumbs />
        <h1>Личный кабинет</h1>
        <ProfileDataInputs />
      </div>
      <div className={st.rightContainer}></div>
    </div>
  );
};

export default ProfilePage;
