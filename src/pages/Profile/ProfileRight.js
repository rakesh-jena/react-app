import React from "react";
import "./ProfileRight.scss";
import { BasicRating } from "../../resue";

const ProfileRight = (props) => {
  const { userProfileData } = props;
  return (
    <div className="profileRight">
      <div className="profileRight--NameDiv">
        <span className="profileRight--NameDiv--Name pageTitle">
          {userProfileData.name}
        </span>
      </div>
      <span className="profileRight--Designation">
        {userProfileData.designation}
      </span>
      <p className="profileRight--About">{userProfileData.about}</p>
      <BasicRating fontSize="50px" />
      <div className="profileRight--Rating">
        <span className="profileRight--Rating--UserRating">
          {userProfileData.rating}
        </span>
        <span className="profileRight--Rating--Slash">/</span>
        <span className="profileRight--Rating--TotalRate">6.0</span>
      </div>
    </div>
  );
};

export default ProfileRight;
