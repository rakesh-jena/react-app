import React from "react";
import "./UserProfile.scss";
import ProfileUploadImage from "../ProfileUploadImage";
import TextField from "@material-ui/core/TextField";

const UserProfile = () => {
  return (
    <div className="userProfile">
      <div className="userProfile--PageTitle">
        <span className="userProfile--PageTitle--Title">Hi Trevor !</span>
      </div>
      <div className="userProfile--PageDescription">
        <p className="userProfile--PageDescription--Description">
          Let others get to know you better ! Lets create your profile
        </p>
      </div>
      <div className="userProfile--AvatarSection">
        <ProfileUploadImage />
      </div>
      <div className="userProfile--LocationSection">
        <div className="userProfile--LocationSection--Add">
          <span className="userProfile--LocationSection--Add--Location">
            Add a Location
          </span>
        </div>
        <TextField
          id="standard-textarea"
          // label="Enter your location"
          placeholder="Enter your location"
          multiline
          className="userProfile--LocationSection--TextFiled"
        />
      </div>
    </div>
  );
};

export default UserProfile;
