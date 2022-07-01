import React, { useContext } from "react";
import "./Profile.scss";
import ProfileLeft from "./ProfileLeft";
import ProfileRight from "./ProfileRight";
import ProfileBottom from "./ProfileBottom";
import { OpenStatus } from "../../MainLayout/DashboardLayout/DashboardLayout";
import { userProf } from "../../data/userProf";

const Profile = (props) => {
  const state = useContext(OpenStatus);
  return (
    <div className={state ? "profile--NavClose" : "profile--NavOpen"}>
      <div className="profile--Top">
        <ProfileLeft userProfileData={userProf} />
        <div className="profile--Top--Right">
          <ProfileRight userProfileData={userProf} />
        </div>
      </div>
      <ProfileBottom />
    </div>
  );
};

export default Profile;
