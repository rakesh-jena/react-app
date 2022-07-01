import React from "react";
import "./UserProfile.scss";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import userProfilePic from "../../images/userProf.png";

const UserProfile = (props) => {
  const { userProfileData } = props;
  return (
    <div className="userProfile">
      <div className="userProfile--Top">
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 56, height: 56 }}
        />
        <div className="userProfile--Top--NameDesig">
          <span className="userProfile--Top--NameDesig--Name pageTitle">
            {userProfileData.name}
          </span>
          <span className="userProfile--Top--NameDesig--Desig">
            {userProfileData.designation}
          </span>
        </div>
        <div className="userProfile--Top--Activities">
          <Button
            variant="contained"
            size="medium"
            className="userProfile--Top--Activities--Button"
          >
            Hire
          </Button>
          <Button
            variant="contained"
            startIcon={<FavoriteBorderIcon />}
            className="userProfile--Top--Activities--Button"
          >
            Like
          </Button>
          <Button
            variant="contained"
            size="medium"
            className="userProfile--Top--Activities--Button"
          >
            Save
          </Button>
        </div>
      </div>
      <div className="userProfile--ProfileImage">
        <div className="userProfile--ProfileImage--Div">
          <img
            src={userProfilePic}
            alt="user-prof"
            className="userProfile--ProfileImage--Div--Pic"
          />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
